import React from "react";

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
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 min-w-[320px] max-w-[400px]">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg 
          className="w-8 h-8 text-orange-400" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      {/* Testimonial Text */}
      <div className="mb-4">
        <p className="text-gray-700 text-sm leading-relaxed">
          {testimonial}
        </p>
      </div>

      {/* Read More Link */}
      <div className="mb-6">
        <button 
          onClick={onReadMore}
          className="flex items-center space-x-1 text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
        >
          <span>আরও দেখুন</span>
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
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </button>
      </div>

      {/* Student Profile */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={profileImage} 
            alt={studentName}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.src = "https://via.placeholder.com/48x48/4F46E5/FFFFFF?text=" + studentName.charAt(0);
            }}
          />
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