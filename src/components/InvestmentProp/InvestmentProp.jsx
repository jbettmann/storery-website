import React, { useEffect, useState, useContext } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { getInvestProps, urlFor } from "../../Functions/Functions";
import { MyVideo } from "../MyVideo/MyVideo";
import { FAQ } from "../FAQs/FAQs";
import { SellQuickTip } from "../Buy_Sell/SellQuickTip";
import { Testimonials } from "../Testimonials/Testimonials";
import { Spinner } from "../Spinner/Spinner";
import { RentalCard } from "../Card/RentalCard";
import { FaDollarSign } from "react-icons/fa";
import { BsHouseCheckFill } from "react-icons/bs";
import { GrLineChart } from "react-icons/gr";

export const InvestmentProp = ({
  testimonials,
  faqs,
  rentalListings,
  remodel,
}) => {
  const [investment, setInvestProps] = useState({});
  const [active, setActive] = useState(true);
  const [viewOption, setViewOption] = useState("rental");
  const [selectedObj, setSelectedObj] = useState(null);
  const [benefitCards, setBenefitCards] = useState(null);

  // Extract Zillow url for current rental listings link
  [rentalListings] = rentalListings.filter(
    (social) => social._key == "279a9ac700ed"
  );
  console.log(rentalListings);

  const benefitIcons = [
    <FaDollarSign size={"2rem"} color={"green"} />,
    <BsHouseCheckFill size={"2rem"} color={"green"} />,
    <GrLineChart size={"2rem"} />,
  ];

  const handleOptionClick = (option) => {
    if (option === "rental") {
      setActive(true);
    } else {
      setActive(false);
    }
    setViewOption(option);
  };

  // coverts obj of benefits into array for cards
  const benefitCardArray = (obj) => {
    if (!obj) return;
    let [...newCards] = Object.values(obj);
    // eliminates element that is just "document"
    setBenefitCards(newCards.filter((doc, i) => doc !== "document"));
  };

  // fetches data and sets states
  useEffect(() => {
    getInvestProps(setInvestProps);
  }, []);

  // calls benefitCardArray once investment is set
  useEffect(() => {
    if (investment.rental) {
      benefitCardArray(investment.rental.benefits.cards);
    }
  }, [investment]);

  //filters investment testimonials
  const investCats = ["investment", "property management"];
  const investmentTestimonials = {
    ...testimonials,
    testimonialList: testimonials?.testimonialList?.filter((testie) =>
      investCats.some((category) => testie.category.includes(category))
    ),
  };

  //filters propertyManage testimonials
  const fixNFlipCats = ["consulting", "investment", "remodel"];
  const fixNFlipTestimonials = {
    ...testimonials,
    testimonialList: testimonials?.testimonialList?.filter((testie) =>
      fixNFlipCats.some((category) => testie.category.includes(category))
    ),
  };

  // sets state of selectedObj
  useEffect(() => {
    // Set selectedObj based on the active state
    setSelectedObj(active ? investment.rental : investment.fixFlip);
  }, [investment, active]);
  console.log(investment);
  if (!selectedObj) return <Spinner />;
  return (
    selectedObj && (
      <section className="">
        {/* Title */}
        <div className="w-full  text-center">
          <h1 className="heading w-2/3 xl:w-1/2 py-14 mx-auto">
            {investment.webpageTitle}
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
                  viewOption === "rental"
                    ? "transform translate-x-0 "
                    : "transform translate-x-full "
                }`}
              ></div>
              <button
                className={`toggle-btn ${
                  viewOption === "rental"
                    ? " text-white font-bold"
                    : " text-black"
                }`}
                onClick={() => handleOptionClick("rental")}
              >
                <h4>{investment.rental.title}</h4>
              </button>
              <button
                className={`toggle-btn  ml-4 ${
                  viewOption === "fixFlip"
                    ? " text-white font-bold"
                    : " text-black"
                }`}
                onClick={() => handleOptionClick("fixFlip")}
              >
                <h4>{investment.fixFlip.title}</h4>
              </button>
            </div>

            {/* Hero Info */}
            <div>
              <h3 className="font-bold ">{selectedObj.hero.description}</h3>

              {selectedObj.rentalHelpList ? (
                <ul>
                  {selectedObj.rentalHelpList.list.map((list) => {
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
              ) : (
                <BlockContent
                  blocks={selectedObj.hero.subDescription}
                  projectId="k4xvtsjp"
                  dataset="production"
                  className="prose-p:m-0 prose-p:pl-0"
                />
              )}
            </div>
          </div>
        </article>
        {active ? (
          <article className="w-full flex flex-col items-center bg-white px-6 sm:px-24 text-center">
            {/* Rental Benefits */}
            <h1>{selectedObj?.benefits?.title}</h1>
            <div className="flex flex-col items-center lg:flex-row gap-10 mx-0 sm:mx-9 my-10 justify-center">
              {benefitCards?.map((benefit, i) => {
                return (
                  <RentalCard benefit={benefit} i={i} icon={benefitIcons[i]} />
                );
              })}
            </div>
          </article>
        ) : null}
        {/* Quick Tips */}
        {active ? (
          // Property Management Info
          <SellQuickTip
            selectedObj={selectedObj.propertyManagement}
            navLink={rentalListings}
          />
        ) : (
          // Remodel Info
          <SellQuickTip
            selectedObj={selectedObj.remodelPlan}
            navLink={remodel}
          />
        )}

        {/* Buy / Sell Video */}
        {investment.videoUrl && (
          <div className="w-full bg-white text-center py-14">
            <h1>{investment.videoUrl.title}</h1>
            <MyVideo url={investment.videoUrl.url} />
          </div>
        )}

        {/* Testimonials */}
        {testimonials && (
          <article>
            <Testimonials
              testimonials={
                active ? investmentTestimonials : fixNFlipTestimonials
              }
            />
          </article>
        )}

        {/* FAQs */}
        <div
          className="bg-white w-screen h-full flex flex-col items-center"
          id="faqs"
        >
          <h1 className="mt-14 p-2 text-center">Frequently Asked Questions</h1>
          {faqs
            .filter(
              (faqs) =>
                faqs.slug.current === investment.slug.current ||
                faqs.slug.current === "property-management"
            )
            .map((faq, i) => {
              return <FAQ key={i} faq={faq} />;
            })}
        </div>
      </section>
    )
  );
};
