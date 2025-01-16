import SettingSection from "./SettingSection";

import { User } from "lucide-react";

const Profile = () => {
  return (
    <SettingSection icon={User} title="Profile">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Profile"
            className="rounded-full size-20 object-cover mr-4"
          />
          <div>
          <h3 className="text-lg font-semibold text-gray-100">John Doe</h3>
          <p className="text-gray-400">John@email.com</p>

          </div>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full md:w-auto">
          Edit Profile
        </button>
      </div>
    </SettingSection>
  );
};

export default Profile;
