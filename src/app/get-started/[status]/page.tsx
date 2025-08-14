"use client";
import { GET_STARTED_STATUS_PAGE_DATA } from "@/lib/state";
import { Play } from "lucide-react";
import UnderstandRequirements from "./components/UnderstandRequirements";
import { ContentLayout } from "@/components/common/content-layout";
import {
  GET_STARTED_STATUS_CONTENT,
  GET_STARTED_STATUS_TOC_ITEMS,
} from "@/lib/constant";
import GetStartedCheckStatus from "./components/GetStartedCheckStatus";
import GetStartedGetCompensation from "./components/GetStartedGetCompensation";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import VideoSection from "@/components/common/VideoSectiont";

export default function GetStartedStatus() {
  const params = useParams();

  const status = params?.status as string;
  const pageData = GET_STARTED_STATUS_PAGE_DATA[status];
  const tocItems = GET_STARTED_STATUS_TOC_ITEMS[status];

  if (status === "status") {
    return (
      <GetStartedCheckStatus
        subText={pageData?.subText}
        title={pageData?.title}
      />
    );
  }

  if (status === "compensation") {
    return (
      <GetStartedGetCompensation
        subText={pageData?.subText}
        title={pageData?.title}
        tocItems={tocItems}
      />
    );
  }

  return (
    <Suspense>
      <div className="p-4">
        <div className="max-w-3xl mx-auto mb-12 rounded-lg ">
          <h1 className="text-center text-xl md:text-3xl font-bold text-[#333] mb-2">
            {pageData?.title}
          </h1>
          <p className="text-center text-gray-600 text-sm lg:text-base px-6">
            {pageData?.subText}
          </p>
          <div className="relative w-full my-4 rounded-xl overflow-hidden">
            <VideoSection videoUrl="https://www.youtube.com/embed/dtu77hYGR9U?si=wPHmezn3BPHvDI2-" />
          </div>
          <UnderstandRequirements
            continueText={pageData?.continueText}
            type="petition"
          />
        </div>
        <div>
          <ContentLayout tocItems={tocItems}>
            {GET_STARTED_STATUS_CONTENT[status]}
          </ContentLayout>
        </div>
      </div>
    </Suspense>
  );
}
