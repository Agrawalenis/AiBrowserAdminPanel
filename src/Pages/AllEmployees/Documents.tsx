import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react"; // Icon for the dropzone

interface DropzoneBoxProps {
  title: string;
  files: File[];
  setFiles: (files: File[]) => void;
}

const DropzoneBox: React.FC<DropzoneBoxProps> = ({ title, files, setFiles }) => {
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles]);
    },
    noClick: true, // We'll handle click manually
    multiple: true,
  });

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[#16151C] px-3 py-1 rounded-md font-light font-['Lexend'] w-max text-[16px]">
        {title}
      </span>

      <div
        {...getRootProps()}
        className={`w-[510px] h-[133px] border-2 border-dashed border-[#7152F3] rounded-lg flex flex-col items-center justify-center cursor-pointer
          ${isDragActive ? "border-[#7152F3] bg-[#7152F3]" : ""}
        `}
        onClick={open} // Clicking anywhere opens file picker
      >
        <input {...getInputProps()} />

        {/* Icon */}
        <div className="w-[40px] h-[40px] bg-[#7152F3] rounded-[10px] flex items-center justify-center">
          <img src="/images/upload.png" className="w-[20px] h-[20px]" alt="" />
        </div>

        {/* Main Text */}
        <p className="text-[#16151C] text-[14px] mb-1 text-center">
          Drag & Drop or <span className="text-[#7152F3]">choose file</span> to upload
        </p>

        {/* Supported formats */}
        <p className="text-[#A2A1A8] text-[11px] text-center font-light">
          Supported formats: Jpeg, PDF
        </p>
      </div>

      {/* Preview uploaded files */}
      {files.length > 0 && (
        <ul className="mt-2 text-sm text-gray-700">
          {files.map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Documents: React.FC = () => {
  const [appointmentFiles, setAppointmentFiles] = useState<File[]>([]);
  const [salaryFiles, setSalaryFiles] = useState<File[]>([]);
  const [relievingFiles, setRelievingFiles] = useState<File[]>([]);
  const [experienceFiles, setExperienceFiles] = useState<File[]>([]);

  return (
    <div className="w-full max-w-7xl mx-auto bg-white p-6 pt-6 rounded-lg flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DropzoneBox
          title="Upload Appointment Letter"
          files={appointmentFiles}
          setFiles={setAppointmentFiles}
        />
        <DropzoneBox
          title="Upload Salary Slips"
          files={salaryFiles}
          setFiles={setSalaryFiles}
        />
        <DropzoneBox
          title="Upload Relieving Letter"
          files={relievingFiles}
          setFiles={setRelievingFiles}
        />
        <DropzoneBox
          title="Upload Experience Letter"
          files={experienceFiles}
          setFiles={setExperienceFiles}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
        <button
          type="button"
          className="px-6 py-2 border border-[#A2A1A833] rounded-[10px] text-[#16151C] font-light font-['Lexend'] text-[16px]
            hover:border-[#A2A1A8] focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#7152F3] text-[#FFFFFF] rounded-[10px]
            hover:bg-[#7152F3] hover:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Documents;
