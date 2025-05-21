"use client";

import { Button } from "@/components/ui/button";
import { useComplaintStore, useSharedStore } from "@/hooks/use-complaint-store";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function GoBack({
  children,
  closeForm,
}: {
  children: ReactNode;
  closeForm?: boolean;
}) {
  const { reset } = useComplaintStore();
  const { reset: resetSharedStore } = useSharedStore();
  const router = useRouter();
  const pathname = usePathname();
  const handleGoBack = () => {
    if (closeForm) {
      reset();
      resetSharedStore();
      return router.push("/get-started");
    }

    return router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex items-center gap-2 md:px-6 md:py-4 px-4 py-1 rounded-full border border-[#59285F] text-[#59285F] font-medium"
    >
      {children}
    </button>
  );
}
