import React from "react";
import { Pie } from "react-chartjs-2";
import { dataset } from "../data";

const PieChart = () => {
  const chartData = {
    labels: dataset.map((d) => d.year),
    datasets: [
      {
        label: "Random test",
        data: dataset.map((d) => d.customersGained),
        backgroundColor: ["red", "green", "blue", "indigo", "violet", "gold"],
        hoverOffset: 25,
      },
    ],
  };

  return (
    <div className="pie-container">
      <Pie data={chartData} width={700} height={500} />
    </div>
  );
};

export default PieChart;
