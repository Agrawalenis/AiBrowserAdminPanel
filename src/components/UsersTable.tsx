import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const users = [
  { name: "Darlene Robertson", id: "3434", phone: "345321231", gender: "Male", country: "India" },
  { name: "Floyd Miles", id: "3434", phone: "987890345", gender: "Female", country: "India" },
  { name: "Cody Fisher", id: "3434", phone: "453367122", gender: "Female", country: "India" },
  { name: "Dianne Russell", id: "3434", phone: "345321231", gender: "Male", country: "India" },
  { name: "Savannah Nguyen", id: "3434", phone: "453677881", gender: "Female", country: "India" },
  { name: "Jacob Jones", id: "3434", phone: "009918765", gender: "Male", country: "India" },
  { name: "Marvin McKinney", id: "3434", phone: "238870122", gender: "Female", country: "India" },
  { name: "Brooklyn Simmons", id: "3434", phone: "124353111", gender: "Male", country: "India" },
  { name: "Kristin Watson", id: "3434", phone: "435540099", gender: "Female", country: "India" },
  { name: "Kathryn Murphy", id: "3434", phone: "009812890", gender: "Female", country: "India" },
];

const UsersTable = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <input
          className="border px-3 py-2 rounded-md w-1/3"
          placeholder="Search"
        />
        <div className="flex gap-2">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm">Add New Person</button>
          <button className="border px-4 py-2 rounded-md text-sm">Filter</button>
        </div>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-gray-600 border-b">
            <th>User Name</th><th>User ID</th><th>Mobile No.</th><th>Gender</th><th>Country</th><th>Activity</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={i} className="border-b">
              <td>{u.name}</td>
              <td>{u.id}</td>
              <td>{u.phone}</td>
              <td>{u.gender}</td>
              <td>{u.country}</td>
              <td><span className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">30 Min.</span></td>
              <td className="flex space-x-2">
                <FaEye className="text-gray-600 cursor-pointer" />
                <FaPen className="text-gray-600 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

