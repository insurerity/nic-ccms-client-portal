"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { RequiredDocuments } from "./components/RequiredDocuments";
import MotorCompensationDeathIcon from "@/components/icons/MotorCompensationDeathIcon";
import MotorCompensationInjuryIcon from "@/components/icons/MotorCompensationInjuryIcon";
import { useSharedStore } from "@/hooks/use-complaint-store";
import { useIsMobile } from "@/hooks/use-mobile";



export default function MotorCompensation() {
  const pathName = usePathname();
  const { setCaseType } = useSharedStore();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();
  const [showRequiredDocuments, setShowRequiredDocuments] = useState(false);
  const isMobile = useIsMobile();

  const questions = [
  {
    id: 1,
    title: "What type of case are you applying for?",
    subtitle:
      "Select the option that best describes the outcome of the motor accident.",
    options: [
      {
        id: "death",
        title: "Death",
        description:
          "For cases where the victim passed away as a result of the accident.",
        icon: <MotorCompensationDeathIcon width={isMobile ? "120" : "150"} height={isMobile ? "104" :"156"} />,
      },
      {
        id: "injury",
        title: "Injury",
        description:
          "For cases where the victim was injured but survived the accident.",
        icon: <MotorCompensationInjuryIcon width={isMobile ? "120" : "142"} height={isMobile ? "104" :"176"}   />,
      },
    ],
  },
];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    setShowRequiredDocuments(true);
  };

  const currentQuestionData = questions.find((q) => q.id === currentQuestion);

  if (showRequiredDocuments) {
    return (
      <RequiredDocuments
        caseType={selectedOption as string}
        onComplete={() => {
          setCaseType(selectedOption as string);
          return router.push(`${pathName}/petitioner`);
        }}
      />
    );
  }

  return (
    <div className="flex justify-center items-center lg:p-4">
      <div className="w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-0"
          >
            {currentQuestionData && (
              <>
                <div className="mb-4">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentQuestionData.title}
                  </h1>
                  <p className="text-gray-600">
                    {currentQuestionData.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {currentQuestionData?.options?.map((option) => (
                    <div
                      key={option.id}
                      className={cn(
                        "border rounded-2xl p-6 cursor-pointer transition-all flex flex-row lg:flex-col items-center lg:items-start gap-2",
                        selectedOption === option.id
                          ? "border-[#5D2D79] border-2 bg-white"
                          : "border-gray-200 hover:bg-primaryLight/10 hover:border-[#5D2D79] hover:border-1  bg-customCard"
                      )}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <div className="flex flex-col items-center text-center">
                        {option.icon}
                      </div>
                      <div>
                        
                      <h3 className="text-sm lg:text-xl font-semibold mb-2">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={handleContinue}
                    disabled={!selectedOption}
                    className={cn(
                      "px-8 py-3 rounded-full text-white font-medium transition-colors",
                      selectedOption
                        ? "bg-[#5D2D79] hover:bg-[#4A2461]"
                        : "bg-gray-300 cursor-not-allowed"
                    )}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
