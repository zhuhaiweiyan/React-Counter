import React, { createContext, useContext, useState } from "react";

const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [activeCount, setActiveCount] = useState(0);

  const toggleSquare = (beActive) => {
    setActiveCount((prev) => (beActive ? prev + 1 : prev - 1));
  };

  return (
    <GridContext.Provider value={{ activeCount, toggleSquare }}>
      {children}
    </GridContext.Provider>
  );
};

export const useGrid = () => useContext(GridContext);
