import React, { useState } from "react";
import { SingleFAQ } from "./SingleFAQ";

export const FAQ = ({ faq, key }) => {
  return (
    <article key={key}>
      <h2>{faq.title}</h2>
      {faq.faq?.map((qa) => {
        return <SingleFAQ qa={qa} />;
      })}
    </article>
  );
};
