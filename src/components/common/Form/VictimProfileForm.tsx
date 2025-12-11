"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useGetRegions } from "@/hooks/use-get-regions";
import { capitalize, cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { VictimProfileSchema, VictimProfileSchemaType } from "@/lib/schema";
import {
  useComplaintStore,
  useFaqsDialogStore,
} from "@/hooks/use-complaint-store";
import ActionButton from "../ActionButton";
import { idTypes } from "@/lib/state";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ComplaintFormProps } from "@/types";
import { useIsMobile } from "@/hooks/use-mobile";
import { logInfo } from "@/lib/logger";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const VictimsProfileForm = ({
  onNextStep,
  onPrevStep,
  currentStep,
}: ComplaintFormProps) => {
  const { offices: regions, loading: loadingRegions } = useGetRegions();
  const { setData, data } = useComplaintStore();
  const isMobile = useIsMobile();
  const { showDialog } = useFaqsDialogStore();
  const pathName = usePathname();

  const form = useForm<VictimProfileSchemaType>({
    resolver: zodResolver(VictimProfileSchema),
    defaultValues: data.victimProfile
      ? {
          ...data.victimProfile,
        }
      : {
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          residentialAddress: "",
          digitalAddress: "",
          region: "",
          idType: "",
          idNumber: "",
        },
  });

  const onSubmit = (values: VictimProfileSchemaType) => {
    setData("victimProfile", values);
    onNextStep();
  };

   useEffect(() => {
     logInfo("Page View", {
       component: "ComplaintsDetailsForm",
       path: pathName,
     });
   }, [pathName]);

  return (
    <div className="bg-white lg:rounded-[28px] shadow-sm p-6">
      <div className="bg-primaryLight text-white p-4 lg:p-6 rounded-xl mb-6 flex">
        <div>
          <h2 className="text-sm lg:text-xl font-bold">Victim's Profile</h2>
          <p className="text-sm mt-2">
            Tell us about the individual affected by the issue.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    First Name <span className="text-red-500">*</span>
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Last Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
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
                  <FormLabel>
                    Email 
                    {/* <span className="text-red-500">*</span> */}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="doe@gmail.com"
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
              name="residentialAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Residential Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                            className="h-1 focus:ring-primaryLight"
                          />
                          <CommandList>
                            <CommandEmpty>No region found.</CommandEmpty>
                            <ScrollArea className="h-[200px]">
                              <CommandGroup>
                                {regions?.map((region) => (
                                  <CommandItem
                                    key={region.id}
                                    value={region.label.toLowerCase()}
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
                      {idTypes?.map((type) => (
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

          <div className="grid grid-cols-1  gap-4">
            <FormField
              control={form.control}
              name="digitalAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Digital Address</FormLabel>
                  <FormControl>
                    <div>
                      <Input placeholder="GS-000-0000" {...field} />
                      {/* <FormDescription
                        className="text-xs mt-1"
                        onClick={generateDigitalAddress}
                      >
                        <a href="#" className="text-blue-600 hover:underline">
                          Find your digital address here
                        </a>
                      </FormDescription> */}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Separator className="space-y-3" />

          {onPrevStep && currentStep !== 1 ? (
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={onPrevStep}
                className="rounded-full"
              >
                Back
              </Button>
              <ActionButton
                text="Next"
                type="submit"
                className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
                actionFrom="Victim Profile Form"

              />
            </div>
          ) : (
            <div className="flex justify-end">
              <ActionButton
                text="Next"
                type="submit"
                className="bg-[#59285F] text-white font-medium py-2 px-4 rounded-full"
                actionFrom="Victim Profile Form"

              />
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default VictimsProfileForm;
