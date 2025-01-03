import Chart from "react-apexcharts";
import { motion } from "framer-motion";

const ProductsAmountOverview = () => {
    const chartOptions = {
        chart: {
            type: "donut" as "donut",
        },
        labels: ["Win Amount", "Lost Amount", "Pending Amount"],
        colors: ["#48BB78", "#805AD5", "#ED8936"], 
        tooltip: {
            theme: "dark",
        },
        legend: {
            position: "top" as "top",
            labels: {
                colors: "#fff",
            },
        },
    };

    const chartSeries = [30, 20, 50]; 
    return (
        <motion.div
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-center text-lg font-semibold mb-7 text-lightblue">Products Amount Overview</h2>
            <div className="w-full">
                <Chart options={chartOptions} series={chartSeries} type="donut" height="300" />
            </div>
        </motion.div>
    );
};

export default ProductsAmountOverview;
