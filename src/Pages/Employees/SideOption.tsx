import React from 'react';

interface SideOptionProps {
  active: string;
  onChange: (tab: string) => void;
}

const SideOption: React.FC<SideOptionProps> = ({ active, onChange }) => {
  const items = [
    { id: 'profile', label: 'Profile' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'projects', label: 'Projects' },
    { id: 'leave', label: 'Leave' },
  ];

  return (
    <aside className="w-full md:w-[200px]">
      <div className="space-y-1">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => onChange(it.id)}
              className={`w-full flex items-center px-4 py-2.5 rounded-md text-[14px] font-medium transition-colors font-['Lexend']
                ${
                  isActive
                    ? 'bg-[#7B61FF] text-white shadow-sm'
                    : 'text-[#6B6B6B] hover:bg-gray-50'
                }`}
            >
              <span>{it.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default SideOption;
