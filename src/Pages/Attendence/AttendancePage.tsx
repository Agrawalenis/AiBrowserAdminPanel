import React, { useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import Topbar from "../../Components/layout/Topbar";
import Table from "../../Components/table/Table";
import Button from "../../Components/buttons/Button";
import Pagination from "../../Components/table/Pagination";

const ITEMS_PER_PAGE = 10;

// Types
interface Attendance {
  id: string;
  name: string;
  email?: string;
  avatarUrl?: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'Present' | 'Absent' | 'Leave';
}

interface TableColumn<T> {
  header: string;
  accessor: keyof T;
  className?: string;
  render?: (value: any, row: T) => React.ReactNode;
}

// Mock Employees (Same as Payroll Names)
import { mockPayrollData } from '../../mock/payroll';

const mockAttendance: Attendance[] = mockPayrollData.map((emp: any) => ({
  id: emp.id,
  name: emp.name,
  email: emp.email,
  avatarUrl: emp.avatarUrl,
  date: '2026-03-30',
  checkIn: '09:00 AM',
  checkOut: '06:00 PM',
  status: Math.random() > 0.7 ? 'Absent' : Math.random() > 0.5 ? 'Leave' : 'Present'
}));

const AttendancePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const columns: TableColumn<Attendance>[] = useMemo(() => [
    { 
      header: 'Employee Name', 
      accessor: 'name',
      className: 'font-[Lexend] text-[#16151C] font-medium',
      render: (name: string, row: Attendance) => (
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-2">
            {row.avatarUrl ? (
              <img src={row.avatarUrl} alt={name} className="h-full w-full object-cover" />
            ) : (
              <span className="text-xs text-gray-500">
                {name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            )}
          </div>
          <span className="font-[Lexend] text-[14px] font-light text-[#16151C]">{name}</span>
        </div>
      )
    },
    { 
      header: 'Date', 
      accessor: 'date',
      className: 'font-[Lexend] text-[#16151C] font-light text-[14px] px-1'
    },
    { 
      header: 'Check In', 
      accessor: 'checkIn',
      className: 'font-[Lexend] text-[#16151C] font-light text-[14px] px-1'
    },
    { 
      header: 'Check Out', 
      accessor: 'checkOut',
      className: 'font-[Lexend] text-[#16151C] font-light text-[14px] px-1'
    },
    { 
      header: 'Status', 
      accessor: 'status',
      className: 'font-[Lexend] text-[#16151C] font-light text-[14px]',
      render: (value: Attendance['status']) => {
        const statusColors = {
          'Present': 'bg-[#10B9811A] text-[#10B981]',
          'Absent': 'bg-[#EF44441A] text-[#EF4444]',
          'Leave': 'bg-[#F59E0B1A] text-[#F59E0B]'
        };
        return (
          <span className={`font-[Lexend] inline-flex items-center justify-center px-2.5 py-1 rounded-[4px] text-xs font-medium ${statusColors[value]}`}>
            {value}
          </span>
        );
      }
    },
  ], []);

  const filteredData = useMemo(() => {
    return mockAttendance.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.includes(searchQuery) ||
      item.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleRowClick = (row: Attendance) => {
    navigate(`/attendance/${row.id}`);
  };

  return (
    <div className="w-full flex flex-col bg-white p-4 pt-0 pb-0">
      <div>
        <Topbar 
          title={
            <div className="w-[160px] font-semibold text-[20px] leading-6 text-[#16151C]">
              Attendance
            </div>
          } 
          subtitle="Employee Attendance Information"
          subtitleClassName="font-light text-[14px] leading-6 text-[#9CA3AF]"
        />
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white pt-0">
        {/* Search Bar */}
        <div className="p-4 pb-2 pt-2 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/images/search.png" className="h-[20px] w-[20px]" alt="Search" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-[#A2A1A81A] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm placeholder:text-[#16151C33]"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-[10px]">
            <Button 
              label={
                <div className="flex items-center space-x-2">
                  <img src="/images/upload.png" className="h-[24px] w-[24px]" alt="Export" />
                  <span className="text-base text-white">Export</span>
                </div>
              }
              className="px-4 py-[12px] rounded-[10px] text-sm bg-[#7152F3]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="px-0 overflow-hidden">
          {paginatedData.length > 0 ? (
            <div className="w-full min-w-[1550px]">
              <Table 
                columns={columns}
                data={paginatedData}
                onRowClick={handleRowClick}
                rowClassName="hover:bg-gray-50"
              />
            </div>
          ) : (
            <div className="text-center py-10 text-gray-500">
              No attendance records found
            </div>
          )}

          {/* Pagination */}
          <div className="px-6 py-1 border-t border-gray-200">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
              onPageChange={setCurrentPage}
              totalItems={filteredData.length}
              itemsPerPage={ITEMS_PER_PAGE}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendancePage;
