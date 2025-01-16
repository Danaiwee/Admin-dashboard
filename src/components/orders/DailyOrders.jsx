import {motion} from 'framer-motion';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const DAILY_ORDER_DATA = [
  { date: "07/01", orders: 45 },
	{ date: "07/02", orders: 52 },
	{ date: "07/03", orders: 49 },
	{ date: "07/04", orders: 60 },
	{ date: "07/05", orders: 55 },
	{ date: "07/06", orders: 58 },
	{ date: "07/07", orders: 62 },
];

const DailyOrders = () => {
  return (
    <motion.div 
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
    >
      <h2 className='text-xl font-semibold text-gray-100 mb-4'>Daily Orders</h2>
      <div style={{width: '100%', height: 300}}>
        <ResponsiveContainer>
          <LineChart data={DAILY_ORDER_DATA}>
            <CartesianGrid strokeDasharray='3 3' stroke='#375151' />
            <XAxis dataKey='date' stroke='#9ca3af' />
            <YAxis dataKey='orders' stroke='#9ca3af' />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(31, 41, 55, 0.8)',
                borderColor: '#4b5563'
              }}
              itemStyle={{color: '#e5e7eb'}}
            />
            <Legend />
            <Line 
              type='monotone'
              dataKey='orders'
              stroke='#8b5cf6'
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default DailyOrders