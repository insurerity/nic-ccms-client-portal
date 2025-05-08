import { TOCItem } from "@/components/common/table-of-contents";
import { PETITION_DETAILED_DATA } from "./constant";
import { ComplaintOwnerType, DocumentTypeT } from "@/types";

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

export const MOTOR_COMPENSATION_FORM_STEPS = {
  individual: {
    self: [
      {
        id: 1,
        identifier: "victim-profile",
        label: "Victim Profile",
      },
      {
        id: 2,
        identifier: "case-details",
        label: "Case Details",
      },
      {
        id: 3,
        identifier: "supporting-documents",
        label: "Supporting Documents",
      },
      {
        id: 4,
        identifier: "review-submit",
        label: "Review & Submit",
      },
    ],
    behalf: [
      {
        id: 1,
        identifier: "petitioners-profile",
        label: "Petitioner's Profile",
      },
      {
        id: 2,
        identifier: "victim-profile",
        label: "Victim Profile",
      },
      {
        id: 3,
        identifier: "case-details",
        label: "Case Details",
      },
      {
        id: 4,
        identifier: "supporting-documents",
        label: "Supporting Documents",
      },
      {
        id: 5,
        identifier: "review-submit",
        label: "Review & Submit",
      },
    ],
  },
  business: {
    self: [
      {
        id: 1,
        identifier: "business-information",
        label: "Business Information",
      },
      {
        id: 2,
        identifier: "case-details",
        label: "Case Details",
      },
      {
        id: 3,
        identifier: "supporting-documents",
        label: "Supporting Documents",
      },
      {
        id: 4,
        identifier: "review-submit",
        label: "Review & Submit",
      },
    ],
    behalf: [
      {
        id: 1,
        identifier: "petitioners-profile",
        label: "Petitioner's Profile",
      },
      {
        id: 2,
        identifier: "business-information",
        label: "Business Information",
      },
      {
        id: 3,
        identifier: "case-details",
        label: "Case Details",
      },
      {
        id: 4,
        identifier: "supporting-documents",
        label: "Supporting Documents",
      },
      {
        id: 5,
        identifier: "review-submit",
        label: "Review & Submit",
      },
    ],
  },
};
export const NORMAL_PETITION_FORM_STEPS = {
  individual: {
    self: [
      {
        id: 1,
        identifier: "victim-profile",
        label: "Victim Profile",
      },
      {
        id: 2,
        identifier: "complaint-details",
        label: "Complaint Details",
      },
      {
        id: 3,
        identifier: "supporting-documents",
        label: "Supporting Documents",
      },
      {
        id: 4,
        identifier: "review-submit",
        label: "Review & Submit",
      },
    ],
    behalf: [
      {
        id: 1,
        identifier: "petitioners-profile",
        label: "Petitioner's Profile",
      },
      {
        id: 2,
        identifier: "victim-profile",
        label: "Victim Profile",
      },
      {
        id: 3,
        identifier: "complaint-details",
        label: "Complaint Details",
      },
      {
        id: 4,
        identifier: "supporting-documents",
        label: "Supporting Documents",
      },
      {
        id: 5,
        identifier: "review-submit",
        label: "Review & Submit",
      },
    ],
  },
  business: {
    self: [
      {
        id: 1,
        identifier: "business-information",
        label: "Business Information",
      },
      {
        id: 2,
        identifier: "complaint-details",
        label: "Complaint Details",
      },
      {
        id: 3,
        identifier: "supporting-documents",
        label: "Supporting Documents",
      },
      {
        id: 4,
        identifier: "review-submit",
        label: "Review & Submit",
      },
    ],
    behalf: [
      {
        id: 1,
        identifier: "petitioners-profile",
        label: "Petitioner's Profile",
      },
      {
        id: 2,
        identifier: "business-information",
        label: "Business Information",
      },
      {
        id: 3,
        identifier: "complaint-details",
        label: "Complaint Details",
      },
      {
        id: 4,
        identifier: "supporting-documents",
        label: "Supporting Documents",
      },
      {
        id: 5,
        identifier: "review-submit",
        label: "Review & Submit",
      },
    ],
  },
};

export const DEFAULT_FAQS = [
  {
    id: 1,
    question: "What is a digital address?",
    answer:
      "A digital address is a unique code that identifies a specific location in Ghana. It's part of the Ghana Post GPS system.",
  },
  {
    id: 2,
    question: "Where can I find my digital address?",
    answer:
      "You can find your digital address using the Ghana Post GPS app, available on Android and iOS app stores.",
  },
  {
    id: 3,
    question: "Where can I find my Ghana Card Number?",
    answer:
      "Your Ghana Card Number is printed on the front of your Ghana Card, usually in the format GHA-XXXXXXXXX-X.",
  },
  {
    id: 4,
    question: "Where can I find my Voter ID Number?",
    answer:
      "Your Voter ID Number is printed on your Voter ID card issued by the Electoral Commission of Ghana.",
  },
  {
    id: 5,
    question: "Where can I find my Health Insurance Number?",
    answer:
      "Your Health Insurance Number is printed on your NHIS card, usually at the bottom of the card.",
  },
  {
    id: 6,
    question: "Where can I find my Driver's License Number?",
    answer:
      "Your Driver's License Number is printed on the front of your license, usually near your photo.",
  },
  {
    id: 7,
    question: "Where can I find my Passport Number?",
    answer:
      "Your Passport Number is printed on the data page of your passport, usually at the top right corner.",
  },
];

export const CLAIM_TYPES = ["Life", "Non Life", "Motor Compensation"];

export const NATURE_OF_CLAIMS: Record<string, string[]> = {
  Life: [
    "Funeral Policy Claim",
    "Surrender Value",
    "Maturity Value",
    "Unlawful Deductions",
    "Commission Payments",
    "Low Quantum",
    "Whole Life Policy",
    "Investment Policy",
    "Term Life Policy",
  ],
  "Non Life": [
    "Performance Bond",
    "Counter Guarantee Bond",
    "Guarantee Bond",
    "Home Settlement Claim",
    "Fire Claim",
    "Contractors All Risk",
    "Assets All Risk",
    "Flood Claim",
    "Workmen Compensation",
    "Burglary",
    "Advance Mobilisation Bond",
    "Goods In Transit",
    "Group Life",
  ],
  "Motor Compensation": [
    "Motor Injury Claim",
    "Motor Death Claim",
    "Motor Own Damage",
    "TPPD",
    "Motor Theft/Burglary",
    "Goods -in-transit",
    "Motor Flood Claim",
  ],
};

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
export const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const NORMAL_PETITION_DOCUMENTS: Record<
  ComplaintOwnerType,
  DocumentTypeT[]
> = {
  individual: [
    {
      id: "signedLetter",
      label: "Signed Letter of Petition",
      required: true,
    },
    {
      id: "nationalId",
      label: "National Identification Card",
      required: true,
    },
    {
      id: "additionalDoc1",
      label: "Additional Document 1",
      required: false,
    },
    {
      id: "additionalDoc2",
      label: "Additional Document 2",
      required: false,
    },
  ],
  business: [
    {
      id: "signedLetter",
      label: "Signed Letter of Petition",
      required: true,
    },
    {
      id: "nationalId",
      label: "National Identification Card",
      required: true,
    },
    {
      id: "additionalDoc1",
      label: "Additional Document 1",
      required: false,
    },
    {
      id: "additionalDoc2",
      label: "Additional Document 2",
      required: false,
    },
  ],
};
