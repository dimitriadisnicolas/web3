import React from "react";

function Button(props) {
  const text = props.text;
  const onClick = props.onClick;
  const clicks = props.clicks;
  return (
    <div>
      <button onClick={onClick}>{text}</button>{" "}
      {clicks === 0
        ? "U didnt click on this button yet"
        : "U click " + clicks + " times on the " + text + " button"}
    </div>
  );
}

export default Button;
