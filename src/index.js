import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import App from "./components/App"; // Ensure this matches the actual file and export name.
import store from "./app/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const theme = createTheme({});

root.render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      // Replace store with your actual Redux store.
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
