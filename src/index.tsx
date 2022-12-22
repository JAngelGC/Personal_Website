import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import PortfolioContextProvider from "./components/store/portfolio-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioContextProvider>
        <App />
      </PortfolioContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
