import { useState, useMemo } from "react";
import Topbar from "../../Components/layout/Topbar";
import Table from "../../Components/table/Table";
import Pagination from "../../Components/table/Pagination";
import type { TableColumn } from '../../types';
import mockCandidates from "../../mock/candidates";

const ITEMS_PER_PAGE = 10;

const statusStyles: Record<string, string> = {
  "Selected": "bg-[#27AE601A] text-[#27AE60]",
  "In Process": "bg-[#F2C94C1A] text-[#F2C94C]",
  "Rejected": "bg-[#EB57571A] text-[#EB5757]"
};

export default function CandidatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const columns: TableColumn<any>[] = useMemo(() => [
    {
  header: (
    <div className="flex items-center">
      <input type="checkbox" className="w-4 h-4 mr-5" />
      <span>Candidate Name</span>
    </div>
  ),
  accessor: 'name',
  className: 'text-[#16151C]',
  render: (name: string, user: any) => (
    <div className="flex items-center">
      <input type="checkbox" className="w-4 h-4 mr-5" />
      <div className="flex items-center">
        <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
          {user.avatar ? (
            <img src={user.avatar} className="h-full w-full object-cover" />
          ) : (
            <span className="text-xs text-gray-500">{name[0]}</span>
          )}
        </div>

        <span className="ml-2">{name}</span>
      </div>
    </div>
  )
}
,
    { header: 'Applied For', accessor: 'appliedfor', className: 'text-[#16151C]' },
    { header: 'Applied Date', accessor: 'date', className: 'text-[#16151C]' },
    { header: 'Email Address', accessor: 'email', className: 'text-[#16151C]' },
    { header: 'Mobile Number', accessor: 'mobile', className: 'text-[#16151C]' },
    {
      header: 'Status',
      accessor: 'status',
      className: 'text-[#16151C]',
      render: (value: string) => (
        <span className={`px-3 py-1 rounded text-xs ${statusStyles[value]}`}>
          {value}
        </span>
      )
    }
  ], []);

  const filteredCandidates = useMemo(() => {
    return mockCandidates.filter(c =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
c.role.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCandidates.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCandidates, currentPage]);

  return (
    <div className="w-full bg-white flex flex-col">
      <div className="mb-4">
        <Topbar
          title={<div className="text-[#16151C] font-bold text-[18px]">Candidates</div>}
          subtitle="Show All Candidates"
          subtitleClassName="text-[14px] text-[#A2A1A8] font-light"
        />
      </div>

      <div className="border border-gray-200 rounded-lg bg-white mx-10">
        {/* Search */}
        <div className="p-4 flex justify-between items-center gap-4">
          <div className="relative w-80">
            <img src="/images/search.png" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 border border-[#A2A1A81A] rounded-lg text-sm focus:ring-purple-500 focus:ring-2"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto text-sm">
          {paginatedData.length ? (
            <Table
              columns={columns}
              data={paginatedData}
              rowClassName="hover:bg-gray-50"
            />
          ) : (
            <div className="text-center py-10 text-gray-500">No candidates found</div>
          )}
        </div>

        {/* Pagination */}
        <div className="px-6 py-3 border-t">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredCandidates.length / ITEMS_PER_PAGE)}
            onPageChange={setCurrentPage}
            totalItems={filteredCandidates.length}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </div>
      </div>
    </div>
  );
}
