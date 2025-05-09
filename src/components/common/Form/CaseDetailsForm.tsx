"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useComplaintStore } from "@/hooks/use-complaint-store";
import ActionButton from "../ActionButton";

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

const claimTypes = [
  "Death",
  "Injury",
  // "Property Damage",
  // "Vehicle Damage",
  // "Insurance Claim",
  // "Contract Dispute",
  // "Other",
];

interface CaseDetailsFormProps {
  onNextStep: () => void;
  onPrevStep?: () => void;
}

const CaseDetailsForm = ({ onNextStep, onPrevStep }: CaseDetailsFormProps) => {
  const searchParams = useSearchParams();
  const { data, setData } = useComplaintStore();
  const form = useForm<CaseDetailsSchemaType>({
    resolver: zodResolver(CaseDetailsSchema),
    defaultValues: {
      claimType: "",
      vehicleNumber: "",
      description: "",
    },
  });

  useEffect(() => {
    if (searchParams && !data.caseDetails) {
      const caseType = searchParams?.get("caseType");
      form.setValue("claimType", capitalize(caseType as string));
    }
  }, [data.caseDetails]);

  const onSubmit = (values: CaseDetailsSchemaType) => {
    console.log(values);
    setData("caseDetails", values);
    onNextStep();
  };

  return (
    <Suspense>
      <div className="bg-white rounded-[28px] shadow-sm p-6">
        <div className="bg-primaryLight text-white p-6 rounded-lg mb-6">
          <h2 className="text-xl font-bold">Case Details</h2>
          <p className="text-sm mt-2">
            Provide the details for your application.
          </p>
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
              <FormField
                control={form.control}
                name="claimType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Claim Type <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select claim type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="w-full">
                        {claimTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
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

            <div className="flex justify-between pt-4">
              {onPrevStep && (
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-full"
                  onClick={onPrevStep}
                >
                  Back
                </Button>
              )}
              <ActionButton
                text="Next"
                type="submit"
                className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
              />
            </div>
          </form>
        </Form>
      </div>
    </Suspense>
  );
};

export default CaseDetailsForm;
