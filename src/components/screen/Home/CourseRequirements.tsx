import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const CourseRequirements: React.FC = () => {
  const requirements = [
    "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)",
    "স্মার্টফোন অথবা পিসি"
  ];

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">
        Course details
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="space-y-3">
          {requirements.map((requirement, index) => (
            <div key={index} className="flex items-start space-x-3">
              <IoMdCheckmark className="text-blue-500 text-2xl" />
              <span className="text-[#4B5563] text-[16px] leading-[24px]">{requirement}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseRequirements; 