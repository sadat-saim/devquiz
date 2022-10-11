import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const Stats = () => {
  const data = useLoaderData().data;

  return (
    <div className="container mx-auto grid place-items-center">
      <p className="mx-2 my-6">Topics and Number of Quiz</p>
      <ResponsiveContainer width="70%" minWidth={360} height={250}>
        <BarChart data={data} margin={{ left: -40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
