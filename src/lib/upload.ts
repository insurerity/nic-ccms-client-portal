import { ComplaintStoreData } from "./complaint-store";
import { Nic_Ccms_Complaint_Insert_Input } from "@/graphql/generated";

export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + " bytes";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
};

export function transformComplaintData(data: ComplaintStoreData) {
  const {
    businessInformation,
    caseDetails,
    complaintDetails,
    petitionerProfile,

    victimProfile,
  } = data;

  const mutObj: Nic_Ccms_Complaint_Insert_Input = {
    sourceChannel: "CLIENT",
  };
  if (petitionerProfile && petitionerProfile !== null) {
    mutObj["pertitioner_name"] = petitionerProfile.name;
    mutObj["petitioner_email"] = petitionerProfile?.email;
    mutObj["petitioner_id_card"] = petitionerProfile.idNumber;
    mutObj["petitioner_id_type"] = petitionerProfile.idType;
    (mutObj["petitioner_phone_number"] = petitionerProfile.phoneNumber),
      (mutObj["petitioner_type"] = petitionerProfile.petitionerType);
    mutObj["pe"];
  }

  if (victimProfile && victimProfile !== null) {
    mutObj["name"] = `${victimProfile.firstName} ${victimProfile.lastName}`;
    mutObj["email"] = victimProfile.email;
    mutObj["contactNumber"] = victimProfile.phoneNumber;
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
    mutObj["claimTypeValue"] = complaintDetails.natureOfClaim;
    mutObj["description"] = complaintDetails.description;
    mutObj["regulatedEntityId"] = complaintDetails.entityOfConcern;
    mutObj["ticketType"] = "PETITION";
  }

  if (businessInformation !== null && businessInformation) {
    mutObj["name"] = businessInformation.businessName;
    mutObj["email"] = businessInformation.businessEmail;
    mutObj["contactNumber"] =
      businessInformation.businessPhoneNumber ?? undefined;
    mutObj["residentialAddress"] = businessInformation.businessAddress;
    mutObj["officeId"] = businessInformation.region;
    mutObj["contactPersonName"] = businessInformation.contactPersonName;
    mutObj["contactPersonPhone"] = businessInformation.contactPhoneNumber;
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
