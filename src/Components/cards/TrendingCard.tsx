import React from "react";
import type { TrendingTopic } from "../../types";

interface Props {
  topic: TrendingTopic;
}

const TrendingCard: React.FC<Props> = ({ topic }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-md transition">

      {/* Icon */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={topic.image}
          alt={topic.title}
          className="w-10 h-10 rounded-lg object-cover"
        />

        <div>
          <h3 className="text-[15px] font-semibold text-[#16151C]">
            {topic.title}
          </h3>
          <p className="text-[12px] text-gray-400">{topic.category}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[13px] text-gray-500 mb-4">
        {topic.description}
      </p>

      {/* Stats */}
      <div className="flex justify-between text-[12px] text-gray-500">
        <span>{topic.posts} posts</span>
        <span className="text-green-500">{topic.growth}%</span>
        <span>{topic.reach}</span>
      </div>
    </div>
  );
};

export default TrendingCard;