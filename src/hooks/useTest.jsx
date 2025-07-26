import { useState, useEffect } from 'react';

// Mock data as fallback when API is unavailable
const mockData = {
  slug: "ielts-course",
  id: 153,
  title: "IELTS Course by Munzereen Shahid",
  description: "<p class=\"tenms__paragraph\" dir=\"ltr\"><span style=\"white-space: pre-wrap;\">Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS Course-এ। </span></p>",
  platform: "skills",
  type: "regular",
  modality: "recorded",
  media: [
    {
      name: "preview_gallery",
      resource_type: "video",
      resource_value: "zrlYnaZftEQ",
      thumbnail_url: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
    },
    {
      name: "preview_gallery",
      resource_type: "image",
      resource_value: "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png",
      thumbnail_url: ""
    },
    {
      name: "preview_gallery",
      resource_type: "image",
      resource_value: "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726736040872.png",
      thumbnail_url: ""
    },
    {
      name: "preview_gallery",
      resource_type: "video",
      resource_value: "30y-wlDtIIQ",
      thumbnail_url: "https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg"
    },
    {
      name: "preview_gallery",
      resource_type: "video",
      resource_value: "QBz8FX4GE_w",
      thumbnail_url: "https://cdn.10minuteschool.com/images/catalog/media/QBz8FX4GE_w-HD_1718880944063.jpg"
    },
    {
      name: "preview_gallery",
      resource_type: "video",
      resource_value: "AvB2ibYd1z4",
      thumbnail_url: "https://cdn.10minuteschool.com/images/catalog/media/AvB2ibYd1z4-HD_1707647843136.jpg"
    }
  ],
  checklist: [
    {
      color: "black",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png",
      id: "meta3gpFEyRTlx1719741712652",
      list_page_visibility: true,
      text: "কোর্সটি করছেন ৩৩০০৭ জন"
    },
    {
      color: "black",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png",
      id: "metaW60s3m9lX91719741712652",
      list_page_visibility: false,
      text: "সময় লাগবে ৫০ ঘন্টা"
    },
    {
      color: "black",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png",
      id: "metaYomaaEg9di1719741712652",
      list_page_visibility: true,
      text: "৫৪টি ভিডিও"
    },
    {
      color: "black",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png",
      id: "metaZvIBodx5Je1719741712652",
      list_page_visibility: false,
      text: "১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট"
    },
    {
      color: "black",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png",
      id: "meta2NKE6jMSnS1719741712652",
      list_page_visibility: false,
      text: "৩৮টি লেকচার শিট"
    },
    {
      color: "black",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png",
      id: "metaLSriyfxmRY1719741712652",
      list_page_visibility: false,
      text: "২৫টি ভিডিও লেকচার"
    },
    {
      color: "black",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png",
      id: "metaqrLTwuKef21719741712652",
      list_page_visibility: false,
      text: "১টি ফ্রি হার্ডকপি বই"
    },
    {
      color: "black",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png",
      id: "metaFmcFSchT0n1719741712652",
      list_page_visibility: false,
      text: "ফেসবুক সাপোর্ট গ্রুপ"
    },
    {
      color: "black",
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png",
      id: "metaxhvoNDbC301719741712652",
      list_page_visibility: false,
      text: "কোর্সের মেয়াদ আজীবন"
    }
  ],
  cta_text: {
    name: "কোর্সটি কিনুন",
    value: "enroll"
  }
};

// Custom hook to fetch IELTS course data
export const useIELTSCourse = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useMockData, setUseMockData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('https://api.10minuteschool.com/d.iscovery-service/api/v1/products/ielts-course');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.code === 200) {
          setData(result.data);
          setUseMockData(false);
        } else {
          throw new Error(result.message || 'Failed to fetch data');
        }
      } catch (err) {
        console.warn('API Error, using mock data:', err.message);
        setError(err.message);
        setData(mockData);
        setUseMockData(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { 
    data, 
    loading, 
    error, 
    useMockData,
    isMockData: useMockData 
  };
};

// Export for backward compatibility
export default useIELTSCourse;
