import DriversLicenseInfo from "@/components/common/FAQItems/DriverLicenseInfo";
import EntityNotFoundNote from "@/components/common/FAQItems/EntityNotFoundNote";
import GhanaCardNumberInfo from "@/components/common/FAQItems/GhanaCardNumberInfo";
import GhanaPostAddressGuide from "@/components/common/FAQItems/GhanaPostGuide";
import NHISNumberInfo from "@/components/common/FAQItems/NHISNumberInfo";
import PassportNumberInfo from "@/components/common/FAQItems/PassportNumberInfo";
import PolicyNumberInfo from "@/components/common/FAQItems/PolicyNumberInfo";
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
    answer: <PolicyNumberInfo />,
  },
  {
    id: 2,
    question: "What is a Claim Type?",
    answer:
      "A claim type is the category of loss or event you’re asking your insurer to cover such as life, non‑life, and  motor compensation  so they know how to process and pay your claim",
  },
  {
    id: 3,
    question: "What is an Entity of Concern?",
    answer:
      "When submitting a complaint, the Entity of Concern (EOC) refers to the insurance company you're reporting or raising the issue against. This is the organization involved in the complaint you are filing. ",
  },
  {
    id: 4,
    question:
      "Why can't I find my Insurance Company in the list of Entities of Concern?",
    answer: <EntityNotFoundNote />,
  },
  {
    id: 5,
    question: "What is a Nature of Claim?",
    answer:
      "A Nature of Claim is the broad line‑of‑business category Life, Non‑Life, or Motor Compensation used to group and route insurance claims with the appropriate forms, specialists, and legal rules",
  },
];

export const businessInformation: Faq[] = [
  {
    id: 1,
    question: "Who is a contact person?",
    answer: "A contact person is someone we can get in touch with.",
  },
  {
    id: 2,
    question: "What is a contact person number?",
    answer: "This is the main phone number for reaching the contact person",
  },
];

const complaintDetailsFaq = [
  {
    id: 1,
    question: "How do I find my Policy Number?",
    answer: <PolicyNumberInfo />,
  },
  {
    id: 2,
    question: "What is a Claim Type?",
    answer:
      "A claim type is the category of loss or event you’re asking your insurer to cover such as life, non‑life, and  motor compensation  so they know how to process and pay your claim",
  },
  {
    id: 3,
    question: "What is an Entity of Concern?",
    answer:
      "When submitting a complaint, the Entity of Concern (EOC) refers to the insurance company you're reporting or raising the issue against. This is the organization involved in the complaint you are filing.",
  },
  {
    id: 4,
    question:
      "Why can't I find my Insurance Company in the list of Entities of Concern?",
    answer: <EntityNotFoundNote />,
  },
  {
    id: 5,
    question: "What is a Nature of Claim?",
    answer:
      "A Nature of Claim is the broad line‑of‑business category Life, Non‑Life, or Motor Compensation used to group and route insurance claims with the appropriate forms, specialists, and legal rules",
  },
];

const petitionerProfileFaq: Faq[] = [
  {
    id: 1,
    question: "Who is a petitioner?",
    answer:
      "A  petitioner is the individual or organization filing the official complaint or request",
  },
  {
    id: 2,
    question: "Where can I find my Ghana Card Number?",
    answer: <GhanaCardNumberInfo />,
  },
  {
    id: 3,
    question: "Where can I find my Voter ID Number?",
    answer: <VoterIDInfo />,
  },
  {
    id: 4,
    question: "Where can I find my Health Insurance Number?",
    answer: <NHISNumberInfo />,
  },
  {
    id: 5,
    question: "Where can I find my Driver’s License Number?",
    answer: <DriversLicenseInfo />,
  },
  {
    id: 6,
    question: "Where can I find my Passport Number?",
    answer: <PassportNumberInfo />,
  },
  {
    id: 7,
    question: "How do I find my Policy Number?",
    answer: <PolicyNumberInfo />,
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
    question: "What is an original Police Accident report document?",
    answer:
      "An original police report document refers to the official, first-generation record created by law enforcement at the scene of an incident or after investigation.",
  },
  {
    id: 2,
    question: "What is an Original death certificate?",
    answer:
      "It is an official, government-issued legal record confirming a person’s death, including cause, time, location, and personal details.",
  },
  {
    id: 3,
    question: "What is a Burial Permit?",
    answer:
      "It is a short-term authorization issued by a medical examiner, coroner, or vital records office, allowing burial, cremation, or transport of remains.",
  },
  {
    id: 4,
    question: "What is an Original Letters Of Administration (adult)?",
    answer:
      "A court-issued legal document granting an appointed administrator the authority to manage and distribute the estate of a deceased adult who died without a valid will (intestate).",
  },
  {
    id: 5,
    question: "What is an Original Statutory Declaration (minor)?",
    answer:
      "A legally binding document, signed and witnessed before an authorized officer (e.g., notary), in which a declarant makes factual statements under oath regarding matters involving a minor (e.g., guardianship, inheritance, or identity), with the original being the first-executed version bearing live signatures and seals.",
  },
  {
    id: 6,
    question:
      "What is an Original Affidavit stating the name of the spouse and children as well as their ages?",
    answer:
      "A sworn, written statement signed in the presence of an authorized officer (e.g., notary), declaring the names and ages of a person’s surviving spouse and children, with the original being the first-executed version bearing live signatures, seals, and attestations.",
  },
  {
    id: 7,
    question:
      "What is The Administrator(s) National ID card, preferably Ghana card?",
    answer:
      "The original, government-issued national identification document (ideally Ghana's biometric Ghana Card) of the court-appointed administrator(s) handling an estate, used to verify their identity and legal authority in probate or administrative proceedings.",
  },
  {
    id: 8,
    question: "What is an affidavit Of correction Of name?",
    answer:
      "An Affidavit of Correction of Name is a sworn legal document used to resolve discrepancies between the name on a National Identity Card and those on other legal documents like Letters of Administration or Statutory Declarations.",
  },
  {
    id: 9,
    question: "What is an affidavit of instruction/ authorization?",
    answer:
      "An Affidavit of Instruction/Authorization is a sworn statement by a client that formally records and authorizes a solicitor’s engagement and the scope of their instructions.",
  },
  {
    id: 10,
    question: "What is a Repudiation letter?",
    answer:
      "A Repudiation Letter is a formal written notice by one party asserting that a contract (or other legal relationship) can no longer continue either because the other side has fundamentally breached it or is about to do so.",
  },
  {
    id: 11,
    question: "What is an “Other document”?",
    answer:
      "Any other documents which will aid in your complaint being successful. You want to provide as much helpful context as possible.",
  },
];

export const supportingFAQsMpet: Record<"death" | "injury", Faq[]> = {
  death: supportingDocumentsFAQ,
  injury: [
    {
      id: 1,
      question: "What is an “Other document”?",
      answer:
        "Any other documents which will aid in your complaint being successful. You want to provide as much helpful context as possible.",
    },
    {
      id: 2,
      question: "What is an original Police Accident report document?",
      answer:
        "An original police report document refers to the official, first-generation record created by law enforcement at the scene of an incident or after investigation.",
    },
    {
      id: 3,
      question: "What is a medical report?",
      answer:
        "A medical report is an official, written document prepared by a health-care professional (e.g., physician, nurse, or specialist) that records a patient’s medical information at a given point in time. Its primary purposes are to communicate clinical findings and decisions to other care-providers, to serve as a legal record, and to support insurance, disability, or other administrative processes.",
    },
    {
      id: 4,
      question: "Where can I find my Ghana Card Number?",
      answer: (
        <>
          Your Ghana Card Number is your unique 13‑character alphanumeric ID
          (e.g. GHA0012345678X). You can find it in two places:
          <ul className="list-disc ml-6 mt-1">
            <li>
              On your physical card – on the front of the card, just below your
              photograph and above the 2‑D barcode
            </li>
            <li>It’s labeled “Ghana Card Number” (sometimes called the PIN)</li>
          </ul>
        </>
      ),
    },
    {
      id: 5,
      question: "What is an affidavit of instruction/authorization?",
      answer:
        "An Affidavit of Instruction/Authorization is a sworn statement by a client that formally records and authorizes a solicitor’s engagement and the scope of their instructions.",
    },
    {
      id: 6,
      question: "What is a Repudiation letter?",
      answer:
        "A Repudiation Letter is a formal written notice by one party asserting that a contract (or other legal relationship) can no longer continue either because the other side has fundamentally breached it or is about to do so.",
    },
    {
      id: 7,
      question: "What is an affidavit of correction of name?",
      answer:
        "An Affidavit of Correction of Name is a sworn legal document used to resolve discrepancies between the name on a National Identity Card and those on other legal documents like Letters of Administration or Statutory Declarations.",
    },
    {
      id: 8,
      question: "What is a medical receipt?",
      answer:
        "It is an itemized, official proof of payment for medical services or goods, issued by a health-care provider, clinic, pharmacy or hospital.",
    },
    {
      id: 9,
      question: "What is a prescription?",
      answer:
        "It is an authentic, signed instruction from a licensed medical practitioner authorizing the dispensing of specified medications or treatments.",
    },
  ],
};

export const supportingDocumentsFAQS: Record<"complaints", Faq[]> = {
  complaints: [
    {
      id: 1,
      question: "What is a signed Letter of petition?",
      answer:
        "It is a letter showing that you have been authorized to petition",
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
        "Any other documents which will aid in your complaint being successful. You want to provide as much helpful context as possible",
    },
  ],
};

export const FAQ_BY_FORM: Record<string, Faq[]> = {
  "victim-profile": victimProfileFaq,
  "complaint-details": complaintDetailsFaq,
  "petitioners-profile": petitionerProfileFaq,
  "business-information": businessInformation,
  "case-details": caseDetails,
  "supporting-documents": supportingDocumentsFAQ,
  "review-submit": reviewSubmit,
};
