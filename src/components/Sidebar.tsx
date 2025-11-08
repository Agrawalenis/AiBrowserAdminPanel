import { FaUser, FaGlobe, FaCog, FaCalendar, FaBuilding, FaMoneyBill, FaChartBar, FaRegSun } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-60 bg-white p-5 shadow-md h-screen">
      <div className="text-xl font-bold mb-10">HRMS</div>
      <ul className="space-y-4 text-sm">
        <li className="font-semibold text-purple-600">All Users</li>
        <li className="flex items-center gap-2"><FaGlobe /> All Websites</li>
        <li className="flex items-center gap-2"><FaChartBar /> Trending Topics</li>
        <li className="flex items-center gap-2"><FaCalendar /> Upcoming Modules</li>
        <li className="flex items-center gap-2"><FaUser /> All Employees</li>
        <li className="flex items-center gap-2"><FaBuilding /> All Departments</li>
        <li className="flex items-center gap-2"><FaCalendar /> Attendance</li>
        <li className="flex items-center gap-2"><FaMoneyBill /> Payroll</li>
        <li className="flex items-center gap-2"><FaChartBar /> Jobs</li>
        <li className="flex items-center gap-2"><FaCog /> Settings</li>
      </ul>
      <div className="mt-10">
        <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm">Light</button>
        <button className="ml-2 text-gray-600 px-4 py-2 rounded-full text-sm">Dark</button>
      </div>
    </div>
  );
};

export default Sidebar;
