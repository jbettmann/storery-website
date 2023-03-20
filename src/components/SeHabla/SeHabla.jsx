import React from "react";

export const SeHabla = ({ seHabla }) => {
  return (
    seHabla && (
      <section className=" green-card mx-6 lg:mx-auto p-6 text-center w-fit ">
        <h1>{seHabla.language.title}</h1>
        <p>{seHabla.language.body}</p>
      </section>
    )
  );
};
