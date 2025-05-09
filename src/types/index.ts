export type FAQItem = {
  id: number;
  question: string;
  answer: string;
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

export type ComplaintOwnerType = "individual" | "business";

export type TFormStep = {
  id: number;
  identifier: string;
  label: string;
};
