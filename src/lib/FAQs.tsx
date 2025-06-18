import DriversLicenseInfo from "@/components/common/FAQItems/DriverLicenseInfo";
import GhanaCardNumberInfo from "@/components/common/FAQItems/GhanaCardNumberInfo";
import GhanaPostAddressGuide from "@/components/common/FAQItems/GhanaPostGuide";
import NHISNumberInfo from "@/components/common/FAQItems/NHISNumberInfo";
import PassportNumberInfo from "@/components/common/FAQItems/PassportNumberInfo";
import VoterIDInfo from "@/components/common/FAQItems/VoterIDInfo";
import { Faq } from "@/types";

const victimProfileFaq = [
  {
    id: 1,
    question: "What is a digital address?",
    answer:
      "A digital address is your unique GhanaPost GPS code a simple set of letters and numbers that pinpoints your exact  location",
  },
  {
    id: 2,
    question: "Where can I find my digital address?",
    answer: <GhanaPostAddressGuide />,
  },
  {
    id: 3,
    question: "Where can I find my Ghana Card Number?",
    answer: <GhanaCardNumberInfo />,
  },
  {
    id: 4,
    question: "Where can I find my Voter ID Number?",
    answer: <VoterIDInfo />,
  },
  {
    id: 5,
    question: "Where can I find my Health Insurance Number?",
    answer: <NHISNumberInfo />,
  },
  {
    id: 6,
    question: "Where can I find my Driver’s License Number?",
    answer: <DriversLicenseInfo />,
  },
  {
    id: 7,
    question: "Where can I find my Passport Number?",
    answer: <PassportNumberInfo />,
  },
];

export const caseDetails: Faq[] = [
  {
    id: 1,
    question: "How do I find my Policy Number?",
    answer: "",
  },
  {
    id: 2,
    question: "What is a Claim Type?",
    answer: "",
  },
  {
    id: 3,
    question: "What is an Entity of Concern?",
    answer: "",
  },
  {
    id: 4,
    question:
      "Why can't I find my Insurance Provider in the list of Entities of Concern?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nClick here to view the various Insurance Providers who have special conditions or updates attached to them.",
  },
  {
    id: 5,
    question: "What is a Nature of Claim?",
    answer: "",
  },
];

export const businessInformation: Faq[] = [
  {
    id: 1,
    question: "What is a digital address?",
    answer: "",
  },
  {
    id: 2,
    question: "Where can I find my digital address?",
    answer: "",
  },
  {
    id: 3,
    question: "Where can I find my Ghana Card Number?",
    answer: "",
  },
  {
    id: 4,
    question: "Where can I find my Voter ID Number?",
    answer: "",
  },
  {
    id: 5,
    question: "Where can I find my Health Insurance Number?",
    answer: "",
  },
  {
    id: 6,
    question: "Where can I find my Driver’s License Number?",
    answer: "",
  },
  {
    id: 7,
    question: "Where can I find my Passport Number?",
    answer: "",
  },
];

const complaintDetailsFaq = [
  {
    id: 1,
    question: "How do I find my Policy Number?",
    answer: "",
  },
  {
    id: 2,
    question: "What is a Claim Type?",
    answer: "",
  },
  {
    id: 3,
    question: "What is an Entity of Concern?",
    answer: "",
  },
  {
    id: 4,
    question:
      "Why can't I find my Insurance Provider in the list of Entities of Concern?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\nClick here to view the various Insurance Providers who have special conditions or updates attached to them.",
  },
  {
    id: 5,
    question: "What is a Nature of Claim?",
    answer: "",
  },
];

const petitionerProfileFaq: Faq[] = [
  {
    id: 1,
    question: "What is a digital address?",
    answer: "",
  },
  {
    id: 2,
    question: "Where can I find my digital address?",
    answer: "",
  },
  {
    id: 3,
    question: "Where can I find my Ghana Card Number?",
    answer: "",
  },
  {
    id: 4,
    question: "Where can I find my Voter ID Number?",
    answer: "",
  },
  {
    id: 5,
    question: "Where can I find my Health Insurance Number?",
    answer: "",
  },
  {
    id: 6,
    question: "Where can I find my Driver’s License Number?",
    answer: "",
  },
  {
    id: 7,
    question: "Where can I find my Passport Number?",
    answer: "",
  },
];

const reviewSubmit: Faq[] = [
  {
    id: 1,
    question:
      "Can I make changes to the details of my complaint or petition after I submit?",
    answer:
      "Yes but you would have to go to the nearest NIC office for any changes to be made on your behalf",
  },
  {
    id: 2,
    question:
      "How long will it take before I hear back from the NIC after I submit my complaint or petition",
    answer:
      "The exact date is not known. You will receive updates via SMS until the day it is done.",
  },
  {
    id: 3,
    question: "What should I do after I submit my complaint or petition?",
    answer:
      "Await instructions on what to do next. Keep your TicketNumber and periodically check the status of your complaint to stay in the loop",
  },
];

const supportingDocumentsFAQ: Faq[] = [
  {
    id: 1,
    question: "What is a signed letter of petition?",
    answer: "It is a letter showing that you have been authorized to petition",
  },
  {
    id: 2,
    question: "Which National Identification Card should I use?",
    answer:
      "Use the one which is readily available to you. You may be required to provide it later",
  },
  {
    id: 3,
    question:
      "What additional documents can I upload to support my claim or petition?",
    answer:
      "Any other documents which will aid in your complaint being successful. You want to provide as much helpful context as possible.",
  },
];

export const FAQ_BY_FORM: Record<string, Faq[]> = {
  "victim-profile": victimProfileFaq,
  "complaint-details": complaintDetailsFaq,
  "petitioners-profile": petitionerProfileFaq,
  "business-information": businessInformation,
  "case-details": caseDetails,
  "supporting-documents": supportingDocumentsFAQ,
  "review-submit": reviewSubmit,
};
