import React, { useState } from "react";

interface TestimonialCardProps {
  testimonial: string;
  studentName: string;
  ieltsScore: number;
  profileImage: string;
  onReadMore?: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  studentName,
  ieltsScore,
  profileImage,
  onReadMore
}) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
    if (onReadMore) {
      onReadMore();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 min-w-[320px] max-w-[400px] relative min-h-[290px]">
      {/* Quote Icon - Top Left */}
      <div className="absolute -top-4 left-6 z-10">
        <div className="w-10 h-10 bg-[#FCE0D6] rounded-full flex items-center justify-center">
          <svg 
            className="w-3 h-3 text-red-500" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="mb-4 mt-8">
        <p className={`text-gray-700 text-md leading-relaxed ${showFullText ? '' : 'line-clamp-5'}`}>
          {testimonial}
        </p>
      </div>

      {/* Read More Link */}
      <div className="mb-4">
        <button 
          onClick={handleReadMore}
          className="flex items-center space-x-1 text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
        >
          <span>{showFullText ? 'কম দেখুন' : 'আরও দেখুন'}</span>
          <svg 
            className={`w-4 h-4 transition-transform ${showFullText ? 'rotate-180' : ''}`}
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

      {/* Student Profile */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={profileImage} 
            alt={studentName}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Hide the broken image and show fallback
              e.currentTarget.style.display = 'none';
              const fallbackDiv = e.currentTarget.nextElementSibling as HTMLDivElement;
              if (fallbackDiv && fallbackDiv.style) {
                fallbackDiv.style.display = 'flex';
              }
            }}
          />
          {/* CSS-based fallback */}
          <div 
            className="w-full h-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold"
            style={{ display: 'none' }}
          >
            {studentName.charAt(0)}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm">{studentName}</h4>
          <p className="text-gray-500 text-xs">IELTS Score: {ieltsScore}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 