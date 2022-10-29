import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../Component/Header";
import Productcard from "../Component/Productcard";
import { toast } from "react-toastify";
import Card from "../Component/Card";
function Homepage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    try {
      const response = await axios.get("http://localhost:3001/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Could not retrive products");
    }
  }
  return (
    <div className="bg-white">
      <Header />

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Productcard product={product} fetchProduct={fetchProduct} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
