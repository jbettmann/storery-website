import React from "react";

export const TestieCard = ({ testie }) => {
  return (
    testie && (
      <div className="green-card flex flex-col flex-initial w-96  p-2 lg:p-8 items-center">
        {testie.testie?.split("\n").map((t, i) => (
          <p key={i} className=" text-sm m-0">
            {t}
          </p>
        ))}

        {testie.img && <img src="" alt="" />}
        <h5 className="font-bold">-{testie.name}</h5>
        <p className="m-0 font-bold">{testie.location}</p>
      </div>
    )
  );
};
