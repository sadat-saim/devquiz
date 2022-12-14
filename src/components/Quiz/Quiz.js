import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../QuizCard/QuizCard";

const Quiz = () => {
  const { logo, name, questions } = useLoaderData().data;
  return (
    <div className="container mx-auto">
      <img
        className="block mx-auto mt-4 bg-slate-300 rounded-md w-1/5"
        src={logo}
        alt={name}
      />
      <h2 className="text-5xl text-center font-bold">{name}</h2>
      {questions.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz}></QuizCard>
      ))}
    </div>
  );
};

export default Quiz;
