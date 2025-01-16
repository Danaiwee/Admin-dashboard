

const Selection = ({label, options}) => {
  return (
    <div className='flex items-center justify-between mb-4'>
        <p className='text-gray-300'>{label}</p>
        <select
             className='bg-gray-800 bg-opacity-50 backrop-blur-md shadow-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 py-2 cursor-pointer'
        >
            {options.map((item, index) => (
                <option
                    key={index}
                    className='text-center cursor-pointer'
                >
                    {item}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Selection