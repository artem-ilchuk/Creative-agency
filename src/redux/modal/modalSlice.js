import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileModalOpen: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openMobileModal: (state) => {
      state.isMobileModalOpen = true;
    },
    closeMobileModal: (state) => {
      state.isMobileModalOpen = false;
    },
    toggleMobileModal: (state) => {
      state.isMobileModalOpen = !state.isMobileModalOpen;
    },
  },
});

export const { openMobileModal, closeMobileModal, toggleMobileModal } =
  modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;
