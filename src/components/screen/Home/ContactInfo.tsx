import React from "react";

const ContactInfo: React.FC = () => {
  const handleCallClick = (): void => {
    console.log("Call button clicked");
    // Handle call functionality here
    // You can add actual phone call functionality or redirect to contact page
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        আরও কোন জিজ্ঞাসা আছে?
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <button
          onClick={handleCallClick}
          className="flex items-center justify-center space-x-3 w-full py-4 px-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
        >
          {/* Phone Icon */}
          <div className="w-6 h-6 text-green-600">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.5-6.5l2.2-2.2c.2-.3.3-.7.2-1-.3-1.2-.5-2.4-.5-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.9 0 7 3.1 7 7z"/>
            </svg>
          </div>
          
          {/* Phone Number Text */}
          <span className="text-green-600 font-bold text-lg">
            কল করুন 16910 নম্বরে
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContactInfo; 