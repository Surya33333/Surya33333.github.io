import React from "react";
import "./Chart.scss";
import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
{name:"January" , total:1200},
{name:"Febraury" , total:1800},
{name:"March" , total:1100},
{name:"April" , total:1500},
{name:"May" , total:1400},
{name:"June" , total:1300},
{name:"July" , total:600},
{name:"August" , total:900},
{name:"September" , total:1000},
{name:"October" , total:900},
{name:"November" , total:560},
{name:"December" , total:690},
];


const Chart = () => {
    return (
        <div className="chart">
            <div className="title">Last 6 Months Revenue</div>
            <ResponsiveContainer width="100%" aspect={2/1} >
                <AreaChart width={730} height={250} data={data} 
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" fontWeight="bold" fontSize="x-small"/>
                    <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart