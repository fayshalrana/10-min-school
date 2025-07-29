import React from "react";
import { useIELTSCourse } from "../../../hooks/useTest";
import { useLanguage } from "../../../utils/language";

const WhatYouWillLearn: React.FC = () => {
  // Get current language and use it in the API call
  const { language: currentLanguage } = useLanguage();
  const { data, loading } = useIELTSCourse(currentLanguage);

  // Fallback learning outcomes if API data is not available
  const fallbackLearningOutcomes: string[] = [
    "Detailed rules and regulations of each module of the IELTS test",
    "Proper structure and essay type for scoring well in IELTS writing task 1 and 2",
    "Time management strategy to get a good band score in the IELTS test",
    "Formats and strategies to ace the IELTS test",
    "Speaking accurately on any topic in the IELTS speaking test",
    "Through the IELTS Reading and IELTS Listening Mock Tests, you will gain a real exam experience and a complete understanding of the Band Score in the IELTS exam.",
  ];

  // Extract learning outcomes from API data
  const { learningOutcomes, sectionName } = React.useMemo(() => {
    if (!data?.sections) return { learningOutcomes: fallbackLearningOutcomes, sectionName: "What you will learn by doing the course" };

    // Look for a section with type "pointers" or similar learning outcomes
    const pointersSection = data.sections.find(
      (section: any) => section.type === "pointers" || section.type === "learning_outcomes" || section.type === "objectives"
    );

    if (pointersSection?.values) {
      return {
        learningOutcomes: pointersSection.values.map((item: any) => item.text || item.title || item.description || item.name),
        sectionName: pointersSection.name || "What you will learn by doing the course"
      };
    }

    // If no pointers section found, try to extract from other sections
    const featuresSection = data.sections.find(
      (section: any) => section.type === "features"
    );

    if (featuresSection?.values) {
      return {
        learningOutcomes: featuresSection.values.map((item: any) => item.subtitle || item.title || item.description),
        sectionName: featuresSection.name || "What you will learn by doing the course"
      };
    }

    return { learningOutcomes: fallbackLearningOutcomes, sectionName: "What you will learn by doing the course" };
  }, [data]);

  if (loading) {
    return (
      <div>
        <h2 className="mb-4">
          {sectionName}
        </h2>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold md:text-xl">
      {sectionName}
      </h2>

      {/* Learning Outcomes Container */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {learningOutcomes.slice(0, Math.ceil(learningOutcomes.length / 2)).map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                  <div className="flex items-center justify-center flex-shrink-0 mt-1">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(98, 148, 248)" }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </div>
                <p className="text-gray-700 leading-relaxed text-[16px] leading-[24px]">{outcome}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {learningOutcomes.slice(Math.ceil(learningOutcomes.length / 2)).map((outcome, index) => (
              <div key={index + Math.ceil(learningOutcomes.length / 2)} className="flex items-start space-x-3">
                 <div className="flex items-center justify-center flex-shrink-0 mt-1">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="mr-1 mt-[2px]" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: "rgb(98, 148, 248)" }}><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <p className="text-gray-700 leading-relaxed text-[16px] leading-[24px]">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillLearn; 