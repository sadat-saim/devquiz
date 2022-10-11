import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Cards = () => {
  const topics = useLoaderData().data;

  return (
    <div className="container mx-auto my-10">
      <h1 className="md:text-5xl lg:text-5xl text-4xl font-bold m-4">
        Test Your Skills
      </h1>
      <p className="text-lg font-semibold m-4 text-gray-500">
        Conquer your next coding interview with dev quizes
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mx-4">
        {topics.map((topic) => (
          <Card key={topic.id} topic={topic}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
