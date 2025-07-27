import React from "react";

const CourseFeatures: React.FC = () => {
  const videoLectureFeatures = [
    "IELTS Academic ও General Training নিয়ে আলোচনা",
    "Reading, Writing, Listening ও Speaking এর Overview & Format",
    "প্রতিটি প্রশ্নের ধরন-ভিত্তিক উত্তর করার স্ট্র্যাটেজি",
    "ভিডিওর সাথে প্র্যাকটিসের সুযোগ"
  ];

  const mockTestFeatures = [
    "10 Reading & 10 Listening Mock Tests",
    "Computer-delivered IELTS পরীক্ষার এক্সপেরিয়েন্স",
    "উত্তর সাবমিট করার সাথে সাথেই রেজাল্ট",
    "যেকোনো সময়, যেকোনো জায়গা থেকে মক টেস্ট"
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Course Exclusive Feature
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border p-6">
        {/* Video Lectures Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            ভিডিও লেকচার
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Features List */}
            <div className="space-y-3">
              {videoLectureFeatures.map((feature, index) => (
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
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Image */}
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-red-800 rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden">
                <div className="text-4xl font-bold mb-1">50+</div>
                <div className="text-sm font-medium">VIDEO LECTURES</div>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute bottom-8 left-6 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-12 left-8 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>

        {/* Mock Tests Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Reading ও Listening Mock Tests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Features List */}
            <div className="space-y-3">
              {mockTestFeatures.map((feature, index) => (
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
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Image */}
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                <div className="text-2xl font-bold text-red-600 mb-1">IELTS</div>
                <div className="text-sm font-medium text-red-600 mb-2">READING & LISTENING</div>
                <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">
                  MOCK TESTS
                </div>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFeatures; 