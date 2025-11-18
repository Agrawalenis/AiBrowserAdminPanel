import React, { useState, useMemo, useEffect } from "react";
import Topbar from "../../Components/layout/Topbar";
import Table from "../../Components/table/Table";
import Button from "../../Components/buttons/Button";
import type { TableColumn } from "../../types";

const ITEMS_PER_PAGE = 10;

interface Holiday {
  date: string;
  day: string;
  name: string;
}

const mockHolidays: Holiday[] = [
  { date: "January 01, 2023", day: "Tuesday", name: "New Year" },
  { date: "January 07, 2023", day: "Saturday", name: "International Programmers' Day" },
  { date: "February 04, 2023", day: "Saturday", name: "World Cancer Day" },
  { date: "April 01, 2023", day: "Saturday", name: "April Fool Day" },
  { date: "May 07, 2023", day: "Monday", name: "International Programmers' Day" },
  { date: "May 22, 2023", day: "Tuesday", name: "International Day for Biological Diversity" },
  { date: "June 05, 2023", day: "Monday", name: "World Environment Day" },
  { date: "November 14, 2025", day: "Monday", name: "International Friendship Day" },
  { date: "November 25, 2025", day: "Friday", name: "International Day of Democracy" },
  { date: "December 10, 2025", day: "Tuesday", name: "World Diabetes Day" },
  { date: "December 25, 2025", day: "Monday", name: "Merry Christmas" },
];

const Holidays: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [, setActiveTab] = useState<"upcoming" | "past">("upcoming");


  // 🧩 Columns with tick beside date
  const columns: TableColumn<Holiday>[] = useMemo(
    () => [
      {
  header: "Date",
  accessor: "date",
  render: (value) => {
    const dateObj = new Date(value);
    const isPast = dateObj < new Date();
    
    return (
      <div className="flex items-center gap-2">
        <span
          className={`h-8 w-1 rounded-full ${
            isPast ? "bg-[#A2A1A833]" : "bg-[#6C63FF]"
          }`}
        ></span>
        <span className="text-[#16151C]">{value}</span>
      </div>
    );
  },
},
      { header: "Day", accessor: "day", className: "text-[#16151C]" },
      { header: "Holiday Name", accessor: "name", className: "text-[#16151C] whitespace-nowrap text-ellipsis" },
    ],
    []
  );

  const filteredHolidays = useMemo(() => {
    return mockHolidays.filter((holiday) =>
      holiday.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const paginatedHolidays = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredHolidays.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredHolidays, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* Topbar */}
      <div className="mb-4">
        <Topbar
          title={
            <div className="font-bold text-[18px] leading-6 text-[#16151C]">
              Holidays
            </div>
          }
          subtitle="All Holiday Lists"
          subtitleClassName="text-[14px] leading-5 text-[#A2A1A8] font-light"
        />
      </div>
      

      {/* Main Card */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white mx-10">
        {/* Search + Button */}
        <div className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
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

          <div className="flex space-x-3 w-full md:w-auto">
            <Button
              label={
                <div className="flex items-center space-x-2">
                  <img src="/images/add.png" className="h-[24px] w-[24px]" alt="Add" />
                  <span className="text-base leading-6 text-white font-medium">
                    Add New Holiday
                  </span>
                </div>
              }
              style={{ backgroundColor: "#7251F4", color: "white" }}
              className="px-4 py-2 rounded-lg text-sm hover:bg-[#5e44d1]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="-ml-4 mt-4  overflow-hidden w-full">
          <div className="overflow-auto text-sm">
            {paginatedHolidays.length > 0 ? (
              <Table
                columns={columns}
                data={paginatedHolidays}
                rowClassName="hover:bg-gray-50"
              />
            ) : (
              <div className="text-center py-10 text-gray-500">
                No holidays found
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-4 px-8 py-3">
            <button
              className="flex items-center gap-2 text-sm"
              onClick={() => setActiveTab("upcoming")}
            >
              <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
              Upcoming
            </button>

            <button
              className="flex items-center gap-2 text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#A2A1A833]" />
              Past Holidays
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
