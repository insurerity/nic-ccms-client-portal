import { create } from "zustand";
import {
  BusinessInformationSchemaType,
  CaseDetailsSchemaType,
  PetitionerProfileSchemaType,
  VehicleProfileSchemaType,
  complaintDetailFormSchemaType,
} from "./schema";

type ComplaintStoreData = {
  vehicleProfile: VehicleProfileSchemaType | null;
  complaintDetails: complaintDetailFormSchemaType | null;
  supportingDocuments: any;
  petitionerProfile: PetitionerProfileSchemaType | null;
  businessInformation: BusinessInformationSchemaType | null;
  caseDetails: CaseDetailsSchemaType | null;
};

interface ComplaintStore {
  data: ComplaintStoreData;
  setData: <K extends keyof ComplaintStoreData>(
    key: K,
    value: ComplaintStoreData[K]
  ) => void;
}

export const ComplaintDataStore = create<ComplaintStore>((set) => ({
  data: {
    vehicleProfile: null,
    complaintDetails: null,
    supportingDocuments: null,
    businessInformation: null,
    petitionerProfile: null,
    caseDetails: null,
  },
  setData: (key, value) =>
    set((state) => ({
      data: { ...state.data, [key]: value },
    })),
}));
