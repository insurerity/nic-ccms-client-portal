import ActionButton from "@/components/common/ActionButton";
import { Play } from "lucide-react";
import React from "react";

type GetStartedCheckStatusProps = {
  title: string;
  subText: string;
};

const GetStartedCheckStatus = ({
  subText,
  title,
}: GetStartedCheckStatusProps) => {
  return (
    <div className="p-6 md:p-8">
      <div className="max-w-3xl mx-auto mb-12 rounded-lg p-6">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#333] mb-2">
          {title}
        </h1>
        <p className="text-center text-gray-600">{subText}</p>
        <div className="relative w-full my-4 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#59285F]/80 to-[#59285F]/60 relative h-[318px] rounded-xl overflow-hidden">
            <img
              src="/images/video-bg.png"
              alt="Filing a complaint"
              className="w-full h-full object-cover absolute mix-blend-overlay rounded-[24px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 text-[#59285F]" fill="#59285F" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid place-content-center">
          <ActionButton
            text="Check Now"
            goTo="/complaints/check-status"
            className="bg-[#59285F] text-white font-medium py-3 px-8 rounded-full  cursor-pointer mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStartedCheckStatus;
