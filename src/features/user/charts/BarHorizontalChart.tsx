import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import { Repo } from "../../../types/reposTypes";

type BarHorizontalChartProps = {
  data: Repo[];
};

const BarHorizontalChart: React.FC<BarHorizontalChartProps> = ({ data }) => {
  const barData = {
    labels: data.map((i: { name: string }) => i.name),
    datasets: [
      {
        label: "Most Starred Repos",
        data: data.map((i: { stargazers_count: number }) => i.stargazers_count),
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

  const options: ChartOptions = {
    indexAxis: "y",
    responsive: true,
  };

  return (
    <>
      <Bar data={barData} options={options} />
    </>
  );
};

export default BarHorizontalChart;
