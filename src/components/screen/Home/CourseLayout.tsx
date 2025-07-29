import React from "react";
import { useIELTSCourse } from "../../../hooks/useTest";
import { SectionData } from "../../../types";
import { Button } from "@/components/shared";

interface CourseFeature {
  icon: string;
  title: string;
  subtitle: string;
  id: string;
}

const CourseLayout: React.FC = () => {
  const { data, loading } = useIELTSCourse();

  if (loading) {
    return (
      <div className="">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            কোর্সটি যেভাবে সাজানো হয়েছে
          </h2>
          <div className="flex items-center justify-center p-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  // Extract features data from API
  const featuresSection = (data as any).sections?.find((section: SectionData) => section.type === "features");
  const courseFeatures: CourseFeature[] = featuresSection?.values || [];


  return (
    <div className="">
      {/* Course Layout Section */}
      <div className="mb-8">
        <h2 className="mb-4">
          How the course is laid out
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800 rounded-lg p-6">
          {courseFeatures.map((feature, index) => (
            <div
              key={feature.id || index}
              className="text-white"
            >
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center text-white text-xl flex-shrink-0">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="text-lg hidden">📚</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free PDF Section */}
      <div className="rounded-lg p-6" style={{ backgroundImage: "url('https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621183218.png" alt="" style={{ height: "40px" }} />
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
            <Button
              variant="primary"
              size="md"
              className="max-w-max"
            >
               ফ্রি PDF Download করুন
            </Button>
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