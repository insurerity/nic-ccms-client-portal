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
  PetitionerProfileSchema,
  PetitionerProfileSchemaType,
} from "@/lib/schema";
import { useComplaintStore } from "@/hooks/use-complaint-store";

const petitionerTypes = [
  "Individual",
  "Solicitor",
  "Legal Representative",
  "Corporate Entity",
  "Other",
];

const idTypes = [
  "Ghana Card",
  "Voter ID",
  "Passport",
  "Driver's License",
  "NHIS Card",
  "Other",
];

interface PetitionerProfileFormProps {
  onNextStep: () => void;
  onPrevStep?: () => void;
}

const PetitionerProfileForm = ({
  onNextStep,
  onPrevStep,
}: PetitionerProfileFormProps) => {
  const { data, setData } = useComplaintStore();
  const form = useForm<PetitionerProfileSchemaType>({
    resolver: zodResolver(PetitionerProfileSchema),
    defaultValues: data?.petitionerProfile
      ? {
          ...data.petitionerProfile,
        }
      : {
          petitionerType: "",
          name: "",
          email: "",
          phoneNumber: "",
          idType: "",
          idNumber: "",
        },
  });

  const onSubmit = (values: PetitionerProfileSchemaType) => {
    console.log(values);
    setData("petitionerProfile", values);
    onNextStep();
  };

  return (
    <div className="bg-white rounded-[28px] shadow-sm p-6">
      <div className="bg-primaryLight text-white p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold">Petitioner's Profile</h2>
        <p className="text-sm mt-2">
          Tell us about the individual submitting this petition.
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
              name="petitionerType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Petitioner / Solicitor Type{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Solicitor/Petitioner Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      {petitionerTypes.map((type) => (
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Eg. "John Doe"' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Eg. "doe***@gmail.com"'
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone Number <span className="text-red-500">*</span>
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

            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    ID Number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your ID number" {...field} />
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

export default PetitionerProfileForm;
