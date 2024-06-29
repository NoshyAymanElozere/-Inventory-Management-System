import React, { useState, useEffect } from "react";
import axiosInstance from "../Api/axios";

function UserOrders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axiosInstance.get("/shipment/user/");
        setOrders(response.data);
      } catch (error) {
        setError("Error fetching orders: " + error.message);
      }
    };

    fetchOrders();
  }, []);

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second
    return () => clearInterval(interval);
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
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Admin Name
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
                {/* <td className="px-6 py-4">{`Product ID: ${order.product_id}`}</td> */}
                <td className="px-6 py-4">screen</td>
                <td className="px-6 py-4">
                  {currentDate.toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  {order.approved ? (
                    <span className="bg-green-600 text-white px-2 rounded-lg font-bold">
                      Approved
                    </span>
                  ) : (
                    <span className="bg-red-600 text-white px-2 rounded-lg font-bold">
                      Unapproved
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-red-500 font-bold">
                  {`Admin ID: ${order.employee}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserOrders;
