import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ChartOptions,
  ChartData,
  Plugin,
} from "chart.js";

// Unique registration inside the component to avoid conflicts
const registerChartJS = () => {
  ChartJS.register(ArcElement, Tooltip, Legend, Title);
};

// Local calculation of total expenses
const calculateTotalExpenses = (
  data: ChartData<"doughnut", number[], unknown>
): number => {
  return data.datasets[0].data.reduce((acc, current) => acc + current, 0);
};

// Custom hook for registering the plugin
const useTotalExpensesPlugin = () => {
  React.useEffect(() => {
    const totalExpensesPlugin: Plugin<"doughnut"> = {
      id: "p1", // Unique ID
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const totalExpenses = calculateTotalExpenses(chart.config.data);
        const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
        const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        ctx.save();
        ctx.font = "500 20px Roboto, sans-serif";
        ctx.fillStyle = "grey";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Total Expenses", centerX, centerY - 20);

        ctx.fillStyle = "black";
        ctx.font = "600 25px Roboto, sans-serif";
        ctx.fillText(`${totalExpenses} £`, centerX, centerY + 15);
        ctx.restore();
      },
    };

    ChartJS.register(totalExpensesPlugin);

    return () => {
      ChartJS.unregister(totalExpensesPlugin);
    };
  }, []);
};

const PieChart = () => {
  // Ensuring the registration of Chart.js components and plugins is scoped properly
  registerChartJS();
  useTotalExpensesPlugin();

  const data = {
    labels: ["Travel", "Meal", "Night Stay", "Gift"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100, 150],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#C9CBCF",
        ],
        hoverOffset: 4,
        cutout: "65%",
      },
    ],
  };

  const chartOptions: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        position: "right",
        title: {
          display: true,
          text: "Categories",
          font: {
            size: 16,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (context.parsed !== null) {
              label += ": " + context.parsed + " USD";
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg px-4 rounded-lg">
      <div className="">
        <Doughnut data={data} options={chartOptions} />
      </div>
    </div>
  );
};

export default PieChart;
