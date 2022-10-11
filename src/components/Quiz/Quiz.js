import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";

const Quiz = () => {
  const { id, logo, name, questions, total } = useLoaderData().data;
  //   console.log(quizes);
  return (
    <div className="container mx-auto">
      <img className="block mx-auto w-1/5" src={logo} alt={name} />
      <h2 className="text-xl text-center font-bold">{name}</h2>
      {questions.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz}></QuizCard>
      ))}
    </div>
  );
};

export default Quiz;