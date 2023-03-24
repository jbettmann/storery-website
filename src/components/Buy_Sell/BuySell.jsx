import React, { useEffect, useState, useRef } from "react";
import { getBuySell, urlFor } from "../../Functions/Functions";
import { MyVideo } from "../MyVideo/MyVideo";
import { FAQ } from "../FAQs/FAQs";
import { BuyTools } from "./BuyTools";
import { SellQuickTip } from "./SellQuickTip";
import { Testimonials } from "../Testimonials/Testimonials";
import { Spinner } from "../Spinner/Spinner";

export const BuySell = ({ faqs, testimonials }) => {
  const [buySell, setBuySell] = useState({});
  const [active, setActive] = useState(true);
  const [viewOption, setViewOption] = useState("buy");
  const [selectedObj, setSelectedObj] = useState(null);
  const [selBuyTool, setSelBuyTool] = useState("1");

  const handleOptionClick = (option) => {
    if (option === "buy") {
      setActive(true);
    } else {
      setActive(false);
    }
    setViewOption(option);
  };

  // sets display for buy tool
  const handleToolSel = (e) => {
    setSelBuyTool(e.target.id);
  };

  // fetches data and sets states
  useEffect(() => {
    getBuySell(setBuySell);
  }, []);

  //filters buy testimonials
  const buyTestimonials = {
    ...testimonials,
    testimonialList: testimonials.testimonialList?.filter((testie) =>
      testie.category.includes("buy")
    ),
  };

  //filters sell testimonials
  const sellTestimonials = {
    ...testimonials,
    testimonialList: testimonials.testimonialList?.filter((testie) =>
      testie.category.includes("sell")
    ),
  };

  // sets state of selectedObj
  useEffect(() => {
    // Set selectedObj based on the active state
    setSelectedObj(active ? buySell.buy : buySell.sell);
  }, [buySell, active]);

  if (!selectedObj) return <Spinner />;
  return (
    selectedObj && (
      <section className="">
        {/* Title */}
        <div className="w-full  text-center">
          <h1 className=" w-2/3 lg:w-1/2 py-14 mx-auto text-2xl md:text-5xl">
            {buySell.buySellTitle}
          </h1>
        </div>
        {/* Hero Buy / Sell */}
        <article className="flex flex-col items-center bg-white w-full p-6 md:p-14 gap-10 lg:flex-row lg:items-start">
          <div className="w-full lg:w-3/5 h-56 sm:h-96">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={urlFor(selectedObj.hero.mainImage.asset._ref)}
              alt=""
            />
          </div>

          {/* Toggle View */}
          <div className="w-full lg:w-3/5 ">
            {/* Toggle Buttons */}
            <div className="mx-auto lg:mx-0 flex items-center w-full xs:w-2/3 sm:w-1/2 h-16 relative mb-6 justify-around bg-gray-300 rounded-md">
              <div
                className={`absolute top-0 left-0 w-1/2 h-full btn transition-transform duration-300 ease-in-out  ${
                  viewOption === "buy"
                    ? "transform translate-x-0 "
                    : "transform translate-x-full "
                }`}
              ></div>
              <button
                className={`toggle-btn ${
                  viewOption === "buy" ? " text-white font-bold" : " text-black"
                }`}
                onClick={() => handleOptionClick("buy")}
              >
                <h4>{buySell.buy.title}</h4>
              </button>
              <button
                className={`toggle-btn  ml-4 ${
                  viewOption === "sell"
                    ? " text-white font-bold"
                    : " text-black"
                }`}
                onClick={() => handleOptionClick("sell")}
              >
                <h4>{buySell.sell.title}</h4>
              </button>
            </div>

            {/* Hero Info */}
            <div>
              <h3 className="font-bold ">{selectedObj.hero.description}</h3>
              <ul>
                {selectedObj.whyChecklist.checklist.map((list) => {
                  return (
                    <li className="flex items-center mt-6">
                      <div className="mr-3">
                        <span className="inline-block h-2 w-2 rounded-full bg-storeyGreen-100 "></span>
                      </div>
                      <span className="text-black">{list.item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </article>

        {active ? (
          <article className="w-full flex flex-col items-center bg-white">
            {/* Buy Tools Selection  */}
            <div className="flex w-3/4 justify-evenly h-auto">
              <button
                className={`buy-tool__btn ${
                  selBuyTool === "1" ? "focused" : ""
                }`}
                id="1"
                onClick={handleToolSel}
              >
                {selectedObj.mortgageCalculators?.title}
              </button>
              <button
                className={`buy-tool__btn ${
                  selBuyTool === "2" ? "focused" : ""
                }`}
                id="2"
                onClick={handleToolSel}
              >
                {selectedObj.lenders?.title}
              </button>
              <button
                className={`buy-tool__btn ${
                  selBuyTool === "3" ? "focused" : ""
                }`}
                id="3"
                onClick={handleToolSel}
              >
                {selectedObj.schoolDistricts?.title}
              </button>
            </div>
            <BuyTools selBuyTool={selBuyTool} selectedObj={selectedObj} />
          </article>
        ) : (
          // Quick Selling Tip
          <SellQuickTip selectedObj={selectedObj} />
        )}

        {/* Buy / Sell Video */}
        {selectedObj.videoUrl && (
          <div className="w-full bg-white text-center py-14">
            <h1>{selectedObj.videoUrl.title}</h1>
            <MyVideo url={selectedObj.videoUrl.url} />
          </div>
        )}

        {/* Testimonials */}
        <article>
          <Testimonials
            testimonials={active ? buyTestimonials : sellTestimonials}
          />
        </article>

        {/* FAQs */}
        <div
          className="bg-white w-screen h-full flex flex-col items-center"
          id="faqs"
        >
          <h1 className="mt-14 p-2 text-center">Frequently Asked Questions</h1>
          {active
            ? faqs
                .filter(
                  (buyFAQs) => buyFAQs.slug.current === selectedObj.slug.current
                )
                .map((faq, i) => {
                  return <FAQ key={i} faq={faq} />;
                })
            : faqs
                .filter(
                  (sellFAQs) =>
                    sellFAQs.slug.current === selectedObj.slug.current
                )
                .map((faq, i) => {
                  return <FAQ key={i} faq={faq} />;
                })}
        </div>
      </section>
    )
  );
};
