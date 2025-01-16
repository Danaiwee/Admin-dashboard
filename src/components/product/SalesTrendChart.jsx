import {motion} from 'framer-motion';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SALES_DATA = [
    { month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
];

const SalesTrendChart = () => {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg p-6 border border-gray-700'
        initial={{opacity: 0, y:20}}
        animate={{opacity: 1, y:0}}
        transition={{delay: 0.3}}
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Sales Tred</h2>
        <div style={{width: "100%", height: 300}}>
            <ResponsiveContainer>
                <LineChart data={SALES_DATA}>   
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='month' stroke='#9ca3af' />
                    <YAxis dataKey='sales' stroke='#9ca3af' />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: 'rgba(31, 41, 55, 0.8)',
                            borderColor: '#4b5563'
                        }}
                        itemStyle={{color: '#e5e7eb'}}
                    />
                    <Legend />
                    <Line type='monotone' dataKey='sales' stroke='#885cf6' strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SalesTrendChart;