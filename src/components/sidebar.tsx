import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddUser } from "../consts/AddUSerPopup";
import { AddProduct } from "../consts/ShowpopUP";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem(" is_admin");

  console.log("isAdmin:", isAdmin);

  const handlogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <div className="flex relative h-full">
        <div
          className={` ${
            open ? "w-64" : "w-20 "
          } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
        >
          <img
            src="/src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="/src/assets/logo1.png"
              className={`w-10 h-10 cursor-pointer duration-500 ${
                open && "rotate-[360deg] w-14 h-14"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              EELU
            </h1>
          </div>
          <ul className="pt-6">
            {isAdmin === "true" ? (
              <>
                <li
                  className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                  onClick={AddUser}
                >
                  <img src="/src/assets/User.png" alt="Add User" />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Add User
                  </span>
                </li>
                <li
                  className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                  onClick={AddProduct}
                >
                  <img src="/src/assets/Calendar.png" alt="Add User" />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Add Products
                  </span>
                </li>
                <Link
                  to="/dashboard/table"
                  className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                >
                  <img src="/src/assets/folder.png" alt="Add User" />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Orders
                  </span>
                </Link>
                <Link
                  to="/dashboard/userTable"
                  className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                >
                  <img src="/src/assets/users.png" className="w-9" />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Users List
                  </span>
                </Link>
                <Link
                  to="/dashboard/ProudactTable"
                  className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                >
                  <img src="/src/assets/proudact.png" className="w-9" />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    Products
                  </span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard/UserOrders"
                  className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                >
                  <img src="/src/assets/folder.png" alt="Add User" />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    My Orders
                  </span>
                </Link>
                <Link
                  to="UserProudact"
                  className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 "
                >
                  <img src="/src/assets/proudact.png" className="w-9" />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    All Proudact
                  </span>
                </Link>
              </>
            )}
          </ul>

          <div className="absolute bottom-0 py-1 border-t border-white w-full left-0 flex place-items-center gap-3 ">
            <div className="dropdown dropdown-top">
              <div tabIndex={0} role="button">
                <img
                  className="w-12 rounded-full"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[99999] menu p-2 shadow rounded-box w-52 bg-white"
              >
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-1"
                    onClick={handlogOut}
                  >
                    <span className="text-red-400 text-xl">Log Out</span>{" "}
                    <img
                      className="w-10"
                      src="/src/assets/lougout.png"
                      alt="logout"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <span
              className={`text-white text-xl duration-200 ${
                !open && "scale-0"
              }`}
            >
              Admin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
