"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getLatestStatus, getLatestStatusCreatedAt } from "@/lib/utils";
import { ComplaintStatusDescriptions, EComplaintStatuses } from "@/lib/state";
import StatusGuide from "./StatusGuide";
import { useRouter, useSearchParams } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";
import { useTicketStatus } from "@/hooks/useApi";
import ReCAPTCHA from "react-google-recaptcha";


interface TicketResponse {
  statuses: {status:string, created_at:string}[]
  ticketNumber: string
}

const ticketSchema = z.object({
  ticketNumber: z
    .string()
    .min(1, { message: "Ticket number is required to check status" }),
});

export default function ComplaintStatusTracker() {
  const { submitTicketStatus: getStatus, error, loading: isLoading } = useTicketStatus();
  const [data, setData] = useState<TicketResponse | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const searchParams = useSearchParams();
  const ticketNumberParam = searchParams?.get("ticketNumber");


  const router = useRouter();
  const isMobile = useIsMobile();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      ticketNumber: "",
    },
  });

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleCheckStatus = async () => {
    if(!recaptchaToken) {
     return toast.error('Please complete the caPTCHA', {
        style: {
          backgroundColor: "#59285F",
          color: "white",
        },
      })
    }
    const ticketNumber = getValues("ticketNumber");

    if (!ticketNumber) {
      toast.error("Please enter a ticket number", {
        style: {
          backgroundColor: "#59285F",
          color: "white",
        },
      });
      return;
    }

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA", {
        style: {
          backgroundColor: "#59285F",
          color: "white",
        },
      });
      return;
    }

    try {
      const result: TicketResponse = await getStatus(ticketNumber, recaptchaToken);
      console.log('result for checking status', result)
      setData(result);

      if (result?.statuses?.length === 0) {
        toast.error("Invalid Ticket Number", {
          style: {
            backgroundColor: "#59285F",
            color: "white",
          },
        });
        recaptchaRef.current?.reset();
        setRecaptchaToken(null);
        return;
      }

      toast.success("Status retrieved successfully", {
        style: {
          backgroundColor: "#059669",
          color: "white",
        },
      });
    } catch (err) {
      toast.error("Failed to retrieve status", {
        style: {
          backgroundColor: "#DC2626",
          color: "white",
        },
      });
    } finally {
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  };

  useEffect(() => {
    if (ticketNumberParam) {
      setValue("ticketNumber", ticketNumberParam);
    }
  }, [ticketNumberParam, setValue]);

  const handleCancel = () => {
    return router.push("/get-started");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left side - Status Guide */}
      {!isMobile && (
        <div className="w-full lg:w-2/5">
          {
            <StatusGuide
              activeStatus={
                data ? getLatestStatus(data?.statuses) : undefined
              }
              created_at={
                data
                  ? getLatestStatusCreatedAt(data?.statuses)
                  : undefined
              }
            />
          }
        </div>
      )}

      {/* Right side - Status Checker */}
      <div className="w-full lg:w-3/5 ">
        <div className="bg-white lg:rounded-[28px] overflow-hidden shadow-sm border border-gray-100 lg:p-8 px-2 py-5 ">
          <div className="bg-primaryLight rounded-[12px] text-white p-3 lg:p-6 lg:text-center text-start">
            <p className="">
              Provide the <span className="font-bold">ticket number</span> to
              check <br /> the status of your complaint/petition
            </p>
          </div>

          <div className="lg:p-6 p-2">
            <div className="mb-6">
              <label
                htmlFor="ticketNumber"
                className="block mb-2 text-gray-700"
              >
                Ticket Number <span className="text-red-500">*</span>
              </label>
              <Input
                id="ticketNumber"
                {...register("ticketNumber")}
                className="w-full"
                placeholder="Ticket Number: NIC/XXX/YYYYYY/ZZZZ"
              />
              {errors.ticketNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.ticketNumber.message}
                </p>
              )}
            </div>

            {data && (
              <p className="mb-4 text-[#171717]  text-sm">
                {
                  ComplaintStatusDescriptions[
                    getLatestStatus(data?.statuses!)
                  ]
                }
              </p>
            )}

            <div className="mb-4 flex items-center justify-between">
              <label className="block mb-2 text-gray-700">
                Complaint Status:
              </label>
              {data && (
                <div
                  className={`px-4 py-2 font-bold ${
                    getLatestStatus(data?.statuses) ===
                    EComplaintStatuses?.resolved
                      ? "bg-green-700 text-white"
                      : "bg-customCard text-primaryLight"
                  } rounded-[12px]`}
                >
                  {getLatestStatus(data?.statuses!) || ""}
                </div>
              )}
            </div>

            <div className="mb-6 flex items-center justify-between">
              <label className="block mb-2 text-gray-700">Handled By:</label>
              <div className="px-4 py-2 font-bold bg-customCard text-primaryLight rounded-[12px]">
                National Insurance Commission
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="mb-6 flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                onChange={handleRecaptchaChange}
              />
            </div>

            <div className="border-t border-gray-200 mt-8 pt-6 flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                disabled={isLoading}
                className="rounded-full px-8 border-gray-300 text-gray-700"
              >
                Cancel
              </Button>

              <button
                type="button"
                onClick={handleCheckStatus}
                disabled={isLoading}
                className="bg-primaryLight text-white font-medium rounded-full px-4 py-2 flex items-center gap-2 hover:bg-primaryLight disabled:opacity-50"
              >
                {isLoading ? "Checking..." : "Check Status"}
                {!isLoading && (
                  <ChevronRight className="h-4 w-4" color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
