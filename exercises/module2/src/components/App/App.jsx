import { useState } from "react";
import Display from "../Display/Display";
import Button from "../Button/Button";

const App = () => {
  const [counter, setCounter] = useState(0);

  const changeCount = (delta) => {
    setCounter(counter + delta);
  };

  const handleClick = (e) => {
    console.log(e.target.dataset);
    changeCount(parseInt(e.target.dataset.delta));
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={handleClick} text="Plus" delta={1} />
      <Button onClick={handleClick} text="Reset" delta={-counter} />
      <Button onClick={handleClick} text="Moins" delta={-1} />
    </div>
  );
};

export default App;
