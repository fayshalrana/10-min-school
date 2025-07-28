import React, { useEffect } from 'react';
import { ModalProps } from '../../../types';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children
}) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="h-full flex flex-col">
          {/* Close Button */}
          <div className="absolute top-4 left-4 z-10">
            <button
              onClick={onClose}
              className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-6 pt-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 