import React from "react";
import Accordion from "../../shared/Accordion/Accordion";

const CourseDetails: React.FC = () => {
  const courseDetailsItems = [
    {
      id: "course-for",
      title: "This IELTS course is for",
      isExpanded: true,
      content: (
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Those who aim to go abroad for work or higher education
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Those who want to apply for permanent residency abroad
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Those who have appeared for the IELTS exam but are not satisfied with their band score
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Those who want to improve their reading, writing, listening, and speaking skills through IELTS for work, business, or personal interest
            </span>
          </li>
        </ul>
      )
    },
    {
      id: "about-course",
      title: "About the IELTS course",
      isExpanded: false,
      content: (
        <div className="text-gray-700 space-y-4">
          <p>
            IELTS certificates are accepted in different higher education institutions in the USA and other English-speaking countries across the globe. This exam tests the ability of the candidates to speak, read, listen and write in English.
          </p>
          
          <p>
            Many of us are intimidated by English grammar as English is not our first language. Fortunately, IELTS is essentially a language-based test and not grammar-based. To achieve the desired score, you will require four English language skills: reading, writing, listening and speaking. The more proficient a person is in these four areas, the higher their score will be on the IELTS test.
          </p>
          
          <p>
            To help IELTS examinees improve these four essential English language skills, 10 Minute School has brought a detailed and well-guided IELTS preparation course. The instructor of this course is Munzereen Shahid (IELTS Band Score 8.5/9), who has recently graduated from the English Department of the world-renowned Oxford University in England.
          </p>
          
          <p>
            If you enroll in our course, you will receive the book "ঘরে বসে IELTS প্রস্তুতি" by Munzereen Shahid, completely free! Along with the video lectures in the course, you can learn strategies from the book and practice to fully prepare for the IELTS exam. This course also includes IELTS Reading and Listening Mock Tests, which will give you a real exam experience and an understanding of band scores. During practice sessions, expert instructors are available in live classes to solve any problems you may encounter. Therefore, now you can have complete IELTS preparation in one course!
          </p>
          
          <p>
            To make your IELTS test preparation effortless, efficient, and practical, enroll in "IELTS Course by Munzereen Shahid" today and take yourself one step closer to fulfilling your dreams!
          </p>
        </div>
      )
    },
    {
      id: "course-benefits",
      title: "This IELTS course will help you in the following ways:",
      isExpanded: false,
      content: (
        <ul className="space-y-2">
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Master all four IELTS modules with comprehensive study materials
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Learn time management strategies for each section
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Practice with real IELTS-style questions and mock tests
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Receive personalized feedback and improvement suggestions
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700">
              Build confidence through regular practice and expert guidance
            </span>
          </li>
        </ul>
      )
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Course details
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border">
        <Accordion items={courseDetailsItems} />
      </div>
    </div>
  );
};

export default CourseDetails; 