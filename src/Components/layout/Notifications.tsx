import React, { type JSX } from "react";
import { Lock, Briefcase, MessageSquare } from "lucide-react";
import Topbar from "./Topbar";

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  icon: JSX.Element;
  avatar?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: "Leave Request",
    message: "@Robert Fox has applied for leave",
    time: "Just Now",
    icon: <MessageSquare className="text-indigo-500" />,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 2,
    title: "Check In Issue",
    message: "@Alexa shared a message regarding check in issue",
    time: "11:16 AM",
    icon: <MessageSquare className="text-amber-500" />,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    title: 'Applied job for “Sales Manager” Position',
    message: "@Shane Watson has applied for job",
    time: "09:00 AM",
    icon: <Briefcase className="text-purple-500" />,
  },
  {
    id: 4,
    title: "Robert Fox has share his feedback",
    message: "“It was an amazing experience with your organisation”",
    time: "Yesterday",
    icon: <MessageSquare className="text-blue-500" />,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    title: "Password Update successfully",
    message: "Your password has been updated successfully",
    time: "Yesterday",
    icon: <Lock className="text-green-500" />,
  },
];

const Notifications: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="w-full flex flex-col bg-white">
        <div className="mb-4">
        <Topbar
          title={
            <div className="text-[18px] leading-6 font-bold text-gray-800">
              Notifications
            </div>
          }
          subtitle="All Notifications"
          subtitleClassName="text-[14px] text-gray-500"
        />
      </div>
      </div>

      {/* Notification List */}
      <div className="p-10 -mt-10">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-4">
              {note.avatar ? (
                <img
                  src={note.avatar}
                  alt={note.title}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  {note.icon}
                </div>
              )}

              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {note.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{note.message}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{note.time}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Notifications;
