"use client";

import BusinessInformationForm from "@/components/common/Form/BusinessInformationForm";
import ComplaintDetailsForm from "@/components/common/Form/ComplaintDetailsForm";
import DynamicSupportingDocumentsForm from "@/components/common/Form/DynamicSupportingDocumentsForm";
import FormLayout from "@/components/common/Form/FormLayout";
import PetitionerProfileForm from "@/components/common/Form/PetitionProfileForm";
import ReviewSubmitForm from "@/components/common/Form/ReviewSubmitForm";
import SubmissionSuccess from "@/components/common/Form/SubmissionSuccess";
import VictimsProfileForm from "@/components/common/Form/VictimProfileForm";
import { useSharedStore } from "@/hooks/use-complaint-store";
import {
  DEFAULT_FAQS,
  NORMAL_PETITION_DOCUMENTS,
  NORMAL_PETITION_FORM_STEPS,
} from "@/lib/state";

import React, { Suspense, useState } from "react";

const FORM_COMPONENTS: Record<string, React.FC<any>> = {
  "victim-profile": VictimsProfileForm,
  "complaint-details": ComplaintDetailsForm,
  "supporting-documents": DynamicSupportingDocumentsForm,
  "review-submit": ReviewSubmitForm,
  "petitioners-profile": PetitionerProfileForm,
  "business-information": BusinessInformationForm,
};

const REQUIRED_DOCUMENTS = NORMAL_PETITION_DOCUMENTS["business"];

const NormalPetitionBusiness = () => {
  const { complainantType } = useSharedStore();
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
  const formSteps =
    //  @ts-ignore
    NORMAL_PETITION_FORM_STEPS["business"][complainantType as any];

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
      currentStep,
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

export default NormalPetitionBusiness;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
// Alternatively, you can use next/dynamic for client-only components, but for pages,
// using "use client" and the above exports is the recommended approach in Next.js 13+.
