import React from "react";
import { useIELTSCourse } from "../../../hooks/useTest";
import { InstructorData, SectionData } from "../../../types";

const CourseInstructor: React.FC = () => {
  const { data, loading } = useIELTSCourse();

  if (loading) {
    return (
      <div className="">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          কোর্স ইন্সট্রাক্টর
        </h2>
        <div className="flex items-center justify-center p-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  // Extract instructor data from API
  const instructorSection = data.sections?.find((section: SectionData) => section.type === "instructors");
  const instructor = instructorSection?.values?.[0] as InstructorData | undefined;

  if (!instructor) {
    return null;
  }

  return (
    <div className="">
      <h2 className="mb-4">
        Course instructor
      </h2>
      
      <div className="flex items-start space-x-4 bg-white rounded-lg shadow-sm border p-6">
        {/* Profile Picture */}
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={instructor.image || "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"}
            alt={instructor.name || "Course Instructor"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg";
            }}
          />
        </div>
        
        {/* Instructor Details */}
        <div className="flex-1">
          <div className="flex items-center justify-start gap-2">
            <a 
              href={instructor.has_instructor_page ? `https://10minuteschool.com/skills/instructors/${instructor.slug}/` : "#"} 
              className="text-xl font-semibold text-gray-800 hover:text-green-600"
            >
              {instructor.name || "Course Instructor"}
            </a>
            {instructor.has_instructor_page && (
              <svg
                className="w-4 h-4 text-gray-400"
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
            )}
          </div>
          
          <div className="mt-2 text-gray-600 text-sm">
            <div 
              className="space-y-1"
              dangerouslySetInnerHTML={{ __html: instructor.description || "" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor; 