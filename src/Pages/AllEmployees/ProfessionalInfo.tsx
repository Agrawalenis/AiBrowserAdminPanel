import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ProfessionalInfoData {
  employeeId: string;
  userName: string;
  employeeType: string;
  emailAddress: string;
  department: string;
  designation: string;
  workingDays: string;
  joiningDate: Date | null;
  officeLocation: string;
}

const CustomDateInput = forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => (
  <div className="w-full">
    <input
      type="text"
      readOnly
      ref={ref}
      value={value}
      onClick={onClick}
      placeholder="Joining Date"
      className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
        placeholder:text-[#A2A1A8CC] placeholder:font-light"
    />
    <img
      src="/images/dob.png"
      alt="calendar"
      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
    />
  </div>
));
CustomDateInput.displayName = 'CustomDateInput';

const ProfessionalInfo: React.FC = () => {
  const [formData, setFormData] = useState<ProfessionalInfoData>({
    employeeId: '',
    userName: '',
    employeeType: '',
    emailAddress: '',
    department: '',
    designation: '',
    workingDays: '',
    joiningDate: null,
    officeLocation: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({
      ...prev,
      joiningDate: date,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Professional Info Data:', formData);
    // TODO: Add API integration here
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white p-6 pt-0 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Employee ID */}
          <div>
            <input
              type="text"
              id="employeeId"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleInputChange}
              placeholder="Enter employee ID"
              className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                placeholder:text-[#A2A1A8CC] placeholder:font-light"
              required
            />
          </div>

          {/* User Name */}
          <div>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              placeholder="Enter user name"
              className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                placeholder:text-[#A2A1A8CC] placeholder:font-light"
              required
            />
          </div>

          {/* Employee Type */}
          <div>
            <input
              type="text"
              id="employeeType"
              name="employeeType"
              value={formData.employeeType}
              onChange={handleInputChange}
              placeholder="Enter employee type"
              className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                placeholder:text-[#A2A1A8CC] placeholder:font-light"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                placeholder:text-[#A2A1A8CC] placeholder:font-light"
              required
            />
          </div>

          {/* Department */}
          <div className="relative">
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className={`custom-select w-full h-[56px] px-3 pr-10 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                ${!formData.department ? 'text-[#A2A1A8CC] font-light' : 'text-gray-900'}`}
              required
            >
              <option value="" disabled>
                Department
              </option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {/* Designation */}
          <div>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              placeholder="Enter designation"
              className="custom-select w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                placeholder:text-[#A2A1A8CC] placeholder:font-light"
              required
            />
          </div>

          {/* Working Days */}
          <div>
            <select
              id="workingDays"
              name="workingDays"
              value={formData.workingDays}
              onChange={handleInputChange}
              className={`custom-select w-full h-[56px] px-3 pr-10 py-2 border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                ${!formData.workingDays ? 'text-[#A2A1A8CC] font-light' : 'text-gray-900'}`}
              required
            >
              <option value="" disabled>
                Working Days
              </option>
              <option value="Monday to Friday">Monday to Friday</option>
              <option value="Monday to Saturday">Monday to Saturday</option>
              <option value="Monday to Sunday">Monday to Sunday</option>
            </select>
          </div>

          {/* Joining Date (Custom Calendar) */}
          <DatePicker
            selected={formData.joiningDate}
            onChange={handleDateChange}
            customInput={<CustomDateInput />}
            dateFormat="dd/MM/yyyy"
          />

        </div>

        {/* Office Location */}
        <div>
          <input
            type="text"
            id="officeLocation"
            name="officeLocation"
            value={formData.officeLocation}
            onChange={handleInputChange}
            placeholder="Office Location"
            className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
              placeholder:text-[#A2A1A8CC] placeholder:font-light"
            required
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
      </form>
    </div>
  );
};

export default ProfessionalInfo;
