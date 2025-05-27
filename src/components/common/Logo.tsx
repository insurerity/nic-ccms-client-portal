import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center md:space-x-4 space-x-2">
      <img src={"/images/nic-logo.png"} alt="NIC Logo" />
      <div className="">
        <h1 className=" text-sm font-semibold leading-tight">
          NATIONAL
        </h1>
        <h1 className=" text-sm font-semibold leading-tight">
          INSURANCE
        </h1>
        <h1 className=" text-sm font-semibold leading-tight">
          COMMISSION
        </h1>
      </div>
    </div>
  );
};

export default Logo;
