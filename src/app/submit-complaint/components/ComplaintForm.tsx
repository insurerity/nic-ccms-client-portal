"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  id: number;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
};

type FAQ = {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
};

export default function ComplaintForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, title: "Victim's Profile", isCompleted: false, isActive: true },
    { id: 2, title: "Complaint Details", isCompleted: false, isActive: false },
    {
      id: 3,
      title: "Supporting Documents",
      isCompleted: false,
      isActive: false,
    },
    { id: 4, title: "Review & Submit", isCompleted: false, isActive: false },
  ]);

  const [victimFaqs, setVictimFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: "What is a digital address?",
      answer: "",
      isOpen: false,
    },
    {
      id: 2,
      question: "Where can I find my digital address?",
      answer: "",
      isOpen: false,
    },
    {
      id: 3,
      question: "Where can I find my Ghana Card Number?",
      answer: "",
      isOpen: false,
    },
    {
      id: 4,
      question: "Where can I find my Voter ID Number?",
      answer: "",
      isOpen: false,
    },
    {
      id: 5,
      question: "Where can I find my Health Insurance Number?",
      answer: "",
      isOpen: false,
    },
    {
      id: 6,
      question: "Where can I find my Driver's License Number?",
      answer: "",
      isOpen: false,
    },
    {
      id: 7,
      question: "Where can I find my Passport Number?",
      answer: "",
      isOpen: false,
    },
  ]);

  const [complaintFaqs, setComplaintFaqs] = useState<FAQ[]>([
    {
      id: 1,
      question: "How do I find my Policy Number?",
      answer: "",
      isOpen: false,
    },
    { id: 2, question: "What is a Claim Type?", answer: "", isOpen: false },
    {
      id: 3,
      question: "What is an Entity of Concern?",
      answer: "",
      isOpen: false,
    },
    {
      id: 4,
      question:
        "Why can't I find my Insurance Provider in the list of Entities of Concern?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isOpen: true,
    },
    {
      id: 5,
      question: "What is a Nature of Claim?",
      answer: "",
      isOpen: false,
    },
  ]);

  const toggleFaq = (id: number, isVictimFaq: boolean) => {
    if (isVictimFaq) {
      setVictimFaqs(
        victimFaqs.map((faq) => ({
          ...faq,
          isOpen: faq.id === id ? !faq.isOpen : faq.isOpen,
        }))
      );
    } else {
      setComplaintFaqs(
        complaintFaqs.map((faq) => ({
          ...faq,
          isOpen: faq.id === id ? !faq.isOpen : faq.isOpen,
        }))
      );
    }
  };

  const goToNextStep = () => {
    if (currentStep < 4) {
      // Mark current step as completed
      const updatedSteps = steps.map((step) => {
        if (step.id === currentStep) {
          return { ...step, isCompleted: true, isActive: false };
        } else if (step.id === currentStep + 1) {
          return { ...step, isActive: true };
        }
        return step;
      });
      setSteps(updatedSteps);
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      // Mark current step as not active
      const updatedSteps = steps.map((step) => {
        if (step.id === currentStep) {
          return { ...step, isActive: false };
        } else if (step.id === currentStep - 1) {
          return { ...step, isActive: true };
        }
        return step;
      });
      setSteps(updatedSteps);
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-4rem)]">
          {/* Left Sidebar - Steps */}
          <div className="w-full lg:w-1/4 lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center mb-8 last:mb-0">
                  <div
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg",
                      step.isCompleted
                        ? "bg-green-500"
                        : step.isActive
                        ? "bg-[#5D2D79]"
                        : "bg-gray-200 text-gray-500"
                    )}
                  >
                    {step.isCompleted ? <Check className="w-6 h-6" /> : step.id}
                  </div>
                  <div
                    className={cn(
                      "ml-4 font-medium",
                      step.isActive
                        ? "text-[#5D2D79]"
                        : step.isCompleted
                        ? "text-green-500"
                        : "text-gray-500"
                    )}
                  >
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-2/4 flex flex-col">
            {currentStep === 1 && (
              <div className="bg-[#5D2D79] rounded-t-lg p-6 text-white">
                <h1 className="text-2xl font-bold mb-2">
                  Victim&apos;s Profile
                </h1>
                <p>Tell us about the individual affected by the issue.</p>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-[#5D2D79] rounded-t-lg p-6 text-white">
                <h1 className="text-2xl font-bold mb-2">Complaint Details</h1>
                <p>Provide the details of your complaint or petition</p>
              </div>
            )}

            <div className="bg-white rounded-b-lg shadow-sm flex-1 flex flex-col">
              <div className="p-6 overflow-y-auto flex-1">
                <p className="text-gray-700 mb-6">
                  Fields marked with (<span className="text-red-500">*</span>)
                  are required.
                </p>

                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                          placeholder="Andrew"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                          placeholder="O'Hara Aidoo"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                          placeholder="officiallyohara@gmail.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="flex">
                          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-l-md px-3">
                            <img
                              src="https://flagcdn.com/w20/gh.png"
                              alt="Ghana"
                              className="w-5 h-auto mr-1"
                            />
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          </div>
                          <input
                            type="tel"
                            className="flex-1 p-3 bg-gray-50 border border-gray-200 rounded-r-md"
                            placeholder="0200035573"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Residential Address{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                          placeholder="Akosombo, Ghana"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Digital Address{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                          placeholder="GS-000-0000"
                        />
                        <a
                          href="#"
                          className="text-[#5D2D79] text-sm mt-1 inline-block"
                        >
                          Find your digital address here
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Region <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md appearance-none">
                            <option>EASTERN</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Type of ID <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md appearance-none">
                            <option>Ghana Card</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Date of Incident
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                          placeholder="Select a date"
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Policy Number
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Claim Type <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md appearance-none">
                            <option>Select a claim type</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Entity of Concern{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md appearance-none">
                            <option>Select an entity of concern</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                        <a
                          href="#"
                          className="text-[#5D2D79] text-sm mt-1 inline-block"
                        >
                          Can&apos;t find your entity of concern?
                        </a>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          Nature of Claim{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md appearance-none">
                            <option>Select a nature of claim</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Description Of Complaint{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md min-h-[120px]"
                        placeholder="Tell us more about the issue or situation..."
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between p-6 border-t border-gray-100">
                <button
                  onClick={goToPreviousStep}
                  className={cn(
                    "flex items-center justify-center px-4 py-2 rounded-md",
                    currentStep === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </button>
                <button
                  onClick={goToNextStep}
                  className="flex items-center justify-center px-4 py-2 bg-[#5D2D79] text-white rounded-md hover:bg-[#4a2461]"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - FAQs */}
          <div className="w-full lg:w-1/4 lg:sticky lg:top-8 lg:self-start">
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h2 className="text-[#5D2D79] text-xl font-bold mb-4">FAQs</h2>
            </div>

            <div className="space-y-4 max-h-[calc(100vh-12rem)] overflow-y-auto">
              {currentStep === 1 &&
                victimFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      className="flex items-center justify-between w-full p-4 text-left"
                      onClick={() => toggleFaq(faq.id, true)}
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#5D2D79] text-white text-xs mr-2">
                          {faq.id}
                        </div>
                        <span className="font-medium">{faq.question}</span>
                      </div>
                      {faq.isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {faq.isOpen && faq.answer && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}

              {currentStep === 2 &&
                complaintFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      className="flex items-center justify-between w-full p-4 text-left"
                      onClick={() => toggleFaq(faq.id, false)}
                    >
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#5D2D79] text-white text-xs mr-2">
                          {faq.id}
                        </div>
                        <span className="font-medium">{faq.question}</span>
                      </div>
                      {faq.isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {faq.isOpen && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-700">{faq.answer}</p>
                        {faq.id === 4 && (
                          <div className="mt-4">
                            <a href="#" className="text-[#5D2D79] font-medium">
                              Click here
                            </a>{" "}
                            <span className="text-gray-700">
                              to view the various Insurance Providers who have
                              special conditions or updates attached to them.
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
