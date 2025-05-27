"use client";

import { Separator } from "@/components/ui/separator";
import GoBack from "../components/back-button";
import { Bell, X } from "lucide-react";
import Logo from "@/components/common/Logo";
import NotificationButton from "@/components/common/NotificationButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSharedStore } from "@/hooks/use-complaint-store";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const { complainantType, caseType, petitionerType } = useSharedStore();
  console.log("comsd", complainantType, caseType, petitionerType);
  return (
    <div className="min-h-screen md:bg-[url(/images/background_lady.png)] md:bg-cover bg-white  md:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl md:w-full h-screen md:h-[90vh] 2xl:h-fit md:rounded-3xl border-4 bg-white overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white">
          <div className="flex justify-between items-center  p-6 pb-0 md:p-8 md:pb-0">
            {/* Logo and Title */}
            <Logo />

            {!isMobile && (
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold">
                  {complainantType === "self"
                    ? "Complaint/Petition Form"
                    : "Petitioner / Solicitor Form"}
                </h2>
                <p className="text-base">
                  {complainantType === "self"
                    ? " Complete this form to submit a complaint/petition to the NIC"
                    : "Complete this form to submit a complaint/petition on behalf of someone to the NIC"}
                </p>
              </div>
            )}

            {/* Go Back and Notification */}
            <div className="flex items-center gap-3">
              <GoBack closeForm>
                Close Form
                <X />
              </GoBack>
              <div className="relative">
                <NotificationButton />
              </div>
            </div>
          </div>
          <Separator className="w-full mt-6" />
        </div>

        {isMobile && (
          <div className="flex flex-col items-start p-4">
            <h2 className="text-xl font-semibold">
              {complainantType === "self"
                ? "Complaint/Petition Form"
                : "Petitioner / Solicitor Form"}
            </h2>
            <p className="text-[12px]">
              {complainantType === "self"
                ? " Complete this form to submit a complaint/petition to the NIC"
                : "Complete this form to submit a complaint/petition on behalf of someone to the NIC"}
            </p>
          </div>
        )}
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto  md:p-8 bg-customCard">
          {children}
        </div>
      </div>
    </div>
  );
}
