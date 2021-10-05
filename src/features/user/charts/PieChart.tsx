import React from "react";
import { Pie } from "react-chartjs-2";

type PieChartProps = {
  data: { value: number; label: string; stars: number }[];
};

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const pieData = {
    labels: data.map((i: { label: string }) => i.label),
    datasets: [
      {
        label: "Most Used Language ",
        data: data.map((i: { value: number }) => i.value),
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <>
      <Pie data={pieData} />
    </>
  );
};

export default PieChart;
