import React from "react";
import { Line } from "react-chartjs-2";
import { dataset } from "../data";
import { useSelector } from "react-redux";

const LineChart = () => {
  const line = useSelector((state) => state.line.value);

  const chartData = {
    labels: line.labels,
    datasets: [
      {
        label: line.label,
        data: line.data,
        backgroundColor: "red",
        borderColor: "red",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} width={1100} height={650} />
    </div>
  );
};

export default LineChart;
