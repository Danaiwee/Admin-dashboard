import {motion} from 'framer-motion';
import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const REVENUE_DATA = [
    { month: "Jan", revenue: 4000, target: 3800 },
	{ month: "Feb", revenue: 3000, target: 3200 },
	{ month: "Mar", revenue: 5000, target: 4500 },
	{ month: "Apr", revenue: 4500, target: 4200 },
	{ month: "May", revenue: 6000, target: 5500 },
	{ month: "Jun", revenue: 5500, target: 5800 },
	{ month: "Jul", revenue: 7000, target: 6500 },
];

const RevenueChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('This Month');

  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.3}}
    >
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Revenue vs target</h2>
            <select
                className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
            >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Quarter</option>
                <option>This Year</option>
            </select>
        </div>

        <div style={{width:'100%', height: 400}}>
            <ResponsiveContainer>
                <AreaChart data={REVENUE_DATA}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='month' stroke='#9ca3af' />
                    <YAxis stroke='#9ca3af' />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: 'rgba(31, 41, 55, 0.8)',
                            borderColor: '#e5e7eb'
                        }}
                        itemStyle= {{color: '#e5e7eb' }}
                    />
                    <Legend />
                    <Area 
                        type='monotone'
                        dataKey='revenue'
                        stroke='#8b5cf6'
                        fill='#8b5cf6'
                        fillOpacity={0.3}
                    />
                    <Area 
                        type='monotone'
                        dataKey='target'
                        stroke='#10b981'
                        fill='#10b981'
                        fillOpacity={0.3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default RevenueChart