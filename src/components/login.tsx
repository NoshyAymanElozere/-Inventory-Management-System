import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const userData = {
      username,
      password,
    };

    axios
      .post("http://127.0.0.1:8000/user/login/", userData)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem(" is_admin", response.data.is_admin);

          navigate("/dashboard");
        } else {
          navigate("/");
          console.log(response.data);
        }
        console.log(response.status, response.data);
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.response
          ? error.response.data.detail
          : "Unknown error";
        console.log("Login failed:", errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  return (
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white mt-20 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-sky-300 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-300 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
      <h2 className="text-2xl text-sky-900 font-bold mb-6 text-center">EELU</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600 border-none"
            htmlFor="username"
          >
            UserName
          </label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600 border-none"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="mt-1 p-2 w-full border rounded-md"
            name="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex space-x-2 mb-6 border-[3px] border-purple-400 rounded-xl select-none p-3">
          <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer border-none">
            <input
              type="radio"
              name="radio"
              value="system User"
              className="peer hidden"
            />
            <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
              Admin
            </span>
          </label>
          <label className="radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer border-none">
            <input
              type="radio"
              name="radio"
              value="vue"
              className="peer hidden"
            />
            <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 p-2 rounded-lg transition duration-150 ease-in-out">
              Staff
            </span>
          </label>
        </div>
        <div className="flex justify-center">
          <button
            className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-7 py-2 font-bold rounded-md hover:opacity-80"
            type="submit"
          >
            LogIn
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
