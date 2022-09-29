import React from "react";

function Button({ onClick, text, delta }) {
  return (
    <div>
      <button onClick={onClick} data-delta={delta}>
        {text}
      </button>
    </div>
  );
}

export default Button;
