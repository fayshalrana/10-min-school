import React, { useState, useRef, useEffect } from "react";

interface CourseCard {
  id: string;
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  image: string;
  isPopular?: boolean;
  seatsLimited?: boolean;
  link?: string;
}

const MoreCourses: React.FC = () => {
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const courses: CourseCard[] = [
    {
      id: "1",
      title: "IELTS LIVE Batch",
      instructor: "Zawad Hasan Adib, Saraf Samanth...",
      price: 8500,
      originalPrice: 10000,
      image: "https://cdn.10minuteschool.com/images/thumbnails/batch-12-ielts-live-batch-thumbnails.jpg",
      seatsLimited: true,
      link: "https://10minuteschool.com/product/ielts-live-batch/?ref=ielts-live-batch&type=recommendation",
    },
    {
      id: "2",
      title: "ঘরে বসে Spoken English",
      instructor: "Munzereen Shahid",
      price: 1950,
      image: "https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg",
      link: "https://10minuteschool.com/product/ghore-boshe-spoken-english/?ref=ghore-boshe-spoken-english&type=recommendation",
    },
    {
      id: "3",
      title: "Email Marketing করে Freelancing",
      instructor: "Tisat Fatema Tia",
      price: 1950,
      image: "https://cdn.10minuteschool.com/images/catalog/media/16x9_1732445853307.jpg",
      isPopular: true,
      link: "https://10minuteschool.com/product/email-marketing-course/?ref=email-marketing-course&type=recommendation",
    },
    {
      id: "4",
      title: "Complete English Grammar Course",
      instructor: "Munzereen Shahid",
      price: 1950,
      image: "https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg",
      link: "https://10minuteschool.com/product/english-grammar-course/?ref=english-grammar-course&type=recommendation",
    },
    {
      id: "5",
      title: "Digital Marketing Masterclass",
      instructor: "Ahmed Khan",
      price: 2500,
      originalPrice: 3000,
      image: "https://cdn.10minuteschool.com/images/thumbnails/skills/youtube-marketing-course-thumbnail.jpg",
      link: "https://10minuteschool.com/product/youtube-marketing-course/?ref=youtube-marketing-course&type=recommendation",
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
    <div className="mt-12">
      <h2 className="mb-3 text-xl font-semibold md:mb-8 md:text-xl">
        আপনার জন্য আরও কিছু কোর্স
      </h2>
      
      <div className="relative">

        {/* Courses Container */}
        <div className="">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course) => (
              <a href={course.link} target="_blank" key={course.id} className="flex-shrink-0 w-80">
                <div 
                  className="bg-white rounded-lg shadow-sm border overflow-hidden cursor-pointer hover:shadow-md transition-shadow h-full"
                  onClick={() => handleCourseClick(course.id)}
                >
                  {/* Course Image */}
                  <div className="relative h-48 bg-gradient-to-br from-red-600 to-red-800">
                    <img src={course.image} alt="" />
                  </div>

                  {/* Course Details */}
                  <div className="p-4 flex flex-col h-[calc(100%-12rem)]">
                    <h3 className="font-bold text-gray-800 text-lg mb-1">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {course.instructor}
                    </p>
                    <div className="flex items-center space-x-2 mt-auto">
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
              </a>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer cursor-pointer absolute right-5 -top-10 ${
            canScrollRight
              ? 'bg-gray-200 hover:bg-gray-300 text-gray-600 shadow-md'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed disabled:opacity-20'
          }`}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32" className="rotate-180"><path fill="#000" fill-opacity="0.5" fill-rule="evenodd" d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default MoreCourses; 