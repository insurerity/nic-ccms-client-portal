"use client";

import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import ActionButton from "../ActionButton";
import { TFormStep } from "@/types";
import {
  useComplaintStore,
  useNewComplaintIdStore,
  useSharedStore,
} from "@/hooks/use-complaint-store";
import { camelCaseToTitle, toCamelCase } from "@/lib/utils";
import { InfoDisplay } from "../InfoDisplay";
import {
  useAddTicketMutation,
  useErrorHandlerMutation,
} from "@/graphql/generated";
import { useUploadSupportingDocuments } from "@/hooks/use-upload-documents";
import { transformComplaintData } from "@/lib/upload";
import { showCustomToast } from "@/lib/errors";
import { useEffect } from "react";
import { logInfo } from "@/lib/logger";
import { usePathname } from "next/navigation";
import { transformToFileMap } from "@/lib/file";

const uploadLoaderIDS = {
  documents: "SD-LOADER",
  complaints: "CS-LOADER",
};

interface ReviewSubmitFormProps {
  onPrevStep: () => void;
  onComplete: () => void;
  formSteps: TFormStep[];
}

const ReviewSubmitForm = ({
  onPrevStep,
  onComplete,
  formSteps,
}: ReviewSubmitFormProps) => {
  const { data, setData, reset: resetComplaintData } = useComplaintStore();
  const { reset: resetSharedStore, caseType } = useSharedStore();
  const { setId } = useNewComplaintIdStore();
  const [createComplaint, { loading, reset }] = useAddTicketMutation();
  const [errorHandler] = useErrorHandlerMutation();
  const pathName = usePathname();
  const isMFUND = pathName.includes("compensation");

  const { uploadSupportingDocuments, uploadLoading } =
    useUploadSupportingDocuments();

  const handleSubmit = async () => {
    try {
      toast.loading("Uploading supporting documents, please wait...", {
        id: uploadLoaderIDS.documents,
      });
      const documents = await uploadSupportingDocuments(
        isMFUND
          ? transformToFileMap(data.supportingDocuments)
          : data.supportingDocuments
      );

      if (documents.length === 0) {
        toast.dismiss(uploadLoaderIDS.documents);
        toast.error("Failed to upload complaint documents");
      }
      const payload = transformComplaintData(data);

      if (documents && documents.length > 0) {
        toast.dismiss(uploadLoaderIDS.documents);
        payload["ComplaintDocuments"] = {
          data: documents,
        };
      }
      toast.loading("Submitting your complaint, please wait...", {
        id: uploadLoaderIDS.complaints,
      });

      createComplaint({
        variables: {
          object: payload,
        },
        onCompleted(data) {
          resetComplaintData();
          resetSharedStore();
          toast.dismiss(uploadLoaderIDS.complaints);
          toast.dismiss(uploadLoaderIDS.documents);
          setId(data.insert_nic_ccms_Complaint_one?.id as string);
          onComplete();
        },
        onError(error) {
          toast.dismiss(uploadLoaderIDS.complaints);
          toast.dismiss(uploadLoaderIDS.documents);

          errorHandler({
            variables: {
              error: {
                error: error,
                APPLICATION: "CLIENT",
              },
            },
          });
          showCustomToast({
            title: "Submission Failed",
            type: "error",
            description:
              "We couldn't process your complaint. Please try again later.",
          });
        },
      });
    } catch (error) {
      toast.dismiss(uploadLoaderIDS.complaints);
      toast.dismiss(uploadLoaderIDS.documents);
    }
  };

  const filteredSteps = formSteps?.filter(
    (v) =>
      v.identifier !== "review-submit" &&
      v.identifier !== "supporting-documents"
  );

  useEffect(() => {
    logInfo("Page View", {
      component: "ReviewSubmitForm",
      path: pathName,
    });
  }, [pathName]);

  return (
    <div className="bg-white lg:rounded-[28px] shadow-sm p-6">
      <div className="bg-primaryLight text-white p-6 rounded-xl mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Review & Submit</h2>
          <p className="text-sm mt-2">
            Check the details before submitting your complaint.
          </p>
        </div>
        <ActionButton
          onClick={handleSubmit}
          text="Submit"
          className="bg-white text-primaryLight font-medium py-2 px-4 rounded-full hover:bg-white/90"
          actionFrom="Review Submit Form"
        />
      </div>

      <div className="space-y-6">
        {filteredSteps?.map((v) => {
          console.log("v", v);
          return (
            <div key={v.identifier}>
              <h3 className="text-lg font-medium text-primaryLight">
                {v.label}
              </h3>

              <div className="mt-2  p-4 rounded-lg">
                <InfoDisplay data={data[toCamelCase(v.identifier)]} />
              </div>
            </div>
          );
        })}

        <div>
          <h3 className="text-lg font-medium text-primaryLight">
            Supporting Documents
          </h3>
          <div
            className={`mt-2 p-4 rounded-lg grid grid-cols-1  ${
              caseType ? "md:grid-cols-1" : "md:grid-cols-2"
            } gap-4`}
          >
            {Object.entries(data.supportingDocuments)?.map(([key, value]) => {
              if (!value) return;

              if (key === "deathDoc2" || key === "injuryDoc2") {
                return (
                  <div key={key} className="space-y-1">
                    <p className="text-sm text-gray-500">
                      Additional Documents
                    </p>
                    {(value as File[])?.map((v, idx) => {
                      return (
                        <p
                          key={idx}
                          className="text-xs bg-customCard p-4 rounded-[5px] font-medium text-primaryLight flex gap-x-2 items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                          </svg>
                          {/* @ts-ignore */}
                          {v?.name}
                        </p>
                      );
                    })}
                  </div>
                );
              }

              return (
                <div key={key} className="space-y-1">
                  <p className="text-sm text-gray-500">
                    {camelCaseToTitle(key)}
                  </p>
                  <p className="text-xs bg-customCard p-4 rounded-[5px] font-medium text-primaryLight flex gap-x-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                    {/* @ts-ignore */}
                    {value?.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onPrevStep}
            className="rounded-full"
          >
            Back
          </Button>
          <ActionButton
            text="Submit Complaint"
            onClick={handleSubmit}
            className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
            actionFrom="Review Submit Form"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmitForm;
