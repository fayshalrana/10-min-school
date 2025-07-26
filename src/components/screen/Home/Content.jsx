import React, { useState, useEffect, useRef } from "react";
import { useIELTSCourse } from "../../../hooks/useTest";
import SectionNavigation from "./SectionNavigation";

const Content = () => {
  const { data, loading, error, isMockData } = useIELTSCourse();
  const [showRightSection, setShowRightSection] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const rightSectionRef = useRef(null);

  // Section refs for scrolling
  const instructorRef = useRef(null);
  const courseStructureRef = useRef(null);
  const learningOutcomesRef = useRef(null);
  const courseDetailsRef = useRef(null);
  const contentPreviewRef = useRef(null);

  const sectionRefs = [
    instructorRef,
    courseStructureRef,
    learningOutcomesRef,
    courseDetailsRef,
    contentPreviewRef,
  ];

  const handleSectionChange = (sectionIndex) => {
    setActiveSection(sectionIndex);
    const targetRef = sectionRefs[sectionIndex];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const courseStructure = [
    {
      icon: "🎥",
      title: "৫০+ ভিডিও লেকচার",
      description:
        "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা",
      color: "bg-green-500",
    },
    {
      icon: "📄",
      title: "৩৮টি লেকচার শিট",
      description:
        "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
      color: "bg-blue-500",
    },
    {
      icon: "📝",
      title: "রিডিং এন্ড লিসিনিং মক টেস্ট",
      description:
        "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
      color: "bg-yellow-500",
    },
    {
      icon: "🎤",
      title: "ডাউট সল্ডিং লাইভ ক্লাস",
      description:
        "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
      color: "bg-red-500",
    },
  ];

  const learningOutcomes = [
    "IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি",
    "IELTS Speaking test-এ Advanced/Power Words ব্যবহার করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি",
    "IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে ভালো স্কোর অর্জনের কৌশল",
    "IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay type",
    "সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা",
    "IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে পরিপূর্ণ ধারণা",
  ];

  useEffect(() => {
    console.log("showRightSection changed to:", showRightSection);
  }, [showRightSection]);

  useEffect(() => {
    // Create intersection observer to watch for Hero's right sidebar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Hero sidebar intersection:", entry.isIntersecting);
          // When Hero sidebar is NOT visible (scrolled out of view), show Content right section
          setShowRightSection(!entry.isIntersecting);
        });
      },
      {
        threshold: 0, // Trigger when any part of the element enters/exits viewport
        rootMargin: "0px 0px -100px 0px", // Adjust trigger point
      }
    );

    // Find Hero's right sidebar element
    const heroSidebar = document.querySelector("[data-hero-sidebar]");
    console.log("Hero sidebar found:", heroSidebar);

    if (heroSidebar) {
      observer.observe(heroSidebar);
      console.log("Observer attached to hero sidebar");
    } else {
      console.log("Hero sidebar not found, trying alternative selector");
      // Try alternative selector
      const alternativeSidebar = document.querySelector(
        'section[class*="absolute right-0"]'
      );
      if (alternativeSidebar) {
        alternativeSidebar.setAttribute("data-hero-sidebar", "");
        observer.observe(alternativeSidebar);
        console.log("Observer attached to alternative sidebar");
      }
    }

    // Debug: Log current state
    console.log("Initial showRightSection:", showRightSection);

    return () => {
      if (heroSidebar) {
        observer.unobserve(heroSidebar);
      }
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
        <div className="lg:col-span-2">

          {/* Section Navigation */}
          <SectionNavigation
            onSectionChange={handleSectionChange}
            activeSection={activeSection}
          />

          {/* Instructor Section */}
          <div
            ref={instructorRef}
            className="bg-white rounded-lg shadow-sm border p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              কোর্স ইন্সট্রাক্টর
            </h2>
            <div className="flex items-start space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://cdn.10minuteschool.com/images/instructors/munzereen-shahid.jpg"
                  alt="Munzereen Shahid"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Munzereen Shahid
                  </h3>
                  <svg
                    className="w-5 h-5 text-gray-400"
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
                </div>
                <div className="mt-2 text-gray-600 text-sm space-y-1">
                  <p>MSc (English), University of Oxford (UK);</p>
                  <p>BA, MA (English), University of Dhaka;</p>
                  <p className="font-semibold text-green-600">IELTS: 8.5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Structure Section */}
          <div ref={courseStructureRef}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              কোর্সটি যেভাবে সাজানো হয়েছে
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseStructure.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 text-white"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center text-white text-xl flex-shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes Section */}
          <div ref={learningOutcomesRef}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              কোর্সটি করে যা শিখবেন
            </h2>

            {/* Banner Section */}
            <div className="bg-blue-600 rounded-lg p-6 mb-6">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                ফ্রি PDF Download করুন
              </button>
            </div>

            {/* Learning Outcomes */}
            <div className="space-y-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <p className="text-gray-700 leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Details Section */}
          <div ref={courseDetailsRef}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              কোর্স সম্পর্কে বিস্তারিত
            </h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          </div>
          {/* Content Preview Section */}
          <div ref={contentPreviewRef} className="mt-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              কন্টেন্ট প্রিভিউ
            </h3>
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium text-gray-800">
                    Introduction
                  </h4>
                  <svg
                    className="w-5 h-5 text-gray-400"
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
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[
                    "Video: IELTS: Introduction",
                    "Video: IELTS: Overview",
                    "Video: How to Prepare for IELTS?",
                  ].map((video, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{video}</span>
                      </div>
                      <button className="text-green-600 font-medium hover:text-green-700">
                        ফ্রি দেখুন
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
          {/* Debug indicator */}
          <div className="absolute top-2 right-2 z-10">
            <div
              className={`px-2 py-1 rounded text-xs ${
                showRightSection
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {showRightSection ? "VISIBLE" : "HIDDEN"}
            </div>
          </div>

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
    </div>
  );
};

export default Content;
