import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <button onClick={() => setShowInfo(!showInfo)}>
        <h4>{title}</h4>

        {showInfo ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {showInfo && <div>{info}</div>}
    </article>
  );
};

export default Question;
