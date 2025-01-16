import {motion} from 'framer-motion';
import { Bar, BarChart, CartesianGrid, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SALES_CHENNEL_DATA = [
    { name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SaleChannelChart = () => {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border'
        initial={{opacity: 0, y: 0}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.4}}
    >
        <h2 className='text-lg font-medium mb-4 text-gray-100'>
            Sales by Channel
        </h2>

        <div className='h-80'>
            <ResponsiveContainer>
                <BarChart data={SALES_CHENNEL_DATA}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#4b5563' />
                    <XAxis dataKey='name' stroke='#9ca3af' />
                    <YAxis dataKey='value' stroke='#9ca3af' />
                    <Tooltip 
                        contentStyle={{
                            backgroundColor: 'rgba(31, 41, 55, 0.8)',
                            borderColor: '#4b5563'
                        }}
                        itemStyle={{color: '#ese7eb'}}
                    />
                    <Legend />
                    <Bar dataKey={'value'} fill='#8884d8'>
                        {SALES_CHENNEL_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Bar>  
                </BarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default SaleChannelChart