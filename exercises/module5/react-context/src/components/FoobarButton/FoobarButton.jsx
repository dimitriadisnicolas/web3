import { Context as LanguageContext } from "../../contexts/LanguageContext";
import { useContext } from "react";

const FoobarButton = () => {
  // eslint-disable-next-line
  const { language, pickLanguage } = useContext(LanguageContext);

  return <div>{language}</div>;
};

export default FoobarButton;
