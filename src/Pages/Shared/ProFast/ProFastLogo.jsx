import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
export default function ProFastlogo() {
  return (
    <Link to='/'>
      {" "}
      <div className="flex items-end">
        <img className="mb-2" src={logo} alt="" />
        <p className="font-extrabold text-3xl -ml-2">ProFast</p>
      </div>
    </Link>
  );
}
