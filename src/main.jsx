import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "modern-normalize";

const theme = store.getState().ui.theme;
document.documentElement.setAttribute("data-theme", theme);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Toaster position="top-right" />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
