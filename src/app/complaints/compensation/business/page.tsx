"use client";
import CaseDetailsForm from "@/components/common/Form/CaseDetailsForm";
import FormLayout from "@/components/common/Form/FormLayout";
import ReviewSubmitForm from "@/components/common/Form/ReviewSubmitForm";
import PetitionerProfileForm from "@/components/common/Form/PetitionProfileForm";
import BusinessInformationForm from "@/components/common/Form/BusinessInformationForm";
import DynamicSupportingDocumentsForm from "@/components/common/Form/DynamicSupportingDocumentsForm";
import SubmissionSuccess from "@/components/common/Form/SubmissionSuccess";
import {
  DEFAULT_FAQS,
  MOTOR_COMP_REQUIRED_DOCUMENTS_DETAILED,
  MOTOR_COMPENSATION_FORM_STEPS,
  NORMAL_PETITION_DOCUMENTS,
} from "@/lib/state";

import { Suspense, useState } from "react";
import { useSharedStore } from "@/hooks/use-complaint-store";
import { FAQ_BY_FORM } from "@/lib/FAQs";

const FORM_COMPONENTS: Record<string, React.FC<any>> = {
  "business-information": BusinessInformationForm,
  "case-details": CaseDetailsForm,
  "supporting-documents": DynamicSupportingDocumentsForm,
  "review-submit": ReviewSubmitForm,
  "petitioners-profile": PetitionerProfileForm,
};

const MCompBusiness = () => {
  const { complainantType, caseType } = useSharedStore();
  console.log("case type", caseType);
  const toSearchParam = complainantType as
    | keyof (typeof MOTOR_COMPENSATION_FORM_STEPS)["individual"]
    | null;
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const REQUIRED_DOCUMENTS = caseType
    ? MOTOR_COMP_REQUIRED_DOCUMENTS_DETAILED[caseType?.toLowerCase()]
    : [];

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

    const currentFormStep = formSteps?.[currentStep - 1];
    
      const currentFaq = FAQ_BY_FORM[currentFormStep?.identifier];
      
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
export default MCompBusiness;

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
