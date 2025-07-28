import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import TestimonialCard from "../../shared/TestimonialCard/TestimonialCard";
import VideoTestimonialCard from "../../shared/TestimonialCard/VideoTestimonialCard";
import { useIELTSCourse } from "../../../hooks/useTest.tsx";

interface StudentTestimonial {
  id: string;
  name: string;
  description: string;
  testimonial: string;
  profile_image: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

const StudentsOpinion: React.FC = () => {
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Use the API hook to get data
  const { data, loading, error } = useIELTSCourse();

  // Extract testimonials from API data
  const testimonials: StudentTestimonial[] = React.useMemo(() => {
    if (!data?.sections) return [];
    
    const testimonialsSection = data.sections.find(
      (section: any) => section.type === "testimonials"
    );
    
    return testimonialsSection?.values || [];
  }, [data]);

  const handleScroll = (direction: 'left' | 'right'): void => {
    if (!scrollContainerRef.current) {
      console.log('Scroll container not found');
      return;
    }

    const container = scrollContainerRef.current;
    const scrollAmount = 400; // Adjust scroll amount for testimonial cards

    console.log(`Scrolling ${direction}, current scrollLeft:`, container.scrollLeft);

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScrollButtons = (): void => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const canScrollLeftValue = container.scrollLeft > 0;
    const canScrollRightValue = container.scrollLeft < container.scrollWidth - container.clientWidth;
    
    console.log('Scroll state check:', {
      scrollLeft: container.scrollLeft,
      scrollWidth: container.scrollWidth,
      clientWidth: container.clientWidth,
      canScrollLeft: canScrollLeftValue,
      canScrollRight: canScrollRightValue
    });
    
    setCanScrollLeft(canScrollLeftValue);
    setCanScrollRight(canScrollRightValue);
  };

  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      checkScrollButtons();
    }, 100);
    
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => {
        clearTimeout(timer);
        container.removeEventListener('scroll', checkScrollButtons);
      };
    }
    
    return () => clearTimeout(timer);
  }, [testimonials]); // Add testimonials as dependency

  const handleReadMore = (testimonialId: string): void => {
    console.log(`Read more clicked for testimonial: ${testimonialId}`);
    // Handle read more functionality here
  };

  // Extract IELTS score from description
  const getIELTSScore = (description: string): number => {
    const match = description.match(/IELTS Score: (\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Check if testimonial has video data
  const hasVideoData = (testimonial: StudentTestimonial): boolean => {
    return !!(testimonial.video_url && testimonial.thumb);
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
        <p className="text-red-600">Failed to load testimonials: {error}</p>
      </div>
    );
  }

  // Show empty state if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No testimonials available</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
      Students opinion
      </h2>
      
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all absolute -left-6 top-1/2 z-20 -translate-y-1/2 ${
            canScrollLeft
              ? 'bg-white hover:bg-gray-100 text-gray-600 shadow-lg border'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          <IoIosArrowBack />
        </button>

        {/* Testimonials Container */}
        <div className="px-4">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto overflow-y-visible scrollbar-hide pt-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0">
                {hasVideoData(testimonial) ? (
                  // Render video testimonial card
                  <VideoTestimonialCard
                    studentName={testimonial.name}
                    ieltsScore={getIELTSScore(testimonial.description)}
                    profileImage={testimonial.profile_image}
                    videoThumbnail={testimonial.thumb}
                    videoUrl={testimonial.video_url}
                  />
                ) : (
                  // Render text testimonial card
                  <TestimonialCard
                    testimonial={testimonial.testimonial}
                    studentName={testimonial.name}
                    ieltsScore={getIELTSScore(testimonial.description)}
                    profileImage={testimonial.profile_image}
                    onReadMore={() => handleReadMore(testimonial.id)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all absolute -right-6 top-1/2 z-20 -translate-y-1/2 ${
            canScrollRight
              ? 'bg-white hover:bg-gray-100 text-gray-600 shadow-lg border'
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