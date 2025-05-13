import { StatusIconProps } from "@/types";
import React from "react";

const PendingReviewIcon = ({ iconStatus = "default" }: StatusIconProps) => {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 1V4C16 5.85652 15.2625 7.63699 13.9497 8.94975C12.637 10.2625 10.8565 11 9 11M9 11C7.14348 11 5.36301 10.2625 4.05025 8.94975C2.7375 7.63699 2 5.85652 2 4V1M9 11C10.8565 11 12.637 11.7375 13.9497 13.0503C15.2625 14.363 16 16.1435 16 18V21M9 11C7.14348 11 5.36301 11.7375 4.05025 13.0503C2.7375 14.363 2 16.1435 2 18V21M1 1H17M17 21H1"
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

export default PendingReviewIcon;
