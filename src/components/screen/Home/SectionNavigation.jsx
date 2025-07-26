import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";


const SectionNavigation = ({ sections, onSectionChange }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const navigationItems = [
    "What you will learn by doing the course",
    "Course details", 
    "Course Exclusive Feature",
    "Free item"
  ];

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 200; // Adjust scroll amount as needed

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleItemClick = (index) => {
    setActiveSection(index);
    if (onSectionChange) {
      onSectionChange(index);
    }
  };

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center relative">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden   ${
              canScrollLeft
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <IoIosArrowBack />
          </button>

          {/* Navigation Items */}
          <div className="flex-1 max-w-[685px] px-2">
            <div
              ref={scrollContainerRef}
              className="flex gap-2 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`whitespace-nowrap py-4 px-2 border-b-2 transition-all focus:outline-none focus:border-none ${
                    activeSection === index
                      ? 'text-green-600 border-green-600 font-medium'
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden ${
              canScrollRight
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <svg
              className="w-4 h-4"
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionNavigation; 