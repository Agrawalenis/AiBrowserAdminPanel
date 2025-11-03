import React, { useState } from 'react';

interface AccountAccessData {
  emailAddress: string;
  slackId: string;
  skypeId: string;
  githubId: string;
}

const AccountAccess: React.FC = () => {
  const [formData, setFormData] = useState<AccountAccessData>({
    emailAddress: '',
    slackId: '',
    skypeId: '',
    githubId: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Account Access Data:', formData);
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

            {/* User Name */}
            <div>
                <input
                type="text"
                id="slackId"
                name="slackId"
                value={formData.slackId}
                onChange={handleInputChange}
                placeholder="Enter slack ID"
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
                id="skypeId"
                name="skypeId"
                value={formData.skypeId}
                onChange={handleInputChange}
                placeholder="Enter skype ID"
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
                id="githubId"
                name="githubId"
                value={formData.githubId}
                onChange={handleInputChange}
                placeholder="Enter github ID"
                className="w-full h-[56px] px-3 py-2 border border-gray-300 rounded-md
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                    placeholder:text-[#A2A1A8CC] placeholder:font-light"
                required
                />
            </div>
          </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700
              hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#7152F3] text-white rounded-md
              hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountAccess;
