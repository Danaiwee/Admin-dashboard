import {motion} from 'framer-motion';
import { useState } from 'react';

import earbudImg from '/earbud.jpg';
import walletImg from '/wallet.jpg';
import smartWatchImg from '/smart_watch.jpg';
import yogaMatImg from '/yoga_mat.jpg';
import coffeeImg from '/coffee_maker.jpg';
import { Edit, Trash2 } from 'lucide-react';

const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200, image: earbudImg },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800, image: walletImg },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650, image: smartWatchImg },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950, image: yogaMatImg },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720, image: coffeeImg },
];

const TABLE_HEAD_DATA = ['Name', 'Category', 'Price', 'Stock', 'Sales', 'Actions'];

const tableDataStyle = 'px-6 py-4 whitespace-nowrap text-sm text-gray-300';

const ProductTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);  

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = PRODUCT_DATA.filter(
        (product)=> product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };  


  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-70 mb-8'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2}}
    >
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
            <div className='relative'>
                <input 
                    type='text'
                    placeholder='Search products...'
                    className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={handleSearch}
                    value={searchTerm}
                />

            </div>
        </div>

        <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                    <tr>
                        {TABLE_HEAD_DATA.map((data) => (
                            <th 
                                key={data}
                                className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'
                            >
                                {data}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {filteredProducts.map((product) => (
                        <motion.tr
                            key={product.id}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                        >
                            <td 
                                className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'
                            >
                                <img 
                                   src={product.image}
                                   alt='Product image'
                                   className='size-10 rounded-full' 
                                />
                                {product.name}
                            </td>

                            <td className={tableDataStyle}>{product.category}</td>
                            <td className={tableDataStyle}>{product.price.toFixed(2)}</td>
                            <td className={tableDataStyle}>{product.stock}</td>
                            <td className={tableDataStyle}>{product.sales}</td>
                            <td className={tableDataStyle}>
                                <button className='text-indigo-400 hover:text-indigo-300 mr-2'>
                                    <Edit size={18} />
                                </button>
                                <button className='text-red-400 hover:text-red-300'>
                                    <Trash2 size={18} />
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

export default ProductTable