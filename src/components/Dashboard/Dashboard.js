import React from "react";
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
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
import "./Dashboard.css";

const Dashboard = () => {
    const data = [
        {
            id: 1,
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401,
        },
        {
            id: 2,
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500,
        },
        {
            id: 3,
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010,
        },
        {
            id: 4,
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405,
        },
        {
            id: 5,
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900,
        },
        {
            id: 6,
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000,
        },
    ];
    return (
        <div className="mt-36">
            <h5>This is a dashboard page</h5>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h1>Investment vs Revenue</h1>

                    <AreaChart
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
                    <h1>Montly Sell</h1>
                    <BarChart width={500} height={400} data={data}>
                        <Bar dataKey="sell" fill="#7795E8" />
                        <XAxis dataKey={"month"}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                </div>
                <div>
                    <h1>Investment vs Revenue</h1>
                    <BarChart
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
                    <h1>Montly Sell</h1>
                    <PieChart width={500} height={400}>
                        <Pie
                            dataKey="investment"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
