import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { AppTheme } from "./theme/AppTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <App />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
