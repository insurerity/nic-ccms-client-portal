import { Separator } from "@/components/ui/separator";
import GoBack from "../components/back-button";
import { Bell, X } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#59285F] flex items-center justify-center">
      <div className="w-full max-w-7xl h-[90vh] rounded-3xl border-4 bg-white overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white">
          <div className="flex justify-between items-center  p-6 pb-0 md:p-8 md:pb-0">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                {/* Your SVG Logo */}
                {/* ... */}
              </div>
              <div className="text-[#333] leading-tight">
                <div className="font-bold text-sm">NATIONAL</div>
                <div className="font-bold text-sm">INSURANCE</div>
                <div className="font-bold text-sm">COMMISSION</div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold">
                Petitioner / Solicitor Form
              </h2>
              <p className="text-base">
                Complete this form to submit a complaint/petition on behalf of
                someone to the NIC
              </p>
            </div>

            {/* Go Back and Notification */}
            <div className="flex items-center gap-3">
              <GoBack>
                Close Form
                <X />
              </GoBack>
              <div className="relative">
                <div className="w-12 h-12 rounded-full border border-[#59285F] flex items-center justify-center">
                  <Bell className="w-6 h-6 text-[#59285F]" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                  1
                </div>
              </div>
            </div>
          </div>
          <Separator className="w-full mt-6" />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-customCard">
          {children}
        </div>
      </div>
    </div>
  );
}
