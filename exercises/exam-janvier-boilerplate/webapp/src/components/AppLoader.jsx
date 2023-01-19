import { ProviderWrapper as ContextProvider } from "contexts/appContext";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const AppLoader = () => {
  return (
    //Le ProviderWrapper qu'on a crée
    <Router>
      <ContextProvider>
        <App></App>
      </ContextProvider>
    </Router>
  );
};

export default AppLoader;
