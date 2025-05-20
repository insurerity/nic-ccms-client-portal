"use client";

import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NotificationButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/notifications")}>
      <Bell className="h-6 w-6 text-gray-600" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        4
      </span>
    </button>
  );
};

export default NotificationButton;
