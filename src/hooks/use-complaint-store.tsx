import { ComplaintDataStore } from "@/lib/complaint-store";
import { useStore } from "zustand";

export const useComplaintStore = () => {
  const data = useStore(ComplaintDataStore, (state) => state.data);
  const setData = useStore(ComplaintDataStore, (state) => state.setData);

  return {
    data,
    setData,
  };
};
