import React from "react";
import { Eye, Download } from "lucide-react";

interface Props {
  isEditing: boolean;
}

export default function Documents({ isEditing }: Props) {
  const docs = [
    "Appointment Letter.pdf",
    "Salary Slip_June.pdf",
    "Salary Slip_May.pdf",
    "Salary Slip_April.pdf",
    "Relieving Letter.pdf",
    "Experience Letter.pdf",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-['Lexend']">
      {docs.map((doc, index) => (
        <div
          key={index}
          className="flex justify-between items-center border rounded-lg px-4 py-3 bg-white hover:shadow-sm transition"
          style={{ borderColor: "#A2A1A81A" }}
        >
          {/* Document name */}
          <span className="text-[16px] text-[#16151C] font-medium truncate max-w-[70%]">
            {doc}
          </span>

          {/* Action buttons */}
          <div className="flex gap-3 items-center">
            <button
              className="text-[#16151C] hover:text-[#7152F3] transition"
              title="View Document"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              className="text-[#16151C] hover:text-[#7152F3] transition"
              title="Download Document"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
