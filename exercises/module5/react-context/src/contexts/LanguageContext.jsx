import React from "react";
import { useState } from "react";
// La valeur "null" est la valeur que nous récupérerons plus tard si nous oublions de placer un ProviderWrapper autour du composant qui essaye d'exploiter le contexte.
// Plutôt que de placer une valeur par défaut, nous utilisons null pour avoir une erreur claire que quelque chose ne va pas.

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [language, setLanguage] = useState("fr");
  const pickLanguage = (newLanguage) => {
    if (newLanguage !== "fr" && newLanguage !== "en")
      // eslint-disable-next-line
      throw "Invalid language selected : " + newLanguage;
    setLanguage(newLanguage);
  };

  //   Pour plus de clarté, on prépare un seul objet qui regroupe l'ensemble de ce qu'on s'apprête à exposer aux consumers du contexte : exposedValue

  const exposedValue = {
    language,
    pickLanguage,
  };

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
