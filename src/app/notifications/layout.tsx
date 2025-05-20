import { Separator } from "@/components/ui/separator";
import GoBack from "../components/back-button";
import { Bell } from "lucide-react";
import Logo from "@/components/common/Logo";
import BackIcon from "@/components/icons/BackIcon";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#59285F] p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl h-[90vh] rounded-3xl border-4 bg-white overflow-hidden shadow-2xl flex flex-col">
        <div className="sticky top-0 z-10 bg-white p-6 pb-0 md:p-8 md:pb-0">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Go Back and Notification */}
            <div className="flex items-center gap-3">
              <GoBack>
                Go Back
                <BackIcon />
              </GoBack>
            </div>
          </div>
          <Separator className="w-full mt-6" />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
}
