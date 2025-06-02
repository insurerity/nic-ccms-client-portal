"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useComplaintStore, useFaqsDialogStore } from "@/hooks/use-complaint-store";
import { FAMILY_MEMBER_TYPES, idTypes, PETITIONER_TYPES } from "@/lib/state";
import ActionButton from "../ActionButton";
import { ComplaintFormProps } from "@/types";
import { useIsMobile } from "@/hooks/use-mobile";

const PetitionerProfileForm = ({
  onNextStep,
  onPrevStep,
  currentStep,
}: ComplaintFormProps) => {
  const { data, setData } = useComplaintStore();
    const isMobile = useIsMobile();
    const { showDialog } = useFaqsDialogStore();
  const form = useForm<PetitionerProfileSchemaType>({
    resolver: zodResolver(PetitionerProfileSchema),
    defaultValues: data?.petitionersProfile
      ? {
          ...data.petitionersProfile,
        }
      : undefined,
  });

  const petitionerType = form.watch("petitionerType");
  const familyMemberType = form.watch("familyMemberType");

  const onSubmit = (values: PetitionerProfileSchemaType) => {
    console.log(values);
    setData("petitionersProfile", values);
    onNextStep();
  };
    const handleBackClick = () => {
      const currentValues = form.getValues();
      setData("petitionersProfile", currentValues as PetitionerProfileSchemaType);
      if (onPrevStep) {
        onPrevStep();
      }
    };
  
  return (
    <div className="bg-white lg:rounded-[28px] shadow-sm p-6">
      <div className="bg-primaryLight text-white p-4 lg:p-6 rounded-xl mb-6 flex">
        <div>
        <h2 className="text-xl font-bold">Petitioner's Profile</h2>
        <p className="text-sm mt-2">
          Tell us about the individual submitting this petition.
        </p>
        </div>
        {isMobile && <Button variant={"default"} className="border rounded-2xl" onClick={() => showDialog()}>Learn More</Button>}

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
                      {PETITIONER_TYPES.map((type) => (
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
                    {form.watch("idType") === "Ghana Card"
                      ? "Ghana Card Number"
                      : form.watch("idType")
                      ? `${form.watch("idType")} Number`
                      : "ID Number"}{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        form.watch("idType") === "Ghana Card"
                          ? "e.g. GHA-123456789-X"
                          : "Enter your ID number"
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {petitionerType === "Family" && (
            <FormField
              control={form.control}
              name="familyMemberType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Relationship <span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="w-full">
                      {FAMILY_MEMBER_TYPES.map((type) => (
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
          )}

          {/* Conditionally Render Custom Relationship Input */}
          {petitionerType === "Family" && familyMemberType === "Other" && (
            <FormField
              control={form.control}
              name="customFamilyMemberType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Specify Relationship <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Step-sister-in-law" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Separator className="space-y-3" />

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
              />
            </div>
          ) : (
            <div className="flex justify-end">
              <ActionButton
                text="Next"
                type="submit"
                className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
              />
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default PetitionerProfileForm;
