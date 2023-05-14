import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

const ProfileButtons = () => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ml-4">
      <a
        href="#"
        className="text-sm font-medium text-gray-700 hover:text-gray-800"
      >
        <UserIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 hover:text-gray-500"
          aria-hidden="true"
        />
        {/* <span>Profile</span> */}
      </a>
      {/* <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
      <a
        href="#"
        className="text-sm font-medium text-gray-700 hover:text-gray-800"
      >
        Create account
      </a> */}
    </div>
  );
};

export default ProfileButtons;
