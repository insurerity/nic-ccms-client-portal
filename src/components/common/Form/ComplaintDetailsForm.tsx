"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  complaintDetailFormSchema,
  complaintDetailFormSchemaType,
} from "@/lib/schema";
import {
  useComplaintStore,
  useEntityDrawerStore,
  useFaqsDialogStore,
} from "@/hooks/use-complaint-store";
import { CLAIM_TYPES, NATURE_OF_CLAIMS } from "@/lib/state";
import { useGetRegulatedEntities } from "@/hooks/use-get-regulated-entities";
import ActionButton from "../ActionButton";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { EntityDrawer } from "../EntityOfConcernDrawer";
import { ComplaintFormProps } from "@/types";
import { useIsMobile } from "@/hooks/use-mobile";

const ComplaintDetailsForm = ({
  onNextStep,
  onPrevStep,
  currentStep,
}: ComplaintFormProps) => {
  const { showDrawer } = useEntityDrawerStore();
  const { setData, data } = useComplaintStore();
  const { entities, loadingEntities } = useGetRegulatedEntities();
  const isMobile = useIsMobile();
  const { showDialog } = useFaqsDialogStore();

  const form = useForm<complaintDetailFormSchemaType>({
    resolver: zodResolver(complaintDetailFormSchema),
    defaultValues: data?.complaintDetails
      ? {
          ...data.complaintDetails,
        }
      : {
          dateOfIncident: undefined,
          policyNumber: "",
          claimType: "",
          entityOfConcern: "",
          natureOfClaim: "",
          description: "",
        },
  });

  const selectedClaimType = form.watch("claimType");

  const natureOfClaims = selectedClaimType
    ? NATURE_OF_CLAIMS[selectedClaimType]
    : [];

  const onSubmit = (values: complaintDetailFormSchemaType) => {
    setData("complaintDetails", values);
    onNextStep();
  };
    const handleBackClick = () => {
    const currentValues = form.getValues();
    setData("complaintDetails", currentValues as complaintDetailFormSchemaType);
    if (onPrevStep) {
      onPrevStep();
    }
  };
  return (
    <div className="bg-white lg:rounded-[28px] shadow-sm p-6">
      <div className="bg-primaryLight text-white p-4 lg:p-6 rounded-xl mb-6 flex">
        <div>
        <h2 className="text-sm lg:text-xl font-bold">Complaint Details</h2>
        <p className="text-sm mt-2">
          Provide information about the complaint or incident.
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
          <FormField
            control={form.control}
            name="dateOfIncident"
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

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="policyNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Policy Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter policy number (if applicable)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      {CLAIM_TYPES.map((type) => (
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

          <FormField
            control={form.control}
            name="natureOfClaim"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nature of Claim <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select nature of claim" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="w-full">
                    {natureOfClaims.map((nature) => (
                      <SelectItem key={nature} value={nature}>
                        {nature}
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
            name="entityOfConcern"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Entity of Concern <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                          disabled={loadingEntities}
                        >
                          {loadingEntities ? (
                            <div className="flex items-center gap-2">
                              <Skeleton className="h-4 w-4 rounded-full" />
                              <Skeleton className="h-4 w-24 rounded" />
                            </div>
                          ) : field.value ? (
                            entities.find((entity) => entity.id === field.value)
                              ?.label
                          ) : (
                            "Select entity"
                          )}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        {loadingEntities ? (
                          <div className="flex flex-col space-y-4 p-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <div
                                key={index}
                                className="flex items-center py-2"
                              >
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
                              placeholder="Search entity..."
                              className="h-1"
                            />
                            <CommandList>
                              <CommandEmpty>No entity found.</CommandEmpty>
                              <CommandGroup>
                                <ScrollArea className="h-[200px]">
                                  {entities?.map((entity) => (
                                    <CommandItem
                                      key={entity.id}
                                      value={entity.label}
                                      onSelect={() => {
                                        form.setValue(
                                          "entityOfConcern",
                                          entity.id
                                        );
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          entity.id === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      {entity.label}
                                    </CommandItem>
                                  ))}
                                </ScrollArea>
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        )}
                      </PopoverContent>
                    </Popover>
                    <FormDescription
                      onClick={showDrawer}
                      className="cursor-pointer p-2 pl-0"
                    >
                      <p className="text-primaryLight hover:underline cursor-pointer">
                        Can't find your entity of concern?
                      </p>
                    </FormDescription>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description of Complaint{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe your complaint in detail."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

      <EntityDrawer />
    </div>
  );
};

export default ComplaintDetailsForm;
