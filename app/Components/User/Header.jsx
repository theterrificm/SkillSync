import React from "react";

export default function Header({ userData }) {

  if (!userData) {
    return <div>No user data available right now, try again.</div>;
  }

  return (
    <div className="h-full p-8">
      <div className="w-full h-[250px]">
        <img
          src="banner.png"
          className="w-full h-full rounded-tl-lg rounded-tr-lg"
          alt="Profile Background"
        />
      </div>
      <div className="flex flex-col items-center -mt-20">
        <img
          src={userData.avatar_url}
          className="w-40 border-4 border-white rounded-full"
          alt="Profile"
        />
        <div className="flex items-center space-x-2 mt-2">
          <p className="dark:text-white text-2xl">{userData.name}</p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-100 h-2.5 w-2.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
        </div>
        <p className="text-gray-700 dark:text-white">{userData.bio}</p>
        <p className="text-sm text-gray-500 dark:text-white">
          {userData.location}
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
        <div className="flex items-center space-x-4 mt-2">
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            <span>Connect</span>
          </button>
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM4 4h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm11 6.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-3 2.5h4v3H8v-3h4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Message</span>
          </button>
        </div>
      </div>
    </div>
  );
}
