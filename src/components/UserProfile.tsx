import { useState } from "react";

const tabs = ["Profile", "Daily Activity", "Download", "Bookmarks", "Dashboard"];
const activities = Array(10).fill({
  date: "July 01, 2023",
  title: "Untitled",
  website: "Figma",
  url: "Figma.com",
});

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("Daily Activity");

  return (
    <div className="flex-1 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Brooklyn"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">Brooklyn Simmons</h2>
              <p className="text-gray-600 text-sm">Female</p>
              <p className="text-gray-500 text-sm">brooklyn.s@example.com</p>
            </div>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm">Edit Profile</button>
        </div>

        {/* Tabs */}
        <div className="flex mt-6 gap-4">
          <div className="w-48">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`px-4 py-2 rounded-md cursor-pointer ${
                    activeTab === tab
                      ? "bg-purple-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Activity Table */}
          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="py-2">Date</th>
                  <th>Website</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((a, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="py-2">{a.date}</td>
                    <td className="flex items-center gap-2 py-2">
                      <img src="https://img.icons8.com/color/24/figma--v1.png" alt="figma" />
                      <span className="font-semibold">{a.title}</span> - {a.url}
                    </td>
                    <td>
                      <button className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm">
              <div>Showing 1 to 10 out of 60 records</div>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`w-8 h-8 rounded-full border ${
                      page === 1 ? "bg-purple-100 text-purple-700" : "text-gray-500"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
