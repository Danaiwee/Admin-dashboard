import {motion} from 'framer-motion';
import { DollarSign, Package, TrendingUp } from 'lucide-react';

import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';

import ProductTable from '../components/product/ProductTable';
import SalesTrendChart from '../components/product/SalesTrendChart';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';

const PRODUCTS_DATA = [
  {name: 'Total Products', icon: Package, value: 1234, color: '#6366f1' },
  {name: 'Top Selling', icon: TrendingUp, value: 89, color: '#10b981'},
  {name: 'Low Stock', icon: DollarSign, value: 23 , color: '#ef4444'},
  {name: 'Total Revenue', icon: DollarSign, value: '$543,210', color: '#ef4444' }
];

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Products' />
      
      <main className='max-x-7xl mx-auto py-6 px-4 lg:px-8'>
        {/*STAT*/}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        > 
          {PRODUCTS_DATA.map((data) => (
            <StatCard 
              key={data.name}
              name={data.name}
              value={data.value}
              icon={data.icon}
              color={data.color}
            />
          ))}
        </motion.div>

        <ProductTable />

        {/*CHARTS*/}
        <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>  
  )
}

export default ProductsPage