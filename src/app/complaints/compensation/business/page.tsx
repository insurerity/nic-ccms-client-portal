"use client";
import CaseDetailsForm from "@/components/common/Form/CaseDetailsForm";
import FormLayout from "@/components/common/Form/FormLayout";
import ReviewSubmitForm from "@/components/common/Form/ReviewSubmitForm";
import PetitionerProfileForm from "@/components/common/Form/PetitionProfileForm";
import BusinessInformationForm from "@/components/common/Form/BusinessInformationForm";
import DynamicSupportingDocumentsForm from "@/components/common/Form/DynamicSupportingDocumentsForm";
import SubmissionSuccess from "@/components/common/Form/SubmissionSucess";
import {
  DEFAULT_FAQS,
  MOTOR_COMPENSATION_FORM_STEPS,
  NORMAL_PETITION_DOCUMENTS,
} from "@/lib/state";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const REQUIRED_DOCUMENTS = NORMAL_PETITION_DOCUMENTS["individual"];

const FORM_COMPONENTS: Record<string, React.FC<any>> = {
  "business-information": BusinessInformationForm,
  "case-details": CaseDetailsForm,
  "supporting-documents": DynamicSupportingDocumentsForm,
  "review-submit": ReviewSubmitForm,
  "petitioners-profile": PetitionerProfileForm,
};

const MCompBusiness = () => {
  const searchParams = useSearchParams();
  const toSearchParam = searchParams.get("to") as
    | keyof (typeof MOTOR_COMPENSATION_FORM_STEPS)["individual"]
    | null;
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

  const formSteps = toSearchParam
    ? MOTOR_COMPENSATION_FORM_STEPS["business"][toSearchParam]
    : [];

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
export default MCompBusiness;
