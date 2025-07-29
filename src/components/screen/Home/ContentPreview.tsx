import React, { useState } from "react";
import Modal from "../../shared/Modal/Modal";
import Accordion from "../../shared/Accordion/Accordion";
import ContentItem from "../../shared/ContentItem/ContentItem";

interface CourseItem {
  id: string;
  type: 'video' | 'document';
  title: string;
  isFree: boolean;
  icon: 'green' | 'gray';
}

interface CourseSection {
  id: string;
  title: string;
  items: CourseItem[];
  isExpanded: boolean;
}

const ContentPreview: React.FC = () => {
  const [showAllContent, setShowAllContent] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState<string>("");
  
  const baseSections: CourseSection[] = [
    {
      id: "introduction",
      title: "Introduction",
      isExpanded: true,
      items: [
        {
          id: "intro-1",
          type: "video",
          title: "Video: IELTS: Introduction",
          isFree: true,
          icon: "green"
        },
        {
          id: "intro-2",
          type: "video",
          title: "Video: IELTS: Overview",
          isFree: true,
          icon: "green"
        },
        {
          id: "intro-3",
          type: "video",
          title: "Video: How to Prepare for IELTS?",
          isFree: true,
          icon: "green"
        },
        {
          id: "intro-4",
          type: "video",
          title: "Video: Making a Daily Routine",
          isFree: true,
          icon: "green"
        },
        {
          id: "intro-5",
          type: "video",
          title: "Video: Different Sentence Structures to Improve Writing",
          isFree: false,
          icon: "gray"
        },
        {
          id: "intro-6",
          type: "document",
          title: "IELTS General Facts",
          isFree: false,
          icon: "gray"
        },
        {
          id: "intro-7",
          type: "document",
          title: "IELTS Vocabulary",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "support-group",
      title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
      isExpanded: false,
      items: [
        {
          id: "support-group-join",
          type: "document",
          title: "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "academic-reading",
      title: "Academic Reading",
      isExpanded: false,
      items: [
        {
          id: "reading-format-video",
          type: "video",
          title: "Video: Reading: Reading Format",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-general-idea",
          type: "document",
          title: "Reading - General Idea, Format, Question Types",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-headings-video",
          type: "video",
          title: "Video: Reading: Paragraph Headings",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-matching-headings",
          type: "document",
          title: "Reading - Matching Headings",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-multiple-choice-video",
          type: "video",
          title: "Video: Reading: Multiple Choice Questions",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-multiple-choice",
          type: "document",
          title: "Reading - Multiple Choice",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-true-false-video",
          type: "video",
          title: "Video: Reading: True/False/Not Given",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-true-false",
          type: "document",
          title: "Reading - True/False/Not Given and Yes/No/Not Given Questions",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-matching-info-video",
          type: "video",
          title: "Video: Reading: Matching Paragraph Information",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-matching-features",
          type: "document",
          title: "Reading - Matching Features and Information",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-sentence-completion-video",
          type: "video",
          title: "Video: Reading: Sentence Completion",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-diagram-completion",
          type: "document",
          title: "Reading - Diagram and Flow Chart Completion",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-table-completion",
          type: "document",
          title: "Reading - Table Completion",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-short-answer-video",
          type: "video",
          title: "Video: Reading: Short Answer Questions",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-short-answer",
          type: "document",
          title: "Reading - Short Answer",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-gap-fill-video",
          type: "video",
          title: "Video: Reading: Gap Fill",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-gap-fill",
          type: "document",
          title: "Reading - Sentence, Summary Completion (Gap Fill Questions)",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "academic-reading-mock",
      title: "Academic Reading Mock Test",
      isExpanded: false,
      items: [
        {
          id: "reading-test-1",
          type: "document",
          title: "IELTS READING TEST 1",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-test-2",
          type: "document",
          title: "IELTS READING TEST 2",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-test-3",
          type: "document",
          title: "IELTS READING TEST 3",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-test-4",
          type: "document",
          title: "IELTS READING TEST 4",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-test-5",
          type: "document",
          title: "IELTS READING TEST 5",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-test-6",
          type: "document",
          title: "IELTS READING TEST 6",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-test-7",
          type: "document",
          title: "IELTS READING TEST 7",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-test-8",
          type: "document",
          title: "IELTS READING TEST 8",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-test-9",
          type: "document",
          title: "IELTS READING TEST 9",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-test-10",
          type: "document",
          title: "IELTS READING TEST 10",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "listening",
      title: "Listening",
      isExpanded: false,
      items: [
        {
          id: "listening-format-video",
          type: "video",
          title: "Video: Listening: Format",
          isFree: true,
          icon: "green"
        },
        {
          id: "listening-general-idea",
          type: "document",
          title: "Listening - General Idea, Format, Exam Structure, Question Types",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-form-completion-video",
          type: "video",
          title: "Video: Listening: Form Completion",
          isFree: true,
          icon: "green"
        },
        {
          id: "listening-form-completion",
          type: "document",
          title: "Listening - Form Completion",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-table-completion",
          type: "document",
          title: "Listening - Table completion",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-labelling-video",
          type: "video",
          title: "Video: Listening: Labelling Map and Diagram",
          isFree: true,
          icon: "green"
        },
        {
          id: "listening-map-diagram",
          type: "document",
          title: "Listening - Map and Diagram Labelling",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-flow-chart",
          type: "document",
          title: "Listening - Flow chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-matching",
          type: "document",
          title: "Listening - Matching Information",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-multiple-choice-video",
          type: "video",
          title: "Video: Listening: Multiple Choice Questions",
          isFree: true,
          icon: "green"
        },
        {
          id: "listening-multiple-choice",
          type: "document",
          title: "Listening - Multiple-choice",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-sentence-completion-video",
          type: "video",
          title: "Video: Listening: Sentence Completion and Gap Fill",
          isFree: true,
          icon: "green"
        },
        {
          id: "listening-sentence-completion",
          type: "document",
          title: "Listening - Sentence Completion, Gap Fill, Summary Completion",
          isFree: false,
          icon: "gray"
        }
      ]
    }
  ];

  const additionalSections: CourseSection[] = [
    {
      id: "listening-mock",
      title: "Listening Mock Test",
      isExpanded: false,
      items: [
        {
          id: "listening-test-1",
          type: "document",
          title: "IELTS LISTENING TEST 1",
          isFree: true,
          icon: "green"
        },
        {
          id: "listening-test-2",
          type: "document",
          title: "IELTS LISTENING TEST 2",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-test-3",
          type: "document",
          title: "IELTS LISTENING TEST 3",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-test-4",
          type: "document",
          title: "IELTS LISTENING TEST 4",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-test-5",
          type: "document",
          title: "IELTS LISTENING TEST 5",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-test-6",
          type: "document",
          title: "IELTS LISTENING TEST 6",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-test-7",
          type: "document",
          title: "IELTS LISTENING TEST 7",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-test-8",
          type: "document",
          title: "IELTS LISTENING TEST 8",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-test-9",
          type: "document",
          title: "IELTS LISTENING TEST 9",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-test-10",
          type: "document",
          title: "IELTS LISTENING TEST 10",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "academic-writing",
      title: "Academic Writing",
      isExpanded: false,
      items: [
        {
          id: "writing-format-video",
          type: "video",
          title: "Video: Writing: Writing Format",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-format",
          type: "document",
          title: "Writing - Test format, Marking Criteria, Band Descriptors",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-structure-video",
          type: "video",
          title: "Video: Writing: Task 1 - Structure",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-structure",
          type: "document",
          title: "Writing Task 1 - Question Types, Structure",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-graphs-video",
          type: "video",
          title: "Video: Writing: Task 1 - Graphs",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-line-graph",
          type: "document",
          title: "Writing Task 1 - Line Graph",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-bar-chart",
          type: "document",
          title: "Writing Task 1 - Bar Chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-pie-chart",
          type: "document",
          title: "Writing Task 1 - Pie Chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-mixed-graph",
          type: "document",
          title: "Writing Task 1 - Mixed Graph",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-maps-video",
          type: "video",
          title: "Video: Writing: Task 1 - Maps",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-maps",
          type: "document",
          title: "Writing Task 1 - Maps",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-diagram-video",
          type: "video",
          title: "Video: Writing: Task 1 - Describing A Diagram /Process",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-diagram",
          type: "document",
          title: "Writing Task 1 - Diagram & Process",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-flow-chart",
          type: "document",
          title: "Writing Task 1 - Flow Chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-structure-video",
          type: "video",
          title: "Video: Writing: Task 2 - Structure",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-structure",
          type: "document",
          title: "Writing Task 2 - General Idea, Format, Exam Structure, Question Types",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-agree-disagree-video",
          type: "video",
          title: "Video: Writing: Task 2: Agree/Disagree Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-agree-disagree",
          type: "document",
          title: "Writing Task 2 - Agree/Disagree (Opinion) Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-advantage-video",
          type: "video",
          title: "Video: Writing: Task 2: Advantage/Disadvantage Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-advantage",
          type: "document",
          title: "Writing Task 2 - Advantage & Disadvantage Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-cause-solution-video",
          type: "video",
          title: "Video: Writing: Task 2: Cause/Solution Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-cause-solution",
          type: "document",
          title: "Writing Task 2 - Cause & Solution Essay + Cause & Effect Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-discussion-video",
          type: "video",
          title: "Video: Writing: Task 2: Discussion Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-discussion",
          type: "document",
          title: "Writing Task 2 - Discussion Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-direct-question-video",
          type: "video",
          title: "Video: Writing: Task 2: Direct question Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task2-direct-question",
          type: "document",
          title: "Writing Task 2 - Direct Question (Two-Part) Essay",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "speaking",
      title: "Speaking",
      isExpanded: false,
      items: [
        {
          id: "speaking-format-video",
          type: "video",
          title: "Video: Speaking: Format",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-format",
          type: "document",
          title: "Speaking - General Idea, Format, Exam Structure, Question Types",
          isFree: false,
          icon: "gray"
        },
        {
          id: "speaking-greet-examiner-video",
          type: "video",
          title: "Video: Speaking: How to Greet Your Examiner",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-improve-home-video",
          type: "video",
          title: "Video: Speaking: How to Improve Your IELTS Speaking at Home",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-part1-video",
          type: "video",
          title: "Video: Speaking: Part 1: Common Topics",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-part1",
          type: "document",
          title: "Speaking - Part One - Common Topics, Questions and Suggested Answering Strategies",
          isFree: false,
          icon: "gray"
        },
        {
          id: "speaking-part2-video",
          type: "video",
          title: "Video: Speaking: Part 2: Common Topics",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-part2-3",
          type: "document",
          title: "Speaking - Part Two & Three (Cue Card & Follow Up Questions) - Common Topics, Questions and Suggested Answering Strategies",
          isFree: false,
          icon: "gray"
        },
        {
          id: "speaking-advanced-words1-video",
          type: "video",
          title: "Video: Speaking: 5 Advanced Words to Use in Your IELTS Speaking Test 1",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-advanced-words2-video",
          type: "video",
          title: "Video: Speaking: 5 Advanced Words to Use in Your IELTS Speaking Test 2",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-introduce-video",
          type: "video",
          title: "Video: Speaking: How to Introduce Yourself in English",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-hobbies-video",
          type: "video",
          title: "Video: Speaking: What are your hobbies? - Easy Tips to Answer This Question",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-favorite-video",
          type: "video",
          title: "Video: Speaking: What's Your Favorite...?",
          isFree: true,
          icon: "green"
        },
        {
          id: "speaking-techniques",
          type: "document",
          title: "Speaking-এ ভালো করার সকল কৌশল",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "general-training-reading",
      title: "General Training Reading",
      isExpanded: false,
      items: [
        {
          id: "reading-format-video",
          type: "video",
          title: "Video: Reading: Format",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-format",
          type: "document",
          title: "Reading: Format",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-matching-headings-video",
          type: "video",
          title: "Video: Reading: Matching Paragraph Headings",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-matching-headings",
          type: "document",
          title: "Reading: Matching Paragraph Headings",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-multiple-choice-video",
          type: "video",
          title: "Video: Reading: Multiple Choice Questions",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-multiple-choice",
          type: "document",
          title: "Reading: Multiple Choice Questions",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-matching-info-video",
          type: "video",
          title: "Video: Reading: Matching Paragraph Information",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-matching-info",
          type: "document",
          title: "Reading: Matching Paragraph Information",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-sentence-endings-video",
          type: "video",
          title: "Video: Reading: Matching Sentence Endings",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-sentence-endings",
          type: "document",
          title: "Reading: Matching Sentence Endings",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-gap-fill-video",
          type: "video",
          title: "Video: Reading: Gap Fill",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-gap-fill",
          type: "document",
          title: "Reading: Gap Fill",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-diagram-label-video",
          type: "video",
          title: "Video: Reading: Diagram Label Completion",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-diagram-label",
          type: "document",
          title: "Reading: Diagram Label Completion",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-true-false-video",
          type: "video",
          title: "Video: Reading: True/False/Not Given",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-true-false",
          type: "document",
          title: "Reading: True/False/Not Given",
          isFree: false,
          icon: "gray"
        },
        {
          id: "reading-short-answer-video",
          type: "video",
          title: "Video: Reading: Short Answer Questions",
          isFree: true,
          icon: "green"
        },
        {
          id: "reading-short-answer",
          type: "document",
          title: "Reading: Short Answer Questions",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "general-reading-mock",
      title: "General Reading Mock Test",
      isExpanded: false,
      items: [
        {
          id: "general-reading-test-1",
          type: "document",
          title: "IELTS GENERAL READING TEST 1",
          isFree: true,
          icon: "green"
        },
        {
          id: "general-reading-test-2",
          type: "document",
          title: "IELTS GENERAL READING TEST 2",
          isFree: false,
          icon: "gray"
        },
        {
          id: "general-reading-test-3",
          type: "document",
          title: "IELTS GENERAL READING TEST 3",
          isFree: false,
          icon: "gray"
        },
        {
          id: "general-reading-test-4",
          type: "document",
          title: "IELTS GENERAL READING TEST 4",
          isFree: false,
          icon: "gray"
        },
        {
          id: "general-reading-test-5",
          type: "document",
          title: "IELTS GENERAL READING TEST 5",
          isFree: false,
          icon: "gray"
        },
        {
          id: "general-reading-test-6",
          type: "document",
          title: "IELTS GENERAL READING TEST 6",
          isFree: false,
          icon: "gray"
        },
        {
          id: "general-reading-test-7",
          type: "document",
          title: "IELTS GENERAL READING TEST 7",
          isFree: false,
          icon: "gray"
        },
        {
          id: "general-reading-test-8",
          type: "document",
          title: "IELTS GENERAL READING TEST 8",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "general-training-writing",
      title: "General Training Writing",
      isExpanded: false,
      items: [
        {
          id: "writing-format-video",
          type: "video",
          title: "Video: Writing: Format",
          isFree: true,
          icon: "green"
        },
        {
          id: "writing-format",
          type: "document",
          title: "Writing: Format",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-structure-video",
          type: "video",
          title: "Video: Writing: Structure and Tips for Writing Task 1 (Letter)",
          isFree: true,
          icon: "green"
        },
        {
          id: "writing-task1-structure",
          type: "document",
          title: "Writing: Structure and Tips for Writing Task 1 (Letter)",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-sample-letters",
          type: "document",
          title: "Writing Task 1 Sample Letters",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-formal-video",
          type: "video",
          title: "Video: Writing: Task 1: Formal Letter",
          isFree: true,
          icon: "green"
        },
        {
          id: "writing-task1-formal",
          type: "document",
          title: "Writing: Task 1: Formal Letter",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-semi-formal-video",
          type: "video",
          title: "Video: Writing: Task 1: Semi-Formal Letter",
          isFree: true,
          icon: "green"
        },
        {
          id: "writing-task1-semi-formal",
          type: "document",
          title: "Writing: Task 1: Semi-Formal Letter",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-task1-informal-video",
          type: "video",
          title: "Video: Writing: Task 1: Informal Letter",
          isFree: true,
          icon: "green"
        },
        {
          id: "writing-task1-informal",
          type: "document",
          title: "Writing: Task 1: Informal Letter",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-conclusion-video",
          type: "video",
          title: "Video: IELTS : Conclusion",
          isFree: true,
          icon: "green"
        }
      ]
    },
    {
      id: "zoom-live-class",
      title: "ZOOM Live Class",
      isExpanded: false,
      items: [
        {
          id: "live-1-recording",
          type: "video",
          title: "Video: Live 1 Recording | IELTS Writing Task 1 : Line Graph",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-1-slide",
          type: "document",
          title: "Live 1 Class Slide | IELTS Writing Task 1 : Line Graph",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-2-recording",
          type: "video",
          title: "Video: Live 2 Recording | IELTS Writing Task 1 | Bar chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-2-slide",
          type: "document",
          title: "Live 2 Class Slide | IELTS Writing Task 1 | Bar chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-3-recording",
          type: "video",
          title: "Video: Live 3 Recording | Speaking Practice 1",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-3-slide",
          type: "document",
          title: "Live 3 Class Slide | Speaking Practice 1",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-4-recording",
          type: "video",
          title: "Video: Live 4 Recording | Speaking Practice 2",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-4-slide",
          type: "document",
          title: "Live 4 Class Slide | Speaking Practice 2",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-5-recording",
          type: "video",
          title: "Video: Live 5 | Q&A Session",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-6-recording",
          type: "video",
          title: "Video: Live 6 Recording | Paragraph Headings",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-6-slide",
          type: "document",
          title: "Live 6 Class Slide | Paragraph Headings",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-7-recording",
          type: "video",
          title: "Video: Live 7 Recording | Pie Chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-7-slide",
          type: "document",
          title: "Live 7 Class Slide | Pie Chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-8-recording",
          type: "video",
          title: "Video: Live 8 Recording | Diagrams, Processes and Pictorials",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-8-slide",
          type: "document",
          title: "Live 8 Class Slide | Diagrams, Processes and Pictorials",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-9-recording",
          type: "video",
          title: "Video: Live 9 Recording | Mixed Graphs",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-9-slide",
          type: "document",
          title: "Live 9 Class Slide | Mixed Graphs",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-10-recording",
          type: "video",
          title: "Video: Live 10 Recording Maps",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-10-slide",
          type: "document",
          title: "Live 10 Class Slide | Maps",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-11-recording",
          type: "video",
          title: "Video: Live 11 Recording | Flow Chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-11-slide",
          type: "document",
          title: "Live 11 Class Slide | Flow Chart",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-12-recording",
          type: "video",
          title: "Video: Live 12 Recording | Writing Task 2 - Agree/Disagree (Opinion) Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-12-slide",
          type: "document",
          title: "Live 12 Class Slide | Writing Task 2 - Agree/Disagree (Opinion) Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-13-recording",
          type: "video",
          title: "Video: Live 13 Recording | Advantage & Disadvantage Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-13-slide",
          type: "document",
          title: "Live 13 Class Slide | Advantage & Disadvantage Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-14-recording",
          type: "video",
          title: "Video: Live Class 14 Recording | Discussion Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-14-slide",
          type: "document",
          title: "Live Class 14 Class Slide | Discussion Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-15-recording",
          type: "video",
          title: "Video: Live Class 15 Recording | Cause & Solution Essay + Cause & Effect Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-15-slide",
          type: "document",
          title: "Live Class 15 Class Slide | Cause & Solution Essay + Cause & Effect Essay",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-16-recording",
          type: "video",
          title: "Video: Live Class 16 Recording | General Idea Format Question Types",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-16-slide",
          type: "document",
          title: "Live Class 16 Recording | General Idea Format Question Types",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-17-recording",
          type: "video",
          title: "Video: Live 17 Video Recording | Matching Features and information",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-17-slide",
          type: "document",
          title: "Live 17 Class Slide | Matching Features and information",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-18-recording",
          type: "video",
          title: "Video: Live 18 Class Recording | True False Not given",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-18-slide",
          type: "document",
          title: "Live 18 Class Slide | True False Not given",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-19-recording",
          type: "video",
          title: "Video: Live 19 Class Recording",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-19-slide",
          type: "document",
          title: "Live 19 Class Slide",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-20-recording",
          type: "video",
          title: "Video: Live 20 | Q&A Session",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-21-recording",
          type: "video",
          title: "Video: Live 21 Class Recording | Sentence and Summary Completion (Gap Fill Questions)",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-21-slide",
          type: "document",
          title: "Live 21 Class Slide | Sentence and Summary Completion (Gap Fill Questions)",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-22-recording",
          type: "video",
          title: "Video: Live 22 Class Recording | Table Completion, General Idea-Listening",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-22-slide",
          type: "document",
          title: "Live 22 Lecture Slide | Table Completion, General Idea-Listening",
          isFree: false,
          icon: "gray"
        },
        {
          id: "lecture-23-recording",
          type: "video",
          title: "Lecture 23 Class Recording | Sentence Completion, Gap Fill, Summary Completion",
          isFree: false,
          icon: "gray"
        },
        {
          id: "lecture-23-slide",
          type: "document",
          title: "Lecture 23 Lecture Slide | Sentence Completion, Gap Fill, Summary Completion",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-24-recording",
          type: "video",
          title: "Video: Live 24 | Sentence Completion, Gap Fill +MCQ",
          isFree: false,
          icon: "gray"
        },
        {
          id: "live-25-recording",
          type: "video",
          title: "Video: Live 25 | Map Diagram, Flow Chart, Matching Information",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "ielts-paper-templates",
      title: "IELTS Paper Based Templates",
      isExpanded: false,
      items: [
        {
          id: "reading-answer-sheet",
          type: "document",
          title: "Reading Answer Sheet",
          isFree: false,
          icon: "gray"
        },
        {
          id: "listening-answer-sheet",
          type: "document",
          title: "Listening Answer Sheet",
          isFree: false,
          icon: "gray"
        },
        {
          id: "writing-answer-sheet",
          type: "document",
          title: "IELTS Writing Answer Sheet",
          isFree: false,
          icon: "gray"
        }
      ]
    },
    {
      id: "ielts-mock-test-pdf",
      title: "IELTS Mock Test (PDF Questions)",
      isExpanded: false,
      items: [
        {
          id: "mock-test-1",
          type: "document",
          title: "Mock Test 1",
          isFree: false,
          icon: "gray"
        },
        {
          id: "mock-test-2",
          type: "document",
          title: "Mock Test 2",
          isFree: false,
          icon: "gray"
        },
        {
          id: "mock-test-3",
          type: "document",
          title: "Mock Test 3",
          isFree: false,
          icon: "gray"
        },
        {
          id: "mock-test-4",
          type: "document",
          title: "Mock Test 4",
          isFree: false,
          icon: "gray"
        },
        {
          id: "mock-test-5",
          type: "document",
          title: "Mock Test 5",
          isFree: false,
          icon: "gray"
        },
        {
          id: "mock-test-6",
          type: "document",
          title: "Mock Test 6",
          isFree: false,
          icon: "gray"
        },
        {
          id: "mock-test-7",
          type: "document",
          title: "Mock Test 7",
          isFree: false,
          icon: "gray"
        },
        {
          id: "mock-test-8",
          type: "document",
          title: "Mock Test 8",
          isFree: false,
          icon: "gray"
        },
        {
          id: "mock-test-9",
          type: "document",
          title: "Mock Test 9",
          isFree: false,
          icon: "gray"
        },
        {
          id: "mock-test-10",
          type: "document",
          title: "Mock Test 10",
          isFree: false,
          icon: "gray"
        }
      ]
    }
  ];

  const [sections, setSections] = useState<CourseSection[]>(baseSections);

  const toggleAllContent = (): void => {
    if (showAllContent) {
      // Show less - go back to base sections
      setSections(baseSections);
      setShowAllContent(false);
    } else {
      // Show more - add additional sections
      setSections([...baseSections, ...additionalSections]);
      setShowAllContent(true);
    }
  };

  const handleItemClick = (_item: CourseItem): void => {
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setShowModal(false);
    setContactInfo("");
  };

  const closeModal = (): void => {
    setShowModal(false);
    setContactInfo("");
  };

  // Convert sections to accordion items
  const accordionItems = sections.map(section => ({
    id: section.id,
    title: section.title,
    isExpanded: section.isExpanded,
    content: section.items.length > 0 ? (
      <div className="space-y-3">
        {section.items.map((item) => (
          <ContentItem
            key={item.id}
            id={item.id}
            type={item.type}
            title={item.title}
            isFree={item.isFree}
            icon={item.icon}
            onClick={handleItemClick}
          />
        ))}
      </div>
    ) : undefined
  }));

  return (
    <div className="">
      <h2 className="mb-4">
        Content preview
      </h2>
      <div className="bg-white rounded-lg shadow-sm border p-6">


      <Accordion items={accordionItems} />

      {/* Bottom Button */}
      <div className="text-center relative">
        <button 
          onClick={toggleAllContent}
          className="rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700 flex gap-2 absolute -bottom-[38px]  left-1/2 -translate-x-1/2"
        >
          <span className="text-[14px]">{showAllContent ? "কম দেখুন" : "সকল কন্টেন্ট"}</span>
          <svg
              className={`w-4 h-4 transition-transform ${showAllContent ? "rotate-180" : ""
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
      </div>
      </div>
      {/* Contact Modal */}
      <Modal isOpen={showModal} onClose={closeModal} title="">
        <div className="flex flex-col items-start h-full px-2 py-12 md:max-w-[400px]">
          <h3 className="mb-4 w-full  text-lg font-semibold md:mb-5 md:text-[21px]">
            Please proceed to watch the<br />
            video by providing your mobile<br />
            number/email
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="relative">
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="Mobile number/ e-mail"
                className="w-full p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 peer placeholder:text-gray-600"
                required
              />
              <label className="absolute left-3 top-3 text-black transition-all duration-200 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-green-600 peer-focus:bg-white peer-focus:px-1 peer-[-webkit-autofill]:-top-2 peer-[-webkit-autofill]:left-2 peer-[-webkit-autofill]:text-xs peer-[-webkit-autofill]:text-green-600 peer-[-webkit-autofill]:bg-white peer-[-webkit-autofill]:px-1 pointer-events-none bg-white">
                Mobile number/ e-mail
              </label>
            </div>
            
            <button
              type="submit"
              disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo)}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors text-white ${
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo)
                  ? "bg-green-500 hover:opacity-80"
                  : "cursor-not-allowed bg-[#4B5563] text-white hover:opacity-80"
              }`}
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ContentPreview; 