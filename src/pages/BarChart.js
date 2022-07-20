import React from "react";
import { Bar } from "react-chartjs-2";
import { dataset } from "../data";
import { useSelector } from "react-redux";

const BarChart = () => {
  const bar = useSelector((state) => state.bar.value);
  // console.log(bar);
  const chartData = {
    labels: bar.labels,
    datasets: [
      {
        label: bar.label,
        data: bar.data,
        backgroundColor: ["red", "green", "blue", "indigo", "violet", "gold"],
      },
    ],
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} width={1100} height={650} />
    </div>
  );
};

export default BarChart;
