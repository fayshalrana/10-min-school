import React, { useState } from "react";
import { useIELTSCourse } from "../../../hooks/useTest";
import Button from "../../shared/Button/Button";

interface MediaItem {
  name: string;
  resource_type?: string;
  thumbnail_url?: string;
  resource_value?: string;
  src?: string;
}

interface ChecklistItem {
  id?: string;
  text: string;
  icon: string;
}

const Hero: React.FC = () => {
  const { data, loading } = useIELTSCourse();
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [isMobileVideoPlaying, setIsMobileVideoPlaying] = useState(false);
  const [isDesktopVideoPlaying, setIsDesktopVideoPlaying] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (showContactModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showContactModal]);

  if (loading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course data...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No course data available</p>
        </div>
      </div>
    );
  }

  // Extract media items for video gallery
  const previewGallery: MediaItem[] =
    data.media?.filter((item: MediaItem) => item.name === "preview_gallery") || [];

  // Ensure we have at least one media item, fallback to first available media
  const availableMedia = previewGallery.length > 0 ? previewGallery : data.media || [];
  const selectedMedia: MediaItem = availableMedia[selectedMediaIndex] || availableMedia[0];

  const handleThumbnailClick = (index: number) => {
    setSelectedMediaIndex(index);
    setIsMobileVideoPlaying(false);
    setIsDesktopVideoPlaying(false);
  };

  const handlePreviousClick = () => {
    setSelectedMediaIndex((prev) =>
      prev === 0 ? availableMedia.length - 1 : prev - 1
    );
    setIsMobileVideoPlaying(false);
    setIsDesktopVideoPlaying(false);
  };

  const handleNextClick = () => {
    setSelectedMediaIndex((prev) =>
      prev === availableMedia.length - 1 ? 0 : prev + 1
    );
    setIsMobileVideoPlaying(false);
    setIsDesktopVideoPlaying(false);
  };

  const handleMobileVideoPlay = () => {
    setIsMobileVideoPlaying(true);
    setIsDesktopVideoPlaying(false); // Stop desktop video if playing
  };

  const handleDesktopVideoPlay = () => {
    setIsDesktopVideoPlaying(true);
    setIsMobileVideoPlaying(false); // Stop mobile video if playing
  };

  const getVideoEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="skills-landing"
      className="min-h-[300px] md:min-h-[300px] mt-[65px]"
    >
      <div className="container relative flex flex-col gap-4 md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <div className="order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          {/* Mobile Video Section */}
          <div className="block mt-4 md:mt-0 md:hidden">
            <div className="relative overflow-hidden bg-black youtube-video aspect-video">
              {selectedMedia.resource_type === 'video' && isMobileVideoPlaying ? (
                // Video iframe when playing
                <iframe
                  src={getVideoEmbedUrl(selectedMedia.resource_value || '')}
                  title={data.title || "Course Video"}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                // Thumbnail with play button
                <div className="relative">
                  {selectedMedia.resource_type === 'video' && (
                    <span
                      className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={handleMobileVideoPlay}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="none"
                        viewBox="0 0 56 56"
                      >
                        <circle
                          cx="28"
                          cy="28"
                          r="28"
                          fill="#fff"
                          fillOpacity="0.5"
                        ></circle>
                        <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
                        <path
                          fill="#1CAB55"
                          d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                        ></path>
                      </svg>
                    </span>
                  )}
                  <div className="thumb-wrap">
                    <div>
                      <div
                        className="opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{
                          fontSize: "0px",
                          objectFit: "cover",
                          opacity: 1,
                        }}
                      >
                        <img
                          alt={data.title || "Course Preview"}
                          data-original-src={
                            selectedMedia?.thumbnail_url || selectedMedia?.resource_value ||
                            "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                          }
                          width="867"
                          height="480"
                          decoding="async"
                          data-nimg="1"
                          className="w-full"
                          src={
                            selectedMedia?.thumbnail_url || selectedMedia?.resource_value ||
                            "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                          }
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                    {/* Overlay - Only for videos */}
                    {selectedMedia.resource_type === 'video' && (
                      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    )}
                  </div>
                </div>
              )}
              <div>
                <div
                  className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer"
                  onClick={handlePreviousClick}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    color="white"
                    style={{ color: "white" }}
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
                  </svg>
                </div>
                <div
                  className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer"
                  onClick={handleNextClick}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    color="white"
                    style={{ color: "white" }}
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-4 p-4 overflow-x-auto hide-scrollbar">
              {availableMedia.map((item: MediaItem, index: number) => (
                <div key={index}>
                  <div>
                    <div
                      className={`relative w-[55px] rounded cursor-pointer overflow-hidden transition-all duration-200 ${index === selectedMediaIndex
                          ? "outline outline-[2px] outline-[#1CAB55] scale-105"
                          : "border-0 hover:scale-105"
                        }`}
                      onClick={() => handleThumbnailClick(index)}
                    >
                      <div
                        className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: "0px", opacity: 1 }}
                      >
                        <img
                          alt="preview_gallery"
                          data-original-src={
                            item.thumbnail_url || item.resource_value
                          }
                          loading="lazy"
                          width="86"
                          height="50"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src={item.thumbnail_url || item.resource_value}
                        />
                      </div>
                      {item.resource_type === "video" && (
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          <div
                            className="opacity-0 transition-opacity duration-300 ease-in-out"
                            style={{ fontSize: "0px", opacity: 1 }}
                          >
                            <img
                              alt="Play The Video"
                              data-original-src="/images/annual_exam/play_icon_2.svg"
                              width="20"
                              height="20"
                              decoding="async"
                              data-nimg="1"
                              style={{ color: "transparent" }}
                              src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop Title and Content */}
          <div className="mb-2">
            <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
              {data.title}
            </h1>
            <button className="flex flex-row flex-wrap gap-2 text-white">
              <span className="inline-block">
                <img
                  className="md:w-[130px] w-[100px]"
                  src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                  alt="Rating"
                />
              </span>
              <span className="inline-block text-sm md:text-base">
                (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </button>
            <div
              className="text-gray-400 mt-4"
              style={{ overflow: "hidden", height: "auto", maskImage: "none" }}
            >
              <div>
                <div
                  className="tenms__paragraph"
                  dir="ltr"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <section
          data-hero-sidebar
          className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute"
        >
          <div className="md:sticky md:top-[112px]" style={{ display: "block" }}>
            <div className=" md:border">
              <div className="">
                {/* Desktop Video Section */}
                <div className="hidden p-1 md:block" id="">
                  <div className="relative overflow-hidden bg-black youtube-video aspect-video">
                    {selectedMedia.resource_type === 'video' && isDesktopVideoPlaying ? (
                      // Video iframe when playing
                      <iframe
                        src={getVideoEmbedUrl(selectedMedia.resource_value || '')}
                        title={data.title || "Course Video"}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      // Thumbnail with play button
                      <div className="relative">
                        {selectedMedia.resource_type === 'video' && (
                          <span
                            className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={handleDesktopVideoPlay}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 56 56">
                              <circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.5"></circle>
                              <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
                              <path fill="#1CAB55" d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"></path>
                            </svg>
                          </span>
                        )}
                        <div className="thumb-wrap">
                          <div>
                            <div className="opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", objectFit: "cover", opacity: 1 }}>
                              <img
                                alt={data.title}
                                data-original-src={selectedMedia?.thumbnail_url || selectedMedia?.resource_value || "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"}
                                width="867"
                                height="480"
                                decoding="async"
                                data-nimg="1"
                                className="w-full"
                                src={selectedMedia?.thumbnail_url || selectedMedia?.resource_value || "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"}
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </div>
                          {/* Overlay - Only for videos */}
                          {selectedMedia.resource_type === 'video' && (
                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                          )}
                        </div>
                        <div>
                          <div
                            className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer"
                            onClick={handlePreviousClick}
                          >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="white" style={{ color: "white" }} height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                              <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
                            </svg>
                          </div>
                          <div
                            className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer"
                            onClick={handleNextClick}
                          >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="white" style={{ color: "white" }} height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Desktop Thumbnail Gallery */}
                  <div className="flex gap-4 p-4 overflow-x-auto hide-scrollbar">
                    {availableMedia.map((item: MediaItem, index: number) => (
                      <div key={index}>
                        <div>
                          <div
                            className={`relative w-[55px] rounded cursor-pointer overflow-hidden transition-all duration-200 ${index === selectedMediaIndex
                                ? 'outline outline-[2px] outline-[#1CAB55] scale-105'
                                : 'border-0 hover:scale-105'
                              }`}
                            onClick={() => handleThumbnailClick(index)}
                          >
                            <div className="rounded opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: 1 }}>
                              <img
                                alt="preview_gallery"
                                data-original-src={item.thumbnail_url || item.resource_value}
                                loading="lazy"
                                width="86"
                                height="50"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src={item.thumbnail_url || item.resource_value}
                              />
                            </div>
                            {item.resource_type === 'video' && (
                              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <div className="opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: 1 }}>
                                  <img
                                    alt="Play The Video"
                                    data-original-src="/images/annual_exam/play_icon_2.svg"
                                    width="20"
                                    height="20"
                                    decoding="async"
                                    data-nimg="1"
                                    style={{ color: "transparent" }}
                                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Course Details */}
              <div className="hidden md:block">
                <div className="" data-device-type="desktop">
                  <div className="w-full p-4 md:h-auto" id="variant">
                    <div className="relative md:static">
                      <div>
                        <div className="flex flex-col w-full">
                          <div>
                            <div className="flex items-center justify-between md:flex-col md:items-start">
                              <div className="md:mb-3">
                                <div className="inline-block text-2xl font-semibold">৳3850</div>
                                <span className="infline-flex">
                                  <del className="ml-2 text-base font-normal md:text-xl">৳5000</del>
                                  <div className="inline-block">
                                    <div className="relative bg-[#f97b53] text-white px-[7px] flex items-center ml-[3px]" style={{ clipPath: 'polygon(0 50%, 15% 0, 100% 0, 100% 100%, 15% 100%)' }}>
                                      {/* White dot */}
                                      <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                                      {/* Text */}
                                      <span className="font-normal text-[14px]">1150 ৳ ছাড়</span>
                                    </div>
                                  </div>
                                </span>
                              </div>
                              <div className="flex items-center justify-between mb-2"></div>
                            </div>
                            <Button
                              variant="primary"
                              size="md"
                              className="w-full"
                            >
                              Enroll
                            </Button>
                          </div>
                        </div>
                        <div className="absolute md:static top-[-45px] left-0">
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Features */}
              <div className="hidden md:block">
                <div className="grid py-2 md:p-4">
                  <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
                  <div>
                    {data.checklist?.map((item: ChecklistItem, index: number) => (
                      <div key={item.id || index} className="flex items-center mb-3 leading-5">
                        <div className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: 1 }}>
                          <img
                            alt="icon"
                            data-original-src={item.icon}
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src={item.icon}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{item.text}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
              <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
              <span
                className="flex items-center justify-center ml-2 underline cursor-pointer text-green hover:text-green-700 transition-colors"
                onClick={() => setShowContactModal(true)}
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
                <span className="ml-1">ফোন করুন (16910)</span>
              </span>
            </p>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl md:w-[60%] w-full mx-4 p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Icon */}
            <div className="flex items-start flex-col">
              <div className="">
                <img alt="call us" data-original-src="https://cdn.10minuteschool.com/images/skills/call-us.png" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" src="https://cdn.10minuteschool.com/images/skills/call-us.png" style={{ color: "transparent" }} />
              </div>
              <div className="flex-1 flex justify-center flex-col items-center w-full">
                <h3 className="text-[16px] font-[400] text-gray-800 mb-6">কোন জিজ্ঞাসা, সমস্যা বা পরামর্শ জানাতে ফোন করুন নিচের নাম্বারে (সকাল ৯টা - রাত ১০টা)</h3>
                <div className="block mb-6 text-2xl font-bold text-green-600">16910</div>
                <button
                  className="max-w-max bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-[16px]"
                  onClick={() => window.open('tel:16910', '_blank')}
                >
                  কল করুন: 16910
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero; 