
const SocialAccount = ({image, label, connected, setConnected}) => {
  return (
    <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center'>
            <img 
                src={image}
                alt='Social'
                className='size-8 mr-3'
            />
            <p className='text=gray-300'>{label}</p>
        </div>

        <button 
            className={`px-4 py-2 text-white font-semibold rounded transition-colors ${connected ? 'bg-green-600' : 'bg-gray-500'}`}
            value={connected}
            onClick={setConnected}
        >
            {connected ? 'Connected' : 'Connect'}
        </button>
    </div>
  )
}

export default SocialAccount