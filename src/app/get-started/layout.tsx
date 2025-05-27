import { Separator } from "@/components/ui/separator";
import GoBack from "../components/back-button";
import Logo from "@/components/common/Logo";
import NotificationButton from "@/components/common/NotificationButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen md:bg-[url(/images/background_lady.png)] md:bg-cover bg-white  md:p-8 flex items-center justify-center">
      <div className="w-full md:max-w-7xl md:w-full h-screen md:h-[90vh] 2xl:h-fit md:rounded-3xl md:border-4 bg-white overflow-hidden md:shadow-2xl flex flex-col">
        <div className="sticky top-0 z-10 bg-white p-4 pb-0 md:p-8 md:pb-0">
          <div className="flex justify-between items-center">
            <Logo />

            {/* Go Back and Notification */}
            <div className="flex items-center gap-3">
              <GoBack>
                Go Back
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.768555H12.5C13.0909 0.768555 13.6761 0.884951 14.2221 1.1111C14.768 1.33724 15.2641 1.66871 15.682 2.08657C16.0998 2.50444 16.4313 3.00051 16.6575 3.54648C16.8836 4.09244 17 4.67761 17 5.26855C17 5.8595 16.8836 6.44467 16.6575 6.99063C16.4313 7.5366 16.0998 8.03267 15.682 8.45053C15.2641 8.8684 14.768 9.19987 14.2221 9.42601C13.6761 9.65216 13.0909 9.76855 12.5 9.76855H1"
                    stroke="#59285F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6.76855C4 6.76855 1 8.97855 1 9.76855C1 10.5586 4 12.7686 4 12.7686"
                    stroke="#59285F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </GoBack>
              <div className="relative">
                <NotificationButton />
              </div>
            </div>
          </div>
        </div>
        <Separator className="w-full mt-6" />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
}
