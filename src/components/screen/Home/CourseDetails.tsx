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
        <div className="text-gray-700">
          <p className="mb-3">
            This comprehensive IELTS preparation course is designed to help you achieve your target band score. 
            The course covers all four modules: Reading, Writing, Listening, and Speaking.
          </p>
          <p className="mb-3">
            Our expert instructors will guide you through proven strategies and techniques that have helped 
            thousands of students achieve their desired IELTS scores.
          </p>
          <p>
            The course includes practice tests, mock exams, and personalized feedback to ensure you're 
            fully prepared for the actual IELTS examination.
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