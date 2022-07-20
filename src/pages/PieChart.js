import React from "react";
import { Pie } from "react-chartjs-2";
import { dataset } from "../data";
import { useSelector } from "react-redux";

const PieChart = () => {
  const pie = useSelector((state) => state.pie.value);

  const chartData = {
    labels: pie.labels,
    datasets: [
      {
        label: pie.label,
        data: pie.data,
        backgroundColor: ["red", "green", "blue", "indigo", "violet", "gold"],
        hoverOffset: 5,
      },
    ],
  };

  return (
    <div className="pie-container">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
