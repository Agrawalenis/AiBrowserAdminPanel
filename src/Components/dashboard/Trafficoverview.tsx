import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { TRAFFIC_DATA, TRAFFIC_RANGE_OPTIONS } from "../../types/index";

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-2 text-xs">
        <p className="font-semibold text-[#16151C] mb-1">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.fill }}>
            {p.name}: {p.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const SegmentBar = (props: any) => {
  const { x, y, width, height, fill } = props;

  const gap = 3;

  return (
    <rect
      x={x}
      y={y + gap}
      width={width}
      height={Math.max(height - gap, 1)}
      rx={4}
      ry={4}
      fill={fill}
    />
  );
};

// ─── Traffic Overview ─────────────────────────────────────────────────────────
const TrafficOverview: React.FC = () => {
  const [trafficRange, setTrafficRange] = useState<string>(TRAFFIC_RANGE_OPTIONS[0]);

  return (
<div
  className="
  bg-white
  rounded-2xl
  p-4 lg:p-5
  shadow-sm
  border border-gray-100
  w-full
  max-w-[646px]
  min-h-[420px]
  lg:min-h-[534px]
"
>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm lg:text-base font-bold text-[#16151C]">
          Traffic Overview
        </h2>
        <select
          value={trafficRange}
          onChange={(e) => setTrafficRange(e.target.value)}
          className="text-xs lg:text-sm text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-2 lg:px-3 py-1 lg:py-1.5 outline-none cursor-pointer"
        >
          {TRAFFIC_RANGE_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      

      {/* Chart */}
   <div className="w-full h-[220px] sm:h-[260px] lg:h-[300px]">
  <ResponsiveContainer width="100%" height="100%">
  <BarChart data={TRAFFIC_DATA} barCategoryGap="60%">

    <CartesianGrid
      strokeDasharray="3 3"
      stroke="#F3F4F6"
      vertical={false}
    />

    <XAxis
      dataKey="day"
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 11, fill: "#9CA3AF" }}
    />

    <YAxis
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 11, fill: "#9CA3AF" }}
      domain={[0, 100]}
      ticks={[0, 20, 40, 60, 80, 100]}
      tickFormatter={(v) => `${v}%`}
      width={36}
    />

    <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F9F8FF" }} />

    {/* Purple */}
    <Bar
      dataKey="desktop"
      stackId="traffic"
      fill="#6C5CE7"
      shape={<SegmentBar />}
      maxBarSize={14}
    />

    {/* Orange */}
    <Bar
      dataKey="mobile"
      stackId="traffic"
      fill="#F5A623"
      shape={<SegmentBar />}
      maxBarSize={14}
    />

    {/* Red */}
    <Bar
      dataKey="other"
      stackId="traffic"
      fill="#FF5B5B"
      shape={<SegmentBar />}
      maxBarSize={14}
    />

  </BarChart>
</ResponsiveContainer>
</div>

      {/* Legend */}
      <div className="flex gap-4 mt-2 justify-center">
  <span className="flex items-center gap-1.5 text-xs text-gray-500">
    <span className="w-3 h-3 rounded-sm bg-[#6C5CE7]" />
    Desktop
  </span>

  <span className="flex items-center gap-1.5 text-xs text-gray-500">
    <span className="w-3 h-3 rounded-sm bg-[#F5A623]" />
    Mobile
  </span>

  <span className="flex items-center gap-1.5 text-xs text-gray-500">
    <span className="w-3 h-3 rounded-sm bg-[#FF5B5B]" />
    Other
  </span>
</div>
    </div>
  );
};

export default TrafficOverview;
