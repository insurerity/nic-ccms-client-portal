import { StatusIconProps } from "@/types";
import React from "react";

const InReviewIcon = ({ iconStatus = "default" }: StatusIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 10H7M2 17H7M2 3H19M19.6 18.6L22 21M20.8 14.4C20.8 12.9678 20.2311 11.5943 19.2184 10.5816C18.2057 9.56893 16.8322 9 15.4 9C13.9678 9 12.5943 9.56893 11.5816 10.5816C10.5689 11.5943 10 12.9678 10 14.4C10 15.8322 10.5689 17.2057 11.5816 18.2184C12.5943 19.2311 13.9678 19.8 15.4 19.8C16.8322 19.8 18.2057 19.2311 19.2184 18.2184C20.2311 17.2057 20.8 15.8322 20.8 14.4Z"
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

export default InReviewIcon;
