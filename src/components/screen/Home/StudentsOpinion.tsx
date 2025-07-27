import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import TestimonialCard from "../../shared/TestimonialCard/TestimonialCard";

interface StudentTestimonial {
  id: string;
  testimonial: string;
  studentName: string;
  ieltsScore: number;
  profileImage: string;
}

const StudentsOpinion: React.FC = () => {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: StudentTestimonial[] = [
    {
      id: "1",
      testimonial: "মুনজেরিন আপুর IELTS কোর্সটা আমার জন্য ছিল super easy to understand. এখানের ক্লাস, মক এক্সাম সবকিছুই ছিল well-prepared এবং structured. Bangla and English মিলিয়ে সাজানো স্টাডি ম্যাটেরিয়ালগুলো সহজে বুঝতে...",
      studentName: "Mahathi Hasan Showrit",
      ieltsScore: 6.5,
      profileImage: "https://cdn.10minuteschool.com/images/testimonials/mahathi-hasan.jpg"
    },
    {
      id: "2",
      testimonial: "IELTS প্রস্তুতিতে এই কোর্সটা ছিল আমার বড় সাপোর্ট। 7.5 স্কোর করেছি একদম নিজের pace-এ পড়াশোনা করে, কারণ কোর্সটা flexible এবং easy to understand। test আর live class গুলো আমাকে পুরে...",
      studentName: "Istiaq Islam",
      ieltsScore: 7.0,
      profileImage: "https://cdn.10minuteschool.com/images/testimonials/istiaq-islam.jpg"
    },
    {
      id: "3",
      testimonial: "এই কোর্সের মাধ্যমে আমি আমার IELTS স্কোর 6.0 থেকে 7.5 এ উন্নত করেছি। প্রতিটি মডিউলের জন্য আলাদা স্ট্র্যাটেজি এবং প্র্যাকটিস ম্যাটেরিয়াল ছিল খুবই সহায়ক...",
      studentName: "Fatima Rahman",
      ieltsScore: 7.5,
      profileImage: "https://cdn.10minuteschool.com/images/testimonials/fatima-rahman.jpg"
    },
    {
      id: "4",
      testimonial: "IELTS প্রস্তুতির জন্য এই কোর্সটা আমার জন্য ছিল perfect choice। মক টেস্টগুলো real exam এর মতই ছিল এবং instructor এর guidance ছিল exceptional...",
      studentName: "Ahmed Khan",
      ieltsScore: 6.5,
      profileImage: "https://cdn.10minuteschool.com/images/testimonials/ahmed-khan.jpg"
    },
    {
      id: "5",
      testimonial: "এই কোর্সের সবচেয়ে ভালো দিক হল flexible schedule এবং comprehensive study materials। আমি আমার own time এ study করতে পেরেছি এবং ভালো রেজাল্ট পেয়েছি...",
      studentName: "Nadia Chowdhury",
      ieltsScore: 7.0,
      profileImage: "https://cdn.10minuteschool.com/images/testimonials/nadia-chowdhury.jpg"
    }
  ];

  const handleScroll = (direction: 'left' | 'right'): void => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 400; // Adjust scroll amount for testimonial cards

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

  const handleReadMore = (testimonialId: string): void => {
    console.log(`Read more clicked for testimonial: ${testimonialId}`);
    // Handle read more functionality here
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Students opinion
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

        {/* Testimonials Container */}
        <div className="px-4">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0">
                <TestimonialCard
                  testimonial={testimonial.testimonial}
                  studentName={testimonial.studentName}
                  ieltsScore={testimonial.ieltsScore}
                  profileImage={testimonial.profileImage}
                  onReadMore={() => handleReadMore(testimonial.id)}
                />
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

export default StudentsOpinion; 