import React from "react";

interface ContentItemProps {
  id: string;
  type: 'video' | 'document';
  title: string;
  isFree: boolean;
  icon: 'green' | 'gray';
  onClick: (item: ContentItemProps) => void;
}

const ContentItem: React.FC<ContentItemProps> = ({
  id,
  type,
  title,
  isFree,
  icon,
  onClick
}) => {
  const handleClick = (): void => {
    onClick({ id, type, title, isFree, icon, onClick });
  };

  return (
    <div
      className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded"
      onClick={handleClick}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            icon === "green" ? "bg-green-500" : "bg-gray-400"
          }`}
        >
          {type === "video" ? (
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          )}
        </div>
        <span className="text-gray-700 text-sm">{title}</span>
      </div>
      {isFree && (
        <span className="text-green-600 text-sm font-medium">
          ফ্রি দেখুন
        </span>
      )}
    </div>
  );
};

export default ContentItem; 