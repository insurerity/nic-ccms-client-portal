import HeroSlider from "./components/hero-slider";
import ActionButton from "@/components/common/ActionButton";
import Logo from "@/components/common/Logo";
import NotificationButton from "@/components/common/NotificationButton";

export default function Home() {
  return (
    <div className="flex justify-between h-screen w-full bg-white overflow-hidden ">
      <div className="p-8 max-w-[340px] md:max-w-[680px]">
        <HeroSlider />
      </div>
      {/* Right side - White background with content */}
      <div className="hidden md:flex max-w-[340px] md:max-w-[980px] md:w-full bg-white flex-col  p-8">
        {/* Top header with logo and notification */}
        <div className="flex justify-between items-center">
          <Logo />

          <div className="relative">
            <NotificationButton />
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

          <ActionButton
            goTo="/get-started"
            text="Get Started"
            className="bg-[#59285F] text-white font-medium py-3 px-8 rounded-full cursor-pointer"
          />
        </div>

        {/* Footer */}
        <div className="mt-auto text-center">
          <p className="text-sm text-gray-500">Powered by Insurerity Digital</p>
        </div>
      </div>
    </div>
  );
}
