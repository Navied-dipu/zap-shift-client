import React from "react";
import { Outlet } from "react-router-dom";
import authImg from '.././assets/authImage.png'
import ProFastlogo from "../Pages/shared/Profast/ProFastlogo";

export default function AuthLayout() {
  return (
    <div className="p-12 bg-base-200 ">
        <div>
            <ProFastlogo></ProFastlogo>
        </div>
      <div className=" hero-content flex-col  lg:flex-row-reverse">
      <div className="flex-1  bg-[#FAFDF0]">
          <img
          src={authImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
      </div>
        <div className="flex-1">
        <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
