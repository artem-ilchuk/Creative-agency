import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "./uiSlice";
import { modalsReducer } from "./modal/modalSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "ui",
  version: 1,
  storage,
  whitelist: ["theme", "lastRoute"],
};

const persistedReducer = persistReducer(persistConfig, uiReducer);

export const store = configureStore({
  reducer: {
    ui: persistedReducer,
    modals: modalsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
