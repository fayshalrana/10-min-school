import React, { useState } from "react";
import Accordion from "../../shared/Accordion/Accordion";

const FAQ: React.FC = () => {
  const [showAllFAQs, setShowAllFAQs] = useState<boolean>(false);

  const allFaqItems = [
    {
      id: "start-course",
      title: "How do I start after purchasing the course?",
      isExpanded: true,
      content: (
        <div className="space-y-3">
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Click on the 'Enroll button"</li>
            <li>Click on the "Enroll Now" button</li>
            <li>Log in using your phone number or email</li>
            <li>Once logged in, click on the "Proceed" button</li>
            <li>
              Choose your preferred payment method and click on the " Payment" button
              <div className="ml-6 mt-2">
                <p className="font-medium mb-2">For payment via Bkash:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Select "Bkash" from the payment options. You can save your Bkash number for future use if you wish.</li>
                  <li>Click on the "Make Payment" button. You will be redirected to the Bkash payment gateway</li>
                  <li>Confirm with your Bkash number and PIN, your payment is fully secure</li>
                  <li>To learn more about Bkash payment, you can watch this video: <a href="https://youtu.be/5wfn60rmWX4" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://youtu.be/5wfn60rmWX4</a></li>
                </ul>
              </div>
            </li>
            <li>After the payment is completed, the course will appear in your account in the 'My Courses' section.</li>
            <li>All the courses you have enrolled in will be available here, provided you are logged in</li>
            <li>For more information, watch this video: <a href="https://youtu.be/eDrXWrI-SOU" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://youtu.be/eDrXWrI-SOU</a></li>
          </ol>
        </div>
      )
    },
    {
      id: "technical-support",
      title: "Where should I contact for any technical issues (forgot password, change password, course refund, etc.)?",
      isExpanded: false,
      content: (
        <div className="text-sm space-y-2">
          <p>For any technical issues, you can contact our support team through the following channels:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Email: support@10minuteschool.com</li>
            <li>Phone: 16910</li>
            <li>Live chat: Available on our website</li>
            <li>WhatsApp: +880 1611-000000</li>
          </ul>
          <p className="mt-3">Our support team is available 24/7 to assist you with any issues.</p>
        </div>
      )
    },
    {
      id: "course-type",
      title: "Is this course designed for Academic or General IELTS?",
      isExpanded: false,
      content: (
        <div className="text-sm space-y-2">
          <p>This course is designed to cover both Academic and General Training IELTS modules. The course includes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Comprehensive coverage of both Academic and General Training formats</li>
            <li>Specific strategies for each module (Reading, Writing, Listening, Speaking)</li>
            <li>Practice materials for both test types</li>
            <li>Mock tests for both Academic and General Training</li>
          </ul>
          <p className="mt-3">You can choose which format to focus on based on your specific needs and goals.</p>
        </div>
      )
    },
    {
      id: "online-benefits",
      title: "What are the benefits of studying online with you instead of enrolling offline elsewhere?",
      isExpanded: false,
      content: (
        <div className="text-sm space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <li>Flexible learning schedule - study at your own pace</li>
            <li>Access to course materials 24/7</li>
            <li>Cost-effective compared to traditional classroom courses</li>
            <li>Expert instructors with proven track records</li>
            <li>Comprehensive study materials and practice tests</li>
            <li>Mobile-friendly platform for learning on the go</li>
            <li>Regular updates and new content additions</li>
            <li>Community support and peer learning opportunities</li>
          </ul>
        </div>
      )
    },
    {
      id: "live-classes",
      title: "Are live classes available?",
      isExpanded: false,
      content: (
        <div className="text-sm space-y-2">
          <p>Yes, we offer live classes as part of our comprehensive IELTS preparation program:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Weekly live doubt-solving sessions</li>
            <li>Interactive Q&A sessions with expert instructors</li>
            <li>Real-time feedback on your progress</li>
            <li>Group discussions and peer learning</li>
            <li>Specialized sessions for each IELTS module</li>
          </ul>
          <p className="mt-3">Live class schedules are announced in advance, and recordings are available for those who cannot attend.</p>
        </div>
      )
    },
    {
      id: "course-validity",
      title: "What is the validity of the course?",
      isExpanded: false,
      content: (
        <div className="text-sm space-y-2">
          <p>The duration of any Free or Paid course on 10 Minute School Skills is lifetime.</p>
        </div>
      )
    },
    {
      id: "course-access",
      title: "How long can I access the course materials?",
      isExpanded: false,
      content: (
        <div className="text-sm space-y-2">
          <p>Once you enroll in the course, you will have lifetime access to all course materials, including:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>All video lectures</li>
            <li>Study materials and practice tests</li>
            <li>Mock exams and assessments</li>
            <li>Updated content and new materials</li>
          </ul>
        </div>
      )
    },
    {
      id: "certificate",
      title: "Do I get a certificate after completing the course?",
      isExpanded: false,
      content: (
        <div className="text-sm space-y-2">
          <p>Yes, you will receive a certificate of completion after finishing the course. The certificate includes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Your name and completion date</li>
            <li>Course title and duration</li>
            <li>Instructor signature</li>
            <li>Verifiable certificate ID</li>
          </ul>
        </div>
      )
    },
    {
      id: "refund-policy",
      title: "What is your refund policy?",
      isExpanded: false,
      content: (
        <div className="text-sm space-y-2">
          <p>We offer a 7-day money-back guarantee for all our courses. If you're not satisfied with the course within 7 days of purchase, you can request a full refund.</p>
          <p className="mt-2">To request a refund, please contact our support team with your order details.</p>
        </div>
      )
    }
  ];

  // Show only first 3 items initially, or all items if showAllFAQs is true
  const displayedFaqItems = showAllFAQs ? allFaqItems : allFaqItems.slice(0, 3);

  const handleSeeAll = (): void => {
    setShowAllFAQs(!showAllFAQs);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Frequently Ask Questions
      </h2>
      
      <div className="bg-white rounded-lg shadow-sm border">
        <Accordion items={displayedFaqItems} />
        
        {/* See All/Less Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleSeeAll}
            className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <span>{showAllFAQs ? "See less" : "See all"}</span>
            <svg
              className={`w-4 h-4 transition-transform ${showAllFAQs ? "rotate-180" : ""}`}
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
      </div>
    </div>
  );
};

export default FAQ; 