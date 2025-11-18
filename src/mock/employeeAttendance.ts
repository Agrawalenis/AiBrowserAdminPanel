import type { EmployeeAttendance } from '../types';

export const mockEmployeeAttendances: EmployeeAttendance[] = [
  { 
    name: "John Doe", 
    id: "765432987",
    department:  "Design", 
    designation:  "UI/UX Designer", 
    type: "Office",
    activity: "Permanent",
    email: "john.doe@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  { 
    name: "Jane Smith", 
    id: "356942542", 
    department:  "Development", 
    designation:  "PHP Developer", 
    type: "Office", 
    activity: "Permanent",
    email: "jane.smith@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  // 58 more mock users...
  { 
    name: "Robert Johnson", 
    id: "356942543", 
    department:  "Sales", 
    designation:  "UI/UX Designer", 
    type: "Remote", 
    activity: "Permanent",
    email: "robert.j@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  { 
    name: "Emily Davis", 
    id: "356942544", 
    department:  "Sales",
    designation:  "PHP Developer", 
    type: "Office", 
    activity: "Permanent",
    email: "emily.d@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  { 
    name: "Michael Wilson", 
    id: "356942545", 
    department:  "Design", 
    designation:  "UI/UX Designer", 
    type: "Remote", 
    activity: "Permanent",
    email: "michael.w@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  { 
    name: "Sarah Brown", 
    id: "356942546", 
    department:  "Development", 
    designation:  "PHP Developer", 
    type: "Office", 
    activity: "Permanent",
    email: "sarah.b@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  { 
    name: "David Taylor", 
    id: "356942547", 
    department:  "Development", 
    designation:  "UI/UX Designer", 
    type: "Remote", 
    activity: "Permanent",
    email: "david.t@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  { 
    name: "Emma Martinez", 
    id: "356942548", 
    department:  "PM",
    designation:  "PHP Developer", 
    type: "Office", 
    activity: "Permanent",
    email: "emma.m@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  { 
    name: "James Anderson", 
    id: "356942549", 
    department:  "HR", 
    designation:  "UI/UX Designer", 
    type: "Office", 
    activity: "Permanent",
    email: "james.a@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  { 
    name: "Olivia Thomas", 
    id: "1010", 
    department:  "Development", 
    designation:  "PHP Developer", 
    type: "Office", 
    activity: "Permanent",
    email: "olivia.t@example.com",
    checkintime:"10:00 AM",
    status: 'On Time',
    avatarUrl: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  // Add more users as needed...
];

// Generate the rest of the users programmatically to reach 60
const types = ["Office", "Office", "Office", "Remote", "Office", "Remote", "Remote", "Office", "Office", "Remote"];
const activities = ["Permanent", "Permanent", "Permanent", "Permanent", "Permanent", "Permanent"];
const statuses: Array<'On Time' | 'Late'> = ['On Time', 'Late'];

for (let i = 11; i <= 60; i++) {
  const designation = Math.random() > 0.5 ? 'UI/UX Designer' : 'PHP DEveloper';
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  const type = types[Math.floor(Math.random() * types.length)];
  const activity = activities[Math.floor(Math.random() * activities.length)];
  const id = (356942540 + i).toString();
  const name = `User ${i}`;
  const email = `user${i}@example.com`;
  const department = `98765${Math.floor(3569425400 + Math.random() * 90000)}`;
  const avatarNumber = (i % 20) + 1; // Cycle through 20 different avatars
  const checkintime = `${9 + Math.floor(Math.random() * 3)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
  
  mockEmployeeAttendances.push({
    name,
    id,
    department,
    designation,
    type,
    activity,
    email,
    checkintime,
    status,
    avatarUrl: `https://randomuser.me/api/portraits/${designation.toLowerCase() === 'male' ? 'men' : 'women'}/${avatarNumber}.jpg`
  });
}

export default mockEmployeeAttendances;