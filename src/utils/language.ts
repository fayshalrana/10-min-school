import { useState, useEffect } from 'react';

// Language utility functions

export const getCurrentLanguage = (): string => {
  // Check URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  
  if (langParam && (langParam === 'en' || langParam === 'bn')) {
    return langParam;
  }
  
  // Check localStorage for saved preference
  const savedLang = localStorage.getItem('preferred-language');
  if (savedLang && (savedLang === 'en' || savedLang === 'bn')) {
    return savedLang;
  }
  
  // Default to Bengali
  return 'bn';
};

export const setLanguage = (language: 'en' | 'bn'): void => {
  localStorage.setItem('preferred-language', language);
  
  // Update URL parameter
  const url = new URL(window.location.href);
  url.searchParams.set('lang', language);
  window.history.replaceState({}, '', url.toString());
};

export const useLanguage = () => {
  const [language, setLanguageState] = useState<'en' | 'bn'>(getCurrentLanguage() as 'en' | 'bn');
  
  // Listen for language changes from other components
  useEffect(() => {
    const handleStorageChange = () => {
      const newLanguage = getCurrentLanguage() as 'en' | 'bn';
      setLanguageState(newLanguage);
    };

    // Listen for storage events (when language changes in other tabs/windows)
    window.addEventListener('storage', handleStorageChange);
    
    // Also check for URL changes
    const handleUrlChange = () => {
      const newLanguage = getCurrentLanguage() as 'en' | 'bn';
      setLanguageState(newLanguage);
    };
    
    window.addEventListener('popstate', handleUrlChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);
  
  const changeLanguage = (newLanguage: 'en' | 'bn') => {
    setLanguage(newLanguage);
    setLanguageState(newLanguage);
    
    // Force a page reload to ensure all components update
    window.location.reload();
  };
  
  return { language, changeLanguage };
}; 