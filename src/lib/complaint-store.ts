import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  BusinessInformationSchemaType,
  CaseDetailsSchemaType,
  PetitionerProfileSchemaType,
  VictimProfileSchemaType,
  complaintDetailFormSchemaType,
} from "./schema";

type SharedStore = {
  caseType: string | null;
  petitionerType: string | null;
  complainantType: string | null;
  setCaseType: (value: string) => void;
  setPetitionerType: (value: string) => void;
  setComplainantType: (value: string) => void;

  reset: () => void;
};

export const SharedState = create<SharedStore>()(
  persist(
    (set) => ({
      caseType: null,
      complainantType: null,
      petitionerType: null,
      setCaseType: (value) => set({ caseType: value }),
      setPetitionerType: (value) => set({ petitionerType: value }),
      setComplainantType: (value) => {
        set({ complainantType: value });
      },
      reset: () => set({ caseType: null, petitionerType: null }),
    }),
    {
      name: "shared-store", // unique name
      storage: createJSONStorage(() => localStorage), // default is localStorage
    }
  )
);

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
  reset: () => void;
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
  reset: () => {
    set({
      data: {
        businessInformation: null,
        caseDetails: null,
        complaintDetails: null,
        petitionerProfile: null,
        supportingDocuments: null,
        victimProfile: null,
      },
    });
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

export const EntityDrawerState = create<{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const FaqDialogState = create<{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
