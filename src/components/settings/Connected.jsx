import { CircleHelp, CirclePlus } from "lucide-react"
import SettingSection from "./SettingSection"
import SocialAccount from "./SocialAccount"
import { useState } from "react";

import googleIcon from '/google_icon.png';
import facebookIcon from '/facebook_icon.png';
import twitterIcon from '/twitter_icon.png';

const Connected = () => {
  const [connected, setConnected] = useState({
    google: true,
    facebook: false,
    twitter: true
  });  

  return (
    <SettingSection icon={CircleHelp} title='Connected Accounts'>
        <div className='flex flex-col justify-center'>
            <SocialAccount 
                image={googleIcon}
                label='Google'
                connected={connected.google}
                setConnected={() => setConnected({...connected, google: !connected.google})}
            />

            <SocialAccount 
                image={facebookIcon}
                label='Facbook'
                connected={connected.facebook}
                setConnected={() => setConnected({...connected, facebook: !connected.facebook})}
            />

            <SocialAccount 
              image={twitterIcon}
              label='Twitter'
              connected={connected.twitter}
              setConnected={() => setConnected({...connected, twitter: !connected.twitter})}
            />

            <div className='flex items-center cursor-pointer'>
              <CirclePlus  size={22} className='text-gray-300 ml-1 mr-3 opacity-30'/>
              <span className='text-gray-300 text-opacity-30'>Add Account</span>
            </div>
        </div>
    </SettingSection>
  )
}

export default Connected