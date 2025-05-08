"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function GoBack({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 px-6 py-4 rounded-full border border-[#59285F] text-[#59285F] font-medium"
    >
      {children}
    </button>
  );
}
