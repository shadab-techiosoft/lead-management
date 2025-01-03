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
            colors: ["#0479D0"],
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
                        color: "#0479D0",
                        opacity: 0.7,
                    },
                    {
                        offset: 100,
                        color: "#0479D0",
                        opacity: 0.2,
                    },
                ],
            },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: {
                style: {
                    colors: "#0479D0",
                    fontSize: "14px",
                },
            },
            axisBorder: {
                color: "#0479D0",
            },
            axisTicks: {
                color: "#0479D0",
            },
        },
        yaxis: {
            min: 10,
            max: 60,
            tickAmount: 5,
            labels: {
                style: {
                    colors: "#0479D0",
                    fontSize: "14px",
                },
            },
            axisBorder: {
                color: "#0479D0",
            },
            axisTicks: {
                color: "#0479D0",
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
                return `<div style="background-color: #fff; padding: 10px; border-radius: 5px; border: 1px solid #0479D0;">
                                <span style="color: #0479D0; font-weight: bold;">${w.globals.seriesNames[seriesIndex]}:</span> 
                                <span style="color: #0479D0;">${series[seriesIndex][dataPointIndex]}</span>
                            </div>`;
            },
        },
        annotations: {
            yaxis: [
                {
                    y: 50,
                    borderColor: "#0479D0",
                    label: {
                        borderColor: "#0479D0",
                        style: {
                            color: "#fff",
                            background: "#0479D0",
                        },
                        text: "High Threshold",
                    },
                },
            ],
            xaxis: [
                {
                    x: "Jun",
                    borderColor: "#0479D0",
                    label: {
                        borderColor: "#0479D0",
                        style: {
                            background: "#0479D0",
                        },
                        text: "Mid-Year",
                    },
                },
            ],
        },
        responsive: [
            {
                breakpoint: 1024,
                options: {
                    chart: {
                        height: 300,
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: "12px",
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize: "12px",
                            },
                        },
                    },
                },
            },
            {
                breakpoint: 768,
                options: {
                    chart: {
                        height: 250,
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: "10px",
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize: "10px",
                            },
                        },
                    },
                },
            },
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 200,
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: "8px",
                            },
                        },
                    },
                    yaxis: {
                        labels: {
                            style: {
                                fontSize: "8px",
                            },
                        },
                    },
                },
            },
        ],
    };

    const chartSeries = [
        {
            name: "Leads",
            backgroundColor: "#fff",
            color: "#0479D0",
            data: [40, 30, 20, 25, 15, 20, 30, 25, 40, 35, 20, 15],
        },
    ];

    return (
        <div className="p-4 mt-10 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
                <h3 className="text-lg font-medium text-lightblue">Leads by date</h3>
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
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
