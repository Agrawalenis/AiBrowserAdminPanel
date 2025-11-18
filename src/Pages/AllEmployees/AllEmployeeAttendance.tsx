import React, { useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import type { UserStatus, TableColumn, Employee, EmployeeAttendance } from '../../types';
import Topbar from "../../Components/layout/Topbar";
import Pagination from "../../Components/table/Pagination";
import { mockEmployeeAttendances } from "../../mock/employeeAttendance";
import AttendanceTable from "../../Components/table/AttendanceTable";

const ITEMS_PER_PAGE = 10;

interface AllEmployeesProps {
  onMount?: () => void;
}

const AllEmployeeAttendance: React.FC<AllEmployeesProps> = ({ onMount }) => {
  React.useEffect(() => {
    if (onMount) onMount();
  }, [onMount]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter] = useState<UserStatus | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  const columns: TableColumn<EmployeeAttendance>[] = useMemo(() => [
    { 
      header: 'Employee Name', 
      accessor: 'name',
      className: 'text-[#16151C]',
      render: (name: string, user: EmployeeAttendance) => (
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-2">
            {user.avatarUrl ? (
              <img 
                src={user.avatarUrl} 
                alt={name} 
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-xs text-gray-500">
                {name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            )}
          </div>
          <span>{name}</span>
        </div>
      )
    },
    { 
      header: 'Designation', 
      accessor: 'designation',
      className: 'text-[#16151C]' 
    },
    { 
      header: 'Type', 
      accessor: 'type',
      className: 'text-[#16151C]' 
    },
    {
        header:'Check in Time',
        accessor: 'checkintime',
        className: 'text-[#16151C]' 

    },
    { 
      header: 'Status', 
      accessor: 'status',
      className: 'text-[#16151C]',
      render: (value: string) => (
        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-[4px] text-xs font-medium bg-[#3FC28A1A] text-[#3FC28A]">
          {value}
        </span>
      )
    },
  ], []);

  const employeeAttendance: EmployeeAttendance[] = useMemo(() => mockEmployeeAttendances, []);

  const filteredEmployees = useMemo(() => {
    return employeeAttendance.filter(employeeAttendance => {
      const matchesSearch = 
        employeeAttendance.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employeeAttendance.id.includes(searchQuery) ||
        employeeAttendance.email?.toLowerCase().includes(searchQuery.toLowerCase());

      if (activeFilter === 'all' || !activeFilter) return matchesSearch;
      return matchesSearch && employeeAttendance.status === activeFilter;
    });
  }, [employeeAttendance, searchQuery, activeFilter]);

  // Calculate paginated data
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEmployees.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredEmployees, currentPage]);
  // Reset to first page when filters or search change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeFilter]);

  const navigate = useNavigate();

  const handleRowClick = (employee: Employee) => {
    navigate(`/users/${employee.id}`);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="mb-4">
        <Topbar 
          title={
            <div className="font-Lexend font-bold text-[16px] leading-6 text-[#16151C]">
              Attendance
            </div>
          } 
          subtitle="All Employee Attendance"
          subtitleClassName="text-[14px] leading-5 text-[#A2A1A8] font-light"
        />
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-xl mx-10">
        {/* Search and Filter Bar */}
        <div className="p-4  flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none rounded-lg">
              <img src="/images/search.png" className="h-[20px] w-[20px]" alt="Search" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-[#A2A1A81A] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm placeholder:text-[#16151C33] placeholder:font-light"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex space-x-3 w-full md:w-auto">
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-hidden w-full ">
          <div className="overflow-auto text-sm w-full -ml-12">
            {paginatedUsers.length > 0 ? (
              <AttendanceTable 
                columns={columns}
                data={paginatedUsers}
                onRowClick={handleRowClick}
                rowClassName="hover:bg-gray-50"
                className="w-full table-auto text-left"
              />
              // <UserTable/>
            ) : (
              <div className="text-center py-10 text-gray-500">
                No users found matching your search criteria
              </div>
            )}
          </div>
          
          {/* Pagination */}
          <div className="px-6 py-1 border-t border-gray-200">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredEmployees.length / ITEMS_PER_PAGE)}
              onPageChange={setCurrentPage}
              totalItems={filteredEmployees.length}
              itemsPerPage={ITEMS_PER_PAGE}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmployeeAttendance;
