import React from "react";
import ReactDOM from "react-dom/client";

import AppLoader from "./components/AppLoader/AppLoader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppLoader></AppLoader>
  </React.StrictMode>
);
