import React from "react";
import "./styles.css";

function Square({ value, onClickSquare }) {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
}

export default Square;
