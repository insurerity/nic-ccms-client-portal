import { StatusIconProps } from "@/types";

const ResolvedIcon = ({ iconStatus = "default" }: StatusIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.262 3.6C13.196 2.532 12.662 2 12 2C11.338 2 10.804 2.533 9.738 3.6C9.098 4.24 8.464 4.536 7.552 4.536C6.756 4.536 5.622 4.382 5 5.009C4.382 5.632 4.536 6.761 4.536 7.552C4.536 8.464 4.239 9.098 3.599 9.738C2.533 10.804 2 11.338 2 12C2 12.662 2.533 13.196 3.6 14.262C4.316 14.979 4.536 15.442 4.536 16.448C4.536 17.244 4.382 18.378 5.009 19C5.632 19.617 6.761 19.464 7.552 19.464C8.523 19.464 8.992 19.654 9.685 20.347C10.275 20.937 11.066 22 12 22C12.934 22 13.725 20.937 14.315 20.347C15.009 19.654 15.477 19.464 16.448 19.464C17.239 19.464 18.368 19.618 18.991 19M18.991 19C19.618 18.378 19.464 17.244 19.464 16.448C19.464 15.442 19.684 14.979 20.4 14.262C21.467 13.196 22 12.662 22 12C22 11.338 21.467 10.804 20.401 9.738M18.991 19H19"
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
        d="M8.5 9.5L12 13L21 3"
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

export default ResolvedIcon;
