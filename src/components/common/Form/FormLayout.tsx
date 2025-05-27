import { ReactNode } from "react";
import FormSteps from "./FormSteps";

import { FAQItem, FormStep } from "@/types";
import { FAQSection } from "../FaqSection";

interface FormLayoutProps {
  children: ReactNode;
  currentStep: number;
  steps: FormStep[];
  faqs: FAQItem[];
}

const FormLayout = ({
  children,
  currentStep,
  steps,
  faqs,
}: FormLayoutProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_300px] lg:gap-6">
      <div className="bg-gray-100 rounded-lg lg:p-4 lg:sticky lg:top-6 h-fit">
        <FormSteps currentStep={currentStep} steps={steps} />
      </div>

      {/* Middle section - scrollable form content */}
      <div className="overflow-y-auto">{children}</div>

      {/* Right sidebar with FAQs - sticky */}
      <div className="bg-gray-100 rounded-lg p-4 lg:sticky lg:top-6 h-fit">
        <div className="sticky top-20">
          <FAQSection faqs={faqs} />
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
