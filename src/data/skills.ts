export interface Skill {
  name: string;
  level?: string; // e.g. "Advanced", "Intermediate"
  iconName: string; // The Lucide React icon component name (or custom key)
  colorClass: string; // CSS variables or Tailwind classes for custom accenting
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", iconName: "HtmlIcon", colorClass: "hover:text-[#E34F26] hover:shadow-[#E34F26]/20" },
      { name: "CSS3", iconName: "CssIcon", colorClass: "hover:text-[#1572B6] hover:shadow-[#1572B6]/20" },
      { name: "JavaScript", iconName: "JsIcon", colorClass: "hover:text-[#F7DF1E] hover:shadow-[#F7DF1E]/20" },
      { name: "TypeScript", iconName: "TsIcon", colorClass: "hover:text-[#3178C6] hover:shadow-[#3178C6]/20" },
      { name: "React", iconName: "ReactIcon", colorClass: "hover:text-[#61DAFB] hover:shadow-[#61DAFB]/20" },
      { name: "Next.js", iconName: "NextIcon", colorClass: "hover:text-foreground hover:shadow-foreground/20" },
      { name: "Tailwind CSS", iconName: "TailwindIcon", colorClass: "hover:text-[#06B6D4] hover:shadow-[#06B6D4]/20" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", iconName: "PhpIcon", colorClass: "hover:text-[#777BB4] hover:shadow-[#777BB4]/20" },
      { name: "Laravel", iconName: "LaravelIcon", colorClass: "hover:text-[#FF2D20] hover:shadow-[#FF2D20]/20" },
      { name: "Node.js", iconName: "NodeIcon", colorClass: "hover:text-[#339933] hover:shadow-[#339933]/20" }
    ]
  },
  {
    title: "Database & Cloud Services",
    skills: [
      { name: "MySQL", iconName: "MysqlIcon", colorClass: "hover:text-[#4479A1] hover:shadow-[#4479A1]/20" },
      { name: "PostgreSQL", iconName: "PostgresIcon", colorClass: "hover:text-[#4169E1] hover:shadow-[#4169E1]/20" },
      { name: "Supabase", iconName: "SupabaseIcon", colorClass: "hover:text-[#3ECF8E] hover:shadow-[#3ECF8E]/20" }
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", iconName: "GitIcon", colorClass: "hover:text-[#F05032] hover:shadow-[#F05032]/20" },
      { name: "GitHub", iconName: "GithubIcon", colorClass: "hover:text-foreground hover:shadow-foreground/20" },
      { name: "VS Code", iconName: "VscodeIcon", colorClass: "hover:text-[#007ACC] hover:shadow-[#007ACC]/20" },
      { name: "Antigravity", iconName: "CpuIcon", colorClass: "hover:text-[#9333EA] hover:shadow-[#9333EA]/20" },
      { name: "Vercel", iconName: "VercelIcon", colorClass: "hover:text-foreground hover:shadow-foreground/20" }
    ]
  }
];
