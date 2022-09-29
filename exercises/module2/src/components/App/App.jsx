import { useState } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);

  const decreaseByOne = () => setCounter(counter - 1);

  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Plus" />
      <Button onClick={setToZero} text="Zero" />
      <Button onClick={decreaseByOne} text="Moins" />
    </div>
  );
};

export default App;
