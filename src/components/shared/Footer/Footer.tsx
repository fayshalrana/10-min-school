import React from "react";
import logo from "../../../assets/images/10mslogo.svg";

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
    { name: "Facebook", icon: "https://cdn.10minuteschool.com/images/facebook_1695730910971.png", url: "https://www.facebook.com/10minuteschool/" },
    { name: "Instagram", icon: "https://cdn.10minuteschool.com/images/instagram_1695731442397.png", url: "https://www.instagram.com/10ms_insta/" },
    { name: "LinkedIn", icon: "https://cdn.10minuteschool.com/images/linkedin_1695731507042.png", url: "https://www.linkedin.com/company/10ms/" },
    { name: "YouTube", icon: "https://cdn.10minuteschool.com/images/youtube_1695731538726.png", url: "https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw" },
    { name: "TikTok", icon: "https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png", url: "https://www.tiktok.com/@10minuteschool?lang=en" }
  ];

  return (
    <footer className="bg-white text-gray-800 pt-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col pt-12 md:flex-row  md:border-[#E4E4E4] ">
          
          {/* Left Section - Logo and Mobile App Download */}
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start mx-lg:mb-7 mx-lg:mr-6">
            {/* Logo */}
            <div className="mb-4">
              <img src={logo} alt="10 Minute School" className="h-8" />
            </div>
            
            {/* Download Text */}
            <p className="mb-[14px] text-base font-semibold md:font-medium">Download Our Mobile App</p>
            
            {/* App Store Buttons */}
            <div className="flex gap-2">
              <a href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool&pli=1" target="_blank" className="w-full rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
                <img src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png" alt="google play" />
              </a>
              
              <a href="https://apps.apple.com/us/app/10-minute-school/id1577061772" target="_blank" className="w-full rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors">
              <img src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png" alt="ios download" />
              </a>
            </div>
          </div>

          {/* Middle Sections */}
          <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none mx-lg:mx-0 mx-lg:border-b mx-lg:border-[#E4E4E4]">
            <div className="flex justify-center w-full max-w-sm">
            {/* Company Links */}
            <div className="w-1/2 mr-4">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold text-black">Company</h3>
              <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Others Links */}
            <div className="w-1/2">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold text-black">Others</h3>
              <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                {otherLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="mb-2 text-sm font-medium hover:text-green-600 md:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>

          {/* Right Section - Contact & Social Media */}
          <div className="flex flex-col w-full ml-0 md:ml-4">
            <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold text-black">Keep up with us at</h3>
            
            {/* Contact Information */}
            <div className="flex flex-col gap-4 mb-4">
              <div className="text-base font-normal">
                <span className="text-black">Call Us: </span>
                <span className="text-green-600">16910</span>
                <span className="text-black"> (24×7)</span>
              </div>
              <div className="text-base font-normal">
                <span className="text-black">whatsapp: </span>
                <a href="https://api.whatsapp.com/send?phone=+8801896016252&text=I%20need%20your%20assistance" className="text-green-600">+8801896016252</a>
                <span className="text-black"> (24×7)</span>
              </div>
              <div className="text-base font-normal">
                <span className="text-black">Outside Bangladesh: </span>
                <a href="tel:+8809610916910" className="text-green-600">+880 9610916910</a>
              </div>
              <div className="text-base font-normal">
                <span className="text-black">Email Us: </span>
                <a href="mailto:support@10minuteschool.com" className="text-green-600">support@10minuteschool.com</a>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
              {socialMediaIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-[33px] h-[33px]"
                  title={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-full h-full" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pb-5 text-center">
          <div className="text-center">
            <p className="text-xs font-normal text-gray-600 md:text-sm">
              2015 - 2025 Copyright © 10 Minute School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 