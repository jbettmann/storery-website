import React, { useContext } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../Functions/Functions";
import { NavContext } from "../Context/Context";

export const SellQuickTip = ({ selectedObj, navLink, faqScroll }) => {
  const navOffSet = useContext(NavContext);

  const handleClick = (e) => {
    if (navLink) return;
    else {
      e.preventDefault();

      const navOffsetHeight = navOffSet.offsetHeight;

      window.scrollTo({
        top: faqScroll.current.offsetTop - navOffsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    selectedObj && (
      <article className=" w-full bg-storeyGreen-100/10 p-6 md:p-14 flex justify-center ">
        <div className="flex flex-col-reverse toggle-container items-center  lg:flex-row lg:justify-evenly gap-10 ">
          <div className="w-10/12 lg:w-1/2 flex flex-col justify-center ">
            <h1 className="font-bold hidden lg:block">{selectedObj.title}</h1>
            <BlockContent
              blocks={selectedObj.description}
              projectId="k4xvtsjp"
              dataset="production"
              className="prose-p:m-0 prose-p:pl-0"
            />
            {/* Link/Button Redirect */}
            <a
              className="link"
              href={
                navLink?._key
                  ? navLink.url
                  : navLink?.id
                  ? navLink.slug.current
                  : faqScroll
              }
              onClick={handleClick}
              target={navLink?._key ? "_blank" : "_self"}
              alt={
                navLink?._key
                  ? "Link to current rental listing on zillow"
                  : navLink?.id
                  ? "Redirect to remodel consultation page"
                  : "Learn more from the FAQS"
              }
              rel="noreferrer"
            >
              {navLink?._key || navLink?.id
                ? selectedObj.buttonText
                : "Read more tips in our FAQs"}
            </a>
          </div>

          {/* Image */}
          <div className="w-10/12 lg:w-1/2 h-36 sm:h-96 ">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={urlFor(selectedObj.mainImage.asset._ref)}
              alt="Storey staging home correctly for showing"
            />
          </div>
          <h1 className="font-bold text-center lg:hidden">
            {selectedObj.title}
          </h1>
        </div>
      </article>
    )
  );
};
