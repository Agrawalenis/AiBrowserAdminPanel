// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface StatCardData {
//   icon: string;
//   label: string;
//   value: string;
//   change: number;
//   date: string;
//   iconBg: string;
// }

// interface NewsItem {
//   time: string;
//   category: string;
//   title: string;
// }

// interface NewsGroup {
//   date: string;
//   items: NewsItem[];
// }

// interface WebsiteRow {
//   favicon: string;
//   name: string;
//   category: string;
//   googleIndex: number;
//   traffic: string;
//   status: "On Time" | "Late";
// }

// // ─── Mock Data ────────────────────────────────────────────────────────────────
// const statCards: StatCardData[] = [
//   {
//     icon: "👤",
//     label: "Total Users",
//     value: "56.78M",
//     change: 10,
//     date: "Update: Feb 17, 2024",
//     iconBg: "#EDE9FD",
//   },
//   {
//     icon: "🌐",
//     label: "Total Websites",
//     value: "100.23k",
//     change: 2,
//     date: "Update: Feb 17, 2024",
//     iconBg: "#EDE9FD",
//   },
//   {
//     icon: "📝",
//     label: "Today Blogs",
//     value: "34.6M",
//     change: -5,
//     date: "Update: Feb 17, 2024",
//     iconBg: "#EDE9FD",
//   },
//   {
//     icon: "📶",
//     label: "Average Traffic",
//     value: "23.45M",
//     change: 14,
//     date: "Update: Feb 17, 2024",
//     iconBg: "#EDE9FD",
//   },
// ];

// const trafficData = [
//   { day: "Mon", desktop: 60, mobile: 40 },
//   { day: "Tue", desktop: 85, mobile: 55 },
//   { day: "Wed", desktop: 70, mobile: 45 },
//   { day: "Thu", desktop: 90, mobile: 60 },
//   { day: "Fri", desktop: 75, mobile: 50 },
//   { day: "Sat", desktop: 65, mobile: 42 },
//   { day: "Sun", desktop: 55, mobile: 38 },
// ];

// const newsGroups: NewsGroup[] = [
//   {
//     date: "Wednesday, 06 Feb 2026",
//     items: [
//       {
//         time: "09:30",
//         category: "Modi's Upcoming Israel Visit",
//         title: "India and Israel are set to strengthen bilateral ties through...",
//       },
//       {
//         time: "12:00",
//         category: "India Crushes Pakistan in T20",
//         title: "India dominated Pakistan with a record-breaking performance...",
//       },
//       {
//         time: "01:30",
//         category: "No Progress for Indian Green Card",
//         title: "The latest US visa bulletin shows stagnation for Indian...",
//       },
//     ],
//   },
//   {
//     date: "Thursday, 07 Feb 2026",
//     items: [
//       {
//         time: "09:30",
//         category: "Modi's Upcoming Israel Visit",
//         title: "India and Israel are set to strengthen bilateral ties through...",
//       },
//       {
//         time: "12:00",
//         category: "India Crushes Pakistan in T20",
//         title: "India dominated Pakistan with an a...",
//       },
//     ],
//   },
// ];

// const websites: WebsiteRow[] = [
//   { favicon: "🎨", name: "invision.com", category: "branding", googleIndex: 34, traffic: "45.6 M", status: "On Time" },
//   { favicon: "📰", name: "news.com", category: "news", googleIndex: 45, traffic: "34.56 M", status: "Late" },
//   { favicon: "🖼️", name: "figma.com", category: "designing", googleIndex: 67, traffic: "34.45K", status: "Late" },
//   { favicon: "📸", name: "instagram.com", category: "social media", googleIndex: 34, traffic: "34.45K", status: "On Time" },
//   { favicon: "🤖", name: "chatgpt.com", category: "chatbot", googleIndex: 89, traffic: "34.21K", status: "On Time" },
//   { favicon: "📘", name: "facebook.com", category: "social media", googleIndex: 45, traffic: "678.45K", status: "On Time" },
//   { favicon: "💬", name: "whatsapp.com", category: "chatting", googleIndex: 80, traffic: "56.7K", status: "Late" },
// ];

// // ─── Calendar ───────────────────────────────────────
// const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// function getCalendarDays(year: number, month: number) {
//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();
//   const cells: (number | null)[] = Array(firstDay).fill(null);
//   for (let d = 1; d <= daysInMonth; d++) cells.push(d);
//   while (cells.length % 7 !== 0) cells.push(null);
//   return cells;
// }

// const MiniCalendar: React.FC = () => {
//   const today = new Date();
//   const [current, setCurrent] = useState({ year: today.getFullYear(), month: today.getMonth() });
//   const [selected, setSelected] = useState(today.getDate());

//   const cells = getCalendarDays(current.year, current.month);
//   const monthName = new Date(current.year, current.month).toLocaleString("default", { month: "long" });
 
//   const prev = () =>
//     setCurrent((c) =>
//       c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 }
//     );
//   const next = () =>
//     setCurrent((c) =>
//       c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 }
//     );

//   return (
//     <div className="w-full">
//       <div className="flex items-center justify-between mb-3">
//         <button
//           onClick={prev}
//           className="w-6 h-6 rounded-full bg-[#7152F3] text-white flex items-center justify-center text-xs font-bold hover:bg-[#5e3fd4] transition-colors"
//         >
//           ‹
//         </button>
//         <span className="text-sm font-semibold text-[#16151C]">
//           {monthName}, {current.year}
//         </span>
//         <button
//           onClick={next}
//           className="w-6 h-6 rounded-full bg-[#7152F3] text-white flex items-center justify-center text-xs font-bold hover:bg-[#5e3fd4] transition-colors"
//         >
//           ›
//         </button>
//       </div>

//       <div className="grid grid-cols-7 mb-1">
//         {DAYS.map((d) => (
//           <div key={d} className="text-center text-[11px] font-medium text-gray-400 py-1">
//             {d}
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-7 gap-y-1">
//         {cells.map((day, i) => {
//           const isToday =
//             day === today.getDate() &&
//             current.month === today.getMonth() &&
//             current.year === today.getFullYear();
//           const isSel = day === selected;
//           return (
//             <div
//               key={i}
//               onClick={() => day && setSelected(day)}
//               className={`text-center text-[12px] py-1 rounded-full cursor-pointer transition-all
//                 ${!day ? "" : "hover:bg-[#EDE9FD]"}
//                 ${isSel && !isToday ? "bg-[#7152F3] text-white font-semibold" : ""}
//                 ${isToday ? "bg-[#FF6B6B] text-white font-semibold" : "text-[#16151C]"}
//               `}
//             >
//               {day ?? ""}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// // ─── Stat Card ────────────────────────────────────────────────────────────────
// const StatCard: React.FC<{ data: StatCardData }> = ({ data }) => {
//   const isPositive = data.change >= 0;
//   return (
//     <div className="bg-white rounded-2xl p-5 flex flex-col gap-2 shadow-sm border border-gray-100">
//       <div className="flex items-center gap-2">
//         <div
//           className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
//           style={{ backgroundColor: data.iconBg }}
//         >
//           {data.icon}
//         </div>
//         <span className="text-sm text-gray-500 font-medium">{data.label}</span>
//       </div>
//       <div className="flex items-end justify-between">
//         <span className="text-2xl font-bold text-[#16151C]">{data.value}</span>
//         <span
//           className={`text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${
//             isPositive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"
//           }`}
//         >
//           {isPositive ? "▲" : "▼"} {Math.abs(data.change)}%
//         </span>
//       </div>
//       <span className="text-xs text-gray-400">{data.date}</span>
//     </div>
//   );
// };

// // ─── Custom Tooltip ───────────────────────────────────────────────────────────
// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-2 text-xs">
//         <p className="font-semibold text-[#16151C] mb-1">{label}</p>
//         {payload.map((p: any) => (
//           <p key={p.name} style={{ color: p.fill }}>
//             {p.name}: {p.value}%
//           </p>
//         ))}
//       </div>
//     );
//   }
//   return null;
// };

// // ─── Topbar ───────────────────────────────────────────────────────────────────
// const DashboardTopbar: React.FC = () => (
//   <div className="flex flex-wrap items-center justify-between gap-3 mb-4 lg:mb-6">
//     <div>
//       <h1 className="text-lg lg:text-xl font-bold text-[#16151C]">Hello Robert 👋</h1>
//       <p className="text-sm text-gray-400 font-light">Good Morning</p>
//     </div>
//     <div className="flex items-center gap-2 lg:gap-4 flex-wrap">
//       {/* Search — hidden on small screens */}
//       <div className="hidden sm:flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 lg:px-4 py-2 shadow-sm w-36 lg:w-52">
//         <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF" strokeWidth={2}>
//           <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
//         </svg>
//         <input
//           className="text-sm text-gray-400 bg-transparent outline-none w-full"
//           placeholder="Search..."
//         />
//       </div>
//       {/* Bell */}
//       <button className="relative w-9 h-9 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100 hover:shadow-md transition-shadow flex-shrink-0">
//         <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#16151C" strokeWidth={1.8}>
//           <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//           <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//         </svg>
//         <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#7152F3] rounded-full" />
//       </button>
//       {/* User */}
//       <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-1.5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow">
//         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7152F3] to-[#9f7afa] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
//           R
//         </div>
//         <div className="hidden sm:flex flex-col">
//           <span className="text-xs font-semibold text-[#16151C]">Robert Allen</span>
//           <span className="text-[10px] text-gray-400">HR Manager</span>
//         </div>
//         <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF" strokeWidth={2}>
//           <path d="m6 9 6 6 6-6" />
//         </svg>
//       </div>
//     </div>
//   </div>
// );

// // ─── AdminDashboard ───────────────────────────────────────────────────────────
// const AdminDashboard: React.FC = () => {
//   const [trafficRange, setTrafficRange] = useState("Today");

//   return (
//     <div className="min-h-screen w-full bg-[#F5F5F5] p-3 sm:p-4 lg:p-6 font-sans">
//       <DashboardTopbar />

//       {/* Main layout: stacks on small screens, side-by-side on xl+ */}
//       <div className="flex flex-col xl:flex-row gap-4 lg:gap-6">

//         {/* ── LEFT COLUMN ── */}
//         <div className="flex-1 flex flex-col gap-4 lg:gap-6 min-w-0">

//           {/* Stat Cards: 1 col mobile → 2 col sm+ */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
//             {statCards.map((card, i) => (
//               <StatCard key={i} data={card} />
//             ))}
//           </div>

//           {/* Traffic Overview Chart */}
//           <div className="bg-white rounded-2xl p-4 lg:p-5 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-sm lg:text-base font-bold text-[#16151C]">Traffic Overview</h2>
//               <select
//                 value={trafficRange}
//                 onChange={(e) => setTrafficRange(e.target.value)}
//                 className="text-xs lg:text-sm text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-2 lg:px-3 py-1 lg:py-1.5 outline-none cursor-pointer"
//               >
//                 {["Today", "This Week", "This Month"].map((o) => (
//                   <option key={o}>{o}</option>
//                 ))}
//               </select>
//             </div>
//             <ResponsiveContainer width="100%" height={200}>
//               <BarChart data={trafficData} barGap={4} barCategoryGap="30%">
//                 <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
//                 <XAxis
//                   dataKey="day"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fontSize: 11, fill: "#9CA3AF" }}
//                 />
//                 <YAxis
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fontSize: 11, fill: "#9CA3AF" }}
//                   tickFormatter={(v) => `${v}%`}
//                   domain={[0, 100]}
//                   ticks={[0, 20, 40, 60, 80, 100]}
//                   width={36}
//                 />
//                 <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F9F8FF" }} />
//                 <Bar dataKey="desktop" name="Desktop" fill="#7152F3" radius={[6, 6, 0, 0]} maxBarSize={20} />
//                 <Bar dataKey="mobile" name="Mobile" fill="#FFB547" radius={[6, 6, 0, 0]} maxBarSize={20} />
//               </BarChart>
//             </ResponsiveContainer>
//             <div className="flex gap-4 mt-2 justify-center">
//               <span className="flex items-center gap-1.5 text-xs text-gray-500">
//                 <span className="w-3 h-3 rounded-sm bg-[#7152F3] inline-block" /> Desktop
//               </span>
//               <span className="flex items-center gap-1.5 text-xs text-gray-500">
//                 <span className="w-3 h-3 rounded-sm bg-[#FFB547] inline-block" /> Mobile
//               </span>
//             </div>
//           </div>

//           {/* Top 10 Websites Table */}
//           <div className="bg-white rounded-2xl p-4 lg:p-5 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-sm lg:text-base font-bold text-[#16151C]">Top 10 websites Overview</h2>
//               <button className="text-xs lg:text-sm text-[#7152F3] font-medium hover:underline">View All</button>
//             </div>
//             {/* Scrollable on small screens */}
//             <div className="overflow-x-auto">
//               <table className="w-full min-w-[480px]">
//                 <thead>
//                   <tr className="text-xs text-gray-400 border-b border-gray-50">
//                     <th className="text-left pb-3 font-medium">Website Name</th>
//                     <th className="text-left pb-3 font-medium">Category</th>
//                     <th className="text-left pb-3 font-medium hidden md:table-cell">Google Index</th>
//                     <th className="text-left pb-3 font-medium">Overall Traffic</th>
//                     <th className="text-left pb-3 font-medium">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {websites.map((site, i) => (
//                     <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
//                       <td className="py-2.5 lg:py-3">
//                         <div className="flex items-center gap-2">
//                           <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm flex-shrink-0">
//                             {site.favicon}
//                           </div>
//                           <span className="text-xs lg:text-sm text-[#16151C] font-medium truncate max-w-[100px] lg:max-w-none">
//                             {site.name}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="py-2.5 lg:py-3 text-xs lg:text-sm text-gray-500">{site.category}</td>
//                       <td className="py-2.5 lg:py-3 text-xs lg:text-sm text-gray-500 hidden md:table-cell">{site.googleIndex}</td>
//                       <td className="py-2.5 lg:py-3 text-xs lg:text-sm text-gray-500">{site.traffic}</td>
//                       <td className="py-2.5 lg:py-3">
//                         <span
//                           className={`text-xs font-semibold px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full whitespace-nowrap ${
//                             site.status === "On Time"
//                               ? "bg-green-50 text-green-600"
//                               : "bg-red-50 text-red-500"
//                           }`}
//                         >
//                           {site.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* ── RIGHT PANEL ── */}
//         {/* On xl+ → fixed 280px sidebar. On smaller → full width below */}
//         <div className="w-full xl:w-[280px] xl:flex-shrink-0 flex flex-col gap-4 lg:gap-5 xl:flex-col sm:flex-row sm:items-start">

//           {/* Calendar */}
//           <div className="bg-white rounded-2xl p-4 lg:p-5 shadow-sm border border-gray-100 flex-1 xl:flex-none">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-sm lg:text-base font-bold text-[#16151C]">Trending Topic</h2>
//               <button className="w-8 h-8 rounded-xl bg-[#EDE9FD] flex items-center justify-center">
//                 <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#7152F3" strokeWidth={2}>
//                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                   <line x1="16" y1="2" x2="16" y2="6" />
//                   <line x1="8" y1="2" x2="8" y2="6" />
//                   <line x1="3" y1="10" x2="21" y2="10" />
//                 </svg>
//               </button>
//             </div>
//             <MiniCalendar />
//           </div>

//           {/* News Feed */}
//           <div className="bg-white rounded-2xl p-4 lg:p-5 shadow-sm border border-gray-100 flex flex-col gap-4 flex-1 xl:flex-none">
//             {newsGroups.map((group, gi) => (
//               <div key={gi}>
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-xs font-semibold text-gray-500">{group.date}</span>
//                   <button className="text-gray-300 hover:text-gray-500 text-lg leading-none">⋮</button>
//                 </div>
//                 <div className="flex flex-col gap-3">
//                   {group.items.map((item, ii) => (
//                     <div key={ii} className="flex gap-3">
//                       <span className="text-[11px] font-semibold text-[#7152F3] whitespace-nowrap">
//                         {item.time}
//                       </span>
//                       <div className="border-l-2 border-[#7152F3] pl-3 flex flex-col gap-0.5">
//                         <span className="text-[11px] font-semibold text-[#16151C]">{item.category}</span>
//                         <span className="text-[11px] text-gray-400 leading-tight">{item.title}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 {gi < newsGroups.length - 1 && <div className="border-b border-gray-100 mt-4" />}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from "react";
import DashboardTopbar from "../../Components/dashboard/DashboardTopbar";
import StatCards from "../../Components/dashboard/StatCards";
import TrafficOverview from "../../Components/dashboard/Trafficoverview";
import WebsitesTable from "../../Components/dashboard/Websitestable";
import TrendingTopic from "../../Components/dashboard/Trendingtopic";

const AdminDashboard: React.FC = () => {
 return (
  <div className="min-h-screen w-full bg-[#FFFFFF] p-3 sm:p-4 lg:p-0 font-sans">

    {/* ── Topbar ── */}
    <DashboardTopbar />

    {/* ── Main Layout ── */}
    <div className="grid grid-cols-12 gap-2 lg:gap-2 items-stretch">

      {/* LEFT SIDE */}
      <div className="col-span-12 xl:col-span-7 flex flex-col gap-4 lg:gap-3">
          <StatCards />
        <TrafficOverview />
      </div>

      {/* RIGHT SIDEBAR */}
     <div className="col-span-12 xl:col-span-5 flex">
  <div className="w-full max-h-full">
    <TrendingTopic />
  </div>
</div>

      {/* FULL WIDTH TABLE */}
      <div className="col-span-12">
        <WebsitesTable />
      </div>

    </div>
  </div>
);
};

export default AdminDashboard;

