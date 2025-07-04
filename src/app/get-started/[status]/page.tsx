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
import { toast } from "sonner";

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
        action={() =>
          toast.message(
            "Coming Soon – In the meantime, click on check now to check the status of your complaint",
            {
              position: "top-center",
            }
          )
        }
      />
    );
  }

  if (status === "compensation") {
    return (
      <GetStartedGetCompensation
        subText={pageData?.subText}
        title={pageData?.title}
        tocItems={tocItems}
        action={() =>
          toast.message(
            "Coming Soon – In the meantime, learn more about our process below / Click on Apply Now to proceed ",
            {
              position: "top-center",
            }
          )
        }
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
          <div
            className="relative w-full my-4 rounded-xl overflow-hidden"
            onClick={() =>
              toast.message(
                "Coming Soon – In the meantime, learn more about our process below / Click on Continue to proceed",
                {
                  position: "top-center",
                }
              )
            }
          >
            <div className="bg-gradient-to-r from-[#59285F]/80 to-[#59285F]/60 relative h-[220px] lg:h-[318px] rounded-xl overflow-hidden">
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
