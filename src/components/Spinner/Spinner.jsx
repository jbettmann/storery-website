import React from "react";
import { ImSpinner9 } from "react-icons/im";

export const Spinner = () => {
  return (
    <div className="w-full h-72 flex items-center">
      <ImSpinner9
        className="mx-auto motion-safe:animate-spin fill-storeyGreen-300"
        size={"3rem"}
      />
    </div>
  );
};
