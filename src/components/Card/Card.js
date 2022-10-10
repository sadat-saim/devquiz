import React from "react";
import { Link } from "react-router-dom";

const Card = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="card glass rounded-md">
        <figure>
          <img src={logo} className="w-full bg-gray-300" alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-left">Total quiz: {total} </p>
          <div className="card-actions justify-end">
            <Link to={`/quiz/${id}`}>
              <button className="btn btn-primary bg-violet-400 text-gray-900 border-0">
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
