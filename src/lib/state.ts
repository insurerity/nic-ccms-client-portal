import { TOCItem } from "@/components/common/table-of-contents";
import { ReactNode } from "react";
import { PETITION_DETAILED_DATA } from "./constant";

export const GET_STARTED_STATUS_PAGE_DATA: Record<any, any> = {
  petition: {
    title: "Filing a Complaint Or Petition",
    subText:
      "Watch our video or read the article below to understand our process and requirements",
    continueText: "Continue to file a complaint/petition",
  },
  accident: {
    title: "Getting Compensation for an Accident",
    subText:
      "Watch our video or read the article below to understand our process and requirements",
    continueText: "Continue to file for competition",
  },
  status: {
    title: "Checking Complaint Status",
    subText:
      "Watch our video or read the article below to understand our process and requirements",
    continueText: "Continue to check status",
  },
};

export const GET_STARTED_STATUS_TOC_DATA: Record<string, any[]> = {
  petition: PETITION_DETAILED_DATA,
  accident: PETITION_DETAILED_DATA,
  status: PETITION_DETAILED_DATA,
};

export const GET_STARTED_STATUS_TOC_ITEMS: Record<string, TOCItem[]> = {
  petition: PETITION_DETAILED_DATA.map((v) => {
    return {
      id: v.id,
      level: 1,
      title: v.title,
    };
  }),
  accident: PETITION_DETAILED_DATA.map((v) => {
    return {
      id: v.id,
      level: 1,
      title: v.title,
    };
  }),
  status: PETITION_DETAILED_DATA.map((v) => {
    return {
      id: v.id,
      level: 1,
      title: v.title,
    };
  }),
};
