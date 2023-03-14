import React from "react";
import BlockContect from "@sanity/block-content-to-react";
import { urlFor } from "../../Functions/Functions";

export const SellQuickTip = ({ selectedObj }) => {
  return (
    selectedObj.quickSellTip && (
      <article>
        <div>
          <h2>{selectedObj.quickSellTip.title}</h2>
          <BlockContect
            blocks={selectedObj.quickSellTip.tip}
            projectId="k4xvtsjp"
            dataset="production"
            className="prose"
          />
        </div>
        <img
          src={urlFor(selectedObj.quickSellTip.mainImage.asset._ref)}
          alt="Storey staging home correctly for showing"
        />
      </article>
    )
  );
};
