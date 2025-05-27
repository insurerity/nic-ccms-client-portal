"use client";

import React, { ReactElement, SVGProps } from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import PetitionerPersonIcon from "@/components/icons/PetitionerPersonIcon";
import PetitionerOnBehalfIcon from "@/components/icons/PetitionerOnBehalfIcon";
import OrganisationTypeIcon from "@/components/icons/OrganisationTypeIcon";
import IndividualTypeIcon from "@/components/icons/IndividualTypeIcon";
import { useRouter } from "next/navigation";
import { useSharedStore } from "@/hooks/use-complaint-store";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ComplaintForm() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const router = useRouter();
  const { setComplainantType, setPetitionerType } = useSharedStore();


  const isMobile = useIsMobile();

  const questions = [
    {
      id: 1,
      title: "Who are you submitting this complaint for?",
      subtitle: "Please select the option that best describes your role.",
      options: [
        {
          id: "self",
          title: "I'm the person affected",
          description:
            "You are the one directly involved in the issue or accident.",
          icon: <PetitionerPersonIcon width={isMobile ? "120" : "200"} height={isMobile ? "104" :"184" }/>,
        },
        {
          id: "behalf",
          title: "I'm filing on someone's behalf",
          description:
            "You are a legal representative or relative submitting this for another person.",
          icon: <PetitionerOnBehalfIcon  width={isMobile ? "100" : "184"} height={isMobile ? "95" :"174" }/>,
        },
      ],
    },
    {
      id: 2,
      title: "Are you an individual or an organization?",
      subtitle:
        "Choose whether the affected party is an individual person or a company.",
      options: [
        {
          id: "individual",
          title: "Individual",
          description:
            "For complaints where the victim is a single person or private individual.",
          icon: <IndividualTypeIcon width={isMobile ? "88" : "128"} height={isMobile ? "126" :"156" }/>,
        },
        {
          id: "organization",
          title: "Organization",
          description:
            "For complaints where the victim a business or registered organization.",
          icon: <OrganisationTypeIcon width={isMobile ? "88" : "180"} height={isMobile ? "126" :"162" } />,
        },
      ],
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);

    if (currentQuestion === 1) {
      setComplainantType(optionId);
    } else if (currentQuestion === 2) {
      setPetitionerType(optionId);
    }
  };

  const handleContinue = () => {
    if (currentQuestion === 2) {
      const gotoUrl =
        selectedOption === "individual"
          ? `/complaints/petition/individual`
          : `/complaints/petition/business`;
      return router.push(gotoUrl);
    }
    if (selectedOption) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const currentQuestionData = questions.find((q) => q.id === currentQuestion);

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
                <div className="mb-8">
                  <div className="text-gray-500 text-sm mb-2">
                    Question {currentQuestion} of {questions.length}
                  </div>
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
                          : "border-gray-200 hover:border-gray-300 bg-gray-50"
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
