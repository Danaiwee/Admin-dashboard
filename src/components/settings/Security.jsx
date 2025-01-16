import { Lock } from "lucide-react"
import SettingSection from "./SettingSection"
import ToggleSwitch from "./ToggleSwitch"
import { useState } from "react"


const Security = () => {
 const [auth, setAuth] = useState(false)   

  return (
    <SettingSection icon={Lock} title='Security'>
        <ToggleSwitch 
            label='Two-factor Authentication'
            isOn={auth}
            onToggle={() => setAuth(!auth)}
        />

        <button
            className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full md:w-auto mt-2`}
        >
            Change Password
        </button>
    </SettingSection>
  )
}

export default Security