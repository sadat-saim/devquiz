import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Cards = () => {
  const topics = useLoaderData().data;
  console.log(topics);
  return (
    <div className="container mx-auto my-16">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mx-4">
        {topics.map((topic) => (
          <Card key={topic.id} topic={topic}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
