import ActionButton from "@/components/common/ActionButton";
import VideoSection from "@/components/common/VideoSectiont";
import { Play } from "lucide-react";
import React from "react";

type GetStartedCheckStatusProps = {
  title: string;
  subText: string;
  action?: () => void;
};

const GetStartedCheckStatus = ({
  subText,
  title,
}: GetStartedCheckStatusProps) => {
  return (
    <div className="lg:p-4 p-6">
      <div className="max-w-3xl mx-auto mb-12 rounded-lg ">
        <h1 className="text-center text-xl md:text-3xl font-bold text-[#333] mb-2">
          {title}
        </h1>
        <p className="text-center text-gray-600 text-sm lg:text-base px-6">
          {subText}
        </p>
        <div className="relative w-full my-4 rounded-xl overflow-hidden">
          <VideoSection videoUrl="https://www.youtube.com/embed/XYthC0qX1og?si=1EDlAwGZiHRtGRxT" />
        </div>
        <div className="grid place-content-center">
          <ActionButton
            text="Check Now"
            goTo="/complaints/check-status"
            className="bg-[#59285F] text-white font-medium py-3 px-8 rounded-full  cursor-pointer mt-4"
            actionFrom="Check Complaint Status"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStartedCheckStatus;
