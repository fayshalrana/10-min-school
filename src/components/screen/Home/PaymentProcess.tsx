import React from "react";

const PaymentProcess: React.FC = () => {
  const handleVideoClick = (): void => {
    console.log("Payment process video clicked");
    // Handle video click functionality here
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Payment process
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-700 text-sm leading-relaxed">
          কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
          <button
            onClick={handleVideoClick}
            className="text-green-600 underline hover:text-green-700 transition-colors cursor-pointer"
          >
            এই ভিডিওটি দেখুন
          </button>
        </p>
      </div>
    </div>
  );
};

export default PaymentProcess; 