import React from "react";

const DashboardTopbar: React.FC = () => (
  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 lg:mb-6">
    {/* Left: Greeting */}
    <div>
      <h1 className="text-lg lg:text-xl font-bold text-[#16151C]">
        Hello Robert 👋🏻
      </h1>
      <p className="text-sm text-gray-500 font-light">Good Morning</p>
    </div>

    {/* Right: Search + Bell + User */}
    <div className="flex items-center gap-2 lg:gap-4 flex-wrap">

      {/* Search bar — hidden on mobile */}
      <div className="hidden sm:flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 lg:px-4 py-2 shadow-sm w-36 lg:w-52">
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#9CA3AF"
          strokeWidth={2}
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          className="text-sm text-gray-400 bg-transparent outline-none w-full"
          placeholder="Search..."
        />
      </div>

      {/* Notification Bell */}
      <button className="relative w-9 h-9 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow flex-shrink-0">
        <svg
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#16151C"
          strokeWidth={1.8}
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#7152F3] rounded-full" />
      </button>

      {/* User Chip */}
      <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7152F3] to-[#9f7afa] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
          R
        </div>
        <div className="hidden sm:flex flex-col">
          <span className="text-xs font-semibold text-[#16151C]">Robert Allen</span>
          <span className="text-[10px] text-gray-400">HR Manager</span>
        </div>
        <svg
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#9CA3AF"
          strokeWidth={2}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  </div>
);

export default DashboardTopbar;
