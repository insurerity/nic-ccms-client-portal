import { StatusIconProps } from "@/types";
import React from "react";

const AwaitingRespEntityIcon = ({
  iconStatus = "default",
}: StatusIconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10.567C21 15.85 16.522 20.133 11 20.133C10.3487 20.1337 9.70367 20.0743 9.065 19.955C8.606 19.868 8.377 19.825 8.217 19.85C8.057 19.874 7.829 19.995 7.375 20.236C6.08134 20.925 4.5928 21.1565 3.151 20.893C3.70175 20.2122 4.07521 19.4054 4.238 18.545C4.338 18.015 4.09 17.5 3.718 17.123C2.034 15.411 1 13.105 1 10.567C1 5.284 5.478 1 11 1"
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
        d="M17 5L18 4M10.996 11H11.004M7 11H7.009M21 5C21 6.06087 20.5786 7.07828 19.8284 7.82843C19.0783 8.57857 18.0609 9 17 9C15.9391 9 14.9217 8.57857 14.1716 7.82843C13.4214 7.07828 13 6.06087 13 5C13 3.93913 13.4214 2.92172 14.1716 2.17157C14.9217 1.42143 15.9391 1 17 1C18.0609 1 19.0783 1.42143 19.8284 2.17157C20.5786 2.92172 21 3.93913 21 5Z"
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

export default AwaitingRespEntityIcon;
