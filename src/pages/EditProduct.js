import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Card from "../Component/Card";
import Header from "../Component/Header";

const EditProduct = () => {
  const [productdata, setProductdata] = useState({
    name: "",
    href: "",
    imageSrc: "",
    imageAlt: "",
    price: "",
    color: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const [product, setProduct] = useState();
  async function getProduct() {
    try {
      const response = await axios.get(
        `http://localhost:3001/products/${params.id}`
      );
      console.log(response.data);
      setProduct(response.data);
      setProductdata(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Could not retrive products");
    }
  }
  async function editProduct() {
    try {
      const response = await axios.put(
        `http://localhost:3001/products/${params.id}`,
        productdata
      );
      console.log(response.data);
      //   setProduct(response.data);
      //   setProductdata(response.data);
      getProduct();
      toast.success("Product data has been changed.");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Could not retrive products");
    }
  }
  useEffect((e) => {
    getProduct();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="flex justify-center h-screen items-center">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0 ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editProduct();
              }}
            >
              <Card title="Edit Product">
                <div className="bg-white px-4 py-5 sm:p-6 ">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Product name
                      </label>
                      <input
                        onChange={(e) => {
                          setProductdata({
                            ...productdata,
                            name: e.target.value,
                          });
                        }}
                        value={productdata.name}
                        type="text"
                        autoFocus
                        name="Product Name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Product Id
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        href
                      </label>
                      <input
                        onChange={(e) => {
                          setProductdata({
                            ...productdata,
                            href: e.target.value,
                          });
                        }}
                        value={productdata.href}
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image src
                      </label>
                      <input
                        onChange={(e) => {
                          setProductdata({
                            ...productdata,
                            imageSrc: e.target.value,
                          });
                        }}
                        value={productdata.imageSrc}
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Image Alt
                      </label>
                      <input
                        onChange={(e) => {
                          setProductdata({
                            ...productdata,
                            imageAlt: e.target.value,
                          });
                        }}
                        value={productdata.imageAlt}
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price
                      </label>
                      <input
                        onChange={(e) => {
                          setProductdata({
                            ...productdata,
                            price: e.target.value,
                          });
                        }}
                        value={productdata.price}
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Color
                      </label>
                      <input
                        onChange={(e) => {
                          setProductdata({
                            ...productdata,
                            color: e.target.value,
                          });
                        }}
                        value={productdata.color}
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </Card>
              <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                <button
                  on
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditProduct;
