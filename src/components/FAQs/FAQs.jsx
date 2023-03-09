import React, { useState } from "react";
import { SingleFAQ } from "./SingleFAQ";

export const FAQ = ({ faq }) => {
  return (
    <article className="h-auto w-5/6 pb-6">
      <h3 className="py-3 font-bold">{faq.title}</h3>
      {faq.faq?.map((qa, i) => {
        return <SingleFAQ key={i} qa={qa} />;
      })}
    </article>
  );
};
