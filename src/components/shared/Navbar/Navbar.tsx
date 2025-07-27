import React, { useState } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  hasDropdown: boolean;
  dropdownItems: Array<{
    icon: string;
    text: string;
  }>;
}

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Navigation items with dropdown data
  const navItems: NavigationItem[] = [
    {
      id: 'class',
      label: 'ক্লাস ৬-১২',
      hasDropdown: true,
      dropdownItems: [
        { icon: '📚', text: 'ক্লাস ৬' },
        { icon: '📚', text: 'ক্লাস ৭' },
        { icon: '📚', text: 'ক্লাস ৮' },
        { icon: '📚', text: 'ক্লাস ৯' },
        { icon: '📚', text: 'ক্লাস ১০' },
        { icon: '📚', text: 'ক্লাস ১১' },
        { icon: '📚', text: 'ক্লাস ১২' },
      ]
    },
    {
      id: 'skills',
      label: 'স্কিলস',
      hasDropdown: true,
      dropdownItems: [
        { icon: '🔷', text: 'সকল কোর্সসমূহ' },
        { icon: '💬', text: 'ভাষা শিক্ষা' },
        { icon: '💰', text: 'ফ্রিল্যান্সিং' },
        { icon: '🎁', text: 'বান্ডেল' },
        { icon: '🔧', text: 'স্কিলস এন্ড আইটি' },
        { icon: '📏', text: 'ডিজাইন এন্ড ক্রিয়েটিভ' },
        { icon: '⭐', text: 'ক্যারিয়ার রেডিনেস' },
        { icon: '👶', text: 'কিডস কোর্সসমূহ' },
        { icon: '👔', text: 'প্রফেশনাল কোর্সসমূহ' },
        { icon: '🆓', text: 'ফ্রি কোর্সসমূহ' },
      ]
    },
    {
      id: 'admission',
      label: 'ভর্তি পরীক্ষা',
      hasDropdown: true,
      dropdownItems: [
        { icon: '📝', text: 'মেডিকেল ভর্তি' },
        { icon: '📝', text: 'ইঞ্জিনিয়ারিং ভর্তি' },
        { icon: '📝', text: 'বিশ্ববিদ্যালয় ভর্তি' },
      ]
    },
    {
      id: 'online',
      label: 'অনলাইন ব্যাচ',
      hasDropdown: true,
      dropdownItems: [
        { icon: '💻', text: 'লাইভ ক্লাস' },
        { icon: '📱', text: 'মোবাইল অ্যাপ' },
        { icon: '🖥️', text: 'ওয়েব অ্যাপ' },
      ]
    },
    {
      id: 'english',
      label: 'ইংলিশ সেন্টার',
      hasDropdown: true,
      dropdownItems: [
        { icon: '🇺🇸', text: 'ইংরেজি গ্রামার' },
        { icon: '🗣️', text: 'স্পিকিং প্র্যাকটিস' },
        { icon: '📖', text: 'রিডিং কম্প্রিহেনশন' },
      ]
    },
    {
      id: 'more',
      label: 'আরো',
      hasDropdown: true,
      dropdownItems: [
        { icon: '📰', text: 'ব্লগ' },
        { icon: '📞', text: 'যোগাযোগ' },
        { icon: '❓', text: 'সাহায্য' },
      ]
    }
  ];

  const handleMouseEnter = (itemId: string): void => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = (): void => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <img src="/src/assets/images/10mslogo.svg" alt="10 Minute School Logo" className="h-8 w-auto" />
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <div className="ml-2 flex space-x-1">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              <input
                type="text"
                placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div 
                key={item.id} 
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeDropdown === item.id
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.id && item.hasDropdown && (
                  <div className="absolute z-50 top-full mt-1 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span className="mr-3 text-lg">{dropdownItem.icon}</span>
                          <span>{dropdownItem.text}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Elements */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md text-sm">
              <span className="text-gray-700">অA</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-700">EN</span>
            </button>

            {/* Phone Number */}
            <div className="flex items-center space-x-1">
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-green-600 font-medium">16910</span>
            </div>

            {/* Login Button */}
            <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
              লগ-ইন
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 