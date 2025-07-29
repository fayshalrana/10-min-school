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
  const [showContactModal, setShowContactModal] = useState(false);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (showContactModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showContactModal]);

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
          setShowRightSection(!entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    // Wait for DOM to be ready and find Hero's right sidebar element
    const findAndObserveSidebar = () => {
      const heroSidebar = document.querySelector("[data-hero-sidebar]");
      console.log("Hero sidebar found:", heroSidebar);

      if (heroSidebar) {
        observer.observe(heroSidebar);
      } else {
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

        // Show right section when sidebar is completely above the viewport (bottom < 0)
        const isSidebarCompletelyOutOfView = sidebarRect.bottom < 0;
        setShowRightSection(isSidebarCompletelyOutOfView);
      }
    };

    window.addEventListener("scroll", handleScroll);


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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Left Section */}
        <div className="lg:col-span-2 flex flex-col gap-8 max-w-[750px]">

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
          <CourseDetails />

          {/* Course Features Section */}
          <CourseFeatures />

          {/* Free Product Section */}
          <FreeProduct />

          {/* Students Opinion Section */}
          <StudentsOpinion />

          {/* Course Requirements Section */}
          <CourseRequirements />

          {/* Payment Process Section */}
          <PaymentProcess />

          {/* FAQ Section */}
          <FAQ />

          {/* Contact Info Section */}
          <ContactInfo />
        </div>

        {/* Right Section - Course Pricing & Features */}
        <div
          ref={rightSectionRef}
          className={`lg:col-span-1 transition-all duration-300 ease-in-out ${showRightSection
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
          <div className="bg-white sticky top-[110px]">
            <div className="md:border">
              {/* Desktop Course Details */}
              <div className="hidden md:block">
                <div className="" data-device-type="desktop">
                  <div className="w-full p-4 md:h-auto" id="variant">
                    <div className="relative md:static">
                      <div>
                        <div className="flex flex-col w-full">
                          <div>
                            <div className="flex items-center justify-between md:flex-col md:items-start">
                              <div className="md:mb-3">
                                <div className="inline-block text-2xl font-semibold">৳3850</div>
                                <span className="infline-flex">
                                  <del className="ml-2 text-base font-normal md:text-xl">৳5000</del>
                                  <div className="inline-block">
                                    <div className="relative bg-[#f97b53] text-white px-[7px] flex items-center ml-[3px]" style={{ clipPath: 'polygon(0 50%, 15% 0, 100% 0, 100% 100%, 15% 100%)' }}>
                                      {/* White dot */}
                                      <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                                      {/* Text */}
                                      <span className="font-normal text-[14px]">1150 ৳ ছাড়</span>
                                    </div>
                                  </div>
                                </span>
                              </div>
                              <div className="flex items-center justify-between mb-2"></div>
                            </div>
                            <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                              কোর্সটি কিনুন
                            </button>
                          </div>
                        </div>
                        <div className="absolute md:static top-[-45px] left-0">
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className="hidden md:block">
                <div className="grid py-2 md:p-4">
                  <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                  <div>
                    {data.checklist?.map((item, index) => (
                      <div key={item.id || index} className="flex items-center mb-3 leading-5">
                        <div className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: 1 }}>
                          <img
                            alt="icon"
                            data-original-src={item.icon}
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src={item.icon}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{item.text}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Information */}
            <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
              <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
              <span
                className="flex items-center justify-center ml-2 underline cursor-pointer text-green hover:text-green-700 transition-colors"
                onClick={() => setShowContactModal(true)}
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span className="ml-1">ফোন করুন (16910)</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* More Courses Section */}
      <MoreCourses />

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl md:w-[60%] w-full mx-4 p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Icon */}
            <div className="flex items-start flex-col">
              <div className="">
                <img alt="call us" data-original-src="https://cdn.10minuteschool.com/images/skills/call-us.png" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/skills/call-us.png" style={{ color: "transparent" }} />
              </div>
              <div className="flex-1 flex justify-center flex-col items-center w-full">
                <h3 className="text-[16px] font-[400] text-gray-800 mb-6">কোন জিজ্ঞাসা, সমস্যা বা পরামর্শ জানাতে ফোন করুন নিচের নাম্বারে (সকাল ৯টা - রাত ১০টা)</h3>
                <div className="block mb-6 text-2xl font-bold text-green-600">16910</div>
                <button
                  className="max-w-max bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-[16px]"
                  onClick={() => window.open('tel:16910', '_blank')}
                >
                  কল করুন: 16910
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content; 