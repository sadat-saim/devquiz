import React from "react";
import "./QuizCard.css";

const QuizCard = ({ quiz }) => {
  const { question, options, correctAnswer, id } = quiz;
  const alpArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  console.log(quiz);
  return (
    <div>
      <div className="p-4 lg:w-2/3 md:w-4/5 w-11/12 mx-auto my-3 rounded-md">
        <div className="font-bold text-2xl mb-6">{[question]}</div>
        <div>
          <ul className="options">
            {options.map((option, idx) => (
              <li key={id + option} className="px-2 py-1 my-2 flex">
                <span className="marker "> {alpArr[idx]}</span> {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
