import ActionButton from "@/components/common/ActionButton";
import CustomCard from "@/components/common/CustomCard";
import {
  AccidentIcon,
  ComplaintIcon,
  StatusIcon,
} from "@/components/icons/complaint-icons";

export default function GetStarted() {
  return (
    <div className="p-1 lg:p-8 lg:pt-0">
      <div className="max-w-3xl mx-auto rounded-lg p-6 pt-0">
        <h1 className="text-center text-xl md:text-2xl font-bold text-[#333] mb-2">
          What do you want to do?
        </h1>
        <p className="text-center text-gray-600">
          Select the status that applies to you.
        </p>
      </div>

      {/* Options */}
      <div className="w-full">
        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 rounded-lg lg:p-6 space-y-6 lg:space-y-0">
          {/* Card 1 */}
          <CustomCard
            icon={<ComplaintIcon />}
            title=" File a Complaint or Petition"
            description="Submit a complaint or concern about your insurance provider or
              service. Complete our petition form with the necessary details."
            goto="/get-started/petition"
          ></CustomCard>

          {/* Card 2 */}
          <CustomCard
            icon={<AccidentIcon />}
            title=" Get Compensation for an Accident"
            description="Apply for compensation from the Motor Compensation Fund if you've
              been injured or affected by an uninsured vehicle accident."
            goto="/get-started/compensation"
          ></CustomCard>

          {/* Card 3 */}
          <CustomCard
            icon={<StatusIcon />}
            title="Check My Complaint Status"
            description="Enter your ticket number to check the status and progress of your
              complaint or petition submitted through the portal."
            goto="/get-started/status"
          ></CustomCard>
        </div>
      </div>
    </div>
  );
}
