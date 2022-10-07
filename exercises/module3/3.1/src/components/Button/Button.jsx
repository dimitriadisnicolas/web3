import React from "react";

function Button(props) {
  const text = props.text;
  const onClick = props.onClick;
  const buttonClicks = props.clicks;
  return (
    <div>
      <button onClick={onClick}>{text}</button>{" "}
      {buttonClicks === 0
        ? "U didnt click on this button yet"
        : "U click " + buttonClicks + " times on the " + text + " button"}
    </div>
  );
}

export default Button;
