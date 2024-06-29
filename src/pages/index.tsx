import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Table from "../components/table";
import Updeteorder from "../components/updeteProudact";
import TableAllUser from "../components/TableAllUser";
import UserOrders from "../components/myOrder";
import UserProudact from "../components/userProudact";
import Updeteuser from "../components/updateUser";
import ProudactTable from "../components/ProudactTable";

const Index = () => {
  console.log(localStorage.getItem("token"));
  return (
    <>
      <div className="w-full flex gap-1 bg-[#dfdfdf]">
        <Sidebar />
        <Routes>
          <Route path="UserOrders" element={<UserOrders />} />
          <Route path="UserProudact" element={<UserProudact />} />

          <Route path="table" element={<Table />} />
          <Route path="userTable" element={<TableAllUser />} />
          <Route path="UpdeteOrder" element={<Updeteorder />} />
          <Route path="Updeteuser" element={<Updeteuser />} />
          <Route path="ProudactTable" element={<ProudactTable />} />
        </Routes>
      </div>
    </>
  );
};

export default Index;
