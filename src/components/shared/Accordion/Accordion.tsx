import React, { useState } from "react";

interface AccordionItem {
  id: string;
  title: string;
  content?: React.ReactNode;
  isExpanded?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean; // New prop to control accordion behavior
}

const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  className = "",
  allowMultiple = false // Default to accordion behavior (only one open at a time)
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(items.filter(item => item.isExpanded).map(item => item.id))
  );

  const toggleItem = (itemId: string): void => {
    const newExpandedItems = new Set(expandedItems);
    
    if (allowMultiple) {
      // Allow multiple items to be expanded
      if (newExpandedItems.has(itemId)) {
        newExpandedItems.delete(itemId);
      } else {
        newExpandedItems.add(itemId);
      }
    } else {
      // Accordion behavior: only one item can be expanded at a time
      if (newExpandedItems.has(itemId)) {
        // If clicking the same item, close it
        newExpandedItems.delete(itemId);
      } else {
        // If clicking a different item, close all others and open this one
        newExpandedItems.clear();
        newExpandedItems.add(itemId);
      }
    }
    
    setExpandedItems(newExpandedItems);
  };

  return (
    <div className={`space-y-0 ${className}`}>
      {items.map((item, index) => (
        <div key={item.id}>
          <button
            onClick={() => toggleItem(item.id)}
            className={`w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 ${
              index === items.length - 1 ? '' : 'border-b border-gray-200'
            }`}
          >
            <h3 className="text-sm font-semibold md:text-base">{item.title}</h3>
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
            <div className="p-4 bg-gray-50 text-[16px] leading-[24px] text-[#111827]">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;