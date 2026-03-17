
import React, { useState } from "react";
import Topbar from "../../Components/layout/Topbar";
import TrendingCard from "../../Components/cards/TrendingCard";
import Pagination from "../../Components/table/Pagination";
import type { TrendingTopic } from "../../types";

const topics: TrendingTopic[] = [
  {
    id: 1,
    title: "AI in Marketing",
    category: "Technology",
    description: "How AI is transforming digital marketing strategies",
    posts: 312,
    growth: 120,
    reach: "8,462",
    image: "/images/figma.png",
  },
  {
    id: 2,
    title: "Remote Work Trends",
    category: "Business",
    description: "Exploring the rise of remote work and its impact",
    posts: 285,
    growth: 95,
    reach: "7,913",
    image: "/images/briefcase-active.png",
  },
  {
    id: 3,
    title: "Mental Health Awareness",
    category: "Health",
    description: "Discussions on mental health awareness",
    posts: 267,
    growth: 88,
    reach: "6,758",
    image: "/images/document-text-active.png",
  },
  {
    id: 4,
    title: "E-commerce Trends",
    category: "Technology",
    description: "Latest trends in e-commerce industry",
    posts: 320,
    growth: 115,
    reach: "9,126",
    image: "/images/lock-active.png",
  },
  {
    id: 5,
    title: "Entrepreneurship Tips",
    category: "Business",
    description: "Insights for aspiring entrepreneurs",
    posts: 298,
    growth: 89,
    reach: "8,057",
    image: "/images/user.jpg",
  },
  {
    id: 6,
    title: "Fitness & Nutrition",
    category: "Health",
    description: "Tips on healthy lifestyle and workouts",
    posts: 276,
    growth: 98,
    reach: "7,213",
    image: "/images/star.png",
  },
  {
    id: 7,
    title: "Travel Hacks",
    category: "Travel",
    description: "Smart ways to travel the world",
    posts: 190,
    growth: 70,
    reach: "5,300",
    image: "/images/star.png",
  },
  {
    id: 8,
    title: "Stock Market Trends",
    category: "Finance",
    description: "Understanding current stock trends",
    posts: 210,
    growth: 82,
    reach: "6,110",
    image: "/images/up.png",
  },
];

const Trendings: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const totalPages = Math.ceil(topics.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentTopics = topics.slice(startIndex, endIndex);

  return (
    <div className="w-full flex flex-col bg-white">

      {/* Topbar */}
      <div className="mb-2">
        <Topbar
          title={
            <div className="w-[140px] font-semibold text-[20px] leading-6 text-[#16151C]">
              Trending Topics
            </div>
          }
          subtitle="Explore trending discussions"
          subtitleClassName="font-light text-[14px] leading-6 text-[#9CA3AF]"
        />
      </div>

      <div className="border border-gray-200 rounded-lg bg-white p-4 flex flex-col">

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-6">
          {[
            "All",
            "Technology",
            "Business",
            "Health",
            "Travel",
            "Lifestyle",
            "Education",
            "Finance",
          ].map((item) => (
            <button
              key={item}
              className="px-3 py-1 text-[12px] border rounded-lg hover:bg-gray-100"
            >
              #{item}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTopics.map((topic) => (
            <TrendingCard key={topic.id} topic={topic} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={topics.length}
            itemsPerPage={itemsPerPage}
          />
        </div>

      </div>
    </div>
  );
};

export default Trendings;

