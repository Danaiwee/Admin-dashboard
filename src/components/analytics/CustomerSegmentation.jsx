import {motion} from 'framer-motion';
import { Legend, Radar, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, ResponsiveContainer } from 'recharts';

const CUSTOMER_SEGMENT_DATA = [
    { subject: "Engagement", A: 120, B: 110, fullMark: 150 },
	{ subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
	{ subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
	{ subject: "Spend", A: 99, B: 100, fullMark: 150 },
	{ subject: "Frequency", A: 85, B: 90, fullMark: 150 },
	{ subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const CustomerSegmentation = () => {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{opacity: 0, y:20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.3}}
    >
        <h2 className='text-xl font-semibold text-gray-100 mb-4'>Customer Segmentation</h2>
        <div style={{width: '100%', height: 300}}>
            <ResponsiveContainer>
                <RadarChart cx='50%' cy='50%' outerRadius='80%' data={CUSTOMER_SEGMENT_DATA}>
                    <PolarGrid stroke='#374151' />
                    <PolarAngleAxis dataKey='subject' stroke='#9CA3AF' />
					<PolarRadiusAxis angle={30} domain={[0, 150]} stroke='#9CA3AF' />
					<Radar name='Segment A' dataKey='A' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.6} />
					<Radar name='Segment B' dataKey='B' stroke='#10B981' fill='#10B981' fillOpacity={0.6} />
					<Legend />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default CustomerSegmentation;