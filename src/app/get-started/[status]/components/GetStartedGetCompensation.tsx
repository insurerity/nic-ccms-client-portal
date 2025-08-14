import React from "react";
import UnderstandRequirements from "./UnderstandRequirements";
import { Play } from "lucide-react";
import { ContentLayout } from "@/components/common/content-layout";
import type { TOCItem } from "@/components/common/table-of-contents";
import { GET_STARTED_STATUS_CONTENT } from "@/lib/constant";
import VideoSection from "@/components/common/VideoSectiont";

type GetStartedGetCompensationProps = {
  title: string;
  subText: string;
  tocItems: TOCItem[];
  action?: () => void;
};

const GetStartedGetCompensation = ({
  subText,
  title,
  tocItems,
}: GetStartedGetCompensationProps) => {
  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto mb-12 rounded-lg">
        <h1 className="text-center text-xl md:text-3xl font-bold text-[#333] mb-2">
          {title}
        </h1>
        <p className="text-center text-gray-600 text-sm lg:text-base px-6">
          {subText}
        </p>
        <div className="relative w-full my-4 rounded-xl overflow-hidden">
          <VideoSection videoUrl="https://www.youtube.com/embed/Px4vuyTHwRc?si=M4lLFCaQ1sGz3ymJ" />
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
