import React from "react";
import { IoChevronForward } from "react-icons/io5";
import Topbar from "../../Components/layout/Topbar";

interface DepartmentMember {
  name: string;
  role: string;
  avatar: string;
}

interface Department {
  title: string;
  members: DepartmentMember[];
  totalMembers: number;
}

const departments: Department[] = [
  {
    title: "Design Department",
    totalMembers: 20,
    members: [
      { name: "Dianne Russell", role: "Lead UI/UX Designer", avatar: "/images/avatar1.png" },
      { name: "Arlene McCoy", role: "Sr. UI/UX Designer", avatar: "/images/avatar2.png" },
      { name: "Cody Fisher", role: "Sr. UI/UX Designer", avatar: "/images/avatar3.png" },
      { name: "Theresa Webb", role: "UI/UX Designer", avatar: "/images/avatar4.png" },
      { name: "Ronald Richards", role: "UI/UX Designer", avatar: "/images/avatar5.png" },
    ],
  },
  {
    title: "Sales Department",
    totalMembers: 14,
    members: [
      { name: "Darrell Steward", role: "Sr. Sales Manager", avatar: "/images/avatar6.png" },
      { name: "Kristin Watson", role: "Sr. Sales Manager", avatar: "/images/avatar7.png" },
      { name: "Courtney Henry", role: "BDM", avatar: "/images/avatar8.png" },
      { name: "Kathryn Murphy", role: "BDE", avatar: "/images/avatar9.png" },
      { name: "Albert Flores", role: "Sales", avatar: "/images/avatar10.png" },
    ],
  },
  {
    title: "Project Manager Department",
    totalMembers: 18,
    members: [
      { name: "Leslie Alexander", role: "Sr. Project Manager", avatar: "/images/avatar11.png" },
      { name: "Ronald Richards", role: "Sr. Project Manager", avatar: "/images/avatar12.png" },
      { name: "Savannah Nguyen", role: "Project Manager", avatar: "/images/avatar13.png" },
      { name: "Eleanor Pena", role: "Project Manager", avatar: "/images/avatar14.png" },
      { name: "Esther Howard", role: "Project Manager", avatar: "/images/avatar15.png" },
    ],
  },
  {
    title: "Marketing Department",
    totalMembers: 10,
    members: [
      { name: "Wade Warren", role: "Sr. Marketing Manager", avatar: "/images/avatar16.png" },
      { name: "Brooklyn Simmons", role: "Sr. Marketing Manager", avatar: "/images/avatar17.png" },
      { name: "Kristin Watson", role: "Marketing Coordinator", avatar: "/images/avatar18.png" },
      { name: "Jacob Jones", role: "Marketing Coordinator", avatar: "/images/avatar19.png" },
      { name: "Cody Fisher", role: "Marketing", avatar: "/images/avatar20.png" },
    ],
  },
];

const AllDepartments: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="mb-1">
        <Topbar 
          title={
            <div className="font-bold text-[18px] leading-6 text-[#16151C]">
              All Departments
            </div>
          } 
          subtitle="All Departments Information"
          subtitleClassName="text-[16px] leading-5 text-[#A2A1A8] font-light"
        />
      </div>
<div className="bg-white shadow-sm border border-gray-200 rounded-xl mx-10">
      {/* Search bar */}
      <div className="p-4 px-6">
  <div className="relative w-full md:w-80">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <img
        src="/images/search.png"
        alt="Search"
        className="h-[18px] w-[18px]"
      />
    </div>
    <input
      type="text"
      placeholder="Search"
      className="block w-full pl-10 pr-3 py-2 border border-[#A2A1A81A] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder:text-[#16151C33] placeholder:font-light"
    />
  </div>
</div>


      {/* Departments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {departments.map((dept) => (
          <div
            key={dept.title}
            className="border border-gray-200 rounded-xl p-3 bg-white shadow-sm"
          >
            <div className="flex justify-between items-center -mt-1">
              <h3 className="font-bold text-[#16151C]">{dept.title}</h3>
              <a href="#" className="text-sm text-[#7152F3] font-medium mt-4">
                View All
              </a>
            </div>
            <p className="text-xs text-gray-500 -mt-1 mb-2">{dept.totalMembers} Members</p>
            <div className="w-full h-[1px] bg-gray-200 mb-2"></div>
            <div className="flex flex-col gap-1">
              {dept.members.map((member, i) => (
                <div key={i} className="flex items-center justify-between hover:bg-gray-50 p-1 rounded-md cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm text-gray-800">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <IoChevronForward className="text-[#16151C] group-hover:text-[#7152F3] transition-colors duration-200" />
 
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
