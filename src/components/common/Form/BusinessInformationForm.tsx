"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";
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

import { Separator } from "@/components/ui/separator";
import {
  BusinessInformationSchema,
  BusinessInformationSchemaType,
} from "@/lib/schema";
import { useComplaintStore } from "@/hooks/use-complaint-store";
import { useGetRegions } from "@/hooks/use-get-regions";
import { Skeleton } from "@/components/ui/skeleton";
import { capitalize, cn } from "@/lib/utils";
import ActionButton from "../ActionButton";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BusinessInformationFormProps {
  onNextStep: () => void;
  onPrevStep?: () => void;
}

const BusinessInformationForm = ({
  onNextStep,
  onPrevStep,
}: BusinessInformationFormProps) => {
  const { offices: regions, loading: loadingRegions } = useGetRegions();

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
                    <Input placeholder="Afrima Ventures" {...field} />
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
                  <FormLabel>Business Phone Number </FormLabel>
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

          <div className="grid grid-cols-1 ">
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>
                    Region <span className="text-red-500">*</span>
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? regions.find(
                                (region) => region.id === field.value
                              )?.label
                            : "Select your region"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      {loadingRegions ? (
                        <div className="flex flex-col space-y-4 p-2">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="flex items-center py-2">
                              <Skeleton className="h-5 w-5 rounded-full" />
                              <div className="flex-1 space-y-1 py-1 ml-2">
                                <Skeleton className="h-4 w-3/4 rounded" />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Command>
                          <CommandInput
                            placeholder="Search region..."
                            className="h-1"
                          />
                          <CommandList>
                            <CommandEmpty>No region found.</CommandEmpty>
                            <ScrollArea className="h-[200px]">
                              <CommandGroup>
                                {regions.map((region) => (
                                  <CommandItem
                                    key={region.id}
                                    value={region.label.toLowerCase()} // <-- important!
                                    onSelect={() => {
                                      form.setValue("region", region.id);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        region.id === field.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {capitalize(region.label)}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </ScrollArea>
                          </CommandList>
                        </Command>
                      )}
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator className="space-y-3" />

          <div className="flex justify-between">
            {onPrevStep && (
              <Button
                type="button"
                variant="outline"
                onClick={onPrevStep}
                className="rounded-full"
              >
                Back
              </Button>
            )}
            <ActionButton
              text="Next"
              type="submit"
              className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
            />
            {/* <Button type="submit" className="ml-auto">
              Next
            </Button> */}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BusinessInformationForm;
