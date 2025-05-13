import { StatusIconProps } from "@/types";
import React from "react";

const SubmittedIcon = ({ iconStatus }: StatusIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.91211 6.83594L9.85411 8.57594C11.5691 9.58994 12.2541 9.58994 13.9701 8.57594L16.9121 6.83594M14.9121 17.3359C14.9121 17.3359 15.4121 17.3359 15.9121 18.3359C15.9121 18.3359 17.5001 15.8359 18.9121 15.3359"
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
        d="M22 10.3119L21.959 6.43786C21.948 4.96286 21.151 2.01186 18.054 2.01186H6.105C4.737 1.91186 2 2.34686 2 7.14186V14.2519C2 15.4719 2.272 17.1149 3.61 18.1049C4.476 18.7449 5.611 18.8049 6.684 18.8579L8.931 18.9689"
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
        d="M21.9793 16.96C21.9793 19.743 19.7343 22 16.9633 22C14.1923 22 11.9453 19.743 11.9453 16.96C11.9453 14.175 14.1923 11.918 16.9633 11.918C19.7343 11.918 21.9803 14.175 21.9803 16.959"
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

export default SubmittedIcon;
