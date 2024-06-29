import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axiosInstance from "../Api/axios";
import Swal from "sweetalert2";

const TableAllUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("user/users/");
        setUsers(response.data);
      } catch (error) {
        setError("Error fetching users: " + error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axiosInstance.delete(`user/users/${userId}/`);
      // Remove the deleted user from the state
      setUsers(users.filter((user) => user.id !== userId));
      // Show success message using SweetAlert2
      Swal.fire({
        title: "Success!",
        text: "User deleted successfully.",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      // Show error message using SweetAlert2
      Swal.fire({
        title: "Error!",
        text: "Failed to delete user. Please try again later.",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="w-full p-7 scrollbar scrollbar-thumb-sky-400 scrollbar-track-sky-100">
      <h2 className="text-xl font-semibold rounded py-1 text-center text-white bg-indigo-600 my-5">
        ALL Users
      </h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-[600px] overflow-y-scroll">
        <table className="text-sm min-w-full overflow-x-scroll text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-indigo-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                User Image
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Employee ID
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {user.id}
                </td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">
                  <img
                    className="w-12 rounded-full"
                    src={user.userimage}
                    alt={user.username}
                  />
                </td>
                <td className="px-6 py-4">{user.phonenumber}</td>
                <td className="px-6 py-4">
                  <span
                    className={`${
                      user.is_admin ? "bg-green-600" : "bg-red-600"
                    } text-white px-1 font-medium rounded-lg`}
                  >
                    {user.is_admin ? "Admin" : "Staff"}
                  </span>
                </td>
                <td className="px-6 py-4">{user.employee_id}</td>
                <td className="px-6 pt-7 flex items-center justify-between text-black text-lg text-right">
                  <Link to="/dashboard/Updeteuser">
                    <FaEdit className=" hover:text-green-500 hover:scale-125  duration-700 cursor-pointer " />
                  </Link>
                  <MdDelete
                    className="hover:text-red-600 hover:scale-125 duration-700 cursor-pointer"
                    onClick={() => handleDeleteUser()}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAllUser;
