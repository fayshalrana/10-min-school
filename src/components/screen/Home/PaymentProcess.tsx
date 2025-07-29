import React, { useState } from "react";
import { useIELTSCourse } from "../../../hooks/useTest";
import { useLanguage } from "../../../utils/language";

const PaymentProcess: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Get current language and use it in the API call
  const { language: currentLanguage } = useLanguage();
  const { data, loading, error } = useIELTSCourse(currentLanguage);

  // Extract how_to_pay data from API
  const howToPayData = React.useMemo(() => {
    if (!data?.sections) return null;
    
    const howToPaySection = data.sections.find(
      (section: any) => section.type === "how_to_pay"
    );
    // console.log(howToPaySection)

    return howToPaySection || null;
  }, [data]);

  const handleVideoClick = (): void => {
    setShowModal(true);
  };

  const handleClose = (): void => {
    setShowModal(false);
    setIsVideoPlaying(false);
  };

  const handlePlayClick = (): void => {
    setIsVideoPlaying(true);
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
        <p className="text-red-600">Failed to load payment process: {error}</p>
      </div>
    );
  }

  // Use API data if available, otherwise fallback to hardcoded content
  const title = howToPayData?.name || "Payment process";
  const description = howToPayData?.description || "কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে";
  const videoUrl =  "5wfn60rmWX4";
  const thumbnailUrl= "https://cdn.10minuteschool.com/images/how_to_payment_1707373301013.png";
  console.log(howToPayData)

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold md:text-xl">
        {title}
      </h2>
      
      <div className="brounded-md md:border md:p-4 xs:py-2">
        <p className="">
          {description}{" "}
          <button
            onClick={handleVideoClick}
            className="text-green-600 underline hover:text-green-700 transition-colors cursor-pointer"
          >
            এই ভিডিওটি দেখুন
          </button>
        </p>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full md:max-w-[60%] ">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold z-10"
              aria-label="Close video"
            >
              ×
            </button>
            
            {!isVideoPlaying ? (
              // Thumbnail with play button
              <div className="relative w-full cursor-pointer group h-[70vh] max-h-[70vh]" onClick={handlePlayClick}>
                <img
                  src={thumbnailUrl}
                  alt="Payment Process Thumbnail"
                  className="w-full h-full rounded-lg object-cover"
                />
                {/* Dark overlay with 30% opacity */}
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
                {/* Centered Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-50 rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="24" fill="white" />
                      <polygon points="20,16 34,24 20,32" fill="#F44336" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              // Video player
              <div className="w-full h-[70vh] max-h-[70vh]">
                <iframe
                  src={`https://www.youtube.com/embed/${videoUrl}?rel=0&autoplay=1`}
                  title="Payment Process"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentProcess; 