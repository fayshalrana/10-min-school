import React from "react";
import { IoMdCheckmark } from "react-icons/io";
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
      <h2 className="mb-4">
        Course Exclusive Feature
      </h2>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        {/* Video Lectures Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Features List */}
            <div className="space-y-3 md:col-span-2">
              <h3 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px] mb-2">
                ভিডিও লেকচার
              </h3>
              {videoLectureFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <IoMdCheckmark className="text-blue-500 text-2xl" />
                  <span className="text-[#4B5563] text-[16px] leading-[24px]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex justify-center md:col-span-1">
              <div className="w-full h-full bg-red-800 rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden">
                <img src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_sqr.png" alt="ভিডিও লেকচার" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>

        {/* Mock Tests Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Features List */}
            <div className="space-y-3 md:col-span-2">
              <h3 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px] mb-4">
                Reading ও Listening Mock Tests
              </h3>
              {mockTestFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                    <IoMdCheckmark className="text-blue-500 text-2xl" />
                  <span className="text-[#4B5563] text-[16px] leading-[24px]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="flex justify-center md:col-span-1">
              <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
              <img src="https://cdn.10minuteschool.com/images/k-12-courses/ielts_mock_book_sqr.png" alt="ভিডিও লেকচার" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFeatures; 