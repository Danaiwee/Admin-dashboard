import React from 'react'
import SettingSection from './SettingSection'
import { Trash2 } from 'lucide-react'

const DangerZone = () => {
  return (
    <div
        className='bg-red-500 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-red-700'
    >
        <div className='w-full flex flex-col justify-center'>
            <div className='flex items-center mb-4'>
                <Trash2 size={24} className='text-red-400 mr-3' />
                <h2 className='text-white text-xl font-semibold'>Danger Zone</h2>
            </div>
            <p className='text-gray-300 text-opacity-50 mb-4'>
                Permanently delete your account and all your content
            </p>
            <button
                className='px-4 py-2 rounded w-full md:w-fit text-white bg-red-700 hover:bg-red-400 transition-colors'
            >
                Delete Account
            </button>
        </div>
    </div>
  )
}

export default DangerZone