import React, { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content?: React.ReactNode;
  isExpanded?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  onItemClick?: (item: AccordionItem) => void;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  onItemClick, 
  className = "" 
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(items.filter(item => item.isExpanded).map(item => item.id))
  );

  const toggleItem = (itemId: string): void => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(itemId)) {
      newExpandedItems.delete(itemId);
    } else {
      newExpandedItems.add(itemId);
    }
    setExpandedItems(newExpandedItems);
  };

  const handleItemClick = (item: AccordionItem): void => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <div className={`space-y-0 ${className}`}>
      {items.map((item, index) => (
        <div key={item.id}>
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 border-b border-gray-200"
          >
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${
                expandedItems.has(item.id) ? "rotate-180" : ""
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

          {expandedItems.has(item.id) && item.content && (
            <div className="p-4 bg-gray-50">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion; 