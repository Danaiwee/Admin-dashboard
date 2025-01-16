import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react"
import Header from "../components/common/Header"
import StatCard from "../components/common/StatCard";
import {motion} from 'framer-motion';
import SaleOverviewChart from "../components/overview/SaleOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SaleChannelChart from "../components/overview/SaleChannelChart";

const STAT_CARDS = [
    {name: 'Total Sales', icon: Zap, value: '$12,345', color: '#6366F1'},
    {name: 'New Users', icon: Users, value: '1,234', color: '#8B5CF6'},
    {name: 'Total Products', icon: ShoppingBag, value: '567', color: '#EC4899'},
    {name: 'Conversation Rate', icon: BarChart2, value: '12.5%', color: '#10B981'} 
 ];   

const OverviewPage = () => {
 

  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title='Overviews'  />

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

            {/*STATS*/}
            <motion.div
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            >
                {STAT_CARDS.map((data) => (
                    <StatCard 
                        key={data.name}
                        name={data.name}
                        icon={data.icon}
                        value={data.value}
                        color={data.color}
                    />
                ))}
            </motion.div>

            {/*CHARTS*/}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <SaleOverviewChart />
                <CategoryDistributionChart />
                <SaleChannelChart />
            </div>
        </main>
    </div>
  )
}

export default OverviewPage