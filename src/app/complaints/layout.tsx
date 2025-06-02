"use client";

import { Separator } from "@/components/ui/separator";
import GoBack from "../components/back-button";
import { Bell, X } from "lucide-react";
import Logo from "@/components/common/Logo";
import NotificationButton from "@/components/common/NotificationButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSharedStore } from "@/hooks/use-complaint-store";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const { complainantType } = useSharedStore();
  const pathName = usePathname();
  return (
    <div className=" bg-white h-full">
      <div className="w-full max-w-full md:w-full h-full border-4 bg-white flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white">
          <div className="flex justify-between items-center  p-6 pb-0  md:pb-0">
            {/* Logo and Title */}
            <Logo />

            {!isMobile &&
              (pathName.includes("check-status") ? (
                <h2 className="text-2xl font-semibold">
                  {"Check Complaint / Application Status"}
                </h2>
              ) : (
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-semibold">
                    {complainantType === "self"
                      ? "Complaint/Petition Form"
                      : complainantType === "behalf" ? "Petitioner / Solicitor Form" : ""}
                  </h2>
                  <p className="text-base">
                    {complainantType === "self"
                      ? `Complete this form to submit ${pathName.includes("compensation") ? "a compensation fund" : "a" } complaint/petition to the NIC`
                      :  complainantType === "behalf" ? `Complete this form to submit ${pathName.includes("compensation") ? "a compensation fund" : "a" } on behalf of someone to the NIC` : ""}
                  </p>
                </div>
              ))}

            {/* Go Back and Notification */}
            <div className="flex items-center gap-3">
              <GoBack closeForm>
                Close Form
                <X  size={isMobile ? 15 : 20}/>
              </GoBack>
              <div className="relative">
                <NotificationButton />
              </div>
            </div>
          </div>
          <Separator className="w-full mt-6" />
        </div>

        {isMobile &&
          (pathName.includes("check-status") ? (
            <h2 className="text-xl lg:text-2xl font-semibold text-center py-2 ">
              {"Check Complaint / Application Status"}
            </h2>
          ) : (
            <div className="flex flex-col text-center items-center px-3 py-2">
              <h2 className="text-2xl font-semibold">
                {complainantType === "self"
                  ? "Complaint/Petition Form"
                  : complainantType === "behalf" ? "Petitioner / Solicitor Form" : ""}
              </h2>
              <p className="text-sm">
                {complainantType === "self"
                  ? `Complete this form to submit ${pathName.includes("compensation") ? "a compensation fund" : "a" } complaint/petition to the NIC`
                      :  complainantType === "behalf" ? `Complete this form to submit ${pathName.includes("compensation") ? "a compensation fund" : "a" } on behalf of someone to the NIC` : ""}
              </p>
            </div>
          ))}
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto  md:p-8 bg-customCard">
          {children}
        </div>
      </div>
    </div>
  );
}
