import React, { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import axiosInstance from "../Api/axios";
import { AddedDone } from "../consts/ShowpopUP";

function UserProudact() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const getAllProducts = async () => {
    try {
      const response = await axiosInstance.get("product/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Error fetching products");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const addToMyOrders = async (productId) => {
    try {
      const response = await axiosInstance.post("/shipment/user/", {
        product_id: productId,
      });
      console.log("Product added to orders:", response.data);
      AddedDone(); // Assuming this function shows some kind of success notification
    } catch (error) {
      console.error("Error adding product to orders:", error);
      // Handle error, e.g., show error message
    }
  };

  return (
    <div className="w-full">
      <div className="w-full p-7 scrollbar scrollbar-thumb-sky-400 scrollbar-track-sky-100  ">
        <div className="flex items-center justify-between flex-wrap mt-9 gap-1 py-3 "></div>
        <h2 className="text-xl flex items-center justify-center gap-2 font-semibold rounded py-1 text-center  text-white bg-indigo-600 my-5">
          All Products
          <img className="w-9" src="/src/assets/shop.png" alt="" />
        </h2>
        <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
          <table className="text-sm min-w-full overflow-x-scroll text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>

                <th scope="col" className="px-6 py-3">
                  ADD
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">{product.quantity}</td>
                  <td className="px-6 py-4">{product.description}</td>

                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <button
                      onClick={() => addToMyOrders(product.id)}
                      className="flex items-center justify-center gap-1 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white"
                    >
                      <span className="font-medium">ADD</span>
                      <IoIosAddCircle className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserProudact;
