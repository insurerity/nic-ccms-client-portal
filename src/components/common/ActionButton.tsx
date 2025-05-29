"use client";

import { useRouter } from "next/navigation";
type ActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  goTo?: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  goTo,
  ...props
}) => {
  const router = useRouter();
  return (
    <button
      {...props}
      className={`${
        props.className || ""
      } cursor-pointer hover:bg-primaryLight/90 text-sm`}
      onClick={(e) => {
        if (goTo) {
          router.push(goTo);
        } else if (props.onClick) {
          props.onClick(e);
        }
      }}
    >
      {text}
    </button>
  );
};

export default ActionButton;
