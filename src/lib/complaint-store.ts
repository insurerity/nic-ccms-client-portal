import { create } from "zustand";
import {
  BusinessInformationSchemaType,
  CaseDetailsSchemaType,
  PetitionerProfileSchemaType,
  VictimProfileSchemaType,
  complaintDetailFormSchemaType,
} from "./schema";

export type ComplaintStoreData = {
  victimProfile: VictimProfileSchemaType | null;
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
    victimProfile: null,
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

export const NewComplainIdState = create<{
  id: string | null;
  setId: (id: string | null) => void;
}>((set) => ({
  id: null,
  setId: (val) => {
    set({ id: val });
  },
}));
