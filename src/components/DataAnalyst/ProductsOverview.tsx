import Chart from "react-apexcharts";
import { motion } from "framer-motion";

const ProductsOverview = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
      },
    },
    colors: ["#2B6CB0", "#48BB78", "#E53E3E", "#ED64A6"], // Blue, Green, Red, Pink
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Total Products", "Total Win", "Total Lost", "Total Active"],
    },
    tooltip: {
      theme: "dark",
    },
  };

  const chartSeries = [
    {
      name: "Products",
      data: [70, 5, 10, 50],
    },
  ];

  return (
    <motion.div
      className="bg-blue-50 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center text-lg font-semibold mb-4 text-lightblue">Products Overview</h2>
      <div className="w-full">
        <Chart options={chartOptions} series={chartSeries} type="bar" height="300" />
      </div>
    </motion.div>
  );
};

export default ProductsOverview;
