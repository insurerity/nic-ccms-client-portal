"use client";

import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const NotificationButton = () => {
  // const router = useRouter();
  // router.push("/notifications")
  return (
    <button
      onClick={() => toast.message('Coming Soon', {
        position:"top-right"
      }) }
      className="md:border md:border-primaryLight md:rounded-full border border-primaryLight p-2"
    >
      <p className="flex items-center gap-x-2">
        <span>Info</span>
        <Bell className="h-[15px] w-[15px] text-gray-600" />
      </p>
      <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        0
      </span>
    </button>
  );
};

export default NotificationButton;
