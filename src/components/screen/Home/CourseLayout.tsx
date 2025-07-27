import React from "react";

interface CourseFeature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const CourseLayout: React.FC = () => {
  const courseFeatures: CourseFeature[] = [
    {
      icon: "🎥",
      title: "৫০+ ভিডিও লেকচার",
      description:
        "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা",
      color: "bg-green-500",
    },
    {
      icon: "📄",
      title: "৩৮টি লেকচার শিট",
      description:
        "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
      color: "bg-blue-500",
    },
    {
      icon: "📝",
      title: "রিডিং এন্ড লিসিনিং মক টেস্ট",
      description:
        "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
      color: "bg-yellow-500",
    },
    {
      icon: "🎤",
      title: "ডাউট সল্ডিং লাইভ ক্লাস",
      description:
        "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
      color: "bg-red-500",
    },
  ];

  const profileScores = [
    { score: "8.5", image: "https://cdn.10minuteschool.com/images/profiles/student1.jpg" },
    { score: "8.0", image: "https://cdn.10minuteschool.com/images/profiles/student2.jpg" },
    { score: "7.5", image: "https://cdn.10minuteschool.com/images/profiles/student3.jpg" },
    { score: "8.0", image: "https://cdn.10minuteschool.com/images/profiles/student4.jpg" },
    { score: "7.5", image: "https://cdn.10minuteschool.com/images/profiles/student5.jpg" },
    { score: "8.5", image: "https://cdn.10minuteschool.com/images/profiles/student6.jpg" },
    { score: "7.0", image: "https://cdn.10minuteschool.com/images/profiles/student7.jpg" },
    { score: "8.0", image: "https://cdn.10minuteschool.com/images/profiles/student8.jpg" },
    { score: "7.5", image: "https://cdn.10minuteschool.com/images/profiles/student9.jpg" },
    { score: "8.0", image: "https://cdn.10minuteschool.com/images/profiles/student10.jpg" },
    { score: "7.5", image: "https://cdn.10minuteschool.com/images/profiles/student11.jpg" },
    { score: "8.5", image: "https://cdn.10minuteschool.com/images/profiles/student12.jpg" },
  ];

  return (
    <div className="">
      {/* Course Layout Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-4">
          কোর্সটি যেভাবে সাজানো হয়েছে
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800 rounded-lg p-6">
          {courseFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-white"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center text-white text-xl flex-shrink-0`}
                >
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free PDF Section */}
      <div className="bg-black rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⭐</span>
            <h3 className="text-xl font-bold text-white">Free PDF</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Content */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              IELTS Confirm 7+ Score (Guideline)
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে।
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              ফ্রি PDF Download করুন
            </button>
          </div>

          {/* Right Side - Profile Grid */}
          <div>
            <img src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout; 