import React from "react";

const CourseRequirements: React.FC = () => {
  const requirements = [
    "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)",
    "স্মার্টফোন অথবা পিসি"
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Course details
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="space-y-3">
          {requirements.map((requirement, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-gray-700 text-sm">{requirement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseRequirements; 