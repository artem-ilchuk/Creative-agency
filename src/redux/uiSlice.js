import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  lastRoute: localStorage.getItem("lastRoute") || "/",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload;
      localStorage.setItem("theme", payload);
    },
    setLastRoute(state, { payload }) {
      state.lastRoute = payload;
      localStorage.setItem("lastRoute", payload);
    },
  },
});

export const { setTheme, setLastRoute } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
