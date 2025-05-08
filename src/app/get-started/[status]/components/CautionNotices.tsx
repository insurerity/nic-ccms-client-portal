"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import BigBellIcon from "@/components/icons/BigBellIcon";
import { usePathname, useRouter } from "next/navigation";

export default function CautionNotice() {
  const router = useRouter();
  const pathName = usePathname();
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  const handleNoClick = () => {
    setShowSecondScreen(true);
  };

  const handleYesClick = () => {
    router.push(`${pathName}/petitioner`);
  };

  const handleContinueClick = () => {
    router.push(`${pathName}/petitioner`);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
        <AnimatePresence initial={false}>
          {!showSecondScreen ? (
            <motion.div
              key="first-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-lg shadow-md p-8 flex flex-col items-center"
            >
              {/* Bell Icon */}
              <BigBellIcon />

              {/* Heading */}
              <h2 className="text-[32px] font text-center mb-6">Caution!</h2>

              {/* Main Text */}
              <p className="text-[20px] leading-[28px] text-center mb-4 text-gray-900">
                Have you already informed your insurance company about the issue
                you want to report?
              </p>

              {/* Subtext */}
              <p className="text-center text-gray-600 mb-8 text-[16px] leading-[24px] max-w-[400px]">
                Please note that you must notify the insurance company involved
                before submitting your complaint to the NIC.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                  onClick={handleNoClick}
                  className={cn(
                    "bg-[#5D2D79] hover:bg-[#4A2461] text-white rounded-full py-3 px-6",
                    "text-base font-medium w-full transition-colors"
                  )}
                >
                  No, I haven&apos;t yet.
                </button>

                <button
                  onClick={handleYesClick}
                  className={cn(
                    "border border-[#5D2D79] text-[#5D2D79] hover:bg-[#F3EDF7]",
                    "rounded-full py-3 px-6 text-base font-medium w-full transition-colors"
                  )}
                >
                  Yes, I have notified them.
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="second-screen"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="rounded-lg space-y-[48px] shadow-md p-8 flex flex-col items-center"
            >
              {/* Bell Icon */}
              <BigBellIcon />

              {/* Main Text */}
              <p className="text-[20px] leading-[28px] text-center font-semibold">
                Please contact your insurance company first and allow them to
                address your issue. You can return here if you do not receive a
                satisfactory response.
              </p>

              {/* Button */}
              <button
                onClick={handleContinueClick}
                className={cn(
                  "bg-[#5D2D79] hover:bg-[#4A2461] text-white rounded-full py-3 px-6",
                  "text-base font-medium w-full max-w-md transition-colors"
                )}
              >
                I&apos;ve contacted them now. Let&apos;s continue.
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
