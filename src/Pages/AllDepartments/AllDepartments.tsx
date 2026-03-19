import React from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../Components/layout/Topbar";
import { FiSearch } from "react-icons/fi";
const departments = [
  {
    name: "Design Department",
    members: 20,
    employees: [
      { name: "Dianne Russell", role: "Lead UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=1" },
      { name: "Arlene McCoy", role: "Sr. UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=2" },
      { name: "Cody Fisher", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=3" },
      { name: "Joe Boan", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=4" },
      { name: "Keshav Brand", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=5" }
    ]
  },
  {
    name: "Sales Department",
    members: 14,
    employees: [
      { name: "Darrell Steward", role: "Sr. Sales Manager", avatarUrl: "https://i.pravatar.cc/150?img=6" },
      { name: "Kristin Watson", role: "Sales Manager", avatarUrl: "https://i.pravatar.cc/150?img=7" },
      { name: "Nilson Stark", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=8" },
      { name: "Naruto Uzumaki", role: "BDE", avatarUrl: "https://i.pravatar.cc/150?img=9" },
      { name: "Sasuke Uchia", role: "BDE", avatarUrl: "https://i.pravatar.cc/150?img=10" }
    ]
  },
  {
    name: "Project Manager Department",
    members: 18,
    employees: [
      { name: "Leslie Alexander", role: "Sr. Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=11" },
      { name: "Ronald Richards", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=12" },
      { name: "Sakura Haruno", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=13" },
      { name: "Hinata Hyuga", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=14" },
      { name: "Eno Yamanaka", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=15" }
    ]
  },
  {
    name: "Marketing Department",
    members: 10,
    employees: [
      { name: "Wade Warren", role: "Sr. Marketing Manager", avatarUrl: "https://i.pravatar.cc/150?img=16" },
      { name: "Brooklyn Simmons", role: "Marketing Manager", avatarUrl: "https://i.pravatar.cc/150?img=17" },
      { name: "Tony Stark", role: "Marketing Coordinator", avatarUrl: "https://i.pravatar.cc/150?img=18" },
      { name: "Steve Rodger", role: "Marketing", avatarUrl: "https://i.pravatar.cc/150?img=19" },
      { name: "Madara Uchia", role: "Marketing", avatarUrl: "https://i.pravatar.cc/150?img=20" }
    ]
  }
];

const AllDepartments: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col bg-white">

      {/* Topbar */}
      <Topbar
        title={
          <div className="text-[20px] font-semibold text-[#16151C]">
            All Departments
          </div>
        }
        subtitle="All Departments Information"
        subtitleClassName="text-gray-400 text-sm"
      />
       <div className="border border-gray-200 rounded-lg p-0">
      <div className="p-4">
  <div className="relative w-[320px]">

    {/* Search Icon */}
      <FiSearch className="absolute left-4 top-1/2 text-gray-500 -translate-y-1/2 w-7 h-7" />

    {/* Input */}
    <input
      type="text"
      placeholder="Search"
      className="w-full pl-11 pr-4 pl-12 py-3 rounded-xl border border-1
      focus:outline-none focus:ring-2 focus:ring-purple-500"
    />

  </div>
</div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4">

        {departments.map((dept, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition"
          >

            {/* Header */}
            <div className="flex justify-between items-center mb-4 border-b-2 pb-[12px]">
              <div>
                <h2 className="text-[16px] font-semibold text-[#16151C]">
                  {dept.name}
                </h2>
                <p className="text-[12px] text-gray-400">
                  {dept.members} Members
                </p>
              </div>

              <button
                className="text-purple-600 text-sm font-medium hover:underline"
                onClick={() => navigate(`/departments/${dept.name}`)}
              >
                View All
              </button>
            </div>

            {/* Employees */}
            <div className="space-y-3">

              {dept.employees.map((emp, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer"
                >

                  <div className="flex items-center gap-3">

                    {/* Avatar */}
                    <div className="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                      {emp.avatarUrl ? (
                        <img
                          src={emp.avatarUrl}
                          alt={emp.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <span className="text-xs text-gray-700 font-medium">
                          {emp.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </span>
                      )}
                    </div>

                    {/* Name + Role */}
                    <div>
                      <p className="text-[16px] text-gray-800 font-semibold">
                        {emp.name}
                      </p>
                      <p className="text-[12px] text-gray-400">
                        {emp.role}
                      </p>
                    </div>

                  </div>

                  <span className="text-3xl">›</span>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
       </div>
    </div>
  );
};

export default AllDepartments;