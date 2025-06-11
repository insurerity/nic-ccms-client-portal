"use client";

import { TOCItem } from "@/components/common/table-of-contents";
import { ReactNode } from "react";
import { EComplaintStatuses } from "./state";
import AwaitingMeetingIcon from "@/components/icons/statuses/AwaitingMeetingIcon";
import AwaitingRespEntityIcon from "@/components/icons/statuses/AwaitingRespEntityIcon";
import DecisionMadeIcon from "@/components/icons/statuses/DecisionMadeIcon";
import InReviewIcon from "@/components/icons/statuses/InReviewIcon";
import PendingReviewIcon from "@/components/icons/statuses/PendingReviewIcon";
import ResponseReceivedIcon from "@/components/icons/statuses/ResponseReceivedIcon";
import ResolvedIcon from "@/components/icons/statuses/ResolvedIcon";
import SubmittedIcon from "@/components/icons/statuses/SubmittedIcon";
import { StatusIconProps } from "@/types";

export const PETITION_DETAILED_DATA = [
  {
    id: "what-is-complaint",
    title: "What is a Complaint or Petition?",
    content: (
      <p className="text-gray-700 mb-4">
        A complaint or petition is a formal request submitted to the National
        Insurance Commission (NIC) to resolve an issue you have with an
        insurance company, agent, or broker. This could involve unfair
        treatment, delayed claims, non-payment, misrepresentation, or any other
        concern about an insurance service.
      </p>
    ),
  },
  {
    id: "who-can-file",
    title: "Who Can File a Complaint or Petition?",
    content: (
      <div className="text-gray-700 space-y-2">
        <p>You can file a complaint if you are:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The person directly affected (Claimant/Victim).</li>
          <li>
            A representative filing on behalf of someone else
            (Petitioner/Solicitor).
          </li>
          <li>
            A policyholder, beneficiary, or any insured party with valid
            grounds.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "when-should-file",
    title: "When Should You File a Complaint or Petition?",
    content: (
      <p className="text-gray-700">
        You should only file with the NIC after first attempting to resolve the
        issue directly with the insurance company. If they do not respond or
        provide a resolution within a reasonable time, the NIC is here to help.
      </p>
    ),
  },
  {
    id: "what-to-provide",
    title: "What You’ll Need to Provide",
    content: (
      <div className="space-y-4 text-gray-700">
        <p>
          To help us resolve your issue efficiently, please provide the
          following:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Date of Incident</strong>
            <br />
            When the event or issue occurred.
          </li>
          <li>
            <strong>Policy Number (if available)</strong>
            <br />
            The unique number tied to your insurance policy.
          </li>
          <li>
            <strong>Entity of Concern</strong>
            <br />
            The name of the insurance company, broker, or agency you're filing
            the complaint against.
          </li>
          <li>
            <strong>Claim Type</strong>
            <br />
            The category your complaint falls under—e.g., motor, life, health,
            or general insurance.
          </li>
          <li>
            <strong>Nature of Claim</strong>
            <br />
            The specific reason for your complaint, such as claim delay, denial,
            or poor customer service.
          </li>
          <li>
            <strong>Description of Complaint</strong>
            <br />
            Tell us what happened. Include important details like: Who was
            involved, what steps you’ve already taken, any communication with
            the insurer, what outcome you are expecting. The more accurate your
            details, the faster we can support you.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "what-happens-after",
    title: "What Happens After You File a Complaint or Petition?",
    content: (
      <ol className="list-decimal pl-5 text-gray-700 space-y-2">
        <li>Once your complaint is submitted:</li>
        <li>You’ll receive a ticket number for tracking</li>
        <li>The NIC will review your complaint</li>
        <li>We may contact you or the insurer for more details</li>
        <li>You’ll be notified of progress and resolution updates</li>
      </ol>
    ),
  },
  {
    id: "need-help",
    title: "Need Help?",
    content: (
      <div>
        <p>
          If you’re unsure about how to proceed, our team is ready to support
          you.
        </p>
        <p>
          Contact us at{" "}
          <a
            href="https://nicgh.org/contact"
            className="text-[#59285F] underline font-semibold"
          >
            nicgh.org/contact
          </a>{" "}
          or call{" "}
          <a
            href="tel:+233302960696"
            className="text-[#59285F] font-semibold underline"
          >
            0302960696
          </a>{" "}
          /{" "}
          <a
            href="tel:+233302238301"
            className="text-[#59285F] font-semibold underline"
          >
            0302238301
          </a>
        </p>
      </div>
    ),
  },
];

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

export const GET_STARTED_STATUS_CONTENT: Record<any, ReactNode[]> = {
  petition: PETITION_DETAILED_DATA.map(({ id, title, content }) => (
    <section key={id} id={id} className="mb-12">
      <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
      {content}
    </section>
  )),
  compensation: PETITION_DETAILED_DATA.map(({ id, title, content }) => (
    <section key={id} id={id} className="mb-12">
      <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
      {content}
    </section>
  )),
  status: PETITION_DETAILED_DATA.map(({ id, title, content }) => (
    <section key={id} id={id} className="mb-12">
      <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
      {content}
    </section>
  )),
};

export const STATUSES_WITH_ICONS: Record<EComplaintStatuses, React.ReactNode> =
  {
    "Awaiting Meeting": <AwaitingMeetingIcon />,
    "Awaiting Response from Entity": <AwaitingRespEntityIcon />,
    "Decision Made": <DecisionMadeIcon />,
    "In Review": <InReviewIcon />,
    "Pending Review": <PendingReviewIcon />,
    "Response received from Entity": <ResponseReceivedIcon />,
    [EComplaintStatuses.submitted]: <SubmittedIcon />,
    [EComplaintStatuses.resolved]: <ResolvedIcon />,
  };

export const getStatusIcon = (
  status: EComplaintStatuses,
  props?: StatusIconProps
): React.ReactNode => {
  switch (status) {
    case "Awaiting Meeting":
      return <AwaitingMeetingIcon {...props} />;
    case "Awaiting Response from Entity":
      return <AwaitingRespEntityIcon {...props} />;
    case "Decision Made":
      return <DecisionMadeIcon {...props} />;
    case "In Review":
      return <InReviewIcon {...props} />;
    case "Pending Review":
      return <PendingReviewIcon {...props} />;
    case "Response received from Entity":
      return <ResponseReceivedIcon {...props} />;
    case EComplaintStatuses.submitted:
      return <SubmittedIcon {...props} />;
    case EComplaintStatuses.resolved:
      return <ResolvedIcon {...props} />;
    default:
      return <SubmittedIcon {...props} />;
  }
};

export const COMPLAINT_STATUSES = Object.values(EComplaintStatuses);
