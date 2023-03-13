import React, { useEffect, useState } from "react";
import { getBuySell, getTestimonials, urlFor } from "../../Functions/Functions";
import { MortgageCalc } from "../MortgageCalc/MortgageCalc";

export const BuySell = () => {
  const [buySell, setBuySell] = useState({});
  const [active, setActive] = useState(true);
  const [selectedObj, setSelectedObj] = useState(null);
  const [testimonials, setTestimonials] = useState(null);

  useEffect(() => {
    getBuySell(setBuySell);
    getTestimonials(setTestimonials);
    console.log("Ran");
  }, []);

  useEffect(() => {
    // Set selectedObj based on the active state
    setSelectedObj(active ? buySell.buy : buySell.sell);
    console.log("2  Ran");
  }, [buySell, active]);

  console.log(buySell, selectedObj);
  return (
    selectedObj && (
      <section className="">
        <h1 className=" m-4">{buySell.buySellTitle}</h1>
        <article>
          <img src={urlFor(selectedObj.hero.mainImage.asset._ref)} />
          <div>
            <button onClick={() => setActive(!active)}>
              {selectedObj.title}
            </button>
            <h5>{selectedObj.hero.description}</h5>
            {selectedObj?.whyChecklist.checklist.map((list) => {
              return (
                <ul>
                  <li>{list.item}</li>
                </ul>
              );
            })}
          </div>
        </article>
        {/* <MortgageCalc /> */}
      </section>
    )
  );
};
