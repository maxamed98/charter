import React from "react";
import { Line } from "react-chartjs-2";
import { dataset } from "../data";

const LineChart = () => {
  const chartData = {
    labels: dataset.map((d) => d.year),
    datasets: [
      {
        label: "Random test",
        data: dataset.map((d) => d.customersGained),
        backgroundColor: "red",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} width={1100} height={700} />
    </div>
  );
};

export default LineChart;
