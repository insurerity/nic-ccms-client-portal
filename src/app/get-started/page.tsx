import ActionButton from "@/components/common/ActionButton";
import {
  AccidentIcon,
  ComplaintIcon,
  StatusIcon,
} from "@/components/icons/complaint-icons";

export default function GetStarted() {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-3xl mx-auto mb-12 rounded-lg p-6">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#333] mb-2">
          What do you want to do?
        </h1>
        <p className="text-center text-gray-600">
          Select the status that applies to you.
        </p>
      </div>

      {/* Options */}
      <div className="relative">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg p-6">
          {/* Card 1 */}
          <div className="bg-[#F7F4F7] p-6 rounded-[24px] text-center flex flex-col items-center">
            <div className="w-48 h-48 mb-4 flex items-center justify-center">
              <ComplaintIcon />
            </div>
            <h2 className="text-base font-bold text-[#333] mb-3">
              File a Complaint or Petition
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Submit a complaint or concern about your insurance provider or
              service. Complete our petition form with the necessary details.
            </p>
            <ActionButton
              goTo="/get-started/petition"
              className="bg-[#59285F] text-white font-medium py-3 px-8 rounded-full mt-auto cursor-pointer"
              text="Learn More"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#F7F4F7] p-6 rounded-[24px] flex flex-col items-center">
            <div className="w-48 h-48 mb-4 flex items-center justify-center">
              <AccidentIcon />
            </div>
            <h2 className="text-base font-bold text-[#333] mb-3">
              Get Compensation for an Accident
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Apply for compensation from the Motor Compensation Fund if you've
              been injured or affected by an uninsured vehicle accident.
            </p>
            <ActionButton
              goTo="/get-started/accident"
              className="bg-[#59285F] text-white font-medium py-3 px-8 rounded-full mt-auto cursor-pointer"
              text="Learn More"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-[#F7F4F7] p-6 rounded-[24px] flex flex-col items-center">
            <div className="w-48 h-48 mb-4 flex items-center justify-center">
              <StatusIcon />
            </div>
            <h2 className="text-base font-bold text-[#333] mb-3">
              Check My Complaint Status
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Enter your ticket number to check the status and progress of your
              complaint or petition submitted through the portal.
            </p>
            <ActionButton
              goTo="/get-started/status"
              className="bg-[#59285F] text-white font-medium py-3 px-8 rounded-full mt-auto cursor-pointer"
              text="Learn More"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
