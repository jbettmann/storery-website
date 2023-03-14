import React, { useEffect, useState } from "react";
import { getBuySell, getTestimonials, urlFor } from "../../Functions/Functions";
import { BuyTools } from "./BuyTools";
import { SellQuickTip } from "./SellQuickTip";

export const BuySell = () => {
  const [buySell, setBuySell] = useState({});
  const [active, setActive] = useState(true);
  const [selectedObj, setSelectedObj] = useState(null);
  const [selBuyTool, setSelBuyTool] = useState("1");
  const [testimonials, setTestimonials] = useState(null);

  // sets display for buy tool
  const handleToolSel = (e) => {
    setSelBuyTool(e.target.id);
  };

  // fetches data and sets states
  useEffect(() => {
    getBuySell(setBuySell);
    getTestimonials(setTestimonials);
    // setSelBuyTool("1");
  }, []);

  // sets state of selectedObj
  useEffect(() => {
    // Set selectedObj based on the active state
    setSelectedObj(active ? buySell.buy : buySell.sell);
  }, [buySell, active]);

  console.log({ buySell, selBuyTool, selectedObj });
  return (
    selectedObj && (
      <section className="">
        <h1 className=" m-4">{buySell.buySellTitle}</h1>
        <article>
          <img src={urlFor(selectedObj.hero.mainImage.asset._ref)} alt="" />
          <div>
            <button onClick={() => setActive(!active)}>
              {selectedObj.title}
            </button>
            <h5>{selectedObj.hero.description}</h5>
            {selectedObj.whyChecklist.checklist.map((list) => {
              return (
                <ul>
                  <li>{list.item}</li>
                </ul>
              );
            })}
          </div>
        </article>
        {active ? (
          <article>
            {/* Buy Tools Selection  */}

            <div>
              <button className="btn" id="1" onClick={handleToolSel}>
                {selectedObj.mortgageCalculators?.title}
              </button>
              <button className="btn" id="2" onClick={handleToolSel}>
                {selectedObj.lenders?.title}
              </button>
              <button className="btn" id="3" onClick={handleToolSel}>
                {selectedObj.schoolDistricts?.title}
              </button>
            </div>

            <BuyTools selBuyTool={selBuyTool} selectedObj={selectedObj} />
          </article>
        ) : (
          <SellQuickTip selectedObj={selectedObj} />
        )}

        {/* <MortgageCalc /> */}
      </section>
    )
  );
};
