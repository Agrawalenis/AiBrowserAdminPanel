import React, { useState } from "react";
import { NEWS_GROUPS, CALENDAR_DAYS } from "../../types/index";

// ─── Calendar Helpers ─────────────────────────────────────────
function getCalendarDays(year: number, month: number): (number | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  while (cells.length % 7 !== 0) cells.push(null);

  return cells;
}

// ─── Mini Calendar ───────────────────────────────────────────
const MiniCalendar: React.FC = () => {
  const today = new Date();

  const [current, setCurrent] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const [selected, setSelected] = useState(today.getDate());

  const cells = getCalendarDays(current.year, current.month);

  const monthName = new Date(current.year, current.month).toLocaleString(
    "default",
    { month: "long" }
  );

  const prev = () =>
    setCurrent((c) =>
      c.month === 0
        ? { year: c.year - 1, month: 11 }
        : { year: c.year, month: c.month - 1 }
    );

  const next = () =>
    setCurrent((c) =>
      c.month === 11
        ? { year: c.year + 1, month: 0 }
        : { year: c.year, month: c.month + 1 }
    );

  return (
    <div className="w-full">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={prev}
          className="w-6 h-6 rounded-full bg-[#7152F3] text-white flex items-center justify-center text-xs"
        >
          ‹
        </button>

        <span className="text-sm font-semibold text-[#16151C]">
          {monthName}, {current.year}
        </span>

        <button
          onClick={next}
          className="w-6 h-6 rounded-full bg-[#7152F3] text-white flex items-center justify-center text-xs"
        >
          ›
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 mb-1">
        {CALENDAR_DAYS.map((d) => (
          <div
            key={d}
            className="text-center text-[11px] font-medium text-gray-400 py-1"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date Cells */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          const isToday =
            day === today.getDate() &&
            current.month === today.getMonth() &&
            current.year === today.getFullYear();

          const isSel = day === selected;

          return (
            <div
              key={i}
              onClick={() => day && setSelected(day)}
              className={`text-center text-[12px] py-1 rounded-full
              ${day ? "cursor-pointer hover:bg-[#EDE9FD]" : ""}
              ${isSel && !isToday ? "bg-[#7152F3] text-white font-semibold" : ""}
              ${isToday ? "bg-[#FF6B6B] text-white font-semibold" : "text-[#16151C]"}`}
            >
              {day ?? ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─── News Feed ───────────────────────────────────────────────
const NewsFeed: React.FC = () => (
  <div className="flex flex-col gap-4 mt-5 pt-4 border-t border-gray-100">
    {NEWS_GROUPS.map((group, gi) => (
      <div key={gi}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-500">
            {group.date}
          </span>
          <button className="text-gray-300 text-lg">⋮</button>
        </div>

        <div className="flex flex-col gap-3">
          {group.items.map((item, ii) => (
            <div key={ii} className="flex gap-3">
              <span className="text-[11px] font-semibold text-[#7152F3]">
                {item.time}
              </span>

              <div className="border-l-2 border-[#7152F3] pl-3 flex flex-col">
                <span className="text-[11px] font-semibold text-[#16151C]">
                  {item.category}
                </span>

                <span className="text-[11px] text-gray-400">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {gi < NEWS_GROUPS.length - 1 && (
          <div className="border-b border-gray-100 mt-4" />
        )}
      </div>
    ))}
  </div>
);

// ─── Combined Panel ─────────────────────────────────────────
const TrendingTopic: React.FC = () => {
  return (
    <div
  className="
  bg-white 
  rounded-2xl 
  p-4 lg:p-5 
  shadow-sm 
  border border-gray-100 
  flex flex-col
  w-full
  max-w-[414px]
  min-h-[600px]
  lg:min-h-[882px]
"
>
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-sm lg:text-base font-bold text-[#16151C]">
      Trending Topic
    </h2>

    <button className="w-8 h-8 rounded-xl bg-[#EDE9FD] flex items-center justify-center">
      📅
    </button>
  </div>

  {/* Calendar */}
  <MiniCalendar />

  {/* News Feed */}
  <NewsFeed />
</div>
  );
};

export default TrendingTopic;