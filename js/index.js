const spendingChartElement = document.getElementById("spendingChart");

const chartData = {
  labels: ["Alimentação", "Transporte", "Lazer", "Contas", "Outros"],
  datasets: [
    {
      label: "Gastos (R$)",
      data: [500, 200, 300, 800, 150],
      backgroundColor: ["#7d5df6", "#dafc50", "#ff7c43", "#ffa600", "#f95d6a"],
    },
  ],
};

const chartConfig = {
  type: "pie",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
};

if (spendingChartElement) {
  new Chart(spendingChartElement, chartConfig);
}
