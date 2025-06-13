"use client";

import { Button } from "@/components/ui/button";
import { useGetTicketNumberQuery } from "@/graphql/generated";
import { useNewComplaintIdStore } from "@/hooks/use-complaint-store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { logInfo } from "@/lib/logger";

const SubmissionSuccess = () => {
  const router = useRouter();
  const { id } = useNewComplaintIdStore();
  const [initialLoading, setInitialLoading] = useState(true);
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const pathName = usePathname();

  // Only start the query after the initial delay
  const { data, loading, error } = useGetTicketNumberQuery({
    variables: {
      id,
    },
    skip: !shouldFetchData, // Skip the query until shouldFetchData is true
  });

  // Set up the initial delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
      setShouldFetchData(true);
    }, 5000); // 5 second delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    logInfo("Page View", {
      component: "SubmissionSuccess",
      path: pathName,
    });
  }, [pathName]);

  const onCheckStatus = () => {
    router.replace(
      `/complaints/check-status?ticketNumber=${data?.nic_ccms_Complaint_by_pk?.ticketNumber}`
    );
    logInfo("Button Click", {
      buttonName: "Check Complaint - Redirect After Submit",
    });
  };

  // Show loading state if either initialLoading is true or the query is loading
  const isLoading = initialLoading || loading;

  return (
    <div className="min-h-[500px] bg-white flex items-center justify-center p-4 lg:rounded-[28px] shadow-sm">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24">
            {isLoading ? (
              <div className="animate-pulse flex items-center justify-center w-full h-full">
                <Loader2 className="h-16 w-16 text-[#59285F] animate-spin" />
              </div>
            ) : (
              <svg
                width="100"
                height="100"
                viewBox="0 0 153 152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M90.826 22.7998C84.0746 16.0358 80.6926 12.6665 76.5 12.6665C72.3073 12.6665 68.9253 16.0422 62.174 22.7998C58.1206 26.8532 54.1053 28.7278 48.3293 28.7278C43.288 28.7278 36.106 27.7525 32.1666 31.7235C28.2526 35.6692 29.228 42.8195 29.228 47.8292C29.228 53.6052 27.347 57.6205 23.2936 61.6738C16.5423 68.4252 13.1666 71.8072 13.1666 75.9998C13.1666 80.1925 16.5423 83.5745 23.3 90.3258C27.8346 94.8668 29.228 97.7992 29.228 104.171C29.228 109.212 28.2526 116.394 32.2236 120.333C36.1693 124.241 43.3196 123.272 48.3293 123.272C54.479 123.272 57.4493 124.475 61.8383 128.864C65.575 132.601 70.5846 139.333 76.5 139.333C82.4153 139.333 87.425 132.601 91.1616 128.864C95.557 124.475 98.521 123.272 104.671 123.272C109.68 123.272 116.831 124.247 120.776 120.333M120.776 120.333C124.747 116.394 123.772 109.212 123.772 104.171C123.772 97.7992 125.165 94.8668 129.7 90.3258C136.458 83.5745 139.833 80.1925 139.833 75.9998C139.833 71.8072 136.458 68.4252 129.706 61.6738M120.776 120.333H120.833"
                  stroke="#59285F"
                  strokeWidth="9.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M51.1667 65.2838C51.1667 65.2838 65.4167 63.3332 76.5 88.6665C76.5 88.6665 108.54 25.3332 139.833 12.6665"
                  stroke="#59285F"
                  strokeWidth="9.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>

        <h1 className="text-center text-2xl font-bold mb-4">
          {isLoading ? "Processing Complaint..." : "Complaint Submitted"}
        </h1>

        {isLoading ? (
          <p className="text-center mb-8">
            Please wait while we process your complaint and generate your ticket
            number. This may take a few moments.
          </p>
        ) : data?.nic_ccms_Complaint_by_pk?.ticketNumber ? (
          <p className="text-center mb-8">
            Your complaint with ticket number{" "}
            <span className="text-[#59285F] font-medium">
              {data.nic_ccms_Complaint_by_pk.ticketNumber}
            </span>{" "}
            has been successfully submitted. You should expect notification in
            your email and text messages with the next way forward.
          </p>
        ) : (
          <p className="text-center mb-8 text-red-500">
            We couldn't retrieve your ticket number at this time. You can still
            check the status of your complaint using the button below.
          </p>
        )}

        <div className="flex justify-center">
          <Button
            onClick={onCheckStatus}
            disabled={isLoading}
            className={`${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#59285F] hover:bg-[#4A2159]"
            } text-white font-medium py-2 px-6 rounded-full flex items-center gap-2`}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              "Check Complaint Status"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
