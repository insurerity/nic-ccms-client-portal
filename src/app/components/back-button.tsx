"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function GoBack({
  children,
  closeForm,
}: {
  children: ReactNode;
  closeForm?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const handleGoBack = () => {
    if (closeForm) {
      return router.push("/get-started");
    }

    return router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center gap-2 px-6 py-4 rounded-full border border-[#59285F] text-[#59285F] font-medium"
    >
      {children}
    </button>
  );
}
