import { Bell } from "lucide-react";
import HeroSlider from "./components/hero-slider";
import ActionButton from "@/components/common/ActionButton";

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <HeroSlider />
      {/* Right side - White background with content */}
      <div className="hidden md:flex md:w-1/2 bg-white flex-col  p-8">
        {/* Top header with logo and notification */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/images/nic-logo.png"
              alt="National Insurance Commission"
              className="h-12"
            />
          </div>

          <div className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              4
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center flex-grow px-8 mt-20">
          <h2 className="text-5xl text-center font-bold text-gray-900 mb-4">
            Welcome to the
            <br />
            NIC Complaints Portal
          </h2>
          <p className="text-gray-600 mb-12">
            Protecting the interests of policy holders
          </p>

          <ActionButton goTo="/get-started" text="Get Started" />
        </div>

        {/* Footer */}
        <div className="mt-auto text-center">
          <p className="text-sm text-gray-500">Powered by Insurerity Digital</p>
        </div>
      </div>
    </div>
  );
}
