import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-4">
      <img src={"/images/nic-logo.png"} alt="NIC Logo" />
      <div className="">
        <h1 className="text-base font-semibold leading-tight">NATIONAL</h1>
        <h1 className="text-base font-semibold leading-tight">INSURANCE</h1>
        <h1 className="text-base font-semibold leading-tight">COMMISSION</h1>
      </div>
    </div>
  );
};

export default Logo;
