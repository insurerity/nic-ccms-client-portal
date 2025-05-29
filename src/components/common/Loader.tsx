"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const insuranceMessages = [
  "Preparing your insurance form...",
  "Establishing a secure connection...",
  "Fetching policy options for you...",
  "Verifying access credentials...",
  "Ensuring data protection compliance...",
  "Loading form sections...",
  "Getting things ready for your application...",
  "Checking eligibility requirements...",
  "Preloading insurer directory...",
  "Optimizing your insurance experience...",
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Progress update logic
    const timer = setTimeout(() => {
      setProgress(100);
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const increment = Math.floor(Math.random() * 10) + 5;
        return Math.min(prevProgress + increment, 99);
      });
    }, 200);

    // Message change logic
    const messageTimer = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % insuranceMessages.length);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearInterval(messageTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white md:bg-[url(/images/background_lady.png)] md:bg-cover">
      <div className="w-fit bg-white p-20 rounded-2xl items-center flex flex-col">
      <div className="mb-8 text-center items-center flex flex-col space-y-4">
         <img src={"/images/nic-logo.png"} alt="NIC Logo" />

        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
          National Insurance Commission
        </h1>
        <p className="text-gray-500">{insuranceMessages[messageIndex]}</p>
      </div>

      <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>{progress}%</span>
      </div>
    </div>
    </div>
  );
}
