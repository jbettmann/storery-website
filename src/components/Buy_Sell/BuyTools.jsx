import React from "react";
import { MortgageCalc } from "../MortgageCalc/MortgageCalc";
import { BuyToolCard } from "../Card/BuyToolCard";

export const BuyTools = ({ selBuyTool, selectedObj }) => {
  return (
    <div>
      {selBuyTool === "1" ? (
        <MortgageCalc />
      ) : selBuyTool === "2" ? (
        <div className="flex">
          {selectedObj.lenders.lendersList.map((lender) => {
            return <BuyToolCard card={lender} />;
          })}
        </div>
      ) : (
        <div className="flex">
          {selectedObj.schoolDistricts.districtsList.map((district) => {
            return <BuyToolCard card={district} />;
          })}
        </div>
      )}
    </div>
  );
};
