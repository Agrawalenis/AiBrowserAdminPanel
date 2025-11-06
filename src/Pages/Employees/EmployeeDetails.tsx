import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Topbar from "../../Components/layout/Topbar";
import Button from "../../Components/buttons/Button";
import mockEmployees from "../../mock/employees";
import SideOption from "./SideOption";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import Documents from "./Documents";
import AccountAccess from "./AccountAccess";

const tabs = [
  { key: "personal", label: "Personal Information" },
  { key: "professional", label: "Professional Information" },
  { key: "documents", label: "Documents" },
  { key: "access", label: "Account Access" },
];

const EmployeeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const employee = React.useMemo(() => mockEmployees.find((e) => e.id === id), [id]);
  const [activeTab, setActiveTab] = React.useState<string>("personal");
  const [leftActive, setLeftActive] = React.useState<string>("profile");

  React.useEffect(() => {
    if (leftActive === "projects") setActiveTab("professional");
    else if (leftActive === "leave") setActiveTab("documents");
    else setActiveTab("personal");
  }, [leftActive]);

  if (!employee) {
    return (
      <div className="w-full">
        <Topbar
          title={<div className="font-['Lexend'] font-light text-[16px] text-[#16151C]">Employee Details</div>}
          subtitle="Employee not found"
          subtitleClassName="text-[14px] text-[#A2A1A8]"
        />
        <div className="p-6">No employee found for id: {id}</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-[#F9FAFB]">
      {/* Top Header */}
      <div className="mb-4">
        <Topbar
          title={<div className="font-['Lexend'] font-medium text-[16px] text-[#16151C]">{employee.name}</div>}
          subtitle={employee.designation}
          subtitleClassName="text-[14px] text-[#A2A1A8]"
        />
      </div>

      {/* Main Card */}
      <div className="bg-white border border-gray-200 rounded-xl mx-6 mb-10 shadow-sm">
        {/* Employee Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              {employee.avatarUrl ? (
                <img src={employee.avatarUrl} alt={employee.name} className="h-full w-full object-cover" />
              ) : (
                <div className="text-gray-500 text-xl font-semibold">
                  {employee.name.split(" ").map((n) => n[0]).join("").toUpperCase()}
                </div>
              )}
            </div>
            <div className="text-left">
              <div className="text-[18px] font-semibold text-[#16151C]">{employee.name}</div>
              <div className="text-[14px] text-[#6B6B6B] mt-1">{employee.designation}</div>
              <div className="text-[14px] text-[#A2A1A8]">{employee.email}</div>
            </div>
          </div>

          <Button
            label={<span className="text-[14px] font-medium text-white">Edit Profile</span>}
            style={{ backgroundColor: "#7251F4", color: "white" }}
            className="px-5 py-2.5 mt-4 md:mt-0 rounded-lg text-sm hover:bg-[#5e44d1]"
            onClick={() => navigate(`/add-new-employee?edit=${employee.id}`)}
          />
        </div>

        {/* Tab Section */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="border-r border-gray-100 w-full md:w-[220px] p-4">
            <SideOption active={leftActive} onChange={setLeftActive} />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Tabs */}
            <div className="border-b border-gray-100 flex space-x-8 mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`pb-3 text-[14px] font-medium whitespace-nowrap ${
                    activeTab === tab.key
                      ? "text-[#7152F3] border-b-2 border-[#7152F3]"
                      : "text-[#A2A1A8]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Section */}
            <div>
              {activeTab === "personal" && <PersonalInfo isEditing={false} />}
              {activeTab === "professional" && <ProfessionalInfo isEditing={false} />}
              {activeTab === "documents" && <Documents isEditing={false} />}
              {activeTab === "access" && <AccountAccess isEditing={false} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
