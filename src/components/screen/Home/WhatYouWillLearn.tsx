import React from "react";

const WhatYouWillLearn: React.FC = () => {
  const learningOutcomes: string[] = [
    "Detailed rules and regulations of each module of the IELTS test",
    "Proper structure and essay type for scoring well in IELTS writing task 1 and 2",
    "Time management strategy to get a good band score in the IELTS test",
    "Formats and strategies to ace the IELTS test",
    "Speaking accurately on any topic in the IELTS speaking test",
    "Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.",
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        What you will learn by doing the course
      </h2>

      {/* Learning Outcomes Container */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {learningOutcomes.slice(0, 3).map((outcome, index) => (
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
                <p className="text-gray-700 leading-relaxed text-sm">{outcome}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {learningOutcomes.slice(3, 6).map((outcome, index) => (
              <div key={index + 3} className="flex items-start space-x-3">
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
                <p className="text-gray-700 leading-relaxed text-sm">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn; 