import React from "react";
import UnderstandRequirements from "./UnderstandRequirements";
import { Play } from "lucide-react";
import { ContentLayout } from "@/components/common/content-layout";
import type { TOCItem } from "@/components/common/table-of-contents";
import { GET_STARTED_STATUS_CONTENT } from "@/lib/constant";

type GetStartedGetCompensationProps = {
  title: string;
  subText: string;
  tocItems: TOCItem[];
};

const GetStartedGetCompensation = ({
  subText,
  title,
  tocItems,
}: GetStartedGetCompensationProps) => {
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
        <UnderstandRequirements
          continueText={"Apply Now"}
          type="compensation"
        />
      </div>
      <div>
        <ContentLayout tocItems={tocItems}>
          {GET_STARTED_STATUS_CONTENT["compensation"]}
        </ContentLayout>
      </div>
    </div>
  );
};

export default GetStartedGetCompensation;
