"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ChevronDown } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import {
  BusinessInformationSchema,
  BusinessInformationSchemaType,
} from "@/lib/schema";
import { useComplaintStore } from "@/hooks/use-complaint-store";

const regions = [
  "Greater Accra",
  "Ashanti",
  "Western",
  "Eastern",
  "Central",
  "Volta",
  "Northern",
  "Upper East",
  "Upper West",
  "Bono East",
  "Ahafo",
  "Bono",
  "North East",
  "Savannah",
  "Oti",
  "Western North",
];

const idTypes = [
  "Ghana Card",
  "Business Registration",
  "Tax Identification Number",
  "Other",
];

interface BusinessInformationFormProps {
  onNextStep: () => void;
  onPrevStep?: () => void;
}

const BusinessInformationForm = ({
  onNextStep,
  onPrevStep,
}: BusinessInformationFormProps) => {
  const { data, setData } = useComplaintStore();

  const form = useForm<BusinessInformationSchemaType>({
    resolver: zodResolver(BusinessInformationSchema),
    defaultValues: data.businessInformation
      ? {
          ...data.businessInformation,
        }
      : {
          businessName: "",
          businessAddress: "",
          businessPhoneNumber: "",
          businessEmail: "",
          contactPersonName: "",
          contactPhoneNumber: "",
          region: "",
          idType: "",
          idNumber: "",
        },
  });

  const onSubmit = (values: BusinessInformationSchemaType) => {
    setData("businessInformation", values);
    onNextStep();
  };

  return (
    <div className="bg-white rounded-[28px] shadow-sm p-6">
      <div className="bg-primaryLight text-white p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold">Business Information</h2>
        <p className="text-sm mt-2">
          Tell us about the business affected by the issue.
        </p>
      </div>

      <p className="mb-4 text-sm">
        Fields marked with (<span className="text-red-500">*</span>) are
        required.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Business Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Andrew" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Business Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Accra, Ghana" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="businessPhoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Business Phone Number{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="flex">
                      <div className="flex items-center justify-center bg-gray-100 border border-r-0 rounded-l-md px-3">
                        <span className="flex items-center">
                          <img
                            src="https://flagcdn.com/w20/gh.png"
                            alt="Ghana"
                            className="h-4 mr-1"
                          />
                          <ChevronDown className="h-3 w-3" />
                        </span>
                      </div>
                      <Input
                        className="rounded-l-none"
                        placeholder="0200000000"
                        type="tel"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="businessEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Business Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="company@email.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contactPersonName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name of Contact Person{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter contact person's name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactPhoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Contact's Phone Number{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <div className="flex">
                      <div className="flex items-center justify-center bg-gray-100 border border-r-0 rounded-l-md px-3">
                        <span className="flex items-center">
                          <img
                            src="https://flagcdn.com/w20/gh.png"
                            alt="Ghana"
                            className="h-4 mr-1"
                          />
                          <ChevronDown className="h-3 w-3" />
                        </span>
                      </div>
                      <Input
                        className="rounded-l-none"
                        placeholder="0200000000"
                        type="tel"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Region <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your region" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
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
              name="idType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Type of ID <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your ID Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      {idTypes.map((type) => (
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
          </div>

          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    ID Number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter ID number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator className="space-y-3" />

          <div className="flex justify-between">
            {onPrevStep && (
              <Button type="button" variant="outline" onClick={onPrevStep}>
                Back
              </Button>
            )}
            <Button type="submit" className="ml-auto">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BusinessInformationForm;
