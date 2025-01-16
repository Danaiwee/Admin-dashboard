import {motion} from 'framer-motion';
import { CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

const ORDER_STATUS_DATA = [
    { name: "Pending", value: 30 },
	{ name: "Processing", value: 45 },
	{ name: "Shipped", value: 60 },
	{ name: "Delivered", value: 120 },
];

const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];

const OrderDistribution = () => {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>
            Order Status Distribution
        </h2>
        <div style={{width: '100%', height: 300}}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={ORDER_STATUS_DATA}
                        cx='50%'
                        cy='50%'
                        outerRadius={100}
                        fill='#8884d8'
                        dataKey='value'
                        label={({name, percent}) => `${name} ${(percent*100).toFixed(0)}%`}
                    >
                        {ORDER_STATUS_DATA.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`}
                                fill={COLORS[index]}
                            />
                        ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default OrderDistribution;