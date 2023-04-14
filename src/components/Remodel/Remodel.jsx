import React, { useState, useEffect, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { getRemodel, urlFor } from "../../Functions/Functions";
import { SellQuickTip } from "../Buy_Sell/SellQuickTip";
import { PhotoCard } from "../Card/PhotoCard";
import { GallerySlider } from "../GallerySlider/GallerySlider";
import { FAQ } from "../FAQs/FAQs";
import { Spinner } from "../Spinner/Spinner";
import { Testimonials } from "../Testimonials/Testimonials";

export const Remodel = ({ contact, faqs, testimonials }) => {
  const [remodel, setRemodel] = useState(null);
  const faqRef = useRef(null);

  //filters remodel testimonials
  // const remodelTestimonials = {
  //   ...testimonials,
  //   testimonialList: testimonials?.testimonialList?.filter(
  //     (testie) =>
  //       testie.category.includes("remodel") ||
  //       testie.category.includes("consulting")
  //   ),
  // };

  let exampleBeforAfter = {
    ...remodel?.remodelImg,
    imgs: [
      "https://storeyhomes-colorado.com/wp-content/uploads/2019/03/Dining_Room_600px.gif",
      "https://storeyhomes-colorado.com/wp-content/uploads/2019/03/Kitchen_01_600px.gif",
      "https://storeyhomes-colorado.com/wp-content/uploads/2019/03/backyard_600px.gif",
    ],
  };

  useEffect(() => {
    getRemodel(setRemodel);
  }, []);

  if (!remodel) return <Spinner />;
  return (
    remodel && (
      <section>
        {/* Hero */}
        <section className="my-8 relative text-white">
          <article className="h-96 lg:h-[30rem] ">
            <div className="w-full h-full overflow-hidden ">
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
        <SellQuickTip selectedObj={remodel.remodelPlan} faqScroll={faqRef} />
        <GallerySlider
          CardComponent={PhotoCard}
          items={exampleBeforAfter}
          beforeAfter={true}
        />
        {/* <Testimonials testimonials={remodelTestimonials} /> */}
        {/* FAQs */}
        <div
          className="bg-white w-screen h-full flex flex-col items-center"
          id="faqs"
          ref={faqRef}
        >
          <h1 className="mt-14 p-2 text-center">Frequently Asked Questions</h1>
          {faqs &&
            faqs
              .filter((faqs) => faqs.slug.current === remodel.slug.current)
              .map((faq, i) => {
                return <FAQ key={i} faq={faq} />;
              })}
        </div>
      </section>
    )
  );
};
