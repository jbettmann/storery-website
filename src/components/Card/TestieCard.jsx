import React from "react";

export const TestieCard = ({ item }) => {
  return (
    item && (
      <div className="green-card flex flex-col flex-initial w-96  p-2 lg:p-8 items-center">
        {item.testie?.split("\n").map((t, i) => (
          <p key={i} className=" text-sm m-0">
            {t}
          </p>
        ))}

        {item.img && <img src="" alt="" />}
        <h5 className="font-bold">-{item.name}</h5>
        <p className="m-0 font-bold">{item.location}</p>
      </div>
    )
  );
};
