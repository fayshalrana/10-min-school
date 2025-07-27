import React from "react";

interface SocialMediaIcon {
  name: string;
  icon: string;
  url: string;
}

const Footer: React.FC = () => {
  const companyLinks: string[] = [
    "Career / Recruitment",
    "Join as a Teacher", 
    "Join as an Affiliate",
    "Privacy policy",
    "Refund policy",
    "Terms & Conditions"
  ];

  const otherLinks: string[] = [
    "Blog",
    "Book Store", 
    "Free Notes & Guides",
    "Job Preparation Courses",
    "Verify Certificate",
    "Free Download"
  ];

  const socialMediaIcons: SocialMediaIcon[] = [
    { name: "Facebook", icon: "f", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "LinkedIn", icon: "in", url: "#" },
    { name: "YouTube", icon: "▶", url: "#" },
    { name: "TikTok", icon: "♪", url: "#" }
  ];

  return (
    <footer className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Left Section - Mobile App Download */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm relative">
                  <span>10</span>
                  <div className="absolute inset-0 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                </div>
                <span className="text-xl font-bold text-gray-800">MINUTE SCHOOL</span>
              </div>
            </div>
            
            {/* Download Text */}
            <p className="text-gray-600 mb-4">Download Our Mobile App</p>
            
            {/* App Store Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span className="text-sm font-medium">GET IT ON Google Play</span>
              </button>
              
              <button className="w-full bg-black text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <span className="text-sm font-medium">Download on the App Store</span>
              </button>
            </div>
          </div>

          {/* Middle Sections */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Company Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Others Links */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Others</h3>
              <ul className="space-y-2">
                {otherLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-green-600 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialMediaIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-colors"
                  title={social.name}
                >
                  <span className="text-sm font-medium">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 10 Minute School. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 