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
  Plugin,
} from "chart.js";

interface LineChartProps {
  labels: string[];
  data: number[];
}

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

const totalExpensesPlugin: Plugin<"doughnut"> = {
  id: "totalExpensesPlugin", // Unique ID
  beforeDraw: (chart) => {
    console.log(chart);
  },
};

const LineChart = ({ labels, data }: LineChartProps) => {
  registerChartJS();

  const dataset = {
    labels: labels,
    datasets: [
      {
        label: "Monthly Expenses",
        data: data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.2,
        backgroundColor: "rgb(75, 192, 192, 0.2)",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (context.parsed.y !== null) {
              label += ": " + context.parsed.y + " £";
            }
            return label;
          },
        },
      },
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

  return <Line data={dataset} options={options} />;
};

export default LineChart;
