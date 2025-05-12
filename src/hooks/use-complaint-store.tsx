import { ComplaintDataStore, NewComplainIdState } from "@/lib/complaint-store";
import { useStore } from "zustand";

export const useComplaintStore = () => {
  const data = useStore(ComplaintDataStore, (state) => state.data);
  const setData = useStore(ComplaintDataStore, (state) => state.setData);

  return {
    data,
    setData,
  };
};

export const useNewComplaintIdStore = () => {
  const id = useStore(NewComplainIdState, (state) => state.id);
  const setId = useStore(NewComplainIdState, (state) => state.setId);

  return {
    id,
    setId,
  };
};
