import { ComplaintStoreData } from "./complaint-store";


export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + " bytes";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
};

export const normalizePhoneNumber = (phoneNumber?: string): string | undefined  => {
  if (!phoneNumber) return "";

  const trimmed = phoneNumber.trim();

  if (trimmed.startsWith("0")) {
    return "233" + trimmed.slice(1);
  }

  return trimmed;
}

export function transformComplaintData(data: ComplaintStoreData) {
  const {
    businessInformation,
    caseDetails,
    complaintDetails,
    petitionersProfile,

    victimProfile,
  } = data;

  const mutObj: any = {
    sourceChannel: "CLIENT",
  };
  if (petitionersProfile && petitionersProfile !== null) {
    mutObj["pertitioner_name"] = petitionersProfile.name;
    mutObj["petitioner_email"] = petitionersProfile?.email;
    mutObj["petitioner_id_card"] = petitionersProfile.idNumber;
    mutObj["petitioner_id_type"] = petitionersProfile.idType;
    (mutObj["petitioner_phone_number"] = normalizePhoneNumber(petitionersProfile.phoneNumber)),
      (mutObj["petitioner_type"] = petitionersProfile.petitionerType);
    mutObj["pe"];
  }

  if (victimProfile && victimProfile !== null) {
    mutObj["name"] = `${victimProfile.firstName} ${victimProfile.lastName}`;
    mutObj["email"] = victimProfile.email;
    mutObj["contactNumber"] = normalizePhoneNumber(victimProfile.phoneNumber);
    mutObj["digitalAddress"] = victimProfile.digitalAddress ?? undefined;
    mutObj["residentialAddress"] = victimProfile.residentialAddress;
    mutObj["officeId"] = victimProfile.region;
    mutObj["IdType"] = victimProfile.idType;
    mutObj["NationalId"] = victimProfile.idNumber;
    mutObj["complainantType"] = "INDIVIDUAL";
  }

  if (complaintDetails && complaintDetails !== null) {
    mutObj["dateOfIncidence"] = complaintDetails.dateOfIncident;
    mutObj["policyNumber"] = complaintDetails.policyNumber ?? undefined;
    mutObj["claimType"] = complaintDetails.claimType;
    mutObj["petition_reason"] = complaintDetails.petitionReason === "Others" ? complaintDetails?.otherPetitionReason : complaintDetails.petitionReason;
    mutObj["claimTypeValue"] = complaintDetails.natureOfClaim === "Other" ? complaintDetails?.otherNatureOfClaim : complaintDetails.natureOfClaim;
    mutObj["vehicle_number"] = complaintDetails.vehicleNumber;
    mutObj["description"] = complaintDetails.description;
    mutObj["regulatedEntityId"] = complaintDetails.entityOfConcern;
    mutObj["ticketType"] = "PETITION";
  }

  if (businessInformation !== null && businessInformation) {
    mutObj["name"] = businessInformation.businessName;
    mutObj["email"] = businessInformation.businessEmail;
    mutObj["contactNumber"] =
      normalizePhoneNumber(businessInformation.businessPhoneNumber) ?? undefined;
    mutObj["residentialAddress"] = businessInformation.businessAddress;
    mutObj["officeId"] = businessInformation.region;
    mutObj["contactPersonName"] = businessInformation.contactPersonName;
    mutObj["contactPersonPhone"] = normalizePhoneNumber(businessInformation.contactPhoneNumber);
    mutObj["complainantType"] = "CORPORATE";
  }

  if (caseDetails !== null && caseDetails) {
    mutObj["dateOfIncidence"] = caseDetails.incidentDate ?? undefined;
    mutObj["caseType"] = caseDetails.claimType;
    mutObj["description"] = caseDetails.description;
    mutObj["vehicle_number"] = caseDetails.vehicleNumber ?? undefined;
    mutObj["ticketType"] = "MOTOR-PETITION";
  }

  return mutObj;
}
