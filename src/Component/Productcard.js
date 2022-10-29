import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
function Productcard({ product, fetchProduct }) {
  async function deleteProduct(id) {
    try {
      const del = await axios.delete(`http://localhost:3001/products/${id}`);
      console.log(del);
      fetchProduct();
      toast.success("Product has been deleted.");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <div
        className="group relative hover:bg-none"
        // onClick={(e) => {
        //   // e.preventDefault();
        //   deleteProduct(product.id);
        // }}
      >
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </span>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
      <button
        className="bg-red-500 px-4 py-2 rounded-md text-white cursor-pointe hover:bg-red-700"
        id="btn"
        onClick={(e) => {
          e.preventDefault();
          deleteProduct(product.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Productcard;
