"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

interface ReviewSubmitFormProps {
  onPrevStep: () => void;
  onComplete: () => void;
}

const ReviewSubmitForm = ({
  onPrevStep,
  onComplete,
}: ReviewSubmitFormProps) => {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("You must agree to the terms and conditions");
      return;
    }

    toast.success("Form submitted successfully!");
    onComplete();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="bg-purple-800 text-white p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold">Review & Submit</h2>
        <p className="text-sm mt-2">
          Please review your information before submitting.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Victim's Profile</h3>
          <div className="mt-2 bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p>Andrew Doe</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>doe@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p>0200000000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Region</p>
                <p>Greater Accra</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Complaint Details</h3>
          <div className="mt-2 bg-gray-50 p-4 rounded-lg">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Complaint Type</p>
                <p>Identity Theft</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Complaint Title</p>
                <p>My identity was stolen online</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date of Incident</p>
                <p>2023-04-15</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Complaint Description</p>
                <p className="text-sm">
                  Someone created social media accounts in my name and is using
                  them to scam people. I noticed this last week when friends
                  started contacting me about messages they received.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Supporting Documents</h3>
          <div className="mt-2 bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2">
              <p>2 files uploaded:</p>
              <ul className="list-disc pl-5 text-sm">
                <li>screenshot1.png</li>
                <li>evidence.pdf</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
            />
            <div className="space-y-1 leading-none">
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Declaration
              </label>
              <p className="text-xs text-gray-500">
                I confirm that the information provided is true and accurate to
                the best of my knowledge. I understand that providing false
                information may result in my complaint being rejected and
                possible legal consequences.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button type="button" variant="outline" onClick={onPrevStep}>
            Back
          </Button>
          <Button type="submit" onClick={handleSubmit} disabled={!agreed}>
            Submit Complaint
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmitForm;
