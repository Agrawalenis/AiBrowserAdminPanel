import React from "react";
import type { WebsiteRow } from "../../types/index";
import { WEBSITES_DATA } from "../../types/index";

// ─── Status Badge ─────────────────────────────────────────────────────────────
const StatusBadge: React.FC<{ status: WebsiteRow["status"] }> = ({ status }) => (
  <span
    className={`text-xs font-semibold px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full whitespace-nowrap ${
      status === "On Time"
        ? "bg-green-50 text-green-600"
        : "bg-red-50 text-red-500"
    }`}
  >
    {status}
  </span>
);

// ─── Websites Table ───────────────────────────────────────────────────────────
const WebsitesTable: React.FC = () => {
  return (
   <div
  className="
  bg-white
  rounded-2xl
  p-4 lg:p-5
  shadow-sm
  border border-gray-100
  w-full
  min-h-[320px]
  lg:min-h-[420px]
"
>{/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm lg:text-base font-bold text-[#16151C]">
          Top 10 websites Overview
        </h2>
        <button className="text-xs lg:text-sm text-[#7152F3] font-medium hover:underline">
          View All
        </button>
      </div>

      {/* Scrollable table on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr className="text-xs text-gray-400 border-b border-gray-100">
              <th className="text-left pb-3 font-medium">Website Name</th>
              <th className="text-left pb-3 font-medium">Category</th>
              <th className="text-left pb-3 font-medium hidden md:table-cell">
                Google Index
              </th>
              <th className="text-left pb-3 font-medium">Overall Traffic</th>
              <th className="text-left pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {WEBSITES_DATA.map((site, i) => (
              <tr
                key={i}
                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
              >
                {/* Website Name */}
                <td className="py-2.5 lg:py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm flex-shrink-0">
                      {site.favicon}
                    </div>
                    <span className="text-xs lg:text-sm text-[#16151C] font-medium truncate max-w-[100px] lg:max-w-none">
                      {site.name}
                    </span>
                  </div>
                </td>

                {/* Category */}
                <td className="py-2.5 lg:py-3 text-xs lg:text-sm text-gray-500">
                  {site.category}
                </td>

                {/* Google Index — hidden on mobile */}
                <td className="py-2.5 lg:py-3 text-xs lg:text-sm text-gray-500 hidden md:table-cell">
                  {site.googleIndex}
                </td>

                {/* Traffic */}
                <td className="py-2.5 lg:py-3 text-xs lg:text-sm text-gray-500">
                  {site.traffic}
                </td>

                {/* Status */}
                <td className="py-2.5 lg:py-3">
                  <StatusBadge status={site.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebsitesTable;
