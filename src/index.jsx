import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
import { DataProvider } from "./dataContext/DataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
