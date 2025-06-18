import { type ReactNode } from "react";

export type FAQItem = {
  id: number;
  question: string;
  answer: ReactNode;
};

export type FormStep = {
  id: number;
  label: string;
};

export interface DocumentTypeT {
  id: string;
  label: string;
  required: boolean;
}

export interface SupportingDocumentsFormProps {
  documents: DocumentTypeT[];
  onNextStep: () => void;
  onPrevStep: () => void;
}

export interface ComplaintFormProps {
  onNextStep: () => void;
  onPrevStep?: () => void;
  currentStep: number;
}

export type ComplaintOwnerType = "individual" | "business";

export type TFormStep = {
  id: number;
  identifier: string;
  label: string;
};

export type StatusIconProps = {
  iconStatus?: "default" | "active" | "completed";
};

export type Faq = {
  id: number;
  question: string;
  answer: ReactNode;
};
