"use client";

import FormLayout from "@/components/common/Form/FormLayout";
import SubmissionSuccess from "@/components/common/Form/SubmissionSucess";
import {
  DEFAULT_FAQS,
  NORMAL_PETITION_DOCUMENTS,
  NORMAL_PETITION_FORM_STEPS,
} from "@/lib/state";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

import ReviewSubmitForm from "@/components/common/Form/ReviewSubmitForm";
import DynamicSupportingDocumentsForm from "@/components/common/Form/DynamicSupportingDocumentsForm";
import ComplaintDetailsForm from "@/components/common/Form/ComplaintDetailsForm";
import VictimsProfileForm from "@/components/common/Form/VictimProfileForm";

const FORM_COMPONENTS: Record<string, React.FC<any>> = {
  "victim-profile": VictimsProfileForm,
  "complaint-details": ComplaintDetailsForm,
  "supporting-documents": DynamicSupportingDocumentsForm,
  "review-submit": ReviewSubmitForm,
};

const REQUIRED_DOCUMENTS = NORMAL_PETITION_DOCUMENTS["individual"];

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
  const searchParams = useSearchParams();
  const toSearchParam = searchParams.get("to");

  const formSteps =
    //@ts-ignore
    NORMAL_PETITION_FORM_STEPS["individual"][toSearchParam as any];

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
      documents: REQUIRED_DOCUMENTS,
      formSteps,
    };

    return <Component {...commonProps} />;
  };

  return (
    <Suspense>
      <FormLayout
        currentStep={currentStep}
        faqs={DEFAULT_FAQS}
        steps={formSteps}
      >
        {renderStepContent()}
      </FormLayout>
    </Suspense>
  );
};

export default NormalPetition;
