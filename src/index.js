import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App/App";
import ThemeProvider from "./context/ThemeProvider";
import { REPO_NAME } from "./repo";
import store from "./store/store";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={`/${REPO_NAME}/`}>
        <ThemeProvider>
          <App />
        </ThemeProvider>{" "}
      </BrowserRouter>{" "}
    </Provider>{" "}
  </React.StrictMode>
);
