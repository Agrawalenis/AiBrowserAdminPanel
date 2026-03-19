import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../../Components/layout/Topbar";
import Pagination from "../../Components/table/Pagination";

const employees = Array.from({ length: 50 }, (_, i) => ({
  id: `EMP${i + 1}`,
  name: "Employee " + (i + 1),
  role: "UI/UX Designer",
  type: "Office",
  status: "Permanent",
}));

const ITEMS_PER_PAGE = 10;

const DepartmentDetails = () => {
  const { deptName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return employees.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="w-full bg-white">

      <Topbar
        title={<div className="text-[18px] font-semibold">{deptName}</div>}
        subtitle={`All Departments > ${deptName}`}
      />

      <div className="border m-4 rounded-lg p-4">

        {/* Search + Button */}
        <div className="flex justify-between mb-4">
          <input
            placeholder="Search"
            className="border px-3 py-2 rounded-md w-[250px]"
          />

          <div className="flex gap-2">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
              + Add New Employee
            </button>
            <button className="border px-4 py-2 rounded-md">
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((emp) => (
              <tr key={emp.id} className="border-b">
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.type}</td>
                <td>
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(employees.length / ITEMS_PER_PAGE)}
          onPageChange={setCurrentPage}
          totalItems={employees.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />

      </div>
    </div>
  );
};

export default DepartmentDetails;