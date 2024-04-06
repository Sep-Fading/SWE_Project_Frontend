import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Unique registration inside the component to avoid conflicts
const registerChartJS = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
};

const LineChart = () => {
  registerChartJS();

  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My Dataset",
        data: [65, 59, 80, 150, 56, 55, 45],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.2,
        backgroundColor: "rgb(75, 192, 192, 0.2)",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    plugins: {
      p1: false,
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#868684",
          lineWidth: 2, // Changes the border width of the x-axis
        },
      },
      x: {
        grid: {
          color: "#868684",
          lineWidth: 2, // Changes the border width of the x-axis
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <div className="h-full w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
