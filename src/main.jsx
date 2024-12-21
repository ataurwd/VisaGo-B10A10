import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Route from "./router/Route";
import FormData from "./context/FormData";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import Theme from "./context/Theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormData>
      <Theme>
        <Route />
        <Toaster />
      </Theme>
    </FormData>
  </StrictMode>
);
