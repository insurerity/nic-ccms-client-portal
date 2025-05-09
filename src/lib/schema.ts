import { z } from "zod";

export const VictimProfileSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" }),
    residentialAddress: z
      .string()
      .min(1, { message: "Residential address is required" }),
    digitalAddress: z.string().optional(),
    region: z.string().min(1, { message: "Region is required" }),
    idType: z.string().min(1, { message: "ID type is required" }),
    ghanaCardNumber: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.idType === "Ghana Card") {
      if (!data.ghanaCardNumber || data.ghanaCardNumber.trim() === "") {
        ctx.addIssue({
          path: ["ghanaCardNumber"],
          code: z.ZodIssueCode.custom,
          message: "Ghana Card Number is required",
        });
      } else if (!/^GHA-\d{9}-\d$/.test(data.ghanaCardNumber)) {
        ctx.addIssue({
          path: ["ghanaCardNumber"],
          code: z.ZodIssueCode.custom,
          message: "Ghana Card Number must be in the format GHA-XXXXXXXXX-X",
        });
      }
    }
  });

export const complaintDetailFormSchema = z.object({
  dateOfIncident: z
    .string()
    .min(1, { message: "Date of incident is required" }),
  policyNumber: z.string().optional(),
  claimType: z.string().min(1, { message: "Claim type is required" }),
  entityOfConcern: z
    .string()
    .min(1, { message: "Entity of concern is required" }),
  natureOfClaim: z.string().min(1, { message: "Nature of claim is required" }),
  description: z.string().min(10, {
    message: "Please describe the complaint with at least 10 characters",
  }),
});

// Define the schema for the business information form
export const BusinessInformationSchema = z.object({
  businessName: z.string().min(2, {
    message: "Business name is required",
  }),
  businessAddress: z.string().min(5, {
    message: "Please enter a valid business address",
  }),
  businessPhoneNumber: z
    .string()
    .optional()

    .refine(
      (val) =>
        val === null ||
        val === undefined ||
        val.trim() === "" ||
        val.length >= 10,
      {
        message: "Phone number must be at least 10 digits",
      }
    ),
  businessEmail: z.string().email({
    message: "Please enter a valid email address",
  }),
  contactPersonName: z.string().min(2, {
    message: "Contact person name is required",
  }),
  contactPhoneNumber: z.string().min(10, {
    message: "Phone number is required",
  }),
  region: z
    .string({
      required_error: "Please select a region",
    })
    .min(2, {
      message: "Region is required",
    }),
});

export const PetitionerProfileSchema = z
  .object({
    petitionerType: z.string({
      required_error: "Please select a petitioner type",
    }),
    name: z.string().min(2, {
      message: "Name must be at least 2 characters",
    }),
    email: z
      .string()
      .email({
        message: "Please enter a valid email address",
      })
      .optional(),
    phoneNumber: z.string().min(10, {
      message: "Phone number must be at least 10 digits",
    }),
    idType: z.string({
      required_error: "Please select an ID type",
    }),
    idNumber: z.string().min(1, {
      message: "ID number is required",
    }),
    familyMemberType: z.string().optional(),
    customFamilyMemberType: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.petitionerType === "Family") {
      if (!data.familyMemberType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please select a family member type",
          path: ["familyMemberType"],
        });
      } else if (
        data.familyMemberType === "Other" &&
        !data.customFamilyMemberType
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please specify the relationship",
          path: ["customFamilyMemberType"],
        });
      }
    }

    if (data.idType === "Ghana Card") {
      if (!data.idNumber || data.idNumber.trim() === "") {
        ctx.addIssue({
          path: ["idNumber"],
          code: z.ZodIssueCode.custom,
          message: "Ghana Card Number is required",
        });
      } else if (!/^GHA-\d{9}-\d$/.test(data.idNumber)) {
        ctx.addIssue({
          path: ["idNumber"],
          code: z.ZodIssueCode.custom,
          message: "Ghana Card Number must be in the format GHA-XXXXXXXXX-X",
        });
      }
    } else {
      // For other ID types, make sure it's not empty
      if (!data.idNumber || data.idNumber.trim() === "") {
        ctx.addIssue({
          path: ["idNumber"],
          code: z.ZodIssueCode.custom,
          message: "ID number is required",
        });
      }
    }
  });

// Case Details Schema
export const CaseDetailsSchema = z.object({
  incidentDate: z.date().optional(),
  claimType: z.string({
    required_error: "Please select a claim type",
  }),
  vehicleNumber: z.string().optional(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters",
  }),
});

export type CaseDetailsSchemaType = z.infer<typeof CaseDetailsSchema>;

export type PetitionerProfileSchemaType = z.infer<
  typeof PetitionerProfileSchema
>;

export type BusinessInformationSchemaType = z.infer<
  typeof BusinessInformationSchema
>;
export type VictimProfileSchemaType = z.infer<typeof VictimProfileSchema>;
export type complaintDetailFormSchemaType = z.infer<
  typeof complaintDetailFormSchema
>;
