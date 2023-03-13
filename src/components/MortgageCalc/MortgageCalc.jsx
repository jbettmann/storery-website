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
            src="https://www.mortgagecalculator.org/images/mortgage-calculator-logo.png"
            alt="MortgageCalculator.org"
            className=" w-auto h-auto border-0 "
          />
        </a>
      </p>{" "}
      <iframe
        src="https://www.mortgagecalculator.org/webmasters/?downpayment=60000&homevalue=300000&loanamount=240000&interestrate=5&loanterm=30&propertytax=2400&pmi=1&homeinsurance=1000&monthlyhoa=0"
        className="w-full h-[1000px] border-0 "
      ></iframe>
      <a
        href="https://www.mortgagecalculator.org/free-tools/javascript-mortgage-calculator.php"
        target="_blank"
        rel="noreferrer"
        className="text-xs"
      >
        by MortgageCalculator.org Mortgage Calculator
      </a>
    </div>
  );
};
