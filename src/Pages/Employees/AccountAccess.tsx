import React from "react";

interface Props {
  isEditing: boolean;
}

export default function AccountAccess({ isEditing }: Props) {
  const info = {
    emailAddress: "brooklyn.s@example.com",
    slackId: "brooklyn_simmons",
    skypeId: "brooklyn_simmons",
    githubId: "brooklyn_simmons",
  };

  return (
    <div className="grid grid-cols-2 gap-6 text-sm text-gray-800">
      {Object.entries(info).map(([key, value]) => (
        <div key={key}>
          <label className="block text-gray-500 capitalize mb-1">
            {key.replace(/([A-Z])/g, " $1")}
          </label>
          {isEditing ? (
            <input
              defaultValue={value}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          ) : (
            <p className="font-medium">{value}</p>
          )}
        </div>
      ))}
    </div>
  );
}
