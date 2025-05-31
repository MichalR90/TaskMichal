import questionData from "../data/questions.json";
import { QuestionItem } from "./Questions";
import "./FrequentlyAskedQuestions.css";
function FrequentlyAskedQuestions() {
  return (
    <>
      <div className="component-bottom">
        <div className="component-bottom-title">
          <span>Frequently Asked Questions</span>
        </div>
        <div className="component-bottom-text">
          <span>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </span>
        </div>
        <div className="component-bottom-questions-list">
          <ul>
            {questionData.questionsList.map((q, index) => (
              <QuestionItem
                key={index}
                question={q.question}
                answer={q.answer}
              />
            ))}
          </ul>
        </div>
        <div className="component-bottom-button">
          <button>More info</button>
        </div>
      </div>
    </>
  );
}
export default FrequentlyAskedQuestions;
