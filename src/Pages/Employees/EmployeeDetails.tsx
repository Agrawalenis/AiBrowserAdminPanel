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

// Tabs definition
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
    if (leftActive === "profile") {
      setActiveTab("personal");
    }
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
    <div className="w-full flex flex-col min-h-screen bg-white font-['Lexend']">

      {/* --- Top Header --- */}
      <div className="flex justify-between items-center bg-white px-6 py-4 border-b border-gray-200">
        {/* Left: Name + Breadcrumb */}
        <div>
          <div className="text-[#16151C] font-semibold text-[24px] leading-[36px]">
            {employee.name}
          </div>
          <div className="text-[16px] font-light leading-[24px] text-[#16151C] mt-1 flex items-center space-x-1">
            <span
              onClick={() => navigate("/all-employees")}
              className="cursor-pointer hover:text-[#7152F3]"
            >
              All Employee
            </span>
            <span>›</span>
            <span>{employee.name}</span>
          </div>
        </div>

        {/* Right: Search + Notification + Profile */}
        <div className="flex items-center space-x-5">
          {/* Search Box */}
          <div className="flex items-center border border-[#E5E5E5] rounded-[10px] px-4 py-[13px] w-[261px] bg-white gap-2">
            <img
              src="/images/search.png"
              alt="search"
              className="w-5 h-5 opacity-70"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-[14px] text-[#16151C] w-full font-light"
            />
          </div>

          {/* Notification Icon */}
          <div className="flex items-center justify-center w-[50px] h-[50px] rounded-md border border-[#E5E5E5] bg-white cursor-pointer hover:bg-[#F9F9F9] transition">
            <img
              src="/images/notification.png"
              alt="notification"
              className="w-5 h-5"
            />
          </div>

          {/* Profile Box */}
          <div className="flex items-center border border-[#E5E5E5] bg-white rounded-[10px] px-3 py-2 space-x-2 cursor-pointer hover:shadow-sm transition">
            <img
              src={employee.avatarUrl}
              alt="Profile"
              className="w-8 h-8 rounded-md object-cover"
            />
            <div>
              <div className="text-[14px] font-semibold text-[#16151C] leading-[22px]">
                Robert Allen
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[12px] font-light text-[#16151C] leading-[18px]">
                  HR Manager
                </span>
                <img src="/images/Vector 175.png" alt="▼" className="w-3 h-3 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Employee Card --- */}
      <div className="bg-white border border-gray-200 rounded-xl mx-6 my-6 shadow-sm">
        {/* Header */}
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
              <div className="text-[24px] font-semibold text-[#16151C] leading-[36px]">{employee.name}</div>
              <div className="text-[16px] font-light text-[#16151C] leading-[24px]">{employee.designation}</div>
              <div className="text-[16px] font-light text-[#A2A1A8] leading-[24px]">{employee.email}</div>
            </div>
          </div>

          {/* Edit Profile Button with Icon */}
          <Button
            label={
              <span className="flex items-center gap-2 text-[16px] font-light text-white leading-[24px]">
                <img src="/images/edit.png" alt="edit" className="w-4 h-4" />
                Edit Profile
              </span>
            }
            style={{ backgroundColor: "#7152F3", color: "white" }}
            className="px-5 py-2.5 mt-4 md:mt-0 rounded-lg hover:bg-[#5e44d1]"
            onClick={() => navigate(`/add-new-employee?edit=${employee.id}`)}
          />
        </div>

        {/* --- Tabs + Side Panel --- */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-[220px] p-4">
            <SideOption active={leftActive} onChange={setLeftActive} />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Tabs with icons */}
            {leftActive === "profile" && (
              <div className="border-b border-gray-100 flex space-x-8 mb-6 overflow-x-auto">
                {tabs.map((tab) => {
                  const icons: Record<string, { default: string; active: string }> = {
                    personal: {
                      default: "/images/person.png",
                      active: "/images/person-active.png",
                    },
                    professional: {
                      default: "/images/gender.png",
                      active: "/images/gender.png",
                    },
                    documents: {
                      default: "/images/document-text.png",
                      active: "/images/document-text-active.png",
                    },
                    access: {
                      default: "/images/lock.png",
                      active: "/images/lock-active.png",
                    },
                  };

                  const isActive = activeTab === tab.key;
                  const icon = isActive ? icons[tab.key].active : icons[tab.key].default;

                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`pb-3 flex items-center gap-2 text-[14px] font-light leading-[22px] transition ${
                        isActive
                          ? "text-[#7B61FF] border-b-2 border-[#7B61FF]"
                          : "text-[#A2A1A8]"
                      }`}
                    >
                      <img src={icon} alt={tab.label} className="w-5 h-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Dynamic Section */}
            <div>
              {leftActive === "profile" && (
                <>
                  {activeTab === "personal" && <PersonalInfo isEditing={false} />}
                  {activeTab === "professional" && <ProfessionalInfo isEditing={false} />}
                  {activeTab === "documents" && <Documents isEditing={false} />}
                  {activeTab === "access" && <AccountAccess isEditing={false} />}
                </>
              )}

              {leftActive === "attendance" && (
                <div className="text-gray-500 text-center py-10">Attendance section coming soon...</div>
              )}
              {leftActive === "projects" && (
                <div className="text-gray-500 text-center py-10">Projects section coming soon...</div>
              )}
              {leftActive === "leave" && (
                <div className="text-gray-500 text-center py-10">Leave section coming soon...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
