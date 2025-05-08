import { cn } from "@/lib/utils";
import { FormStep } from "@/types";

interface FormStepsProps {
  currentStep: number;
  steps: FormStep[];
}

const FormSteps = ({ currentStep, steps }: FormStepsProps) => {
  return (
    <div className="bg-white rounded-[28px] shadow-sm p-6">
      <nav aria-label="Progress">
        <ol role="list" className="space-y-6">
          {steps.map((step) => (
            <li key={step.id}>
              <div className="flex items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full",
                    currentStep === step.id
                      ? "bg-primaryLight text-white"
                      : "bg-gray-200 text-gray-600"
                  )}
                >
                  <span>{step.id}</span>
                </div>
                <div className="ml-4">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      currentStep === step.id
                        ? "text-primaryLight"
                        : "text-gray-900"
                    )}
                  >
                    {step.label}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default FormSteps;
