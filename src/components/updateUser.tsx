import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../Api/axios";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    userimage: null,
    phonenumber: "",
    password: "",
    location: "",
    is_admin: false,
    employee_id: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axiosInstance.get(`user/users/${id}/`);
        const {
          username,
          userimage,
          phonenumber,
          password,
          location,
          is_admin,
          employee_id,
        } = response.data;
        setUserData({
          username,
          userimage,
          phonenumber,
          password,
          location,
          is_admin,
          employee_id,
        });
      } catch (error) {
        setError("Error fetching user details: " + error.message);
      }
    };

    fetchUserDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: name === "userimage" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", userData.username);
    if (userData.userimage) {
      formData.append("userimage", userData.userimage);
    }
    formData.append("phonenumber", userData.phonenumber);
    formData.append("password", userData.password);
    formData.append("location", userData.location);
    formData.append("is_admin", userData.is_admin);
    formData.append("employee_id", userData.employee_id);

    try {
      await axiosInstance.patch(`user/users/${id}/`, formData);
      Swal.fire({
        title: "Success!",
        text: "User updated successfully.",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
      });
      navigate("/dashboard/allusers");
    } catch (error) {
      console.error("Error updating user:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to update user. Please try again later.",
        icon: "error",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className="w-11/12 p-5">
      <div>
        <h2 className="text-xl font-semibold rounded py-1 text-center text-white bg-[#08417f]">
          Update User
        </h2>
        <form
          className="shadow-xl p-7 mx-3 my-3 rounded bg-[#08417f]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-wrap sm:flex-nowrap w-full item-center content-center gap-5 md:gap-9 py-1">
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2">
                User Image
              </label>
              <input
                type="file"
                name="userimage"
                onChange={handleChange}
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap w-full item-center content-center gap-5 md:gap-9 py-1">
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2">
                Phone Number
              </label>
              <input
                type="number"
                name="phonenumber"
                value={userData.phonenumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap w-full item-center content-center gap-5 md:gap-9 py-1">
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={userData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2">
                Employee ID
              </label>
              <input
                type="text"
                name="employee_id"
                value={userData.employee_id}
                onChange={handleChange}
                placeholder="Employee ID"
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
          </div>
          <div className="flex justify-center py-5">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-7 py-2 font-bold rounded-md hover:opacity-80"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
