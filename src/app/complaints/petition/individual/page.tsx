"use client";

import FormLayout from "@/components/common/Form/FormLayout";
import SubmissionSuccess from "@/components/common/Form/SubmissionSuccess";
import {
  NORMAL_PETITION_DOCUMENTS,
  NORMAL_PETITION_FORM_STEPS,
} from "@/lib/state";
import { useState } from "react";

import ReviewSubmitForm from "@/components/common/Form/ReviewSubmitForm";
import DynamicSupportingDocumentsForm from "@/components/common/Form/DynamicSupportingDocumentsForm";
import ComplaintDetailsForm from "@/components/common/Form/ComplaintDetailsForm";
import VictimsProfileForm from "@/components/common/Form/VictimProfileForm";
import { FAQ_BY_FORM, supportingDocumentsFAQS } from "@/lib/FAQs";
import { useSharedStore } from "@/hooks/use-complaint-store";
import PetitionerProfileForm from "@/components/common/Form/PetitionProfileForm";

const FORM_COMPONENTS: Record<string, React.FC<any>> = {
  "victim-profile": VictimsProfileForm,
  "complaint-details": ComplaintDetailsForm,
  "supporting-documents": DynamicSupportingDocumentsForm,
  "review-submit": ReviewSubmitForm,
  "petitioners-profile": PetitionerProfileForm,
};

const NormalPetition = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleComplete = () => {
    setIsCompleted(true);
    window.scrollTo(0, 0);
  };
  const { complainantType } = useSharedStore();

  const REQUIRED_DOCUMENTS = NORMAL_PETITION_DOCUMENTS["individual"];

  const formSteps =
    //@ts-ignore
    NORMAL_PETITION_FORM_STEPS["individual"][complainantType as any];

  const currentFormStep = formSteps?.[currentStep - 1];

  const currentFaq =
    currentFormStep?.identifier === "supporting-documents"
      ? supportingDocumentsFAQS["complaints"]
      : FAQ_BY_FORM[currentFormStep?.identifier];

  const renderStepContent = () => {
    if (isCompleted) {
      return <SubmissionSuccess />;
    }

    const currentFormStep = formSteps?.[currentStep - 1];

    if (!currentFormStep) {
      return null;
    }

    const Component = FORM_COMPONENTS[currentFormStep.identifier];
    if (!Component) {
      return <div>Unknown form step: {currentFormStep.identifier}</div>;
    }

    const commonProps = {
      onNextStep: handleNextStep,
      onPrevStep: handlePrevStep,
      onComplete: handleComplete,
      currentStep,
      documents: REQUIRED_DOCUMENTS,
      formSteps,
    };

    return <Component {...commonProps} />;
  };

  return (
    <FormLayout currentStep={currentStep} faqs={currentFaq} steps={formSteps}>
      {renderStepContent()}
    </FormLayout>
  );
};

export default NormalPetition;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
