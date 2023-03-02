import React, { useState } from "react";

export const SingleFAQ = ({ qa }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <h4 className="font-bold">{qa.question}</h4>
      {showAnswer && (
        <div>
          <p>{qa.answer}</p>
        </div>
      )}
    </div>
  );
};
