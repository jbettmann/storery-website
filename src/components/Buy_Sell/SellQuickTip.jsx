import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../Functions/Functions";

export const SellQuickTip = ({ selectedObj }) => {
  return (
    selectedObj && (
      <article className="flex flex-col-reverse items-center  lg:flex-row lg:justify-evenly w-full bg-storeyGreen-100/10 p-6 md:p-14 gap-10 ">
        <div className="w-10/12 lg:w-1/2 flex flex-col justify-center">
          <h1 className="font-bold hidden lg:block">{selectedObj.title}</h1>
          <BlockContent
            blocks={selectedObj.description}
            projectId="k4xvtsjp"
            dataset="production"
            className="prose-p:m-0 prose-p:pl-0"
          />
          <a className="link" href="#faqs" alt="link to FAQS">
            Read More tips in our FAQs
          </a>
        </div>

        <div className="w-10/12 lg:w-auto h-36 sm:h-96 ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={urlFor(selectedObj.mainImage.asset._ref)}
            alt="Storey staging home correctly for showing"
          />
        </div>
        <h1 className="font-bold lg:hidden">{selectedObj.title}</h1>
      </article>
    )
  );
};
