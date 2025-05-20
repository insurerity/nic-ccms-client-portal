"use client";

import CaseDetailsForm from "@/components/common/Form/CaseDetailsForm";
import DynamicSupportingDocumentsForm from "@/components/common/Form/DynamicSupportingDocumentsForm";
import FormLayout from "@/components/common/Form/FormLayout";
import PetitionerProfileForm from "@/components/common/Form/PetitionProfileForm";
import ReviewSubmitForm from "@/components/common/Form/ReviewSubmitForm";
import SubmissionSuccess from "@/components/common/Form/SubmissionSuccess";
import VictimsProfileForm from "@/components/common/Form/VictimProfileForm";
import { useSharedStore } from "@/hooks/use-complaint-store";

import {
  DEFAULT_FAQS,
  MOTOR_COMP_REQUIRED_DOCUMENTS_DETAILED,
  MOTOR_COMPENSATION_FORM_STEPS,
  NORMAL_PETITION_DOCUMENTS,
} from "@/lib/state";

import { Suspense, useState } from "react";

const FORM_COMPONENTS: Record<string, React.FC<any>> = {
  "victim-profile": VictimsProfileForm,
  "case-details": CaseDetailsForm,
  "supporting-documents": DynamicSupportingDocumentsForm,
  "review-submit": ReviewSubmitForm,
  "petitioners-profile": PetitionerProfileForm,
};

const MotorCompIndividual = () => {
  const { complainantType, caseType } = useSharedStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const REQUIRED_DOCUMENTS = caseType
    ? MOTOR_COMP_REQUIRED_DOCUMENTS_DETAILED[caseType?.toLowerCase()]
    : [];

  console.log("required documents", REQUIRED_DOCUMENTS);

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
    //@ts-ignore
    MOTOR_COMPENSATION_FORM_STEPS["individual"][complainantType as any];

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

export default MotorCompIndividual;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
