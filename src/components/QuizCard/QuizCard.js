import React, { useState } from "react";
import "./QuizCard.css";
import { ToastContainer, toast } from "react-toastify";
import parse from "html-react-parser";
import "react-toastify/dist/ReactToastify.css";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const QuizCard = ({ quiz }) => {
  const [rightAnswer, setRightAnswer] = useState(false);
  const { question, options, correctAnswer, id } = quiz;
  const alpArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  console.log(quiz);

  const handleAnswer = (option) => {
    setRightAnswer(true);
    option === correctAnswer
      ? toast.success("Correct")
      : toast.error("Incorrect");
  };

  const handleShowAnswer = () => {
    setRightAnswer(true);
    toast.success(correctAnswer);
  };

  return (
    <div>
      <div className="p-4 lg:w-2/3 md:w-4/5 w-11/12 mx-auto my-3 rounded-md">
        <div className="font-bold text-2xl mb-6 flex justify-between">
          <div className="question">{parse(question)}</div>
          <CheckCircleIcon
            onClick={handleShowAnswer}
            className="h-full w-7 self-center cursor-pointer text-green-400"
          />
        </div>
        <div>
          <ul className="options">
            {options.map((option, idx) => (
              <li
                key={id + option}
                onClick={() => handleAnswer(option)}
                className={
                  rightAnswer
                    ? option === correctAnswer
                      ? "px-2 py-1 my-2 flex success"
                      : "px-2 py-1 my-2 flex error"
                    : "px-2 py-1 my-2 flex"
                }
              >
                <span className="marker"> {alpArr[idx]}</span>{" "}
                <span className="self-center">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
    </div>
  );
};

export default QuizCard;
