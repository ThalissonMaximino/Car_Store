import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider, CarProvider, UserProvider } from "./Providers/index.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <UserProvider>
          <CarProvider>
            <App />
          </CarProvider>
        </UserProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
