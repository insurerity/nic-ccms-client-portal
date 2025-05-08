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
  compensation: {
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
  compensation: PETITION_DETAILED_DATA,
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
  compensation: PETITION_DETAILED_DATA.map((v) => {
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

export const MOTOR_COMP_REQUIRED_DOCUMENTS: Record<any, string[]> = {
  injury: [
    "Original Police Accident report",
    "Original Medical report",
    "The claimant's National ID card, preferably Ghana card",
    "Two (2) passport sized pictures endorsed by the Medical Doctor",
    "Pictures of the injury with the victim's face fully showing",
    "An affidavit of instruction/ authorization if a solicitor is involved",
    "An affidavit of correction of name if the name on the Medical report and Police Accident report differs from that on the National Identity card. Reference should be made to the mistakes",
    "Original Medical receipts and prescriptions (if any)",
    "Repudiation letter if there is an insurance company mentioned on the Police Accident report",
  ],
  death: [
    "Original Police Accident report",
    "Original Death Certificate or Burial permit",
    "Original Letters of Administration (adult)",
    "Original Statutory Declaration (minor)",
    "Original Affidavit stating the name of the spouse and children as well as their ages",
    "The Administrator(s) National ID card, preferably Ghana card",
    "Two (2) passport sized pictures of the Administrator(s)",
    "An affidavit of correction of name if the name on the Letters of Administration and Statutory Declaration differs from that on the National Identity card. Reference should be made to the mistakes",
    "An affidavit to correct the deceased's name should there be a mistake on any of the documents provided. Reference should be made to the mistakes",
    "An affidavit of instruction/ authorization if a solicitor is involved",
    "Repudiation letter if there is an insurance company mentioned on the Police Accident report",
  ],
};
