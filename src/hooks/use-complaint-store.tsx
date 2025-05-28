"use client";

import {
  ComplaintDataStore,
  EntityDrawerState,
  FaqDialogState,
  NewComplainIdState,
  SharedState,
} from "@/lib/complaint-store";
import { useStore } from "zustand";

export const useComplaintStore = () => {
  const data = useStore(ComplaintDataStore, (state) => state.data);
  const setData = useStore(ComplaintDataStore, (state) => state.setData);
  const reset = useStore(ComplaintDataStore, (state) => state.reset);

  return {
    data,
    setData,
    reset,
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

export const useEntityDrawerStore = () => {
  const showDrawer = useStore(EntityDrawerState, (state) => state.openModal);
  const closeDrawer = useStore(EntityDrawerState, (state) => state.closeModal);
  const drawerOpen = useStore(EntityDrawerState, (state) => state.isOpen);

  return {
    showDrawer,
    closeDrawer,
    drawerOpen,
  };
};

export const useFaqsDialogStore = () => {
  const showDialog = useStore(FaqDialogState, (state) => state.openModal);
  const closeDialog = useStore(FaqDialogState, (state) => state.closeModal);
  const dialogOpen = useStore(FaqDialogState, (state) => state.isOpen);

  return {
    showDialog,
    closeDialog,
    dialogOpen,
  };
};

export const useSharedStore = () => {
  const caseType = useStore(SharedState, (state) => state.caseType);
  const setCaseType = useStore(SharedState, (state) => state.setCaseType);
  const petitionerType = useStore(SharedState, (state) => state.petitionerType);
  const setPetitionerType = useStore(
    SharedState,
    (state) => state.setPetitionerType
  );
  const complainantType = useStore(
    SharedState,
    (state) => state.complainantType
  );
  const setComplainantType = useStore(
    SharedState,
    (state) => state.setComplainantType
  );
  const reset = useStore(SharedState, (state) => state.reset);

  return {
    caseType,
    setCaseType,
    petitionerType,
    setPetitionerType,
    reset,
    complainantType,
    setComplainantType,
  };
};
