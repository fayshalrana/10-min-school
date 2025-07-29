import React, { useState } from "react";
import Accordion from "../../shared/Accordion/Accordion";
import { useIELTSCourse } from "../../../hooks/useTest";
import { useLanguage } from "../../../utils/language";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [showAllFAQs, setShowAllFAQs] = useState<boolean>(false);

  // Get current language and use it in the API call
  const { language: currentLanguage } = useLanguage();
  const { data, loading, error, isMockData } = useIELTSCourse(currentLanguage);


  // Extract FAQ data from API
  const faqData: FAQItem[] = React.useMemo(() => {
    if (!data?.sections) {
      return [];
    }
    
    const faqSection = data.sections.find(
      (section: any) => section.type === "faq"
    );
  
    return faqSection?.values || [];
  }, [data, isMockData]); 

  // Show only first 3 items initially, or all items if showAllFAQs is true
  const displayedFaqItems = showAllFAQs ? faqData : faqData.slice(0, 5);

  const handleSeeAll = (): void => {
    setShowAllFAQs(!showAllFAQs);
  };

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Failed to load FAQ: {error}</p>
      </div>
    );
  }

  // Show loading state if we're using mock data but API call is still in progress
  if (isMockData && loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Show empty state if no FAQ data or if using mock data
  if (!faqData || faqData.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No FAQ available</p>
      </div>
    );
  }
  
  // Convert FAQ data to accordion format
  const accordionItems = displayedFaqItems.map((faq, index) => ({
    id: faq.id,
    title: faq.question,
    isExpanded: index === 0, // First item expanded by default
    content: (
      <div 
      className="text-sm space-y-2"
      dangerouslySetInnerHTML={{ __html: faq.answer }}
      />
    )
  }));

  return (
    <div>
      <h2 className="mb-4 text-base font-semibold md:text-xl">
        {data?.sections?.find((section: any) => section.type === "faq")?.name}
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border">
        <Accordion items={accordionItems} />
        
        {/* See All/Less Button */}
        {faqData.length > 3 && (
          <div className="relative">
            <button
              onClick={handleSeeAll}
              className="rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700 flex gap-2 absolute -bottom-[14px]  left-1/2 -translate-x-1/2"
            >
              <span>{showAllFAQs ? "কম দেখুন " : "সকল প্রশ্ন-উত্তর "}</span>
              <svg
                className={`w-4 h-4 transition-transform ${showAllFAQs ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ; 