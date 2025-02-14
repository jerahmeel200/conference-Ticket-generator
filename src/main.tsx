import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Provider from "./useContext/Context";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Provider>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>
);
