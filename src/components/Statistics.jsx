import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
    LineChart,
    PieChart,
    Pie,
    AreaChart,
} from 'recharts';

const Statistics = () => {

    const data = [
        {
            name: 'Assignment 1',
            mark: 57,
        },
        {
            name: 'Assignment 2',
            mark: 60,
        },
        {
            name: 'Assignment 3',
            mark: 60,
        },
        {
            name: 'Assignment 4',
            mark: 59,
        },
        {
            name: 'Assignment 5',
            mark: 60,
        },
        {
            name: 'Assignment 6',
            mark: 60,
        },
        {
            name: 'Assignment 7',
            mark: 60,
        },
        {
            name: 'Assignment 8',
            mark: 60,
        },

    ];

    return (
        <div className='default-container'>
            <h1 className='text-4xl font-bold text-center mt-8'>Assignment Marks</h1>
            <div className='mt-8'>


                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">

                        <AreaChart
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>

                    </ResponsiveContainer>
                </div>


            </div>
        </div>
    );
};

export default Statistics;