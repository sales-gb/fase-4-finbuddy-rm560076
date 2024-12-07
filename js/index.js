// Seleciona o elemento do canvas para o gráfico
const spendingChartElement = document.getElementById("spendingChart");

// Dados para o gráfico
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

// Configuração do gráfico
const chartConfig = {
  type: "pie", // Pode ser 'bar', 'line', 'pie', etc.
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

// Inicializa o gráfico
if (spendingChartElement) {
  new Chart(spendingChartElement, chartConfig);
}
