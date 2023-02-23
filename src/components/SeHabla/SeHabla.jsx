import React from "react";

export const SeHabla = ({ seHabla }) => {
  return (
    seHabla && (
      <section className="bg-storeyGreen-100/10 rounded-lg shadow-md border border-storeyGreen-100 mx-6 lg:mx-auto p-6 text-center w-fit bg-white">
        <h1>{seHabla.language.title}</h1>
        <p>{seHabla.language.body}</p>
      </section>
    )
  );
};
