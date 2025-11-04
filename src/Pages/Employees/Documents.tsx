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
    "Reliving Letter.pdf",
    "Experience Letter.pdf",
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {docs.map((doc, index) => (
        <div
          key={index}
          className="flex justify-between items-center border border-gray-300 rounded-xl px-4 py-3"
        >
          <span className="text-gray-700 font-medium">{doc}</span>
          <div className="flex gap-3">
            <button className="text-gray-500 hover:text-purple-600">
              <Eye className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-purple-600">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
