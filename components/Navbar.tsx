import React from "react";
import SideBar from "./SideBar";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full px-10 py-5 bg-white shadow-md fixed top-0 flex flex-row justify-between items-center">
      <div>
        <SideBar />
      </div>
      <span>
        <h2 className="text-5xl font-bold capitalize text-center">
          {/* <span className="text-red-600">v</span>
          <span className="text-blue-600">R.</span> */}
          Z.
        </h2>
      </span>
      <div className="flex flex-row justify-start items-center gap-3">
        <Link
          href={"/"}
          className="px-4 py-2.5 bg-blue-500 text-white font-medium text-base rounded-full"
        >
          Create account.
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
