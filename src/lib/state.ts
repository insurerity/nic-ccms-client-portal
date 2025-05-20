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

const REQUIRED_DOCS_MOTOR = [
  "Original Police Accident report",
  "Original Medical report",
  "The claimant's National ID card, preferably Ghana card",
  "Two (2) passport sized pictures endorsed by the Medical Doctor",
];

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

export const MOTOR_COMP_REQUIRED_DOCUMENTS_DETAILED: Record<
  string,
  DocumentTypeT[]
> = {
  injury: MOTOR_COMP_REQUIRED_DOCUMENTS.injury.map((doc, index) => ({
    id: `injuryDoc${index + 1}`,
    label: doc,
    required: REQUIRED_DOCS_MOTOR.includes(doc),
  })),
  death: MOTOR_COMP_REQUIRED_DOCUMENTS.death.map((doc, index) => ({
    id: `deathDoc${index + 1}`,
    label: doc,
    required: REQUIRED_DOCS_MOTOR.includes(doc),
  })),
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
    {
      id: "additionalDoc3",
      label: "Additional Document 3",
      required: false,
    },
    {
      id: "additionalDoc4",
      label: "Additional Document 4",
      required: false,
    },
    {
      id: "additionalDoc2",
      label: "Additional Document 5",
      required: false,
    },
    {
      id: "additionalDoc6",
      label: "Additional Document 6",
      required: false,
    },
  ],
};

export const PETITIONER_TYPES = [
  "Individual",
  "Corporate",
  "Legal Entity",
  "Broker",
  "Family",
];

export const FAMILY_MEMBER_TYPES = [
  "Brother",
  "Sister",
  "Mother",
  "Father",
  "Uncle",
  "Cousin",
  "Nephew",
  "Other",
];

export const idTypes = [
  "Ghana Card",
  "Voter ID",
  "Passport",
  "Driver's License",
  "NHIS Card",
  "Other",
];

export enum EComplaintStatuses {
  submitted = "Submitted",
  inReview = "In Review",
  pendingReview = "Pending Review",
  awaitingResponseFromEnt = "Awaiting Response from Entity",
  responseReceived = "Response received from Entity",
  meeting = "Awaiting Meeting",
  decisionMade = "Decision Made",
  resolved = "Resolved",
}

export const ComplaintStatusDescriptions: Record<EComplaintStatuses, string> = {
  [EComplaintStatuses.submitted]:
    "We’ve received your complaint and it’s being prepared for processing .",

  [EComplaintStatuses.inReview]:
    "A dedicated complaints specialist is now examining your details and any supporting documents. They’re assessing what happened and determining next steps.",

  [EComplaintStatuses.pendingReview]:
    "We’re currently reviewing your complaint details before taking the next step.`",

  [EComplaintStatuses.decisionMade]:
    "Our complaints team has reached a conclusion based on all the evidence. We’re finalizing our formal decision letter, which will explain what we’ve decided and why.",

  [EComplaintStatuses.awaitingResponseFromEnt]:
    "We’ve reached out to involved parties, this includes your insurance provider to gather their input or records. We’re waiting for their reply.",

  [EComplaintStatuses.responseReceived]:
    "Your Insurance provider has sent us the information we requested. We’re now integrating their feedback into your file.",

  [EComplaintStatuses.meeting]:
    "At this stage, we’re arranging a call or face‑to‑face meeting (if needed) with you or other stakeholders to clarify key points, answer questions, or explore settlement options.",

  [EComplaintStatuses.resolved]:
    "The matter is closed. You’ve received our decision, any agreed‑upon remedies have been implemented, and there’s no further action pending ",
};

export const ComplaintStatusSubtext: Record<EComplaintStatuses, string> = {
  [EComplaintStatuses.submitted]:
    "This means we've received your complaint. You don't need to do anything just yet — we'll take it from here.",

  [EComplaintStatuses.pendingReview]:
    "This means your complaint is in the queue. We're reviewing it soon and will keep you updated.",

  [EComplaintStatuses.inReview]:
    "This means a specialist is actively reviewing your complaint. We'll reach out if we need more details.",

  [EComplaintStatuses.awaitingResponseFromEnt]:
    "This means we've contacted all involved parties and are waiting for their response before moving forward.",

  [EComplaintStatuses.responseReceived]:
    "This means the entity has responded to your complaint.",

  [EComplaintStatuses.meeting]:
    "A meeting is being arranged to further discuss and resolve the complaint. We’ll update you shortly.",

  [EComplaintStatuses.decisionMade]:
    "A final decision has been made on your complaint. We're preparing to communicate the outcome.",

  [EComplaintStatuses.resolved]:
    "This means your complaint has been resolved and no further action is needed.",
};
