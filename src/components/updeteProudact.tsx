import React from "react";

function Updeteorder() {
  return (
    <div className="w-11/12 p-5">
      <div>
        <h2 className="text-xl  font-semibold rounded py-1 text-center  text-white bg-[#08417f]">
          Update Product
        </h2>
        <form className="shadow-xl p-7 mx-3 my-3 rounded bg-[#08417f]">
          <div className=" flex flex-wrap sm:flex-nowrap w-full item-center content-center gap-5 md:gap-9 py-1 ">
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2  ">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2  ">
                QUANTITY
              </label>
              <input
                type="text"
                placeholder="QUANTITY"
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
          </div>
          <div className=" flex flex-wrap sm:flex-nowrap w-full item-center content-center gap-5 md:gap-9 py-1 ">
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2  ">
                CATEGORY
              </label>
              <input
                type="text"
                placeholder="CATEGORY"
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-white py-2  ">
                ADMIN NAME
              </label>
              <input
                type="text"
                placeholder="name"
                className="w-full rounded-lg bg-white border-gray-200 p-4 pe-12 text-sm shadow"
              />
            </div>
          </div>

          <div className="flex justify-center py-5">
            <button
              className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-7 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Updeteorder;
