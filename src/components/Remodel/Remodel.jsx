import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getRemodel, urlFor } from "../../Functions/Functions";
import { SellQuickTip } from "../Buy_Sell/SellQuickTip";
import { Testimonials } from "../Testimonials/Testimonials";

export const Remodel = ({ contact, testimonials }) => {
  const [remodel, setRemodel] = useState(null);

  //filters remodel testimonials
  const remodelTestimonials = {
    ...testimonials,
    testimonialList: testimonials?.testimonialList?.filter(
      (testie) =>
        testie.category.includes("remodel") ||
        testie.category.includes("consulting")
    ),
  };

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
        <article>
          <Testimonials testimonials={remodelTestimonials} />
        </article>
      </div>
    )
  );
};
