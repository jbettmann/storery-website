import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getRemodel, urlFor } from "../../Functions/Functions";
import BlockContect from "@sanity/block-content-to-react";
import { SellQuickTip } from "../Buy_Sell/SellQuickTip";

export const Remodel = ({ contact }) => {
  const [remodel, setRemodel] = useState(null);

  useEffect(() => {
    getRemodel(setRemodel);
  }, []);
  console.log(remodel);
  return (
    remodel && (
      <div>
        {/* Hero */}
        <section className="my-8 relative text-white">
          <article className="h-96 lg:h-[30rem] ">
            <div className="w-full h-[30rem] overflow-hidden ">
              <img
                src={urlFor(remodel.hero?.mainImage.asset._ref)}
                alt="Beautiful sunny brick home surrounded by green trees that Storey owns"
                className="w-full h-full object-cover brightness-50"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full px-6 flex flex-col text-center justify-center items-center flex-auto">
              <h1>{remodel.hero.webpageTitle}</h1>
              <NavLink
                className="btn mt-8"
                to={`/${contact}`}
                aria-label={remodel.hero.buttonText}
              >
                {remodel.hero.buttonText}
              </NavLink>
            </div>
          </article>
        </section>
        <SellQuickTip selectedObj={remodel.remodelPlan} />
      </div>
    )
  );
};
