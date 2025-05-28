import { z } from "zod";

export const VictimProfileSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required" })
      .min(3, { message: "Invalid name length" })
      .max(30, { message: "Invalid First Name provided" }),
    lastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .min(3, { message: "Invalid name length" })
      .max(30, { message: "Invalid Last Name provided" }),
    email: z.string().email({ message: "Invalid email address" }),
    phoneNumber: z.string().regex(/^0\d{9}$/, {
      message: "Phone number must start with 0 and be exactly 10 digits",
    }),
    residentialAddress: z
      .string()
      .min(1, { message: "Residential address is required" })
      .min(3, { message: "Invalid residential address" })
      .max(255, { message: "Invalid Residential Address provided" }),
    digitalAddress: z
      .string()
      .optional()
      .refine((val) => !val || /^[A-Z]{2}-\d{3}-\d{4}$/.test(val), {
        message:
          "Enter the digital address as GR-000-0000 in uppercase, or leave it empty.",
      }),
    region: z.string().min(1, { message: "Region is required" }),
    idType: z.string({
      required_error: "Please select an ID type",
    }),
    idNumber: z.string().min(1, {
      message: "ID number is required",
    }),
  })
  .superRefine((data, ctx) => {
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
      } else if (data.idNumber.length > 10) {
        ctx.addIssue({
          path: ["idNumber"],
          code: z.ZodIssueCode.custom,
          message: "ID number must not exceed 10 characters",
        });
      }
    }
  });

export const complaintDetailFormSchema = z.object({
  dateOfIncident: z
    .date()
    .refine((date) => date !== null && !isNaN(date.getTime()), {
      message: "Date of incident is required",
    }),
  policyNumber: z
    .string()
    .optional()
    .refine((val) => !val || (val.length >= 3 && val.length <= 70), {
      message:
        "Policy number might be invalid, check the number again or leave it empty.",
    }),
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
  businessName: z
    .string()
    .min(2, { message: "Business name is required" })
    .min(3, { message: "Invalid Business name length" })
    .max(30, { message: "Invalid Business Name provided" }),
  businessAddress: z.string().min(5, {
    message: "Please enter a valid business address",
  }).max(255, { message: "Invalid Business Address provided" }),
  businessPhoneNumber: z
    .string()
    .optional()
    .refine(
      (val) =>
        val === null ||
        val === undefined ||
        val.trim() === "" ||
        val.length === 10,
      {
        message: "Phone number must be at least 10 digits or left empty",
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
      message: "Invalid name provided",
    }).max(30,{
      message: "Exceeded maximum name limit",
    } ),
    email: z
      .string()
      .email({
        message: "Please enter a valid email address",
      })
      .optional(),
    phoneNumber: z.string().regex(/^0\d{9}$/, {
      message: "Phone number must start with 0 and be exactly 10 digits",
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
      } else if (data.idNumber.length > 10) {
        ctx.addIssue({
          path: ["idNumber"],
          code: z.ZodIssueCode.custom,
          message: "ID number must not exceed 10 characters",
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
