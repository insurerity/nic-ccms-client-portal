"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type ActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  goTo: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  goTo,
  ...props
}) => {
  const router = useRouter();
  return (
    <Button
      {...props}
      className={`${props.className || ""} cursor-pointer`}
      onClick={() => router.push(goTo)}
    >
      {text}
    </Button>
  );
};

export default ActionButton;
