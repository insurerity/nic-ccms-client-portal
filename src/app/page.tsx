import HeroSlider from "./components/hero-slider";
import ActionButton from "@/components/common/ActionButton";
import Logo from "@/components/common/Logo";
import NotificationButton from "@/components/common/NotificationButton";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col md:justify-between lg:justify-center h-screen w-full bg-white ">
      <div className="md:hidden flex justify-between items-center p-4">
        <Logo />

        <div className="relative">
          <NotificationButton />
        </div>
      </div>
      <div className="md:p-8 p-4 lg:max-w-[768px]  mb-4">
        <HeroSlider />
      </div>
      {/* Right side - White background with content */}
      <div className=" md:flex lg:max-w-[768px] md:w-full w-full bg-white flex-col p-8">
        {/* Top header with logo and notification */}
        <div className="md:flex hidden justify-between items-center">
          <Logo />

          <div className="relative">
            <NotificationButton />
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center flex-grow md:mt-20 md:mb-0 mb-4">
          <h2 className="md:text-3xl text-xl text-center font-bold text-gray-900 mb-4">
            Welcome to the
            <br />
            NIC Complaints Portal
          </h2>
          <p className="text-gray-600 md:mb-12 mb-4 text-center">
            Protecting the interests of policy holders
          </p>

          <ActionButton
            goTo="/get-started"
            text="Get Started"
            className="bg-[#59285F] text-white font-medium py-3 px-8 rounded-full hover:cursor-pointer w-full md:w-[200px]"
            actionFrom="Victim Profile Form"
          />
        </div>

        {/* Footer */}
        <div className="mt-auto text-center">
          <p className="text-sm text-gray-500">
            Powered by <span className="font-bold">Insurerity Digital</span>
          </p>
        </div>
      </div>
    </div>
  );
}
