import React from "react";
import { MortgageCalc } from "../MortgageCalc/MortgageCalc";
import { BuyToolCard } from "../Card/BuyToolCard";

export const BuyTools = ({ selBuyTool, selectedObj }) => {
  return (
    selectedObj && (
      <div className="flex justify-center my-10">
        {selBuyTool === "1" ? (
          <MortgageCalc />
        ) : selBuyTool === "2" ? (
          <div className="flex flex-col items-center lg:flex-row gap-10 mx-9 justify-center">
            {selectedObj.lenders?.lendersList.map((lender) => {
              return <BuyToolCard card={lender} />;
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center lg:flex-row gap-10 mx-9 justify-center">
            {selectedObj.schoolDistricts?.districtsList.map((district) => {
              return <BuyToolCard card={district} />;
            })}
          </div>
        )}
      </div>
    )
  );
};
