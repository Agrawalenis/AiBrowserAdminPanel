import React from "react";

interface TopbarProps {
  title: React.ReactNode;
  subtitle?: string;
  subtitleClassName?: string;
}

const Topbar: React.FC<TopbarProps> = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-between p-4 pb-9 bg-white border-gray-200">
      {/* Left: Title and Subtitle */}
      <div>
        <h1 className="font-bold text-[20px] leading-6 text-[#16151C]">{title}</h1>
        {subtitle && <p className="font-light text-[14px] leading-[18px] text-[#9CA3AF]">{subtitle}</p>}
      </div>

      {/* Right: Search, Notifications, and Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src="/images/search.png" className="w-[20px] h-[20px]" alt="Search" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-[261px] h-[50px] pl-11 pr-4 py-2 font-[Lexend,sans-serif] font-light text-[16px] rounded-lg leading-6 text-[rgba(22,21,28,0.2)] bg-white border-2 border-[#A2A1A81A] focus:outline-none focus:ring-0"
          />
        </div>

        {/* Notifications */}
        <div className="relative">
          <button 
            className="w-[50px] h-[50px] flex items-center justify-center bg-[#A2A1A81A] rounded-lg hover:bg-gray-50 focus:outline-none"
          >
            <img src="/images/notification.png" className="w-[24px] h-[24px]" alt="Notifications" />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center">
          <div className="flex items-center space-x-1 border-2 border-[#A2A1A81A] rounded-[10px] px-2 h-[55px]">
            <div className="relative">
              <img 
                className="w-[40px] h-[40px] object-cover rounded-[8px]" 
                src="/images/profile.png" 
                alt="User avatar"
              />
            </div>
            <div className="text-left p-0">
              <p className="font-semibold text-[16px] text-[#16151C]">
                Robert Allen
              </p>
              <p className="font-light text-[12px] text-[#9CA3AF]">
              HR Manager
              </p>
            </div>
            <img 
              src="/images/down.png" 
              className="w-[20px] h-[20px]" 
              alt="Dropdown" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;