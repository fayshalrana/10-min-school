import { useState, useEffect } from 'react';
import { CourseData } from '../types';

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
  sections: [
    {
      type: "instructors",
      name: "কোর্স ইন্সট্রাক্টর",
      description: "",
      bg_color: "",
      order_idx: 2,
      values: [
        {
          name: "Munzereen Shahid",
          image: "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg",
          description: "<p>MSc (English), University of Oxford (UK);<br>BA, MA (English), University of Dhaka;<br>IELTS: 8.5</p> <p>&nbsp;</p>",
          has_instructor_page: true,
          slug: "munzereen-shahid",
          short_description: "Course Instructor"
        }
      ]
    },
    {
      type: "features",
      name: "কোর্সটি যেভাবে সাজানো হয়েছে",
      description: "",
      bg_color: "",
      order_idx: 3,
      values: [
        {
          icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png",
          id: "metacxqDP9WTB51719742426346",
          subtitle: "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা",
          title: "৫০+ ভিডিও লেকচার"
        },
        {
          icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png",
          id: "metaZ37U4EXzgl1719742426346",
          subtitle: "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
          title: "৩৮টি লেকচার শিট"
        },
        {
          icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png",
          id: "metaGfpFv7gDvn1719742426346",
          subtitle: "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
          title: "রিডিং এন্ড লিসিনিং মক টেস্ট"
        },
        {
          icon: "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png",
          id: "metaoLqLHhKWF91719742426346",
          subtitle: "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
          title: "ডাউট সল্ভিং লাইভ ক্লাস"
        }
      ]
    },
    {
      type: "testimonials",
      name: "শিক্ষার্থীরা যা বলছে",
      description: "",
      bg_color: "",
      order_idx: 12,
      values: [
        {
          description: "IELTS Score: 8.5",
          id: "metaChPiCPV4q51727178095164",
          name: "Junaed Bin Samad",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_39_1746355488882.png",
          testimonial: "IELTS Score: 8.5",
          thumb: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/AvB2ibYd1z4-HD_1727177955435.jpg",
          video_type: "",
          video_url: "AvB2ibYd1z4"
        },
        {
          description: "IELTS Score: 8",
          id: "metahap6qbGVFX1727178095164",
          name: "Shah Mohammad Rafi",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_45_1746359412430.png",
          testimonial: "IELTS Score: 8",
          thumb: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/KcwncFcSIOY-HD_1727178045711.jpg",
          video_type: "",
          video_url: "KcwncFcSIOY"
        },
        {
          description: "IELTS Score: 8",
          id: "metaSOA0KvU74O1719742425625",
          name: "Tisha Farhana",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_37_1746355194606.png",
          testimonial: "প্রথম ভিডিওটা দেখেই বুঝেছিলাম যে কোর্সটা বেশ গোছানো এবং অন্যান্য কোর্সগুলোর মতন Advanced English-এ না পড়িয়ে মুনজেরিন আপু বাংলায় সবকিছু সুন্দর করে বুঝিয়েছেন। রিডিং পার্ট-এ প্র্যাক্টিসে-এর সময় ৪-৫-এর বেশি স্কোর তুলতে পারতাম না এবং এই কোর্সের রিডিং পার্টটা করে আমি আমার IELTS-এ স্কোর ৮ পেয়েছি। নিজের মত করে প্রিপারেশন নিতে কোর্সটি অনেক হেল্প করেছে।",
          thumb: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_38_1746355189549.png",
          video_type: "",
          video_url: "b_8gi18HSXQ"
        },
        {
          description: "IELTS Score: 7",
          id: "metaxTVQJv6qct1727178095164",
          name: "Yeamin Farabi Chowdhury",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/332732673_768753970891698_6484033119477691068_n_1746353997409.jpg",
          testimonial: "IELTS Score: 7",
          thumb: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/uAQ-WjhZnl0-HD_%281%29_1727178007691.jpg",
          video_type: "",
          video_url: "uAQ-WjhZnl0"
        },
        {
          description: "IELTS Score: 7",
          id: "meta0dPt66le741727175463347",
          name: "Tanzirul Islam",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_40_1746357384466.png",
          testimonial: "Tremendous, It's really helped me a lot.",
          thumb: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_41_1746357378839.png",
          video_type: "",
          video_url: "Akmu0ooovDI"
        },
        {
          description: "IELTS Score: 7",
          id: "metaTuTM1nVBRk1746357877595",
          name: "Rahidul Haque",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_42_1746357475839.png",
          testimonial: "IELTS Score: 7",
          thumb: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/TJ7-Q7PLXBg-HD_1746357471474.jpg",
          video_type: "",
          video_url: "TJ7-Q7PLXBg"
        },
        {
          description: "IELTS Score: 8",
          id: "meta1BwDjItXAr1746357877595",
          name: "Asim Nabil",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_15_1746957495847.png",
          testimonial: "আমি অনেক রিসোর্স দেখেছিলাম, কিন্তু এই কোর্সটাই ছিল সবচেয়ে organized! 8.0 স্কোর করতে পেরেছি কারণ এখানে প্রতিটি টপিক ছিল logically arranged আর super easy to understand! Mock test আর support group দুটোই আমার preparation-এ game-changer ছিল। বিশ্বাস করতে পারিনি এতটা smooth-ভাবে প্রস্তুতি নিতে পারবো।",
          thumb: "",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 7.5",
          id: "metaEbZsMB5KE21727175463347",
          name: "Moinul Islam Mahin",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_44_1746359283855.png",
          testimonial: "আমি পুরো IELTS প্রিপারেশনটা নিয়েছি এই কোর্স থেকে—আর ফলাফল 7.5 স্কোর! Live classes, mock tests, আর Easy to understand লেসন–সবকিছুই বুঝতে সহজ ছিল। সাপোর্ট গ্রুপ আর doubt solving সেশনগুলো আমাকে অনেক সাহস দিয়েছে। এই কোর্স ছাড়া এতটা organized way-তে প্রস্তুতি নেওয়া সম্ভব হতো না।",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 7",
          id: "metait3pA7c6R31719742425625",
          name: "Md. Mushfiqul Fazal Fahim",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_14_1746957430542.png",
          testimonial: "Overview পার্ট-টা দেখেই আমি বেশ মোটিভেটেড ছিলাম। কোনো ভিডিও দেখেই আমি বোর ফিল করি নাই, আমি কন্টিনিউয়াস ভিডিওগুলো দেখেছিলাম। প্রতিটা সেগমেন্ট-ই মুনজেরিন আপু বেশ গুরুত্বের সাথে সাবলীলভাবে ব্যাখ্যা করে গেছেন। সব ধরনের প্রশ্নগুলো আপু এক্সপ্লেইন করেছেন; আমার IELTS পরীক্ষা নিয়ে যে ভয়টা কাজ করতো বেশ তাড়াতাড়ি কেটে গেছিলো। আমি আমার সময়মত অল্প কিছু দিনের মধ্যেই কোর্সটি কমপ্লিট করে IELTS পরীক্ষা দেই এবং স্কোর ৭ পেয়েছি।",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 7",
          id: "meta6bNGZy9hun1746357877595",
          name: "Ashiqur Rahman",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_43_1746357672136.png",
          testimonial: "আমি IELTS-এ 7 স্কোর করেছি। Course content, support group activities and intensive care support – সবই আমাকে অনেক হেল্প করেছে। আমার সবচেয়ে ভালো লেগেছে যেটা সেটা হলো আমি কোর্সটা করতে পেরেছি একদম আমার own convenient time এ, কারণ আমি একজন working professional.",
          thumb: "",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 7.5",
          id: "metaYenz6YEK7E1746424206025",
          name: "Lalon Sha Fakir",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_47_1746423993877.png",
          testimonial: "IELTS প্রিপারেশনে আমি একদম শুরু থেকেই এই কোর্সটাই ফলো করেছি। 7.5 স্কোর করেছি। এখানে সবকিছু ছিল খুবই easy to follow এবং well-structured! Mock test আর live classes ছিল আমার প্রিপারেশনের ফাউন্ডেশন গোড়ে দিয়েছিল। এই কোর্সটা আমার জন্য game changer ছিল।",
          thumb: "",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 7",
          id: "metaF8CGWDa8mo1746956688089",
          name: "Syed Ishtiaque Hossain",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_7_1746956620460.png",
          testimonial: "IELTS কোর্সটা ছিল আমার জীবনের টার্নিং পয়েন্ট। মুনজেরিন আপুর teaching skill আর কোর্সের easy to understand ধরনটা আমাকে অনেক হেল্প করেছে 7 স্কোর করতে। Tips and tricks আর question pattern এর example গুলো কনফিডেন্স বাড়িয়েছে।",
          thumb: "",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 7.5",
          id: "metaAJTWdgeXUe1746957525013",
          name: "Shammama Tasnim Asma",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_8_1746956999173.png",
          testimonial: "আমি শুধু এই কোর্সেই IELTS প্রস্তুতি নিয়েছি। আমার স্কোর 7.5। Mock exams-গুলো অনেক কাজে লেগেছে আমার। স্পেশালি আমি যেহেতু Computer delivered exam দিয়েছি। Live classes আর group—এই দুটোই আমার writing স্কিল বাড়াতে অনেক হেল্প করেছে।",
          thumb: "",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 6.5",
          id: "metas4wvEuSRsv1746957525013",
          name: "Nusrat Amir",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_10_1746957166722.png",
          testimonial: "মুনজেরিন আপুর এই কোর্সটা আমার IELTS প্রস্তুতিতে অনেক হেল্প করেছে। আমাকে আমার desired score 6.5 পেতে এই কোর্সটি অনেক help করেছে। এই কোর্স ও বই থেকে আমি যে vocabulary শিখেছি তা আমার আজীবন কাজে লাগবে। Live doubt solving classes আর mock tests আমার কনফিডেন্স অনেক বাড়িয়েছে।",
          thumb: "",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 6.5",
          id: "metaFYsTwuS2UZ1746957525013",
          name: "Mahathi Hasan Showrit",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_9_1746957082065.png",
          testimonial: "মুনজেরিন আপুর IELTS কোর্সটা আমার জন্য ছিল super easy to understand. এখানের ক্লাস, মক এক্সাম সবকিছুই ছিল well-prepared এবং structured. Bangla and English মিলিয়ে সাজানো স্টাডি ম্যাটেরিয়ালগুলো সহজে বুঝতে অনেক সাহায্য করেছে। সাথে বইটাও বেশ detailed ছিলো।",
          thumb: "",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 7",
          id: "metaPG9GjBGc9D1746957525013",
          name: "Istiaq Islam",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_11_1746957242368.png",
          testimonial: "IELTS প্রস্তুতিতে এই কোর্সটা ছিল আমার সবচেয়ে বড় সাপোর্ট। 7.5 স্কোর করেছি একদম নিজের pace-এ পড়াশোনা করে, কারণ কোর্সটা ছিল flexible এবং easy to understand। Mock test আর live class গুলো আমাকে পুরোটা পথে গাইড করেছে। এটা ছাড়া প্রস্তুতি কল্পনাও করতে পারতাম না।",
          thumb: "",
          video_type: "",
          video_url: ""
        },
        {
          description: "IELTS Score: 7",
          id: "metavIz1AGLLCk1746957525013",
          name: "Kashfia Mahabub",
          profile_image: "https://cdn.10minuteschool.com/images/catalog/product/testimonial/Screenshot_12_1746957311937.png",
          testimonial: "IELTS কোর্সটি ছিল আমার প্রস্তুতির মূল ভরসা। 7.5 স্কোর করতে পেরেছি কারণ সবকিছু ছিল খুব well-structured আর supportive। Mock test, live classes, আর constant guidance, সবকিছুই একসাথে আমাকে পথ দেখিয়েছে। এটা শুধু কোর্স না, confidence গড়ার একটা জার্নি।",
          thumb: "",
          video_type: "",
          video_url: ""
        }
      ]
    }
  ],
  cta_text: {
    name: "কোর্সটি কিনুন",
    value: "enroll"
  }
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