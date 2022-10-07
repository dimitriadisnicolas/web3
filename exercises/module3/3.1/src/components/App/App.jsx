import { useState } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import Statistics from "../Statistics/Statistics";
import Loading from "../Loading/Loading";

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(true);

  //les différents compteur de clicks selon les types de boutons
  const clicks = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  if (loading) {
    setTimeout(() => setLoading(false), 3000);
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // const handleClickGood = () => {
  //   setGood(good + 1);
  // };

  // const handleClickNeutral = () => {
  //   setNeutral(neutral + 1);
  // };

  // const handleClickBad = () => {
  //   setBad(bad + 1);
  // };
  const handleClick = (buttonType) => () => {
    // const buttonType = "Good";
    if (buttonType === "Good") return setGood(good + 1);
    if (buttonType === "Bad") return setBad(bad + 1);
    if (buttonType === "Neutral") return setNeutral(neutral + 1);
  };
  return (
    <div>
      <Display />
      <Button text="good" onClick={handleClick("Good")} clicks={clicks.good} />
      <Button
        text="neutral"
        onClick={handleClick("Neutral")}
        clicks={clicks.neutral}
      />
      <Button text="bad" onClick={handleClick("Bad")} clicks={clicks.bad} />
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;
