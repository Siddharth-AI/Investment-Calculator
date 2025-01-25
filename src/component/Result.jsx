import React, { useContext } from "react";
import { formatter } from "../util/investment";
import { UserContext } from "../dataContext/DataProvider";
export const Result = () => {
  const { data, initialInvestment } = useContext(UserContext);

  if (!data || data.length <= 0) {
    return (
      <div id="result">
        <h1 className="no-data">no is data available</h1>
      </div>
    );
  }
  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Captial</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ year, valueEndOfYear, interest, annualInvestment }) => {
            const investedCaptial = initialInvestment + annualInvestment * year;
            const totalInterest = valueEndOfYear - investedCaptial;
            return (
              <>
                <tr key={year}>
                  <td>{year}</td>
                  <td>{formatter.format(valueEndOfYear)}</td>
                  <td>{formatter.format(interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(investedCaptial)}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
