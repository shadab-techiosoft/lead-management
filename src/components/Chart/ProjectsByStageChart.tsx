
import React from "react";
import Chart from "react-apexcharts";

const ProjectsByStageChart: React.FC = () => {
    const chartOptions: ApexCharts.ApexOptions = {
        chart: {
            type: "area",
            height: "100%",
            toolbar: {
                show: false,
            },
            animations: {
                enabled: true,
                easing: "easeinout",
                speed: 800,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
            colors: ["#E43C13"],
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "light",
                type: "vertical",
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: "#E43C13",
                        opacity: 0.7,
                    },
                    {
                        offset: 100,
                        color: "#E43C13",
                        opacity: 0.2,
                    },
                ],
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {
                style: {
                    colors: "#E43C13",
                    fontSize: "14px",
                },
            },
            axisBorder: {
                color: "#E43C13",
            },
            axisTicks: {
                color: "#E43C13",
            },
        },
        yaxis: {
            min: 10,
            max: 60,
            tickAmount: 5,
            labels: {
                style: {
                    colors: "#E43C13",
                    fontSize: "14px",
                },
            },
            axisBorder: {
                color: "#E43C13",
            },
            axisTicks: {
                color: "#E43C13",
            },
        },
        grid: {
            strokeDashArray: 5,
            borderColor: "#D1D5DB",
        },
        tooltip: {
            theme: "light",
            style: {
                fontSize: "14px",
            },
            onDatasetHover: {
                highlightDataSeries: true,
            },
            marker: {
                show: true,
            },
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                return `<div style="background-color: #F8F7E5; padding: 10px; border-radius: 5px; border: 1px solid #E43C13;">
                                <span style="color: #E43C13; font-weight: bold;">${w.globals.seriesNames[seriesIndex]}:</span> 
                                <span style="color: #E43C13;">${series[seriesIndex][dataPointIndex]}</span>
                            </div>`;
            },
        },
        annotations: {
            yaxis: [
                {
                    y: 50,
                    borderColor: "#E43C13",
                    label: {
                        borderColor: "#E43C13",
                        style: {
                            color: "#fff",
                            background: "#E43C13",
                        },
                        text: "High Threshold",
                    },
                },
            ],
            xaxis: [
                {
                    x: "Jun",
                    borderColor: "#E43C13",
                    label: {
                        borderColor: "#E43C13",
                        style: {

                            background: "#E43C13",
                        },
                        text: "Mid-Year",
                    },
                },
            ],
        },
    };

    const chartSeries = [
        {
            name: "Projects",
            backgroundColor: "#F8F7E5",
            color: "#E43C13",
            data: [40, 30, 20, 25, 15, 20, 30, 25, 40, 35, 20, 15],
        },
    ];

    return (
        <div className="p-4 mt-10 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-800">Projects By Stage</h3>
                <div className="flex items-center space-x-2">
                    <select
                        className="border border-gray-300 rounded px-2 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        defaultValue="Sales Pipeline"
                    >
                        <option>Sales Pipeline</option>
                        <option>Development Pipeline</option>
                    </select>
                    <select
                        className="border border-gray-300 rounded px-2 py-1 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        defaultValue="Last 30 Days"
                    >
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last Year</option>
                    </select>
                </div>
            </div>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="area"
                height={350}
            />
        </div>
    );
};

export default ProjectsByStageChart;
