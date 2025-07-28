import React, { useState, useRef, useEffect } from "react";
import { useIELTSCourse } from "../../../hooks/useTest";
import SectionNavigation from "./SectionNavigation";
import CourseInstructor from "./CourseInstructor";
import CourseLayout from "./CourseLayout";
import WhatYouWillLearn from "./WhatYouWillLearn";
import ContentPreview from "./ContentPreview";
import CourseDetails from "./CourseDetails";
import CourseFeatures from "./CourseFeatures";
import FreeProduct from "./FreeProduct";
import StudentsOpinion from "./StudentsOpinion";
import CourseRequirements from "./CourseRequirements";
import PaymentProcess from "./PaymentProcess";
import FAQ from "./FAQ";
import ContactInfo from "./ContactInfo";
import MoreCourses from "./MoreCourses";

const Content: React.FC = () => {
  const { data, loading } = useIELTSCourse();
  const [showRightSection, setShowRightSection] = useState<boolean>(false);
  const [_activeSection, setActiveSection] = useState<number>(0);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  // Section refs for scrolling
  const instructorRef = useRef<HTMLDivElement>(null);
  const courseStructureRef = useRef<HTMLDivElement>(null);
  const learningOutcomesRef = useRef<HTMLDivElement>(null);
  const courseDetailsRef = useRef<HTMLDivElement>(null);
  const contentPreviewRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    instructorRef,
    courseStructureRef,
    learningOutcomesRef,
    courseDetailsRef,
    contentPreviewRef,
  ];

  const handleSectionChange = (sectionIndex: number): void => {
    setActiveSection(sectionIndex);
    const targetRef = sectionRefs[sectionIndex];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    console.log("showRightSection changed to:", showRightSection);
  }, [showRightSection]);

  useEffect(() => {
    // Create intersection observer to watch for Hero's right sidebar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Hero sidebar intersection:", entry.isIntersecting);
          // When Hero sidebar is NOT visible (completely out of view), show Content right section
          setShowRightSection(!entry.isIntersecting);
        });
      },
      {
        threshold: 0, // Trigger when any part of the element enters/exits viewport
        rootMargin: "0px 0px 0px 0px", // Only show when sidebar is completely out of view
      }
    );

    // Wait for DOM to be ready and find Hero's right sidebar element
    const findAndObserveSidebar = () => {
      const heroSidebar = document.querySelector("[data-hero-sidebar]");
      console.log("Hero sidebar found:", heroSidebar);

      if (heroSidebar) {
        observer.observe(heroSidebar);
        console.log("Observer attached to hero sidebar");
      } else {
        console.log("Hero sidebar not found, retrying in 100ms");
        // Retry after a short delay if element not found
        setTimeout(findAndObserveSidebar, 100);
      }
    };

    // Start looking for the sidebar
    findAndObserveSidebar();

    // Primary method: Scroll event listener to show right section when Hero sidebar is completely out of view
    const handleScroll = () => {
      const heroSidebar = document.querySelector("[data-hero-sidebar]");
      if (heroSidebar) {
        const sidebarRect = heroSidebar.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Show right section when sidebar is completely above the viewport (bottom < 0)
        const isSidebarCompletelyOutOfView = sidebarRect.bottom < 0;
        
        console.log("Sidebar position:", {
          top: sidebarRect.top,
          bottom: sidebarRect.bottom,
          viewportHeight,
          isOutOfView: isSidebarCompletelyOutOfView
        });
        
        setShowRightSection(isSidebarCompletelyOutOfView);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Debug: Log current state
    console.log("Initial showRightSection:", showRightSection);

    return () => {
      const heroSidebar = document.querySelector("[data-hero-sidebar]");
      if (heroSidebar) {
        observer.unobserve(heroSidebar);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No content available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Section Navigation */}
          <SectionNavigation
            onSectionChange={handleSectionChange}
          />

          {/* Instructor Section */}
          <CourseInstructor />

          {/* Course Structure Section */}
          <CourseLayout />

          {/* Learning Outcomes Section */}
         <WhatYouWillLearn />

          {/* Content Preview Section */}
          <ContentPreview />
          
          {/* Course Details Section */}
          <CourseDetails/>
          
          {/* Course Features Section */}
          <CourseFeatures/>
          
          {/* Free Product Section */}
          <FreeProduct/>
          
          {/* Students Opinion Section */}
          <StudentsOpinion/>
          
          {/* Course Requirements Section */}
          <CourseRequirements/>
          
          {/* Payment Process Section */}
          <PaymentProcess/>
          
          {/* FAQ Section */}
          <FAQ/>
          
          {/* Contact Info Section */}
          <ContactInfo/>
        </div>

        {/* Right Section - Course Pricing & Features */}
        <div
          ref={rightSectionRef}
          className={`lg:col-span-1 transition-all duration-300 ease-in-out ${
            showRightSection
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >

          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
            {/* Pricing */}
            <div className="mb-6">
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-gray-800">৳3850</span>
                <span className="text-xl text-gray-500 line-through">
                  ৳5000
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                  1150 ৳ ছাড়
                </span>
              </div>
              <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                কোর্সটি কিনুন
              </button>
            </div>

            {/* Course Features */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                এই কোর্সে যা থাকছে
              </h3>
              <div className="space-y-3">
                {data.checklist?.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 flex-shrink-0">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center mb-2">
                কোর্সটি সম্পর্কে বিস্তারিত জানতে
              </p>
              <div className="flex items-center justify-center space-x-2 text-green-600 font-medium">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.5-6.5l2.2-2.2c.2-.3.3-.7.2-1-.3-1.2-.5-2.4-.5-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.9 0 7 3.1 7 7z" />
                </svg>
                <span>ফোন করুন (16910)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* More Courses Section */}
       <MoreCourses/>
    </div>
  );
};

export default Content; 