import React, { useState } from "react";
import Topbar from "../../Components/layout/Topbar";
import Pagination from "../../Components/table/Pagination";
import type { UpcomingModule } from "../../../types";

const features: UpcomingModule[] = [
  {
    id: 1,
    title: "AI Recommendations",
    description: "Smart suggestions based on user activity",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Real-time Notifications",
    description: "Instant alerts for important updates",
    status: "Planned",
  },
  {
    id: 3,
    title: "Advanced Analytics",
    description: "Detailed reports and insights",
    status: "Planned",
  },
  {
    id: 4,
    title: "User Activity Tracking",
    description: "Monitor user behavior efficiently",
    status: "Completed",
  },
  {
    id: 5,
    title: "Dark Mode Support",
    description: "Enable dark theme for better UX",
    status: "In Progress",
  },
  {
    id: 6,
    title: "Multi-language Support",
    description: "Support multiple languages globally",
    status: "Planned",
  },
  {
    id: 7,
    title: "Role-based Access",
    description: "Different access for admin and users",
    status: "Completed",
  },
  {
    id: 8,
    title: "API Integration",
    description: "Connect frontend with backend APIs",
    status: "In Progress",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-green-500";
    case "In Progress":
      return "text-yellow-500";
    default:
      return "text-gray-400";
  }
};

const UpcomingFeatures: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const totalPages = Math.ceil(features.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentFeatures = features.slice(startIndex, endIndex);

  return (
    <div className="w-full flex flex-col bg-white">

      {/* Topbar */}
      <Topbar
        title={<div className="text-[20px] font-semibold">Upcoming Features</div>}
        subtitle="Track upcoming modules and updates"
        subtitleClassName="text-[14px] text-gray-400"
      />

      <div className="mt-4 border rounded-lg p-4 flex flex-col">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentFeatures.map((feature) => (
            <div
              key={feature.id}
              className="border rounded-xl p-4 hover:shadow-md transition"
            >
              <h3 className="text-[16px] font-semibold mb-1">
                {feature.title}
              </h3>

              <p className="text-[13px] text-gray-500 mb-3">
                {feature.description}
              </p>

              <span className={`text-[12px] font-medium ${getStatusColor(feature.status)}`}>
                {feature.status}
              </span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={features.length}
            itemsPerPage={itemsPerPage}
          />
        </div>

      </div>
    </div>
  );
};

export default UpcomingFeatures;