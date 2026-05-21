export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "achievement" | "education" | "work";
  skills?: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: "achieve-1",
    role: "DBMS Project Show 2nd Runners Up",
    company: "UIU CSE Project Show (Spring 2025)",
    location: "Dhaka, Bangladesh",
    period: "2025",
    type: "achievement",
    description: [
      "Won the 2nd Runners Up title in the DBMS Category with our project 'DoCode'.",
      "Acted as the Founder and Team Leader of Team Monolith, coordinating task delegation and database design.",
      "Designed and developed 'DoCode' — an online virtual competitive programming platform built with modern technologies."
    ],
    skills: ["Database Design", "Competitive Programming", "Leadership", "Team Collaboration"]
  },
  {
    id: "edu-1",
    role: "Bachelor of Science in Computer Science & Engineering",
    company: "United International University (UIU)",
    location: "Dhaka, Bangladesh",
    period: "Jan 2023 - Present",
    type: "education",
    description: [
      "Admitted in January 2023 (Spring 231 trimester). Currently maintaining a CGPA above 3.00.",
      "Focusing on AI & Data Science, specifically Natural Language Processing (NLP) and Large Language Models (LLM).",
      "Active participant in department project exhibitions and competitive programming communities."
    ],
    skills: ["AI & Data Science", "NLP", "LLM", "Algorithms", "DBMS"]
  },
  {
    id: "edu-2",
    role: "Higher Secondary School Certificate (HSC)",
    company: "Government Science College",
    location: "Dhaka, Bangladesh",
    period: "2019 - 2021",
    type: "education",
    description: [
      "Successfully completed the Higher Secondary School Certificate under Science Group.",
      "Achieved a perfect GPA of 5.00 out of 5.00."
    ],
    skills: ["Mathematics", "Physics", "Chemistry", "ICT"]
  },
  {
    id: "edu-3",
    role: "Secondary School Certificate (SSC)",
    company: "Ideal School and College",
    location: "Dhaka, Bangladesh",
    period: "2017 - 2019",
    type: "education",
    description: [
      "Completed Secondary School Certificate under Science Group.",
      "Achieved a perfect GPA of 5.00 out of 5.00."
    ],
    skills: ["Mathematics", "General Science", "ICT"]
  }
];
