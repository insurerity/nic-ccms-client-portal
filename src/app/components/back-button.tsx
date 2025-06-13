"use client";

import { useNoticeDialog } from "@/hooks/use-complaint-store";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function GoBack({
  children,
  closeForm,
}: {
  children: ReactNode;
  closeForm?: boolean;
}) {
  const { showDialog } = useNoticeDialog();
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const handleGoBack = () => {
    if (closeForm) {
      if (pathname === "/complaints/check-status") {
        router.push("/get-started");
      } else {
        return showDialog();
      }
    } else {
      return pathname !== "/get-started" ? router.back() : router.push("/");
    }
  };

  return (
    <>
      <button
        onClick={handleGoBack}
        className={clsx(
          "flex items-center  md:px-6 md:py-2 rounded-full border border-[#59285F] text-[#59285F] font-medium",
          closeForm
            ? "text-[10px] lg:text-base px-1 py-2 gap-1"
            : "px-2 gap-2 text-sm py-1.5 "
        )}
      >
        {children}
      </button>
    </>
  );
}
