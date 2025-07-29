import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

interface SectionNavigationProps {
  onSectionChange?: (index: number) => void;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({ 
  onSectionChange 
}) => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const navigationItems: string[] = [
    "Course Instructor",
    "Course Layout", 
    "What you will learn",
    "Content Preview",
    "Course Details",
    "Course Features",
    "Free Product",
    "Students Opinion",
    "Course Requirements",
    "Payment Process",
    "FAQ",
    "Contact Info"
  ];

  const handleScroll = (direction: 'left' | 'right'): void => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 200; // Adjust scroll amount as needed

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleItemClick = (index: number): void => {
    setActiveSection(index);
    if (onSectionChange) {
      onSectionChange(index);
    }
  };

  const checkScrollButtons = (): void => {
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
    <div className="bg-white sticky top-[65px] z-10 pb-8 md:block hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center relative">
          {/* Left Arrow */}
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer cursor-pointer absolute -left-[26px] top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden   ${
              canScrollLeft
                ? ''
                : 'disabled:opacity-20'
            }`}
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32" className="rotate-180"><path fill="#000" fill-opacity="0.5" fill-rule="evenodd" d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z" clip-rule="evenodd"></path></svg>
          </button>

          {/* Navigation Items */}
          <div className="flex-1 max-w-full px-6">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(index)}
                  className={`whitespace-nowrap py-4 px-2 border-b-2 transition-all outline-none focuse:shadow-none ${
                    activeSection === index
                      ? 'text-green-600 border-green-600 font-medium'
                      : 'text-gray-500 border-gray-300'
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
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer absolute -right-[20px] top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden ${
              canScrollRight
                ? ''
                : 'disabled:opacity-20'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32"><path fill="#000" fill-opacity="0.5" fill-rule="evenodd" d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionNavigation; 