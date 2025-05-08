import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const SubmissionSuccess = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-10 text-center">
      <div className="flex flex-col items-center">
        <div className="bg-green-100 p-3 rounded-full">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>

        <h2 className="text-2xl font-bold mt-6">Submission Successful</h2>

        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          Thank you for submitting your complaint. Your reference number is:
        </p>

        <div className="bg-gray-100 px-6 py-3 rounded-lg text-lg font-medium text-gray-800 mt-4">
          CMP-2023-45678
        </div>

        <p className="text-sm text-gray-500 mt-6">
          A confirmation has been sent to your email. We will review your
          complaint and contact you within 3-5 business days.
        </p>

        <div className="flex gap-4 mt-8">
          <Button>Download Receipt</Button>
          <Button variant="outline">Return to Home</Button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
