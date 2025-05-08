import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { useComplaintStore } from "@/hooks/use-complaint-store";
import { CLAIM_TYPES, NATURE_OF_CLAIMS } from "@/lib/state";
import { useGetRegulatedEntities } from "@/hooks/use-get-regulated-entities";

interface ComplaintDetailsFormProps {
  onNextStep: () => void;
  onPrevStep: () => void;
}

const ComplaintDetailsForm = ({
  onNextStep,
  onPrevStep,
}: ComplaintDetailsFormProps) => {
  const { setData, data } = useComplaintStore();
  const { entities, loadingEntities } = useGetRegulatedEntities();

  const form = useForm<complaintDetailFormSchemaType>({
    resolver: zodResolver(complaintDetailFormSchema),
    defaultValues: data?.complaintDetails
      ? {
          ...data.complaintDetails,
        }
      : {
          dateOfIncident: "",
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

  return (
    <div className="bg-white rounded-[28px] shadow-sm p-6">
      <div className="bg-primaryLight text-white p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold">Complaint Details</h2>
        <p className="text-sm mt-2">
          Provide information about the complaint or incident.
        </p>
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
              <FormItem>
                <FormLabel>
                  Date of Incident <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
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

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <div>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select entity" />
                      </SelectTrigger>
                      <FormDescription>
                        <a href="#" className="text-blue-600 hover:underline">
                          Can't find your entity of concern?
                        </a>
                      </FormDescription>
                    </div>
                  </FormControl>
                  <SelectContent className="w-full">
                    {entities.map((entity) => (
                      <SelectItem key={entity.id} value={entity.id}>
                        {entity.label}
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

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onPrevStep}>
              Back
            </Button>
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ComplaintDetailsForm;
