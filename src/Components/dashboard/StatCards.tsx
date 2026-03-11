import React from "react";
import type { StatCardData } from "../../types/index";
import { STAT_CARDS_DATA } from "../../types/index";

// ─── Single Card ──────────────────────────────────────────────────────────────
const StatCard: React.FC<{ data: StatCardData }> = ({ data }) => {
  const isPositive = data.change >= 0;

  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Icon + Label */}
      <div className="flex items-center gap-2">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          style={{ backgroundColor: data.iconBg }}
        >
          {data.icon}
        </div>
        <span className="text-sm text-gray-500 font-medium">{data.label}</span>
      </div>

      {/* Value + Change Badge */}
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-[#16151C]">{data.value}</span>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${
            isPositive
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-500"
          }`}
        >
          {isPositive ? "▲" : "▼"} {Math.abs(data.change)}%
        </span>
      </div>

      {/* Date */}
     <div className="border-t border-gray-200 pt-2 mt-2">
  <span className="text-xs text-gray-400">{data.date}</span>
</div>
    </div>
  );
};

// ─── Stat Cards Grid ──────────────────────────────────────────────────────────
const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 w-full">
      {STAT_CARDS_DATA.map((card, i) => (
        <StatCard key={i} data={card} />
      ))}
    </div>
  );
};

export default StatCards;
