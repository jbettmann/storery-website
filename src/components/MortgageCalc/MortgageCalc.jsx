import React from "react";

export const MortgageCalc = () => {
  return (
    <div className="w-full mx-auto">
      <p align="center">
        <a
          href="https://www.mortgagecalculator.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://www.mortgagecalculator.org/free-tools/calc/mortgage-calculator-logo.png"
            alt="MortgageCalculator.org."
          />
        </a>
        <iframe
          src="https://www.mortgagecalculator.org/free-tools/calc/?value=400000&down=80000&amount=320000&rate=5&years=30&pmi=0.7&insurance=1500&taxes=3000&hoa=0&cur=$"
          className="w-full h-[400px] m-0 border-0 "
        ></iframe>
        <a
          href="https://www.mortgagecalculator.org/free-tools/javascript-mortgage-calculator.php"
          target="_blank"
          rel="noreferrer"
          className="text-xs"
        >
          by MortgageCalculator.org Mortgage Calculator
        </a>
      </p>
    </div>
  );
};
