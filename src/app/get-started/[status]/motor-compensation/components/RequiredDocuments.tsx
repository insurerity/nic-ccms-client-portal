"use client";

import type React from "react";

import { useState } from "react";
import { FileText, AlertCircle, ImageIcon } from "lucide-react";
import { MOTOR_COMP_REQUIRED_DOCUMENTS } from "@/lib/state";
import { capitalize } from "@/lib/utils";
import { Input } from "@/components/ui/input";

type CaseType = "death" | "injury" | string;

const pictureItems = [
  "Two (2) passport sized pictures endorsed by the Medical Doctor",
  "Pictures of the injury with the victim’s face fully showing",
  "Two (2) passport sized pictures of the Administrator(s)",
];

interface Requirement {
  id: string;
  text: string;
  icon: React.ReactNode;
}

interface RequirementCheckProps {
  caseType: CaseType;
  requirements?: Requirement[];
  title?: string;
  description?: string;
  onComplete?: () => void;
}

export function RequiredDocuments({
  caseType,
  requirements: customRequirements,
  title,
  description,
  onComplete,
}: RequirementCheckProps) {
  const getDefaultRequirements = (type: CaseType): Requirement[] => {
    if (type === "death") {
      const deathItems = MOTOR_COMP_REQUIRED_DOCUMENTS["death"];

      return deathItems?.map((v) => {
        return {
          id: v,
          text: v,
          icon: pictureItems.includes(v) ? (
            <ImageIcon className="w-5 h-5 text-[#5D2D79]" />
          ) : (
            <FileText className="w-5 h-5 text-[#5D2D79]" />
          ),
        };
      });
    }

    const injuryItems = MOTOR_COMP_REQUIRED_DOCUMENTS["injury"];
    return injuryItems?.map((v) => {
      return {
        id: v,
        text: v,
        icon: pictureItems.includes(v) ? (
          <ImageIcon className="w-5 h-5 text-[#5D2D79]" />
        ) : (
          <FileText className="w-5 h-5 text-[#5D2D79]" />
        ),
      };
    });
  };

  // Use custom requirements if provided, otherwise use defaults
  const requirements = customRequirements || getDefaultRequirements(caseType);

  const uniqueRequirements = Array.from(
    new Map(requirements?.map((item) => [item.id, item])).values()
  );

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(
    uniqueRequirements.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  console.log("checked items", checkedItems);

  const allChecked = Object.values(checkedItems).every(
    (value) => value === true
  );

  console.log("all checked", allChecked);

  const handleContinue = () => {
    if (allChecked && onComplete) {
      onComplete();
    }
  };

  return (
    <div className=" p-6 max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">
          {title || `Requirement Check: ${capitalize(caseType)} Case`}
        </h2>
        <p className="text-gray-600">
          {description ||
            `Below is the list of required documents for ${capitalize(
              caseType
            )} Case Application. Confirm and select the availability of all these documents to continue.`}
        </p>
        <p className="text-gray-600 mt-1">All documents are required</p>
      </div>

      <div className="space-y-4 mt-8">
        {requirements.map((requirement) => (
          <div key={requirement.id} className="flex items-start gap-4">
            <div className="mt-1">{requirement.icon}</div>
            <div className="flex-1">{requirement.text}</div>
            <div className="flex items-center justify-center">
              <Input
                type="checkbox"
                id={requirement.id}
                checked={checkedItems[requirement.id]}
                onChange={() => handleCheckboxChange(requirement.id)}
                className="h-5 w-5 rounded border-gray-300 text-[#5D2D79] focus:ring-[#5D2D79]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* {!allChecked && (
        <div className="mt-6 flex items-center gap-2 text-amber-600 bg-amber-50 p-3 rounded-md">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">
            Please confirm all required documents before proceeding.
          </p>
        </div>
      )} */}

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleContinue}
          disabled={!allChecked}
          className={`px-8 py-3 rounded-full text-white font-medium ${
            allChecked
              ? "bg-[#5D2D79] hover:bg-[#4A2461]"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
