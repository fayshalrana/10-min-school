import React, { useState } from "react";

interface VideoTestimonialCardProps {
  studentName: string;
  ieltsScore: number;
  profileImage: string;
  videoThumbnail: string;
  videoUrl: string;
}

const VideoTestimonialCard: React.FC<VideoTestimonialCardProps> = ({
  studentName,
  ieltsScore,
  profileImage,
  videoThumbnail,
  videoUrl
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const getVideoEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-5 min-w-[320px] max-w-[400px] relative">
      {/* Quote Icon - Top Right */}
      <div className="absolute -top-4 left-6 z-10">
        <div className="w-10 h-10 bg-[#FCE0D6] rounded-full flex items-center justify-center">
          <svg 
            className="w-4 h-4 text-red-500" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
      </div>

      {/* Video Thumbnail */}
      <div className="relative mb-4">
        <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative">
          {isVideoPlaying ? (
            // Video iframe when playing
            <iframe
              src={getVideoEmbedUrl(videoUrl)}
              title={`${studentName} Testimonial`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            // Thumbnail with play button
            <div className="relative">
              <img 
                src={videoThumbnail} 
                alt={studentName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Hide the broken image and show fallback
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallbackDiv = target.nextElementSibling as HTMLDivElement;
                  if (fallbackDiv) {
                    fallbackDiv.style.display = 'flex';
                  }
                }}
              />
              {/* CSS-based fallback */}
              <div 
                className="w-full h-full bg-indigo-600 text-white flex items-center justify-center text-lg font-bold"
                style={{ display: 'none' }}
              >
                {studentName.charAt(0)}
              </div>
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="relative cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  {/* Outer semi-transparent circle */}
                  <div className="w-24 h-24 bg-gray-300 bg-opacity-50 rounded-full flex items-center justify-center">
                    {/* Inner white circle */}
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      {/* Red triangle */}
                      <div className="w-0 h-0 border-l-[20px] border-l-red-500 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-2 left-2 right-2">
                <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-medium">
                  <span className="text-yellow-300">IELTS TEST INSTRUCTOR</span>
                  <br />
                  <span>যখন STUDENT!</span>
                </div>
              </div>
            </div>
          )}
        </div>
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
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const fallbackDiv = target.nextElementSibling as HTMLDivElement;
              if (fallbackDiv) {
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

export default VideoTestimonialCard; 