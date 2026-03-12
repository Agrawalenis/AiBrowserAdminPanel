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

  const gap = 6; // increase gap

  return (
    <rect
      x={x}
      y={y + gap / 2}
      width={width}
      height={Math.max(height - gap, 2)}
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
  p-3 lg:p-5
  shadow-sm
  border border-gray-100
  w-full
  
"
>
      {/* Header */}
      <div className="flex items-center justify-between mb-7">
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
   <div className="w-full h-[220px] sm:h-[260px] lg:h-[407px]">
  <ResponsiveContainer width="100%" height="100%">
  <BarChart
  data={TRAFFIC_DATA}
  barCategoryGap="70%"
  barSize={10}
>

    <CartesianGrid
      strokeDasharray="3 3"
      stroke="#F3F4F6"
      vertical={false}
    />

    <XAxis
      dataKey="day"
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 14, fill: "#9CA3AF" }}
    />

    <YAxis
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 14, fill: "#9CA3AF" }}
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
  fill="#7152F3"
  shape={<SegmentBar />}
  maxBarSize={10}
/>

{/* Orange */}
<Bar
  dataKey="mobile"
  stackId="traffic"
  fill="#F5A623"
  shape={<SegmentBar />}
  maxBarSize={10}
/>

{/* Red */}
<Bar
  dataKey="other"
  stackId="traffic"
  fill="#FF5B5B"
  shape={<SegmentBar />}
  maxBarSize={10}
/>

  </BarChart>
</ResponsiveContainer>
</div>

      
    </div>
  );
};

export default TrafficOverview;
