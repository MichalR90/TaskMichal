import { useState } from "react";
import arrowIcon from "../assets/icon-arrow.svg";

export const QuestionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`component-bottom-questions-list ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="component-bottom-answer-list">
        <span>{question}</span>
        <img
          src={arrowIcon}
          alt="arrow"
          className={`arrow ${isOpen ? "arrow-transform" : "arrow"}`}
        />
      </div>
      {isOpen && <p className="component-bottom-question-answer">{answer}</p>}
    </li>
  );
};
