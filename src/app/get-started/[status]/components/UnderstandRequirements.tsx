"use client";

import ActionButton from "@/components/common/ActionButton";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
const UnderstandRequirements = ({ continueText }: { continueText: string }) => {
  const [understood, setUnderstood] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  console.log("pathanem", pathName);
  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <label
          htmlFor="understand-requirements"
          className="font-semibold text-[#171717]"
        >
          I understand and meet all the requirements for filing a complaint or
          petition with the NIC
        </label>
        <div>
          <Input
            type="checkbox"
            id="understand-requirements"
            checked={understood}
            onChange={() => setUnderstood(!understood)}
            className="text-[#59285F] focus:ring-[#59285F] focus:bg-[#59285F]"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <ActionButton
          goTo={`${pathName}/caution`}
          onClick={() => router.push(`${pathName}/caution`)}
          className={`px-8 py-3 rounded-full text-white font-medium transition-colors ${
            understood
              ? "bg-[#59285F] hover:bg-[#59285F]/90"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!understood}
          text={continueText}
        />
      </div>
    </div>
  );
};

export default UnderstandRequirements;
