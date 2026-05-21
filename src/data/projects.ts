export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  role?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "docode-cp-platform",
    title: "DoCode - Virtual CP Platform",
    description: "An online virtual competitive programming platform where users can solve problems, track ratings, and join contests.",
    longDescription: "Awarded 2nd Runners Up in the DBMS category at UIU CSE Project Show Spring 2025. Built as the flagship project for Team Monolith. It provides virtual contest arenas, submission queues, and personal progress analytics.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "DBMS"],
    githubUrl: "https://github.com/mohammad-mizanur-rahman-fardin/DoCode",
    liveUrl: "https://docode-demo.vercel.app",
    featured: true,
    role: "Founder & Team Leader",
    highlights: [
      "Led Team Monolith to win the 2nd Runners Up title at UIU CSE Project Show Spring 2025",
      "Designed the relational database schema in PostgreSQL for user submissions, contest timers, and problems",
      "Implemented coding compiler visualizers and competitive scoreboards"
    ]
  },
  {
    id: "laravel-volunteer-system",
    title: "Laravel Volunteer Management System",
    description: "A comprehensive platform matching volunteers with community events, tracking service hours, and generating reports.",
    longDescription: "A responsive web application designed to coordinate schedules, track community service hours, and generate automated certificates.",
    tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Bootstrap"],
    githubUrl: "https://github.com/mohammad-mizanur-rahman-fardin/volunteer-management",
    liveUrl: "https://volunteer-demo.vercel.app",
    featured: true,
    role: "Lead Developer",
    highlights: [
      "Created an automated hour-tracking system and database tables using Laravel Migrations",
      "Integrated dashboard analytics with Chart.js for real-time visualization of volunteer contributions"
    ]
  },
  {
    id: "role-profile-system",
    title: "Role-Based Profile Management System",
    description: "A secure authentication and authorization system managing permissions and custom profiles for enterprises.",
    longDescription: "A secure enterprise-grade system that implements strict Role-Based Access Control (RBAC) and user customization profiles.",
    tags: ["Node.js", "Express", "PostgreSQL", "React", "Supabase"],
    githubUrl: "https://github.com/mohammad-mizanur-rahman-fardin/role-based-profiles",
    liveUrl: "https://rbac-demo.vercel.app",
    featured: false,
    role: "Backend Engineer",
    highlights: [
      "Built custom RBAC middleware in Node.js enforcing strict security permissions",
      "Integrated Supabase storage api for profile photo hosting"
    ]
  }
];
