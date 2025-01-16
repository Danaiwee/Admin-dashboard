import {motion} from 'framer-motion';
import { Eye, Search } from 'lucide-react';
import { useState } from 'react';

const ORDERS_DATA =[
    { id: "ORD001", customer: "John Doe", total: 235.4, status: "Delivered", date: "2023-07-01" },
	{ id: "ORD002", customer: "Jane Smith", total: 412.0, status: "Processing", date: "2023-07-02" },
	{ id: "ORD003", customer: "Bob Johnson", total: 162.5, status: "Shipped", date: "2023-07-03" },
	{ id: "ORD004", customer: "Alice Brown", total: 750.2, status: "Pending", date: "2023-07-04" },
	{ id: "ORD005", customer: "Charlie Wilson", total: 95.8, status: "Delivered", date: "2023-07-05" },
	{ id: "ORD006", customer: "Eva Martinez", total: 310.75, status: "Processing", date: "2023-07-06" },
	{ id: "ORD007", customer: "David Lee", total: 528.9, status: "Shipped", date: "2023-07-07" },
	{ id: "ORD008", customer: "Grace Taylor", total: 189.6, status: "Delivered", date: "2023-07-08" },
];

const TABLE_HEAD_NAME = ['Order ID', 'Customer', 'Total', 'Status', 'Date', 'Actions'];

const style_td = 'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100';

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(ORDERS_DATA);
  
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = ORDERS_DATA.filter((data) => data.id.toLowerCase().includes(term) || data.customer.toLowerCase().includes(term) || data.status.toLowerCase().includes(term));

    setFilteredOrders(filtered)
  };
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg roundex-xl p-6 border border-gray-700 overflow-y-auto'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.3}}
    >
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Order List</h2>

            <div className='relative'>
              <input 
                type='text'
                placeholder='Search order...'
                className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search size={18} className='absolute left-3 top-2.5 text-gray-400' />
            </div>
        </div>

        <div className='overflow-x-auto overflow-y-auto'>
          <table className='min-w-full divide-y divide-gray-700'>
            <thead>
              <tr>
                {TABLE_HEAD_NAME.map((name) => (
                  <th
                    key={name}
                    className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className='divide divide-gray-700'>
              {filteredOrders.map((data) => (

                <motion.tr
                  key={data.id}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{delay: 0.3}}
                >
                  <td className={style_td}>{data.id}</td>
                  <td className={style_td}>{data.customer}</td>
                  <td className={style_td}>{data.total.toFixed(2)}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${data.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : data.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : data.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                      }`}>
                      {data.status}
                    </span>
                  </td>
                  <td className={style_td}>{data.date}</td>
                  <td className={style_td}>
                      <button className='text-indigo-400 hover:text-indigo-300 mr-2 ml-5'>
                        <Eye size={18} />
                      </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
    </motion.div>
  )
}

export default OrdersTable