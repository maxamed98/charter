import React from "react";
import { Bar } from "react-chartjs-2";
import { dataset } from "../data";

const BarChart = () => {
  const chartData = {
    labels: dataset.map((d) => d.year),
    datasets: [
      {
        label: "Random test",
        data: dataset.map((d) => d.customersGained),
        backgroundColor: ["red", "green", "blue", "indigo", "violet", "gold"],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} width={1100} height={700} />
    </div>
  );
};

export default BarChart;
