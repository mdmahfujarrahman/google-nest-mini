import React from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Dashboard = () => {
    const data = [
        {
            id: 1,
            month: "Mar",
            investment: 100000,
            sell: 200000,
            revenue: 90000,
        },
        {
            id: 2,
            month: "Apr",
            investment: 200000,
            sell: 150000,
            revenue: 50000,
        },
        {
            id: 3,
            month: "May",
            investment: 500000,
            sell: 50000,
            revenue: 67010,
        },
        {
            id: 4,
            month: "Jun",
            investment: 500000,
            sell: 59000,
            revenue: 40405,
        },
        {
            id: 5,
            month: "Jul",
            investment: 600000,
            sell: 49000,
            revenue: 50900,
        },
        {
            id: 6,
            month: "Aug",
            investment: 700000,
            sell: 100000,
            revenue: 61000,
        },
    ];
    return (
        <div className="mt-36">
            <h5 className="text-center text-4xl brand-color font-semibold my-10">
                Google Next Mini{" "}
                <span className="text-blue-700">product analytics reports</span>
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h1 className="text-center text-xl text-blue-700 my-4">
                        Investment vs Revenue
                    </h1>

                    <AreaChart
                        className="mx-auto"
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="investment"
                            stackId="1"
                            stroke="#1D4ED8"
                            fill="#1D4ED8"
                        />
                        <Area
                            type="monotone"
                            dataKey="sell"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stackId="1"
                            stroke="#ffc658"
                            fill="#ffc658"
                        />
                    </AreaChart>
                </div>
                <div>
                    <h1 className="text-center text-xl text-blue-700 my-4">
                        Montly Sell
                    </h1>
                    <BarChart
                        className="mx-auto"
                        width={500}
                        height={400}
                        data={data}
                    >
                        <Bar dataKey="sell" fill="#7795E8" />
                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                </div>
                <div>
                    <h1 className="text-center text-xl text-blue-700 my-4">
                        Investment vs Revenue
                    </h1>
                    <BarChart
                        className="mx-auto"
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="investment"
                            fill="#8884d8"
                            background={{ fill: "#eee" }}
                        />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                    </BarChart>
                </div>
                <div>
                    <h1 className="text-center text-xl text-blue-700 my-4">
                        Investment vs Revenue
                    </h1>

                    <LineChart
                        className="mx-auto"
                        width={500}
                        height={400}
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            padding={{ left: 30, right: 30 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="investment"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#82ca9d"
                        />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
