import React from "react";

export const SeHabla = ({ seHabla }) => {
  return (
    seHabla && (
      <section className="mx-auto p-6 text-center w-fit bg-white">
        <h1>{seHabla.language.title}</h1>
        <p>{seHabla.language.body}</p>
      </section>
    )
  );
};
