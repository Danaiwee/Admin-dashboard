import {motion} from 'framer-motion';
import { UserCheck, UserIcon, UserPlus, UserX } from 'lucide-react';

import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import UsersTable from '../components/user/UsersTable';
import UserGrowthChart from '../components/user/UserGrowthChart';
import UserActivityHeatmap from '../components/user/UserActivityHeatmap';
import UserDemographicsChart from '../components/user/UserDemographicsChart';

const USERS_STAT = {
    totalUsers: 152845,
    newUsersToday: 243,
    activeUsers: 98520,
    churnRate: "2.4%"
};

const STATS_DATA = [
    {name: 'Total Users', icon: UserIcon, value: USERS_STAT.totalUsers, color: '#6366f1' },
    {name: 'New Users Today', icon: UserPlus, value: USERS_STAT.newUsersToday, color: '#10b981'},
    {name: 'Active Users', icon: UserCheck, value: USERS_STAT.activeUsers, color: '#f59e0b'},
    {name: 'Churn Rate', icon: UserX, value: USERS_STAT.churnRate, color: '#ef4444'}
];

const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-20'>
        <Header title='Users' />

        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            {/*STATS*/}
            <motion.div
                className='grid grid-col-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                {STATS_DATA.map((data) => (
                    <StatCard 
                        key={data.name}
                        name={data.name}
                        icon={data.icon}
                        value={data.value.toLocaleString()}
                        color={data.color}
                    />
                ))}
            </motion.div>

            <UsersTable />

            {/*User chart*/}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
                <UserGrowthChart />
                <UserActivityHeatmap />
                <UserDemographicsChart />
            </div>
        </main>
    </div>
  )
}

export default UsersPage;