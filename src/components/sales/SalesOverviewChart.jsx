import {motion} from 'framer-motion';
import { useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MONTHLY_SALE_DATA = [
    { month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
	{ month: "Jul", sales: 7000 },
];

const SalesOverviewChart = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('This Week') 
    
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.3}}
    >
        <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Sales Overview</h2>

            <select
                className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
            >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Quarter</option>
                <option>This Year</option>
            </select>
        </div>

        <div className='w-full h-80'>
            <ResponsiveContainer>
                <AreaChart data={MONTHLY_SALE_DATA}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='month' stroke='#9ca3af' />
                    <YAxis dataKey='sales' stroke='#9ca3af' />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: 'rgba(31,41,55,0.8)',
                            borderColor: '#4b5563'
                        }}
                        itemStyle={{color: '#e5e7eb'}}
                    />
                    <Area 
                        type='monotone' 
                        dataKey='sales' 
                        stroke='#885cf6' 
                        fill='#8b5cf6' 
                        fillOpacity={0.3}    
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesOverviewChart