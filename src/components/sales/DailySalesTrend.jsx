import {motion} from 'framer-motion';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DAILY_SALE_DATA = [
    { name: "Mon", sales: 1000 },
	{ name: "Tue", sales: 1200 },
	{ name: "Wed", sales: 900 },
	{ name: "Thu", sales: 1100 },
	{ name: "Fri", sales: 1300 },
	{ name: "Sat", sales: 1600 },
	{ name: "Sun", sales: 1400 },
];

const DailySalesTrend = () => {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3}}
    >   
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Sales Trend</h2>

        <div style={{width: '100%', height: 300}}>
            <ResponsiveContainer>
                <BarChart data={DAILY_SALE_DATA}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis dataKey='name' strok='#9ca2af' />
                    <YAxis dataKey='sales' stroke='#9ca2af' />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: 'rgba(31, 41, 55, 0.8)',
                            borderColor: '#4b5563'
                        }}
                        itemStyle={{color: '#e5e6eb'}}
                    />
                    <Bar dataKey='sales' fill='#10B981' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default DailySalesTrend