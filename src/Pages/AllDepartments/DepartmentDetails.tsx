import React, { useState, useMemo } from "react";
import Topbar from "../../Components/layout/Topbar";
import Pagination from "../../Components/table/Pagination";
import Button from "../../Components/buttons/Button";
import { useParams } from "react-router-dom";

const departments = [
  {
    name: "Design Department",
    employees: [
      { name: "Dianne Russell", role: "Lead UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=1" },
      { name: "Arlene McCoy", role: "Sr. UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=2" },
      { name: "Cody Fisher", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=3" },
      { name: "Joe Boan", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=4" },
      { name: "Keshav Brand", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=5" },
      { name: "Alice Brown", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=21" },
      { name: "John Smith", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=22" },
      { name: "Emma Wilson", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=23" },
      { name: "David Lee", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=24" },
      { name: "Sophia Taylor", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=25" },
      { name: "Daniel Thomas", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=26" },
      { name: "Olivia Martin", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=27" },
      { name: "James Anderson", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=28" },
      { name: "Isabella Moore", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=29" },
      { name: "William Jackson", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=30" },
      { name: "Mia White", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=31" },
      { name: "Ethan Harris", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=32" },
      { name: "Charlotte Clark", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=33" },
      { name: "Benjamin Lewis", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=34" },
      { name: "Amelia Walker", role: "UI/UX Designer", avatarUrl: "https://i.pravatar.cc/150?img=35" }
    ]
  },

  {
    name: "Sales Department",
    employees: [
      { name: "Darrell Steward", role: "Sr. Sales Manager", avatarUrl: "https://i.pravatar.cc/150?img=6" },
      { name: "Kristin Watson", role: "Sales Manager", avatarUrl: "https://i.pravatar.cc/150?img=7" },
      { name: "Nilson Stark", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=8" },
      { name: "Naruto Uzumaki", role: "BDE", avatarUrl: "https://i.pravatar.cc/150?img=9" },
      { name: "Sasuke Uchia", role: "BDE", avatarUrl: "https://i.pravatar.cc/150?img=10" },
      { name: "Chris Evans", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=36" },
      { name: "Scarlett Johansson", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=37" },
      { name: "Robert Downey", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=38" },
      { name: "Mark Ruffalo", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=39" },
      { name: "Tom Holland", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=40" },
      { name: "Zendaya Coleman", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=41" },
      { name: "Paul Rudd", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=42" },
      { name: "Brie Larson", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=43" },
      { name: "Chris Hemsworth", role: "Sales", avatarUrl: "https://i.pravatar.cc/150?img=44" }
    ]
  },

  {
    name: "Project Manager Department",
    employees: [
      { name: "Leslie Alexander", role: "Sr. Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=11" },
      { name: "Ronald Richards", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=12" },
      { name: "Sakura Haruno", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=13" },
      { name: "Hinata Hyuga", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=14" },
      { name: "Eno Yamanaka", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=15" },
      { name: "Tony Stark", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=45" },
      { name: "Steve Rogers", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=46" },
      { name: "Bruce Banner", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=47" },
      { name: "Natasha Romanoff", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=48" },
      { name: "Clint Barton", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=49" },
      { name: "Peter Parker", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=50" },
      { name: "Stephen Strange", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=51" },
      { name: "Wanda Maximoff", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=52" },
      { name: "Vision", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=53" },
      { name: "Sam Wilson", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=54" },
      { name: "Bucky Barnes", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=55" },
      { name: "Scott Lang", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=56" },
      { name: "T'Challa", role: "Project Manager", avatarUrl: "https://i.pravatar.cc/150?img=57" }
    ]
  },

  {
    name: "Marketing Department",
    employees: [
      { name: "Wade Warren", role: "Sr. Marketing Manager", avatarUrl: "https://i.pravatar.cc/150?img=16" },
      { name: "Brooklyn Simmons", role: "Marketing Manager", avatarUrl: "https://i.pravatar.cc/150?img=17" },
      { name: "Tony Stark", role: "Marketing Coordinator", avatarUrl: "https://i.pravatar.cc/150?img=18" },
      { name: "Steve Rodger", role: "Marketing", avatarUrl: "https://i.pravatar.cc/150?img=19" },
      { name: "Madara Uchia", role: "Marketing", avatarUrl: "https://i.pravatar.cc/150?img=20" },
      { name: "Loki", role: "Marketing", avatarUrl: "https://i.pravatar.cc/150?img=58" },
      { name: "Thor", role: "Marketing", avatarUrl: "https://i.pravatar.cc/150?img=59" },
      { name: "Gamora", role: "Marketing", avatarUrl: "https://i.pravatar.cc/150?img=60" },
      { name: "Rocket", role: "Marketing", avatarUrl: "https://i.pravatar.cc/150?img=61" },
      { name: "Groot", role: "Marketing", avatarUrl: "https://i.pravatar.cc/150?img=62" }
    ]
  }
];

const ITEMS_PER_PAGE = 10;

const DepartmentDetails = () => {
  const { deptName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const decodedDept = decodeURIComponent(deptName || "");


  const departmentsWithIds = useMemo(() => {
    return departments.map((dept) => ({
      ...dept,
      employees: dept.employees.map((emp) => ({
        ...emp,
        id: Math.floor(100000000 + Math.random() * 900000000),
      })),
    }));
  }, []);

  const selectedDept = departmentsWithIds.find(
    (dept) => dept.name === decodedDept
  );

  if (!selectedDept) {
    return <div className="p-5">Department not found</div>;
  }

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return selectedDept.employees.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, selectedDept]);

  return (
    <div className="w-full bg-white">

      <Topbar
        title={
          <div className="text-[20px] font-semibold text-[#16151C]">
            {selectedDept.name}
          </div>
        }
        subtitle={
          <span className="text-xs text-gray-600 font-medium">
            All Departments &gt; {selectedDept.name}
          </span>
        }
      />

      <div className="border border-gray-200 rounded-xl m-4 bg-white">

        <div className="p-4 flex justify-between items-center">

          <div className="relative w-[300px]">
            <img src="/images/search.png" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg"
            />
          </div>

          <div className="flex gap-3">
            <Button
              label={
                <div className="flex items-center gap-2">
                  <img src="/images/add.png" className="w-5 h-5" />
                  Add New Employee
                </div>
              }
              className="bg-[#7152F3] text-white px-4 py-2 rounded-lg"
            />

            <Button
              label={
                <div className="flex items-center gap-2">
                  <img src="/images/filter.png" className="w-5 h-5" />
                  Filter
                </div>
              }
              className="border px-4 py-2 rounded-lg bg-white"
            />
          </div>
        </div>

        <table className="w-full text-sm text-center">
          <thead className="text-gray-400 border-b">
            <tr>
              <th className="px-4 py-3">Employee ID</th>
              <th className="px-4 py-3">Employee Name</th>
              <th className="px-4 py-3">Designation</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((emp, index) => (
              <tr key={index} className="border-b">

                <td className="px-4 py-3">{emp.id}</td>

                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <img src={emp.avatarUrl} className="w-8 h-8 rounded-full" />
                    {emp.name}
                  </div>
                </td>

                <td className="px-4 py-3">{emp.role}</td>
                <td className="px-4 py-3">Office</td>

                <td className="px-4 py-3">
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">
                    Permanent
                  </span>
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <img src="/images/view.png" className="w-5 h-5 cursor-pointer" />
                    <img src="/images/edit.png" className="w-5 h-5 cursor-pointer invert" />
                    <img src="/images/trash.png" className="w-5 h-5 cursor-pointer" />
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(selectedDept.employees.length / ITEMS_PER_PAGE)}
          onPageChange={setCurrentPage}
          totalItems={selectedDept.employees.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />

      </div>
    </div>
  );
};

export default DepartmentDetails;