import React, { createContext, useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export const UserContext = createContext();

export const DataProvider = ({ children }) => {
  const [annualData, setannualData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const data = calculateInvestmentResults(annualData);
  return (
    <>
      <UserContext.Provider
        value={{
          data,
          setannualData,
          initialInvestment: annualData.initialInvestment,
        }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
