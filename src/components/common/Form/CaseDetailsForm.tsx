"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { capitalize, cn } from "@/lib/utils";
import { Suspense, useEffect } from "react";
import {
  useComplaintStore,
  useFaqsDialogStore,
  useSharedStore,
} from "@/hooks/use-complaint-store";
import ActionButton from "../ActionButton";
import { z } from "zod";
import { ComplaintFormProps } from "@/types";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";
import { logInfo } from "@/lib/logger";

// Define the schema for the case details form
const CaseDetailsSchema = z.object({
  incidentDate: z.date().optional(),
  claimType: z.string({
    required_error: "Please select a claim type",
  }),
  vehicleNumber: z.string().optional(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters",
  }),
});

type CaseDetailsSchemaType = z.infer<typeof CaseDetailsSchema>;

const CaseDetailsForm = ({
  onNextStep,
  onPrevStep,
  currentStep,
}: ComplaintFormProps) => {
  const { caseType } = useSharedStore();

  const { data, setData } = useComplaintStore();
  const isMobile = useIsMobile();
  const { showDialog } = useFaqsDialogStore();
 const pathName = usePathname();
  
 
 const form = useForm<CaseDetailsSchemaType>({
   resolver: zodResolver(CaseDetailsSchema),
   defaultValues: data?.caseDetails
   ? {
     ...data.caseDetails,
    }
    : {
      claimType: "",
      vehicleNumber: "",
      description: "",
    },
  });
  
  useEffect(() => {
    // If a global caseType is provided and there isn't already a
    // specific claimType set in the stored caseDetails,
    // then pre-fill the form's claimType with the global caseType.
    if (caseType && !data.caseDetails?.claimType) {
      console.log(
        "Pre-filling claimType from global caseType:",
        capitalize(caseType)
      );
      form.setValue("claimType", capitalize(caseType));
    }
    // This effect depends on the global caseType, the specific claimType
    // within the stored caseDetails, and the setValue function.
  }, [caseType, data.caseDetails?.claimType, form.setValue]);
  const onSubmit = (values: CaseDetailsSchemaType) => {
    setData("caseDetails", values);
    onNextStep();
  };
  
  const handleBackClick = () => {
    const currentValues = form.getValues();
    setData("caseDetails", currentValues as CaseDetailsSchemaType);
    if (onPrevStep) {
      onPrevStep();
    }
  };
  
  useEffect(() => {
    logInfo("Page View", {
      component: "CaseDetailsForm",
      path: pathName,
    });
  }, [pathName]);
  return (
    <Suspense>
      <div className="bg-white lg:rounded-[28px] shadow-sm p-6">
        <div className="bg-primaryLight text-white p-4 lg:p-6 rounded-xl mb-6 flex">
          <div>
            <h2 className=" text-sm lg:text-xl font-bold">Case Details</h2>
            <p className="text-sm mt-2">
              Provide the details for your application.
            </p>
          </div>

          {isMobile && (
            <Button
              variant={"default"}
              className="border rounded-2xl"
              onClick={() => showDialog()}
            >
              Learn More
            </Button>
          )}
        </div>

        <p className="mb-4 text-sm">
          Fields marked with (<span className="text-red-500">*</span>) are
          required.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="incidentDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Incident</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal bg-gray-50",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? format(field.value, "PPP")
                              : "Select a date"}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                name="claimType"
                control={form.control}
                render={({ field }) => (
                  <div className="space-y-2">
                    <FormLabel htmlFor="caseType">Case Type</FormLabel>
                    <Select
                      value={field.value}
                      disabled={caseType !== null ? true : false}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select claim type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Injury">Injury</SelectItem>
                        <SelectItem value="Death">Death</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              />

              <FormField
                control={form.control}
                name="vehicleNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter vehicle number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Description Of Petition{" "}
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more about the issue or situation..."
                        className="min-h-[200px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {onPrevStep && currentStep !== 1 ? (
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBackClick}
                  className="rounded-full"
                >
                  Back
                </Button>
                <ActionButton
                  text="Next"
                  type="submit"
                  className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
                  actionFrom="Case Details Form"

                />
              </div>
            ) : (
              <div className="flex justify-end">
                <ActionButton
                  text="Next"
                  type="submit"
                  className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
                  actionFrom="Case Details Form"
                />
              </div>
            )}
          </form>
        </Form>
      </div>
    </Suspense>
  );
};

export default CaseDetailsForm;
