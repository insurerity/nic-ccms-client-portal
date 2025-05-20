import { Search } from "lucide-react";
import React from "react";
import InsuranceProvidersList from "./components/insurance-providers";
import MainContent from "./components/MainContent";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        List of Updated Insurance Providers
      </h1>
      <p className="text-center mt-2 mb-8 text-gray-600 max-w-3xl mx-auto">
        Below are various Insurance Providers under the NIC that have undergone
        significant changes such as mergers, rebranding, or regulatory
        interventions.
      </p>

      <div className="relative max-w-xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search for an insurance provider"
          className="w-full py-3 px-4 bg-gray-100 rounded-full pr-12 focus:outline-none"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#59285F]">
          <Search className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 lg:w-1/4">
          <div className="sticky top-4">
            <InsuranceProvidersList />
          </div>
        </div>
        <div className="md:w-2/3 lg:w-3/4">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default page;
