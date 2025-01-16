import {motion} from 'framer-motion';
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import SalesOverviewChart from '../components/sales/SalesOverviewChart';
import SalesByCategoryChart from '../components/sales/SalesByCategoryChart';
import DailySalesTrend from '../components/sales/DailySalesTrend';

const SALES_STAT = {
    totalRevenue: "$1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
}

const STATS_DATA = [
    {name: 'Total Revenue', icon: DollarSign, value: SALES_STAT.totalRevenue, color:'#6366f1'},
    {name: 'Avg. Order value', icon: ShoppingCart, value: SALES_STAT.averageOrderValue, color: '#10b981'},
    {name: 'Conversation Rate', icon: TrendingUp, value: SALES_STAT.conversionRate, color: '#f59e0b'},
    {name: 'Sales Growth', icon: CreditCard, value: SALES_STAT.conversionRate, color: '#ef4444'}
];

const SalesPage = () => {  
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title='Sales Dashboard' />

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

            {/*Sale stat*/}
            <motion.div
                className='grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                {STATS_DATA.map((data) => (
                    <StatCard 
                        key={data}
                        name={data.name}
                        icon={data.icon}
                        value={data.value}
                        color={data.color}
                    />
                ))}
            </motion.div>

            <SalesOverviewChart />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <SalesByCategoryChart />
                <DailySalesTrend />
            </div>
        </main>
    </div>
  )
}

export default SalesPage