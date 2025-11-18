import type { AllCandidates} from '../types';

export const mockCandidates: AllCandidates[] = [
  {
      name: "John Doe",
      id: "356942541",
      department: "Design",
      appliedfor: "UI/UX Designer",
      type: "Office",
      date:"July 14, 2023",
      activity: "Permanent",
      email: "john.doe@example.com",
      status: 'Selected',
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      checkintime: '',
      mobile: '(629) 555-0129',
      avatar:"/images/avatar1.png"
  },
  {
      name: "Jane Smith",
      id: "356942542",
      department: "Development",
      appliedfor: "PHP Developer",
      type: "Office",
      date:"July 14, 2023",
      activity: "Permanent",
      email: "jane.smith@example.com",
      status: 'In Process',
      avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg",
      checkintime: '',
      mobile: '(217) 555-0113',
      avatar:"/images/avatar2.png"
  },
  // 58 more mock users...
  {
      name: "Robert Johnson",
      id: "356942543",
      department: "Sales",
      appliedfor: "UI/UX Designer",
      type: "Remote",
      date:"July 14, 2023",
      activity: "Permanent",
      email: "robert.j@example.com",
      status: 'In Process',
      avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
      checkintime: '(219) 555-0114',
      mobile: '(225) 555-0118',
      avatar:"/images/avatar3.png"
  },
  {
      name: "Emily Davis",
      id: "356942544",
      department: "Sales",
      appliedfor: "PHP Developer",
      type: "Office",
      date:"July 14, 2023",
      activity: "Permanent",
      email: "emily.d@example.com",
      status: 'In Process',
      avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
      checkintime: '',
      mobile: '(219) 555-0114',
      avatar:"/images/avatar4.png"
  },
  {
      name: "Michael Wilson",
      id: "356942545",
      department: "Design",
      appliedfor: "UI/UX Designer",
      type: "Remote",
      date: "July 14, 2023",
      activity: "Permanent",
      email: "michael.w@example.com",
      status: 'Rejected',
      avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      checkintime: '',
      mobile: '(405) 555-0128',
      avatar:"/images/avatar5.png"
  },
  {
      name: "Sarah Brown",
      id: "356942546",
      department: "Development",
      appliedfor: "PHP Developer",
      type: "Office",
      date: "July 14, 2023",
      activity: "Permanent",
      email: "sarah.b@example.com",
      status: 'Rejected',
      avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
      checkintime: '',
      mobile: '(603) 555-0123',
      avatar:"/images/avatar6.png"
  },
  {
      name: "David Taylor",
      id: "356942547",
      department: "Development",
      appliedfor: "UI/UX Designer",
      type: "Remote",
      date: "July 14, 2023",
      activity: "Permanent",
      email: "david.t@example.com",
      status: 'Selected',
      avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
      checkintime: '',
      mobile: '(480) 555-0103',
      avatar:"/images/avatar7.png"
  },
  {
      name: "Emma Martinez",
      id: "356942548",
      department: "PM",
      appliedfor: "PHP Developer",
      type: "Office",
      date: "July 14, 2023",
      activity: "Permanent",
      email: "emma.m@example.com",
      status: 'Selected',
      avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
      checkintime: '',
      mobile: '(208) 555-0112',
      avatar:"/images/avatar8.png"
  },
  {
      name: "James Anderson",
      id: "356942549",
      department: "HR",
      appliedfor: "UI/UX Designer",
      type: "Office",
      date: "July 14, 2023",
      activity: "Permanent",
      email: "james.a@example.com",
      status: 'In Process',
      avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
      checkintime: '',
      mobile: '(671) 555-0110',
      avatar:"/images/avatar9.png"
  },
  {
      name: "Olivia Thomas",
      id: "1010",
      department: "Development",
      appliedfor: "PHP Developer",
      type: "Office",
      date: "July 14, 2023",
      activity: "Permanent",
      email: "olivia.t@example.com",
      status: 'Rejected',
      avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg",
      checkintime: '',
      mobile: '(225) 555-0118',
      avatar:"/images/avatar10.png"
  },
  // Add more users as needed...
];

// Generate the rest of the users programmatically to reach 60
const types = ["Office", "Office", "Office", "Remote", "Office", "Remote", "Remote", "Office", "Office", "Remote"];
const activities = ["Permanent", "Permanent", "Permanent", "Permanent", "Permanent", "Permanent"];
const statuses: Array<'active' | 'inactive'> = ['active', 'inactive'];
const dates=["July 13, 2023","July 13, 2023","July 13, 2023","July 13, 2023","July 13, 2023","July 13, 2023"];

for (let i = 11; i <= 60; i++) {
  const appliedfor = Math.random() > 0.5 ? 'UI/UX Designer' : 'PHP DEveloper';
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const type = types[Math.floor(Math.random() * types.length)];
  const activity = activities[Math.floor(Math.random() * activities.length)];
  const id = (356942540 + i).toString();
  const name = `User ${i}`;
  const email = `user${i}@example.com`;
  const department = `98765${Math.floor(3569425400 + Math.random() * 90000)}`;
  const avatarNumber = (i % 20) + 1; // Cycle through 20 different avatars
  
  mockCandidates.push({
      name,
      id,
      department,
      appliedfor,
      type,
      date: dates[Math.floor(Math.random() * dates.length)],
      activity,
      email,
      status,
      avatarUrl: `https://randomuser.me/api/portraits/men/${avatarNumber}.jpg`,
      checkintime: '',
      avatar: "/images/avatar13.png"
  });
}

export default mockCandidates;