import React from "react";

const CourseInstructor: React.FC = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        কোর্স ইন্সট্রাক্টর
      </h2>
      
      <div className="flex items-start space-x-4 bg-white rounded-lg shadow-sm border p-6">
        {/* Profile Picture */}
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
            alt="Munzereen Shahid"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Instructor Details */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">
              Munzereen Shahid
            </h3>
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          
          <div className="mt-2 text-gray-600 text-sm space-y-1">
            <p>MSc (English), University of Oxford (UK);</p>
            <p>BA, MA (English), University of Dhaka;</p>
            <p className="font-semibold text-green-600">IELTS: 8.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor; 