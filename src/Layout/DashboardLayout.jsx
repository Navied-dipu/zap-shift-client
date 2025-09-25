import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ProFastlogo from "../Pages/shared/Profast/ProFastlogo";
import { FaHome, FaBox, FaHistory, FaTruck, FaUserEdit } from "react-icons/fa";
export default function DashboardLayout() {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        {/* Drawer toggle (checkbox for small screens) */}
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          {/* Navbar (visible only on small screens) */}
          <div className="navbar bg-base-300 w-full lg:hidden">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
          </div>

          {/* Page content here */}
          <Outlet></Outlet>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 text-base-content h-full w-64 p-4">
            {/* fixed width 64 instead of full */}
            <ProFastlogo></ProFastlogo>
            <li>
              <NavLink to="/">
                <FaHome className="inline mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myparcels">
                <FaBox className="inline mr-2" /> My Parcels
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymentHistory">
                <FaHistory className="inline mr-2" /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/track">
                <FaTruck className="inline mr-2" /> Track Package
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/profile">
                <FaUserEdit className="inline mr-2" /> Update Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
