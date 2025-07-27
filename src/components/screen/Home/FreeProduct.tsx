import React from "react";

const FreeProduct: React.FC = () => {
  const productFeatures = [
    "360 পৃষ্ঠা",
    "প্রিমিয়াম হার্ডকপি",
    "ফ্রি ডেলিভারি",
    "৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি"
  ];

  const bookSections = [
    "Listening",
    "Speaking", 
    "Writing",
    "Reading"
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Free items with this products-
      </h2>
      
      <div className="bg-gradient-to-r from-purple-900 to-red-600 rounded-lg p-6 shadow-lg border border-red-400">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Product Details */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">
              ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
            </h3>
            
            <div className="space-y-2">
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Book Cover */}
          <div className="flex justify-center">
            <div className="relative transform rotate-12">
              {/* Book Cover */}
              <div className="w-48 h-64 bg-gray-800 rounded-lg shadow-2xl relative overflow-hidden">
                {/* Hardcopy Badge */}
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                  HARDCOPY BOOK
                </div>
                
                {/* Book Title */}
                <div className="absolute top-12 left-4 right-4">
                  <h4 className="text-white font-bold text-lg leading-tight">
                    ঘরে বসে IELTS প্রস্তুতি
                  </h4>
                </div>
                
                {/* Book Sections */}
                <div className="absolute top-24 left-4 space-y-1">
                  {bookSections.map((section, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <span className="text-white text-xs">{section}</span>
                    </div>
                  ))}
                </div>
                
                {/* Instructor Photo Placeholder */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Book Spine */}
              <div className="absolute -left-2 top-0 w-4 h-64 bg-gray-900 rounded-l-lg flex items-center justify-center">
                <div className="text-white text-xs font-bold transform -rotate-90">
                  IELTS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeProduct; 