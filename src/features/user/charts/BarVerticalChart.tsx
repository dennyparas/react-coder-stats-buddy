import React from "react";
import { Bar } from "react-chartjs-2";
import { Repo } from "../../../types/reposTypes";
import { ChartOptions } from "chart.js";

type BarVerticalChartProps = {
  data: Repo[];
};

const BarVerticalChart: React.FC<BarVerticalChartProps> = ({ data }) => {
  const barData = {
    labels: data.map((i: { name: string }) => i.name),
    datasets: [
      {
        label: "Most Forked Repos",
        data: data.map((i: { forks_count: number }) => i.forks_count),
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
    responsive: true,
  };

  return (
    <>
      <Bar data={barData} options={options} />
    </>
  );
};

export default BarVerticalChart;
