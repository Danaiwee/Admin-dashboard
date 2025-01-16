import { CreditCard } from "lucide-react"
import SettingSection from "./SettingSection"


const Billing = () => {
  return (
    <SettingSection icon={CreditCard} title='Billing'>
        <div className='flex flex-col'>
            <div className='flex justify-between items-center mb-4'>
                <p className='text-gray-300'>Current Plan</p>
                <p className='text-indigo-400'>Pro</p>
            </div>
            <button className='bg-indigo-600 text-white font-semibold px-4 py-2 rounded w-full md:w-fit'>
                Upgrade Plan
            </button>
        </div>
    </SettingSection>
  )
}

export default Billing