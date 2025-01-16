import {motion} from 'framer-motion';
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react';

import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import DailyOrders from '../components/orders/DailyOrders';
import OrderDistribution from '../components/orders/OrderDistribution';
import OrdersTable from '../components/orders/OrdersTable';

const ORDERS_STAT = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
};

const ORDERS_STAT_DATA = [
    {name: 'Total Orders', icon: ShoppingBag, value: ORDERS_STAT.totalOrders, color: '#6366f1'},
    {name: 'Pending Orders', icon: Clock, value: ORDERS_STAT.pendingOrders, color: '#f59e0b'},
    {name: 'Complete Orders', icon: CheckCircle, value: ORDERS_STAT.completedOrders, color: '#10b981'},
    {name: 'Total Revenue', icon: DollarSign, value: ORDERS_STAT.totalOrders, color: '#ef4444'}
];

const OrdersPage = () => {
  return (
    <div className='flex-1 relative z-10 overflow-auto'>
        <Header title='Orders' />

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            <motion.div
                className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                {ORDERS_STAT_DATA.map((data) => (
                    <StatCard 
                        key={data.name}
                        name={data.name}
                        icon={data.icon}
                        value={data.value}
                        color={data.color}
                    />
                ))}
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                <DailyOrders />
                <OrderDistribution />
            </div>

            <OrdersTable />
        </main>
    </div>
  )
}

export default OrdersPage