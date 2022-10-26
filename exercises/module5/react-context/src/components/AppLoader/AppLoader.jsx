import { ProviderWrapper as LanguageProviderWrapper } from "../../contexts/LanguageContext";
import App from "../App/App";

const AppLoader = () => {
  return (
    <LanguageProviderWrapper>
      <App></App>
    </LanguageProviderWrapper>
  );
};

export default AppLoader;
