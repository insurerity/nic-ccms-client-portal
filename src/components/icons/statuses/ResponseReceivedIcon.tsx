import { StatusIconProps } from "@/types";
import React from "react";

const ResponseReceivedIcon = ({ iconStatus = "default" }: StatusIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.478 2 2 6.284 2 11.567C2 14.105 3.033 16.412 4.719 18.123C5.09 18.5 5.338 19.015 5.238 19.545C5.07521 20.4054 4.70175 21.2122 4.151 21.893C5.5928 22.1565 7.08134 21.925 8.375 21.236C8.829 20.995 9.056 20.874 9.217 20.85C9.378 20.826 9.607 20.868 10.065 20.954C10.703 21.074 11.351 21.134 12 21.134C17.522 21.134 22 16.85 22 11.567C22 10.677 21.873 9.817 21.636 9"
        stroke={
          iconStatus === "active"
            ? "#FFFFFF"
            : iconStatus === "completed"
            ? "#378F3D"
            : "#59285F"
        }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 6C14 6 15 6 16 8C16 8 19.177 3 22 2M11.996 12H12.004M15.991 12H16M8 12H8.009"
        stroke={
          iconStatus === "active"
            ? "#FFFFFF"
            : iconStatus === "completed"
            ? "#378F3D"
            : "#59285F"
        }
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ResponseReceivedIcon;
