import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ChevronDown } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
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
import { useGetRegions } from "@/hooks/use-get-regions";
import { capitalize } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { VehicleProfileSchema, VehicleProfileSchemaType } from "@/lib/schema";
import { useComplaintStore } from "@/hooks/use-complaint-store";

const idTypes = [
  "Ghana Card",
  "Voter ID",
  "Passport",
  "Driver's License",
  "NHIS Card",
  "Other",
];

interface VictimsProfileFormProps {
  onNextStep: () => void;
}

const VictimsProfileForm = ({ onNextStep }: VictimsProfileFormProps) => {
  const { offices: regions, loading: loadingRegions } = useGetRegions();
  const { setData, data } = useComplaintStore();

  const form = useForm<VehicleProfileSchemaType>({
    resolver: zodResolver(VehicleProfileSchema),
    defaultValues: data.vehicleProfile
      ? {
          ...data.vehicleProfile,
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
        },
  });

  const selectedIdType = form.watch("idType");

  const onSubmit = (values: VehicleProfileSchemaType) => {
    setData("vehicleProfile", values);
    onNextStep();
  };

  return (
    <div className="bg-white rounded-[28px] shadow-sm p-6">
      <div className="bg-primaryLight text-white p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold">Victim's Profile</h2>
        <p className="text-sm mt-2">
          Tell us about the individual affected by the issue.
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
                    Email <span className="text-red-500">*</span>
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
              name="digitalAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Digital Address</FormLabel>
                  <FormControl>
                    <div>
                      <Input placeholder="GS-000-0000" {...field} />
                      <FormDescription className="text-xs mt-1">
                        <a href="#" className="text-blue-600 hover:underline">
                          Find your digital address here
                        </a>
                      </FormDescription>
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
                      {loadingRegions ? (
                        <>
                          <div className="flex flex-col space-y-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                              <div
                                key={index}
                                className="flex justify-center items-center py-4"
                              >
                                <Skeleton className="h-10 w-10 rounded-full" />
                                <div className="flex-1 space-y-4 py-1 ml-4">
                                  <Skeleton className="h-4 w-3/4 rounded" />
                                  <Skeleton className="h-4 w-5/6 rounded" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          {regions.map((region) => (
                            <SelectItem key={region.id} value={region.id}>
                              {capitalize(region.label)}
                            </SelectItem>
                          ))}
                        </>
                      )}
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

          <div className="grid grid-cols-1  gap-4">
            {selectedIdType === "Ghana Card" && (
              <FormField
                control={form.control}
                name="ghanaCardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Ghana Card Number <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="GHA-000000000-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>

          <Separator className="space-y-3" />

          <div className="flex justify-end">
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VictimsProfileForm;
