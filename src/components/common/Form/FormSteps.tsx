"use client";

import { cn } from "@/lib/utils";
import type { FormStep } from "@/types";
import { CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface FormStepsProps {
  currentStep: number;
  steps: FormStep[];
}

const FormSteps = ({ currentStep, steps }: FormStepsProps) => {
  // Track which steps should be animated
  const [animatingSteps, setAnimatingSteps] = useState<number[]>([]);

  // When currentStep changes, trigger animation
  useEffect(() => {
    // Add the current step to animating steps
    setAnimatingSteps((prev) => [...prev, currentStep]);

    // Remove the animation class after animation completes
    const timer = setTimeout(() => {
      setAnimatingSteps((prev) => prev.filter((step) => step !== currentStep));
    }, 600); // Animation duration + a little buffer

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="bg-white rounded-[28px] shadow-sm p-6">
      <style jsx global>{`
        @keyframes stepActivate {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
          100% {
            transform: scale(1);
          }
        }

        .step-animate {
          animation: stepActivate 0.5s ease-in-out;
        }
      `}</style>

      <nav aria-label="Progress">
        <ol role="list" className="space-y-6">
          {steps?.map((step) => (
            <li
              key={step.id}
              className={cn(
                "transition-all duration-300 ease-in-out py-4 px-2 rounded-[12px]",
                currentStep === step.id ? "bg-customCard" : "bg-none",
                animatingSteps.includes(step.id) && "step-animate"
              )}
            >
              <div className="flex items-center">
                <div
                  className={cn(
                    "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                    currentStep === step.id
                      ? "bg-primaryLight text-white"
                      : step.id < currentStep
                      ? "bg-green-500 text-white"
                      : "bg-[#F5F5F5] text-gray-600"
                  )}
                >
                  {step.id < currentStep ? (
                    <CheckIcon className="h-8 w-8" />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                <div className="ml-4">
                  <p
                    className={cn(
                      "text-sm font-medium transition-colors duration-300",
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
