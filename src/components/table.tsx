import React, { useState, useEffect } from "react";
import axiosInstance from "../Api/axios";

const Table = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get("shipment/admin/");
        setOrders(response.data);
      } catch (error) {
        setError("Error fetching orders: " + error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="w-full p-7 scrollbar scrollbar-thumb-sky-400 scrollbar-track-sky-100">
      <h2 className="text-xl font-semibold rounded py-1 text-center text-white bg-indigo-600 my-5">
        ALL Orders
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="text-sm min-w-full overflow-x-scroll text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Approval
              </th>
              <th scope="col" className="px-6 py-3">
                Shipping
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4">{`Product ID: ${order.product_id}`}</td>
                <td className="px-6 py-4">{order.quentity}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <button className="flex items-center gap-1 my-5 rounded-lg bg-indigo-600 hover:bg-indigo-800 hover:translate-y-[-3px] shadow-lg duration-700 px-5 py-3 text-sm font-medium text-white">
                    {order.approved ? "Approved" : "Approve"}
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="flex items-center gap-1 my-5 rounded-lg bg-green-600 hover:bg-green-500 hover:translate-y-[-3px] shadow-lg duration-700 px-5 py-3 text-sm font-medium text-white">
                    {order.shipped ? "Done" : "Ship"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
