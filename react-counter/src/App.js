import React from "react";
import Square from "./Square";
import "./App.css";
import { useGrid } from "./GridContext";

function App() {
  const { activeCount } = useGrid();

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 100px)",
  };

  return (
    <div className="App">
      <h2>Count: {activeCount}</h2>
      <div style={gridStyle}>
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default App;
