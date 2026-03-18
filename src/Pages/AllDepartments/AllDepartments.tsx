import React, { useState, useMemo } from "react";
import Topbar from "../../Components/layout/Topbar";
import Pagination from "../../Components/table/Pagination";
import type { Department } from "../../types";

const departmentsData: Department[] = [
  { id: "D001", name: "Development", head: "John Doe", totalEmployees: 25, status: "Active" },
  { id: "D002", name: "Design", head: "Jane Smith", totalEmployees: 15, status: "Active" },
  { id: "D003", name: "HR", head: "Robert Johnson", totalEmployees: 8, status: "Active" },
  { id: "D004", name: "Sales", head: "Emily Davis", totalEmployees: 12, status: "Inactive" },
  { id: "D005", name: "Marketing", head: "Michael Wilson", totalEmployees: 10, status: "Active" },
  { id: "D006", name: "Finance", head: "Sarah Brown", totalEmployees: 6, status: "Inactive" },
  { id: "D007", name: "Support", head: "David Taylor", totalEmployees: 9, status: "Active" },
  { id: "D008", name: "QA", head: "Emma Martinez", totalEmployees: 7, status: "Active" },
];

const AllDepartments: React.FC = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // 🔍 Search filter
  const filteredData = useMemo(() => {
    return departmentsData.filter((dept) =>
      dept.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full flex flex-col bg-white">

      <Topbar
        title={<div className="text-[20px] font-semibold">All Departments</div>}
        subtitle="Manage all departments in your organization"
        subtitleClassName="text-gray-400 text-sm"
      />

      <div className="mt-4 border rounded-lg p-4">

        {/* 🔍 Search + Filter */}
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-3 py-2 w-[250px] text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="border px-4 py-2 rounded-md text-sm">
            Filter
          </button>
        </div>

        {/* 📊 Table */}
        <div className="w-full">
          <table className="w-full text-left text-sm">
            <thead className="text-gray-400 border-b">
              <tr>
                <th className="py-2">Department Name</th>
                <th>Department ID</th>
                <th>Head</th>
                <th>Total Employees</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((dept) => (
                <tr key={dept.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 font-medium">{dept.name}</td>
                  <td>{dept.id}</td>
                  <td>{dept.head}</td>
                  <td>{dept.totalEmployees}</td>
                  <td>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        dept.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {dept.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 📄 Pagination */}
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={filteredData.length}
            itemsPerPage={itemsPerPage}
          />
        </div>

      </div>
    </div>
  );
};

export default AllDepartments;