const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-xl font-bold">All Employees</h2>
      <div className="flex items-center gap-3">
        <input className="border px-2 py-1 rounded-md text-sm" placeholder="Search" />
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <div>Robert Allen</div>
            <div className="text-gray-500 text-xs">HR Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
