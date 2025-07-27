import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";

interface CourseCard {
  id: string;
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  image: string;
  isPopular?: boolean;
  seatsLimited?: boolean;
  bandScores?: Array<{ name: string; score: number }>;
}

const MoreCourses: React.FC = () => {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const courses: CourseCard[] = [
    {
      id: "1",
      title: "IELTS LIVE Batch",
      instructor: "Zawad Hasan Adib, Saraf Samanth...",
      price: 8500,
      originalPrice: 10000,
      image: "https://cdn.10minuteschool.com/images/courses/ielts-live-batch.jpg",
      seatsLimited: true,
      bandScores: [
        { name: "Zawad", score: 8.0 },
        { name: "Saraf", score: 7.5 },
        { name: "Adib", score: 8.5 },
        { name: "Samanth", score: 7.0 },
        { name: "Hasan", score: 8.0 }
      ]
    },
    {
      id: "2",
      title: "ঘরে বসে Spoken English",
      instructor: "Munzereen Shahid",
      price: 1950,
      image: "https://cdn.10minuteschool.com/images/courses/spoken-english.jpg"
    },
    {
      id: "3",
      title: "Email Marketing করে Freelancing",
      instructor: "Tisat Fatema Tia",
      price: 1950,
      image: "https://cdn.10minuteschool.com/images/courses/email-marketing.jpg",
      isPopular: true
    },
    {
      id: "4",
      title: "Complete English Grammar Course",
      instructor: "Munzereen Shahid",
      price: 1950,
      image: "https://cdn.10minuteschool.com/images/courses/english-grammar.jpg"
    },
    {
      id: "5",
      title: "Digital Marketing Masterclass",
      instructor: "Ahmed Khan",
      price: 2500,
      originalPrice: 3000,
      image: "https://cdn.10minuteschool.com/images/courses/digital-marketing.jpg"
    },
    {
      id: "6",
      title: "Web Development Bootcamp",
      instructor: "Fatima Rahman",
      price: 3500,
      originalPrice: 4000,
      image: "https://cdn.10minuteschool.com/images/courses/web-development.jpg"
    }
  ];

  const handleScroll = (direction: 'left' | 'right'): void => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 400; // Adjust scroll amount for course cards

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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

  const handleCourseClick = (courseId: string): void => {
    console.log(`Course clicked: ${courseId}`);
    // Handle course click functionality here
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        আপনার জন্য আরও কিছু কোর্স
      </h2>
      
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all absolute -left-5 top-1/2 z-10 -translate-y-1/2 ${
            canScrollLeft
              ? 'bg-gray-200 hover:bg-gray-300 text-gray-600 shadow-md'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <IoIosArrowBack />
        </button>

        {/* Courses Container */}
        <div className="px-4">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course) => (
              <div key={course.id} className="flex-shrink-0 w-80">
                <div 
                  className="bg-white rounded-lg shadow-sm border overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleCourseClick(course.id)}
                >
                  {/* Course Image */}
                  <div className="relative h-48 bg-gradient-to-br from-red-600 to-red-800">
                    {course.isPopular && (
                      <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold">
                        POPULAR
                      </div>
                    )}
                    
                    {/* Course-specific content based on type */}
                    {course.id === "1" ? (
                      // IELTS LIVE Batch
                      <div className="h-full flex flex-col justify-center items-center text-white p-4">
                        <h3 className="text-xl font-bold mb-4">IELTS •LIVE Batch</h3>
                        <div className="flex space-x-2 mb-2">
                          {course.bandScores?.slice(0, 5).map((score, index) => (
                            <div key={index} className="text-center">
                              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-600 text-xs font-bold mb-1">
                                {score.name.charAt(0)}
                              </div>
                              <div className="text-xs">Band {score.score}</div>
                            </div>
                          ))}
                        </div>
                        {course.seatsLimited && (
                          <div className="text-xs text-red-200">আসন সন্ধ্যো সীমিত</div>
                        )}
                      </div>
                    ) : course.id === "2" ? (
                      // Spoken English
                      <div className="h-full flex flex-col justify-center items-center text-white p-4 bg-blue-600">
                        <h3 className="text-lg font-bold mb-2">ঘরে বসে SPOKEN ENGLISH</h3>
                        <div className="text-sm">{course.instructor}</div>
                      </div>
                    ) : course.id === "3" ? (
                      // Email Marketing
                      <div className="h-full flex flex-col justify-center items-center text-white p-4 bg-gradient-to-br from-red-500 to-orange-500">
                        <h3 className="text-lg font-bold mb-2">EMAIL MARKETING করে FREELANCING</h3>
                        <div className="text-sm">{course.instructor}</div>
                      </div>
                    ) : (
                      // Default course image
                      <div className="h-full flex flex-col justify-center items-center text-white p-4 bg-gradient-to-br from-yellow-400 to-yellow-600">
                        <h3 className="text-lg font-bold mb-2">COMPLETE ENGLISH GRAMMAR COURSE</h3>
                        <div className="text-sm">{course.instructor}</div>
                      </div>
                    )}
                  </div>

                  {/* Course Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {course.instructor}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-bold text-lg">
                        ৳{course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">
                          ৳{course.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all absolute -right-5 top-1/2 z-10 -translate-y-1/2 ${
            canScrollRight
              ? 'bg-gray-200 hover:bg-gray-300 text-gray-600 shadow-md'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <IoIosArrowBack className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default MoreCourses; 