import { useState, useEffect } from 'react';

interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  media: MediaItem[];
  checklist: ChecklistItem[];
}

// Mock data as fallback when API is unavailable
const mockData: CourseData = {
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
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/certificate.png",
      id: "metaLSriyfxmRY1719741712653",
      list_page_visibility: false,
      text: "১টি সার্টিফিকেট"
    }
  ]
};

interface UseIELTSCourseReturn {
  data: CourseData | null;
  loading: boolean;
  error: string | null;
  isMockData: boolean;
}

export const useIELTSCourse = (): UseIELTSCourseReturn => {
  const [data, setData] = useState<CourseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isMockData, setIsMockData] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to fetch from API first
        const response = await fetch('https://api.10minuteschool.com/api/v2/courses/ielts-course');
        
        if (response.ok) {
          const apiData = await response.json();
          setData(apiData);
          setIsMockData(false);
        } else {
          // Fallback to mock data
          setData(mockData);
          setIsMockData(true);
        }
      } catch (err) {
        // Fallback to mock data on error
        setData(mockData);
        setIsMockData(true);
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error, isMockData };
}; 