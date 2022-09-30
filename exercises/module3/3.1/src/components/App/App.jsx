import { useState } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";
import Statistics from "../Statistics/Statistics";

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clicks = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <Display />
      <Button text="good" onClick={handleClickGood} clicks={clicks.good} />
      <Button
        text="neutral"
        onClick={handleClickNeutral}
        clicks={clicks.neutral}
      />
      <Button text="bad" onClick={handleClickBad} clicks={clicks.bad} />
      <Statistics />
      <div className="tuto"></div>
    </div>
  );
};

export default App;
