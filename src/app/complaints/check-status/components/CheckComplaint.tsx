"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import {
  useGetComplaintStatusesByTicketNumberLazyQuery,
  useGetStatusLazyQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getLatestStatus, getLatestStatusCreatedAt } from "@/lib/utils";
import { ComplaintStatusDescriptions, EComplaintStatuses } from "@/lib/state";
import StatusGuide from "./StatusGuide";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

const ticketSchema = z.object({
  ticketNumber: z
    .string()
    .min(1, { message: "Ticket number is required to check status" }),
});

export default function ComplaintStatusTracker() {
  const [getStatus, { loading: isLoading, data, error }] =
    useGetStatusLazyQuery();
  const router = useRouter();
  const isMobile = useIsMobile()
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      ticketNumber: "",
    },
  });

  const handleCheckStatus = handleSubmit(async (data) => {
    const ticketNumber = data.ticketNumber;

    return getStatus({
      variables: {
        _eq: ticketNumber,
      },
    });
  });

  const handleCancel = () => {
    return router.push("/get-started");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left side - Status Guide */}
     { !isMobile && <div className="w-full lg:w-2/5">
        <StatusGuide
          activeStatus={
            data ? getLatestStatus(data?.currentStatusData) : undefined
          }
          created_at={
            data ? getLatestStatusCreatedAt(data?.currentStatusData) : undefined
          }
          allStatusesData={data ? data.allStatusesData : undefined}
        />
      </div>}

      {/* Right side - Status Checker */}
      <div className="w-full lg:w-3/5 ">
        <div className="bg-white lg:rounded-[28px] overflow-hidden shadow-sm border border-gray-100 lg:p-8 px-2 py-5 ">
          <div className="bg-primaryLight rounded-[12px] text-white p-3 lg:p-6 lg:text-center text-start">
            <p className="">
              Provide the <span className="font-bold">ticket number</span> to
              check <br /> the status of your complaint/petition
            </p>
          </div>

          <form onSubmit={handleCheckStatus} className="lg:p-6 p-2">
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
            </div>

            {data && (
              <p className="mb-4 text-[#171717]  text-sm">
                {
                  ComplaintStatusDescriptions[
                    getLatestStatus(data?.currentStatusData!)
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
                    getLatestStatus(data.currentStatusData) ===
                    EComplaintStatuses.resolved
                      ? "bg-green-700 text-white"
                      : "bg-customCard text-primaryLight"
                  } rounded-[12px]`}
                >
                  {getLatestStatus(data?.currentStatusData!) || ""}
                </div>
              )}
            </div>

            <div className="mb-6 flex items-center justify-between">
              <label className="block mb-2 text-gray-700">Handled By:</label>
              <div className="px-4 py-2 font-bold bg-customCard text-primaryLight rounded-[12px]">
                National Insurance Commission
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-6 flex justify-between">
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
                type="submit"
                className="bg-primaryLight text-white font-medium rounded-full px-4 py-2 flex items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? "Checking..." : "Check Status"}
                {!isLoading && (
                  <ChevronRight className="h-4 w-4" color="white" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
