import './index.css'
import React, { useEffect, useRef, useState } from "react";
import Topbar from "../../Components/layout/Topbar";
import { Search, Plus, SlidersHorizontal, MoreHorizontal, Eye, Edit, BarChart, Ban, Trash } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";









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

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [showBlockModal, setShowBlockModal] = useState(false);
const [selectedSite, setSelectedSite] = useState<any>(null);



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

  const totalPages = 4;

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
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

            {websites.slice(0, rowsPerPage).map((site, index) => (
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

      <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-left">
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
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>

        {/* Center Section */}
        <span className="text-sm text-gray-500">
          Showing 1 to {rowsPerPage} out of {websites.length} records
        </span>

        {/* Right Section */}
        <div className="flex items-center gap-2">

          <button
            onClick={handlePrev}
            className="px-3 py-1 border rounded"
          >
            <FaChevronLeft />
          </button>

          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-3 py-1 border rounded ${page === num ? "bg-blue-500 text-white" : ""
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

    </div>
    
  );
  
};



export default AllWebsites;