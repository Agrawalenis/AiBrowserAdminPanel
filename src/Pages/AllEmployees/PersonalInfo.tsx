import React, { useState } from 'react';

interface PersonalInfoData {
  mobileNumber: string | number | readonly string[] | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  martialStatus: string;
  nationality: string;
}

const PersonalInfo: React.FC = () => {
  const [formData, setFormData] = useState<PersonalInfoData>({
    mobileNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    martialStatus: '',
    nationality: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Personal Info Data:', formData);
    // Handle form submission
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-white">

      {/* Camera Section - positioned outside form for better control */}
      <div className="flex mb-4 -mt-5">
        <div className="bg-gray-50 rounded-lg w-[100px] h-[100px] flex items-center justify-center">
            <img src="/images/camera.png" className="w-8 h-8" alt="Camera" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Basic Information */}
        <div className="rounded-lg">
          <div>
            {/* First Name and Last Name Row - Each taking half width */}
            <div className="grid grid-cols-2 gap-5 mb-4">
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                  className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                  text-base leading-6 tracking-normal placeholder:font-lexend placeholder:font-light placeholder:text-[#A2A1A8CC]"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                  className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent leading-6 tracking-normal placeholder:font-lexend placeholder:font-light placeholder:text-[#A2A1A8CC]"
                  required
                />
              </div>
            </div>

            {/* Other fields in 2-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent leading-6 tracking-normal placeholder:font-lexend placeholder:font-light placeholder:text-[#A2A1A8CC]"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent leading-6 tracking-normal placeholder:font-lexend placeholder:font-light placeholder:text-[#A2A1A8CC]"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  placeholder="YYYY-MM-DD"
                  pattern="\d{4}-\d{2}-\d{2}"
                  className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent leading-6 tracking-normal placeholder:font-lexend placeholder:font-light placeholder:text-[#A2A1A8CC]"
                  required
                />
                <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none">
                  <img src="/images/dob.png" className="w-5 h-5" alt="Calendar" />
                </div>
              </div>
              <div>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.martialStatus}
                  onChange={handleInputChange}
                  className={`custom-select w-full h-[56px] px-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                  ${!formData.martialStatus ? 'text-[#A2A1A8CC] font-lexend font-light text-base leading-6 tracking-normal' : 'text-gray-900'}`}
                  required
                >
                  <option value="" disabled>
                    Marital Status
                  </option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                </select>

              </div>
              <div>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={`custom-select w-full h-[56px] px-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                  ${!formData.gender ? 'text-[#A2A1A8CC] font-lexend font-light text-base leading-6 tracking-normal' : 'text-gray-900'}`}
                    required
                  >
                    <option value="" disabled className="text-gray-400">
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

              </div>
              <div>
                <select
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className={`custom-select w-full h-[56px] px-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                  ${!formData.nationality ? 'text-[#A2A1A8CC] font-lexend font-light text-base leading-6 tracking-normal' : 'text-gray-900'}`}
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    Nationality
                  </option>
                  <option value="indian">Indian</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="pt-2 rounded-lg">
            <div className="pt-2 pb-2">
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter address"
                className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent leading-6 tracking-normal placeholder:font-lexend placeholder:font-light placeholder:text-[#A2A1A8CC]"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`custom-select w-full h-[56px] px-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                  ${!formData.city ? 'text-[#A2A1A8CC] font-lexend font-light text-base leading-6 tracking-normal' : 'text-gray-900'}`}
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    City
                  </option>
                  <option value="chennai">Chennai</option>
                  <option value="madurai">Madurai</option>
                  <option value="tirupati">Tirupati</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="other">Other</option>
                </select>
            </div>
            <div>
              <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`custom-select w-full h-[56px] px-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                  ${!formData.state ? 'text-[#A2A1A8CC] font-lexend font-light text-base leading-6 tracking-normal' : 'text-gray-900'}`}
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    State
                  </option>
                  <option value="tamilnadu">Tamil Nadu</option>
                  <option value="andhra">Andhra Pradesh</option>
                  <option value="kerala">Kerala</option>
                  <option value="other">Other</option>
                </select>
            </div>
            <div>
              <select
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`custom-select w-full h-[56px] px-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                  ${!formData.zipCode ? 'text-[#A2A1A8CC] font-lexend font-light text-base leading-6 tracking-normal' : 'text-gray-900'}`}
                  required
                >
                  <option value="" disabled className="text-gray-400">
                    Zip Code
                  </option>
                  <option value="">123456</option>
                  <option value="">123456</option>
                  <option value="">123456</option>
                  <option value="">123456</option>
                </select>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-2 border-gray-200">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;