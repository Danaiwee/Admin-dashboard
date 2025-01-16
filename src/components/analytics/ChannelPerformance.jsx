import {motion} from 'framer-motion';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

const CHANNEL_DATA = [
    { name: "Organic Search", value: 4000 },
	{ name: "Paid Search", value: 3000 },
	{ name: "Direct", value: 2000 },
	{ name: "Social Media", value: 2780 },
	{ name: "Referral", value: 1890 },
	{ name: "Email", value: 2390 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F"];

const ChannelPerformance = () => {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{opacity: 0, y:20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.3}}
    >   
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Channel Performance</h2>
        <div style={{width: '100%', height: 300}}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={CHANNEL_DATA}
                        cx='50%'
                        cy='50%'
                        outerRadius={100}
                        dataKey='value'
                        label={(({name, percent}) => `${name} ${(percent*100).toFixed(0)}%`)}
                    >
                        {CHANNEL_DATA.map((entry, index) => (
                            <Cell 
                                key={index}
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

export default ChannelPerformance