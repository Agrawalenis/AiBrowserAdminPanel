import './index.css'
import  { useEffect, useRef, useState } from "react";
import Topbar from "../../Components/layout/Topbar";
import { Search, Plus, SlidersHorizontal, MoreHorizontal, Eye, Edit, BarChart, Ban, Trash } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";



const trafficData = [
  { month: "Nov", visitors: 200 },
  { month: "Dec", visitors: 350 },
  { month: "Jan", visitors: 400 },
  { month: "Feb", visitors: 800 },
  { month: "Mar", visitors: 1200 },
  { month: "Apr", visitors: 1600 }
];

const sourceData = [
  { name: "Organic", value: 54 },
  { name: "Direct", value: 28 },
  { name: "Social", value: 18 }
];

const COLORS = ["#7C3AED", "#60A5FA", "#34D399"];





const websites = [
  {
    name: "TechStore",
    domain: "techstore.com",
    created: "Jan 10, 2023",
    status: "Active",
    owner: "John Doe",
    traffic: "42,156",
    category: "E-commerce",
    iconColor: "bg-purple-500"
  },
  {
    name: "Travel Bliss",
    domain: "travelbliss.com",
    created: "Mar 22, 2022",
    status: "Active",
    owner: "Sarah Smith",
    traffic: "37,842",
    category: "Travel",
    iconColor: "bg-green-500"
  },
  {
    name: "DailyNews",
    domain: "dailynews.com",
    created: "Feb 5, 2021",
    status: "Inactive",
    owner: "Michael Brown",
    traffic: "21,548",
    category: "News",
    iconColor: "bg-indigo-500"
  },
  {
    name: "Healthy Living",
    domain: "healthyliving.com",
    created: "Jul 18, 2020",
    status: "Active",
    owner: "Emma Johnson",
    traffic: "29,487",
    category: "Health",
    iconColor: "bg-yellow-500"
  },
  {
    name: "Crafty Corner",
    domain: "craftycorner.com",
    created: "Sep 30, 2019",
    status: "Blocked",
    owner: "David Wilson",
    traffic: "18,022",
    category: "DIY",
    iconColor: "bg-orange-500"
  },
  {
    name: "PetPals",
    domain: "petpals.com",
    created: "May 15, 2022",
    status: "Active",
    owner: "Emily Davis",
    traffic: "25,641",
    category: "Pets",
    iconColor: "bg-purple-400"
  },
  {
    name: "StyleHub",
    domain: "stylehub.com",
    created: "Nov 11, 2021",
    status: "Active",
    owner: "Jessica Lee",
    traffic: "35,765",
    category: "Fashion",
    iconColor: "bg-pink-500"
  },
  {
    name: "EduCenter",
    domain: "educenter.com",
    created: "Dec 8, 2020",
    status: "Inactive",
    owner: "Daniel Martinez",
    traffic: "17,209",
    category: "Education",
    iconColor: "bg-blue-600"
  },
  {
    name: "Foodies Delight",
    domain: "foodiesdelight.com",
    created: "Sep 3, 2019",
    status: "Active",
    owner: "Laura Miller",
    traffic: "43,812",
    category: "Food",
    iconColor: "bg-purple-600"
  },
  {
    name: "AutoWorld",
    domain: "autoworld.com",
    created: "Jun 20, 2021",
    status: "Active",
    owner: "Kevin Anderson",
    traffic: "39,187",
    category: "Automotive",
    iconColor: "bg-red-500"
  }
];



const AllWebsites = () => {

  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [showBlockModal, setShowBlockModal] = useState(false);
const [selectedSite, setSelectedSite] = useState<any>(null);
const [showAnalytics, setShowAnalytics] = useState(false);
const [currentPage, setCurrentPage] = useState(1);






  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  const toggleMenu = (index: number) => {
  setOpenMenu(openMenu === index ? null : index);
};




  const handlePrev = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

const handleNext = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

 const totalPages = Math.ceil(websites.length / rowsPerPage);

const indexOfLastRow = currentPage * rowsPerPage;
const indexOfFirstRow = indexOfLastRow - rowsPerPage;

const currentWebsites = websites.slice(indexOfFirstRow, indexOfLastRow);
  return (
    <div className="flex flex-col gap-6">

      {/* Topbar */}
      <Topbar
        title={
          <div className="font-semibold text-[20px] text-[#16151C]">
            All Websites
          </div>
        }
        subtitle="All Websites Information"
        subtitleClassName="font-light text-[14px] text-[#9CA3AF]"
      />

      {/* Search + Buttons */}
      <div className="flex items-center justify-between">

        <div className="relative w-[340px]">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none"
          />
        </div>

        <div className="flex gap-3">

          <button className="flex items-center gap-2 px-5 py-2 text-white rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500">
            <Plus size={16} />
            Block website
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
            <SlidersHorizontal size={16} />
            Filter
          </button>

        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl">

        <table className="w-full">

          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="p-4">
                <input type="checkbox" />
              </th>
              <th className="text-left p-4">Website Name</th>
              <th className="text-left">Domain</th>
              <th className="text-left">Created</th>
              <th className="text-left">Status</th>
              <th className="text-left">Owner</th>
              <th className="text-left">Traffic</th>
              <th className="text-left">Category</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {currentWebsites.map((site, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                {/* Checkbox */}
                <td className="p-4">
                  <input type="checkbox" />
                </td>

                <td className="py-4">

                  <div className="flex items-center gap-5">

                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${site.iconColor}`}>
                      🌐
                    </div>

                    {/* Name + Domain */}
                    <div className="flex flex-col">
                      <span className="font-medium text-[#16151C]">
                        {site.name}
                      </span>

                      <span className="text-sm text-gray-400">
                        {site.domain}
                      </span>
                    </div>

                  </div>

                </td>

                <td>{site.domain}</td>

                <td>{site.created}</td>

                <td>
                  <span
                    className={`px-3 py-1 text-xs rounded-full
                        ${site.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : site.status === "Inactive"
                        ? "bg-gray-100 text-gray-500"
                        : "bg-red-100 text-red-600"
                      }`}
                  >
                    {site.status}
                  </span>
                </td>

                <td>{site.owner}</td>

                <td>{site.traffic}</td>

                <td>{site.category}</td>

                <td className="relative">

  <MoreHorizontal
    className="cursor-pointer"
    size={20}
    onClick={() => toggleMenu(index)}
  />

  {openMenu === index && (
        <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-52 bg-white border rounded-lg shadow-lg z-50
      animate-fadeIn"
    >


      <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left">
        <Eye size={16}/>
        View detail
      </button>

      <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left">
        <Edit size={16}/>

        Edit
      </button>

      <button
onClick={() => {
setSelectedSite(site);
setShowAnalytics(true);
setOpenMenu(null);
}}
className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left"
>
<BarChart size={16}/>
View Analytics
</button>

      <button
  onClick={() => {
    setSelectedSite(site);
    setShowBlockModal(true);
  }}
className="flex items-center gap-2 w-full px-4 py-2 hover:bg-red-50 text-red-600 text-left">
  <Ban size={16} />
  Block Analytics
</button>

      <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-red-50 text-red-600 text-left">
        <Trash size={16}/>
        Delete
      </button>

    </div>
  )}

</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-gray-500 m-5">

        {/* Left Section */}
        <div className="flex items-center gap-2">
          <span>Showing</span>

          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="border rounded-md px-2 py-1"
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={36}>36</option>
          </select>
        </div>

        {/* Center Section */}
        <span className="text-sm text-gray-500">
          Showing {indexOfFirstRow + 1} to 
{Math.min(indexOfLastRow, websites.length)} 
out of {websites.length} records
        </span>

        {/* Right Section */}
        <div className="flex items-center gap-2">

          <button
            onClick={handlePrev}
            className="px-3 py-1 border rounded"
          >
            <FaChevronLeft />
          </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
  key={num}
  onClick={() => setCurrentPage(num)}
  className={`px-3 py-1 border rounded ${
    currentPage === num ? "bg-blue-500 text-white" : ""
  }`}
>
  {num}
</button>
          ))}

          <button
            onClick={handleNext}
            className="px-3 py-1 border rounded"
          >
            <FaChevronRight />
          </button>

        </div>

      </div>
      {showBlockModal && selectedSite && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">

    <div className="bg-white w-[500px] rounded-xl shadow-xl p-6 modal-animation">

      {/* Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="text-red-500 text-2xl">⚠</div>

        <h2 className="text-xl font-semibold">
          Block Website?
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-6">
        Are you sure you want to block the website
        <span className="font-semibold"> "{selectedSite.name}" </span>
        ({selectedSite.domain})? Blocking will prevent the site from being
        accessed and will deactivate any active services.
      </p>

      {/* Website Info Card */}
      <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg mb-6">

        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${selectedSite.iconColor}`}
        >
          🌐
        </div>

        <div>
          <p className="font-semibold">{selectedSite.name}</p>
          <p className="text-sm text-gray-400">{selectedSite.domain}</p>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">

        <button
          onClick={() => setShowBlockModal(false)}
          className="px-4 py-2 border rounded-lg"
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => {
            console.log("Website Blocked:", selectedSite.name);
            setShowBlockModal(false);
          }}
        >
          Block
        </button>

      </div>

    </div>

  </div>
)}
{showAnalytics && selectedSite && (
<div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-6 py-6">

<div className="bg-white w-full max-w-[1300px] h-[92vh] rounded-2xl shadow-xl overflow-y-auto">

{/* Header */}
<div className="flex justify-between items-center px-8 py-5 border-b">

<h2 className="text-2xl font-semibold text-gray-800">
View Analytics
</h2>

<button
onClick={() => setShowAnalytics(false)}
className="text-gray-600 hover:text-gray-700 text-xl"
>
✕
</button>

</div>


{/* Body */}
<div className="px-8 py-8 space-y-8 h-[calc(100%-100px)]">


{/* Website Info */}
<div className="flex items-center gap-4">

<div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${selectedSite.iconColor}`}>
🌐
</div>

<div>
<p className="font-semibold text-lg">{selectedSite.name}</p>
<p className="text-gray-400">{selectedSite.domain}</p>
</div>

</div>


{/* Analytics Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="border rounded-xl p-5 hover:shadow-sm transition">
<p className="text-gray-500 text-sm mb-1">Total Visitors</p>
<p className="text-2xl font-semibold">42,156</p>
</div>

<div className="border rounded-xl p-5 hover:shadow-sm transition">
<p className="text-gray-500 text-sm mb-1">Total Pageviews</p>
<p className="text-2xl font-semibold">132,479</p>
</div>

<div className="border rounded-xl p-5 hover:shadow-sm transition">
<p className="text-gray-500 text-sm mb-1">Avg Session</p>
<p className="text-2xl font-semibold">3m 47s</p>
</div>

<div className="border rounded-xl p-5 hover:shadow-sm transition">
<p className="text-gray-500 text-sm mb-1">Bounce Rate</p>
<p className="text-2xl font-semibold">37.6%</p>
</div>

</div>


{/* Traffic Overview */}
<div className="space-y-4">

<h3 className="text-lg font-semibold text-gray-800">
Traffic Overview
</h3>

<div className="h-[300px] border rounded-xl p-4 bg-white">

<ResponsiveContainer width="100%" height="100%">

<AreaChart data={trafficData}>

<XAxis dataKey="month" />

<YAxis />

<Tooltip />

<Area
type="monotone"
dataKey="visitors"
stroke="#7C3AED"
fill="#C4B5FD"
fillOpacity={0.4}
strokeWidth={3}
/>

</AreaChart>

</ResponsiveContainer>

</div>

</div>


{/* Bottom Section */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


{/* Traffic Sources */}
<div className="space-y-4">

<h3 className="text-lg font-semibold">
Traffic Sources
</h3>

<div className="flex items-center gap-8">

<PieChart width={220} height={220}>

<Pie
data={sourceData}
cx="50%"
cy="50%"
innerRadius={65}
outerRadius={90}
dataKey="value"
>

{sourceData.map((entry, index) => (
<Cell key={index} fill={COLORS[index]} />
))}

</Pie>

</PieChart>


<div className="space-y-3">

{sourceData.map((item, index) => (
<div key={index} className="flex items-center gap-3 text-sm">

<div
className="w-3 h-3 rounded-full"
style={{ backgroundColor: COLORS[index] }}
></div>

<span className="text-gray-700">{item.name}</span>

<span className="text-gray-400">{item.value}%</span>

</div>
))}

</div>

</div>

</div>


{/* Top Countries + URLs */}
<div className="space-y-6">

<div>

<h3 className="text-lg font-semibold mb-3">
Top Countries
</h3>

<div className="space-y-3 text-sm">

<div className="flex justify-between border-b pb-2">
<span>United States</span>
<span>19,873</span>
</div>

<div className="flex justify-between border-b pb-2">
<span>United Kingdom</span>
<span>6,421</span>
</div>

<div className="flex justify-between border-b pb-2">
<span>India</span>
<span>5,678</span>
</div>

</div>

</div>


<div>

<h3 className="text-lg font-semibold mb-3">
Top URLs
</h3>

<div className="space-y-2 text-sm">

<div className="flex justify-between">
<span>techstore.com/products</span>
<span>54,345</span>
</div>

<div className="flex justify-between">
<span>techstore.com/blog</span>
<span>31,217</span>
</div>

<div className="flex justify-between">
<span>techstore.com/about</span>
<span>15,876</span>
</div>

</div>

</div>

</div>

</div>

</div>

</div>

</div>
)}

    </div>
    
  );
  
};



export default AllWebsites;