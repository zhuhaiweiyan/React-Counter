import React, { useState } from "react";
import { useGrid } from "./GridContext";

const Square = ({ onToggle }) => {
  // Tracks whether the square is active (black) or inactive (white)
  const [isActive, setIsActive] = useState(false);
  const { toggleSquare } = useGrid();

  const handleClick = () => {
    setIsActive(!isActive);
    toggleSquare(!isActive);
  };

  const squareStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid grey",
    backgroundColor: isActive ? "black" : "white",
    cursor: "pointer",
  };

  return <div style={squareStyle} onClick={handleClick} />;
};

export default Square;
