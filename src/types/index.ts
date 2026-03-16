export type UserStatus = 'active' | 'inactive';
export type PayrollStatus = 'Completed' | 'Pending';
import { PiUsersThreeBold } from "react-icons/pi";
import { TiShoppingBag } from "react-icons/ti";
import { FaRegFileAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";




export interface User {
  name: string;
  id: string;
  mobile: string;
  gender: string;
  country: string;
  activity: string;
  email: string;
  status: UserStatus;
  avatarUrl?: string;
}

export interface Employee {
  name: string;
  id: string;
  department: string;
  designation: string;
  type: string;
  activity: string;
  email: string;
  status: UserStatus;
  avatarUrl?: string;
}

export interface Payroll {
  name: string;
  id: string;
  ctc: string;
  salaryPerMonth: string;
  deduction: string;
  status: PayrollStatus;
  email: string;
  avatarUrl?: string;
}

export interface TableColumn<T = any> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  render?: (value: any, item: T) => React.ReactNode;
  className?: string;
}

export interface Job {
  title: string;
  department: string;
  tags: string[];
  location: string;
  salary: string;
  status?: 'active' | 'inactive' | 'completed';
}




// ─── Dashboard Types ──────────────────────────────────────────────────────────

export interface StatCardData {
  icon: React.ElementType;
  label: string;
  value: string;
  change: number;
  date: string;
  iconBg: string;
}

export interface TrafficDataPoint {
  day: string;
  desktop: number;
  mobile: number;
}

export interface NewsItem {
  time: string;
  category: string;
  title: string;
}

export interface NewsGroup {
  date: string;
  items: NewsItem[];
}

export interface WebsiteRow {
  favicon: string;
  name: string;
  category: string;
  googleIndex: number;
  traffic: string;
  status: "On Time" | "Late";
}

// ─── Stat Cards Constants ─────────────────────────────────────────────────────

export const STAT_CARDS_DATA: StatCardData[] = [
  {
    icon: PiUsersThreeBold ,
    label: "Total Users",
    value: "56.78M",
    change: 10,
    date: "Update: Feb 17, 2024",
    iconBg: "#EDE9FD",
  },
  {
    icon: TiShoppingBag,
    label: "Total Websites",
    value: "100.23k",
    change: 2,
    date: "Update: Feb 17, 2024",
    iconBg: "#EDE9FD",
  },
  {
    icon: SlCalender,
    label: "Today Blogs",
    value: "34.6M",
    change: -5,
    date: "Update: Feb 17, 2024",
    iconBg: "#EDE9FD",
  },
  {
    icon: FaRegFileAlt,
    label: "Average Traffic",
    value: "23.45M",
    change: 14,
    date: "Update: Feb 17, 2024",
    iconBg: "#EDE9FD",
  },
];

// ─── Traffic Overview Constants ───────────────────────────────────────────────

export const TRAFFIC_DATA = [
  { day: "Mon", desktop: 60, mobile: 30, other: 10 },
  { day: "Tue", desktop: 60, mobile: 20, other: 20 },
  { day: "Wed", desktop: 48, mobile: 27, other: 25 },
  { day: "Thu", desktop: 60, mobile: 30, other: 10 },
  { day: "Fri", desktop: 75, mobile: 10, other: 15 },
  { day: "Sat", desktop: 45, mobile: 30, other: 25 },
  { day: "Sun", desktop: 48, mobile: 37, other: 15 },
];

export const TRAFFIC_RANGE_OPTIONS = ["Today", "This Week", "This Month"] as const;

// ─── Trending Topic / News Constants ─────────────────────────────────────────

export const NEWS_GROUPS: NewsGroup[] = [
  {
    date: "Wednesday, 06 Feb 2026",
    items: [
      {
        time: "09:30",
        category: "Modi's Upcoming Israel Visit",
        title: "India and Israel are set to strengthen bilateral ties through...",
      },
      {
        time: "12:00",
        category: "India Crushes Pakistan in T20",
        title: "India dominated Pakistan with a record-breaking performance...",
      },
      {
        time: "01:30",
        category: "No Progress for Indian Green Card",
        title: "The latest US visa bulletin shows stagnation for Indian...",
      },
    ],
  },
  {
    date: "Thursday, 07 Feb 2026",
    items: [
      {
        time: "09:30",
        category: "Modi's Upcoming Israel Visit",
        title: "India and Israel are set to strengthen bilateral ties through...",
      },
      {
        time: "12:00",
        category: "India Crushes Pakistan in T20",
        title: "India dominated Pakistan with an a...",
      },
    ],
  },
];

// ─── Websites Table Constants ─────────────────────────────────────────────────

export const WEBSITES_DATA: WebsiteRow[] = [
  { favicon: "🎨", name: "invision.com",  category: "branding",     googleIndex: 34, traffic: "45.6 M",  status: "On Time" },
  { favicon: "📰", name: "news.com",      category: "news",         googleIndex: 45, traffic: "34.56 M", status: "Late"    },
  { favicon: "🖼️", name: "figma.com",     category: "designing",    googleIndex: 67, traffic: "34.45K",  status: "Late"    },
  { favicon: "📸", name: "instagram.com", category: "social media", googleIndex: 34, traffic: "34.45K",  status: "On Time" },
  { favicon: "🤖", name: "chatgpt.com",   category: "chatbot",      googleIndex: 89, traffic: "34.21K",  status: "On Time" },
  { favicon: "📘", name: "facebook.com",  category: "social media", googleIndex: 45, traffic: "678.45K", status: "On Time" },
  { favicon: "💬", name: "whatsapp.com",  category: "chatting",     googleIndex: 80, traffic: "56.7K",   status: "Late"    },
];

// ─── Calendar Constants ───────────────────────────────────────────────────────

export const CALENDAR_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"] as const;

export interface TrendingTopic {
  id: number;
  title: string;
  category: string;
  description: string;
  posts: number;
  growth: number;
  reach: string;
  image: string;
}