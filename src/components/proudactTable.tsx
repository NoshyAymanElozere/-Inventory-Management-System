import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axios";
import Swal from "sweetalert2";

function ProductTable() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const response = await axiosInstance.get("product/");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`product/${id}/`);
      Swal.fire({
        title: "Good job!",
        text: "Deleted successfully",
        icon: "success",
      });
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("There was an error deleting the product!", error);
      setError("There was an error deleting the product. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <div className="w-full p-7 scrollbar scrollbar-thumb-sky-400 scrollbar-track-sky-100">
        {error && <p className="text-red-500">{error}</p>}
        <h2 className="text-xl flex items-center justify-center gap-2 font-semibold rounded py-1 text-center text-white bg-indigo-600 my-5">
          Products
          <img className="w-9" src="/src/assets/shop.png" alt="Shop" />
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="text-sm min-w-full max-h-96 overflow-x-scroll text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Admin Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
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
                  <td className="px-6 py-4">{product.adminName || "N/A"}</td>
                  <td className="px-6 pt-7 flex items-center justify-between text-black text-lg text-right">
                    <Link to="/dashboard/UpdeteOrder">
                      <FaEdit className=" hover:text-green-500 hover:scale-125  duration-700 cursor-pointer " />
                    </Link>
                    <MdDelete
                      className="hover:text-red-600 hover:scale-125 duration-700 cursor-pointer"
                      onClick={() => handleDelete(product.id)}
                    />
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

export default ProductTable;
