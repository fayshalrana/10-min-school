import React, { useState } from "react";
import Modal from "../../shared/Modal/Modal";
import Accordion from "../../shared/Accordion/Accordion";
import ContentItem from "../../shared/ContentItem/ContentItem";

interface CourseItem {
  id: string;
  type: 'video' | 'document';
  title: string;
  isFree: boolean;
  icon: 'green' | 'gray';
}

interface CourseSection {
  id: string;
  title: string;
  items: CourseItem[];
  isExpanded: boolean;
}

const ContentPreview: React.FC = () => {
  const [showAllContent, setShowAllContent] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<CourseItem | null>(null);
  const [contactInfo, setContactInfo] = useState<string>("");
  
  const baseSections: CourseSection[] = [
    {
      id: "introduction",
      title: "Introduction",
      isExpanded: true,
      items: [
        {
          id: "intro-1",
          type: "video",
          title: "Video: IELTS: Introduction",
          isFree: true,
          icon: "green"
        },
        {
          id: "intro-2",
          type: "video",
          title: "Video: IELTS: Overview",
          isFree: true,
          icon: "green"
        },
        {
          id: "intro-3",
          type: "video",
          title: "Video: How to Prepare for IELTS?",
          isFree: true,
          icon: "green"
        },
        {
          id: "intro-4",
          type: "video",
          title: "Video: Making a Daily Routine",
          isFree: true,
          icon: "green"
        },
        {
          id: "intro-5",
          type: "video",
          title: "Video: Different Sentence Structures to Improve Writing",
          isFree: false,
          icon: "gray"
        },
        {
          id: "intro-6",
          type: "document",
          title: "IELTS General Facts",
          isFree: false,
          icon: "gray"
        },
        {
          id: "intro-7",
          type: "document",
          title: "IELTS Vocabulary",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "support-group",
      title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
      isExpanded: false,
      items: []
    },
    {
      id: "academic-reading",
      title: "Academic Reading",
      isExpanded: false,
      items: []
    },
    {
      id: "academic-reading-mock",
      title: "Academic Reading Mock Test",
      isExpanded: false,
      items: []
    },
    {
      id: "listening",
      title: "Listening",
      isExpanded: false,
      items: []
    }
  ];

  const additionalSections: CourseSection[] = [
    {
      id: "listening-mock",
      title: "Listening Mock Test",
      isExpanded: false,
      items: []
    },
    {
      id: "academic-writing",
      title: "Academic Writing",
      isExpanded: false,
      items: []
    },
    {
      id: "speaking",
      title: "Speaking",
      isExpanded: false,
      items: []
    },
    {
      id: "general-training-reading",
      title: "General Training Reading",
      isExpanded: false,
      items: []
    },
    {
      id: "general-reading-mock",
      title: "General Reading Mock Test",
      isExpanded: false,
      items: []
    },
    {
      id: "general-training-writing",
      title: "General Training Writing",
      isExpanded: false,
      items: []
    },
    {
      id: "zoom-live-class",
      title: "ZOOM Live Class",
      isExpanded: false,
      items: []
    },
    {
      id: "ielts-paper-templates",
      title: "IELTS Paper Based Templates",
      isExpanded: false,
      items: []
    },
    {
      id: "ielts-mock-test-pdf",
      title: "IELTS Mock Test (PDF Questions)",
      isExpanded: false,
      items: []
    }
  ];

  const [sections, setSections] = useState<CourseSection[]>(baseSections);

  const toggleAllContent = (): void => {
    if (showAllContent) {
      // Show less - go back to base sections
      setSections(baseSections);
      setShowAllContent(false);
    } else {
      // Show more - add additional sections
      setSections([...baseSections, ...additionalSections]);
      setShowAllContent(true);
    }
  };

  const handleItemClick = (item: CourseItem): void => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact info submitted:", contactInfo);
    console.log("Selected item:", selectedItem);
    setShowModal(false);
    setContactInfo("");
    setSelectedItem(null);
  };

  const closeModal = (): void => {
    setShowModal(false);
    setContactInfo("");
    setSelectedItem(null);
  };

  // Convert sections to accordion items
  const accordionItems = sections.map(section => ({
    id: section.id,
    title: section.title,
    isExpanded: section.isExpanded,
    content: section.items.length > 0 ? (
      <div className="space-y-3">
        {section.items.map((item) => (
          <ContentItem
            key={item.id}
            id={item.id}
            type={item.type}
            title={item.title}
            isFree={item.isFree}
            icon={item.icon}
            onClick={handleItemClick}
          />
        ))}
      </div>
    ) : undefined
  }));

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Content preview
      </h2>

      <Accordion items={accordionItems} />

      {/* Bottom Button */}
      <div className="mt-6 text-center">
        <button 
          onClick={toggleAllContent}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors flex items-center justify-center mx-auto space-x-2"
        >
          <span>{showAllContent ? "কম দেখুন" : "সকল কন্টেন্ট"}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              showAllContent ? "rotate-180" : ""
            }`}
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

      {/* Contact Modal */}
      <Modal isOpen={showModal} onClose={closeModal} title="">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
            Please proceed to watch the<br />
            video by providing your mobile<br />
            number/email
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              placeholder="Mobile number/ e-mail"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
            
            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ContentPreview; 