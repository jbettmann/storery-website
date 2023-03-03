import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const SingleFAQ = ({ qa }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer p-5 flex justify-between items-center border-b border-slate-700"
    >
      <div className="w-5/6 md:w-11/12">
        <h4 className="font-bold text-storeyGreen-100 m-0">{qa.question}</h4>
        {showAnswer && (
          <div>
            <h5 className="m-0 mt-4 p-0">{qa.answer}</h5>
          </div>
        )}
      </div>
      {!showAnswer ? (
        <SlArrowDown size={`1.2rem`} />
      ) : (
        <SlArrowUp size={`1.2rem`} />
      )}
    </div>
  );
};
