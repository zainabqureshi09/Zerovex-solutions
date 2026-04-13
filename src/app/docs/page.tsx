import { DocLayout } from "@/components/docs/DocLayout";
import Link from "next/link";
import {
  BookOpen, Code, Globe, Cpu, Coffee, ArrowRight, Zap, FileText,
  TrendingUp, Users, Award, Target, Sparkles, Rocket, Layers,
  Database, Cloud, Smartphone, Shield, Brain, BarChart3, GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Documentation Hub",
  description: "Master modern technologies with comprehensive guides, career paths, and interactive learning resources",
};

const languages = [
  {
    name: "Python",
    icon: "🐍",
    color: "from-yellow-400 to-yellow-600",
    bgLight: "bg-yellow-50 dark:bg-yellow-950/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    href: "/docs/python/introduction",
    description: "AI/ML, data science, automation, and backend development",
    topics: 7,
    difficulty: "Beginner",
    careerPaths: ["Data Scientist", "ML Engineer", "Backend Developer", "Automation Engineer"],
  },
  {
    name: "JavaScript",
    icon: "JS",
    color: "from-yellow-300 to-yellow-500",
    bgLight: "bg-yellow-50 dark:bg-yellow-950/20",
    borderColor: "border-yellow-200 dark:border-yellow-800",
    href: "/docs/javascript/introduction",
    description: "The language of the web - frontend and backend development",
    topics: 7,
    difficulty: "Beginner",
    careerPaths: ["Frontend Developer", "Full-Stack Developer", "Node.js Developer"],
  },
  {
    name: "HTML",
    icon: "</>",
    color: "from-orange-400 to-orange-600",
    bgLight: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    href: "/docs/html/introduction",
    description: "The foundation and structure of every web page",
    topics: 3,
    difficulty: "Beginner",
    careerPaths: ["Web Developer", "Frontend Developer", "Email Developer"],
  },
  {
    name: "CSS",
    icon: "#",
    color: "from-blue-400 to-blue-600",
    bgLight: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    href: "/docs/css/introduction",
    description: "Style, design, and animations for the modern web",
    topics: 3,
    difficulty: "Beginner",
    careerPaths: ["Frontend Developer", "UI/UX Developer", "CSS Artist"],
  },
  {
    name: "C++",
    icon: "C++",
    color: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    href: "/docs/cpp/introduction",
    description: "High-performance systems programming and game engines",
    topics: 7,
    difficulty: "Intermediate",
    careerPaths: ["Systems Programmer", "Game Developer", "Embedded Engineer"],
  },
  {
    name: "Java",
    icon: "☕",
    color: "from-red-400 to-red-600",
    bgLight: "bg-red-50 dark:bg-red-950/20",
    borderColor: "border-red-200 dark:border-red-800",
    href: "/docs/java/introduction",
    description: "Enterprise applications, Android development, and big data",
    topics: 7,
    difficulty: "Intermediate",
    careerPaths: ["Java Developer", "Android Developer", "Enterprise Architect"],
  },
];

const trendingTechs = [
  {
    name: "React",
    icon: "⚛️",
    category: "Frontend Framework",
    href: "/docs/getting-started",
    badge: "Popular",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    name: "Next.js",
    icon: "▲",
    category: "Full-Stack Framework",
    href: "/docs/getting-started",
    badge: "Trending",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    name: "TypeScript",
    icon: "TS",
    category: "Typed JavaScript",
    href: "/docs/javascript/introduction",
    badge: "Must Learn",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    category: "CSS Framework",
    href: "/docs/css/introduction",
    badge: "Popular",
    badgeColor: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300",
  },
  {
    name: "Node.js",
    icon: "📦",
    category: "Backend Runtime",
    href: "/docs/javascript/introduction",
    badge: "Essential",
    badgeColor: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "Git",
    icon: "📋",
    category: "Version Control",
    href: "/docs/getting-started",
    badge: "Fundamental",
    badgeColor: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300",
  },
];

const careerPaths = [
  {
    title: "Frontend Developer",
    icon: Globe,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    description: "Build beautiful, responsive user interfaces",
    salary: "$70K - $120K",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    path: [
      { step: 1, title: "HTML Basics", href: "/docs/html/introduction" },
      { step: 2, title: "CSS Fundamentals", href: "/docs/css/introduction" },
      { step: 3, title: "JavaScript", href: "/docs/javascript/introduction" },
      { step: 4, title: "React (Coming Soon)", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Backend Developer",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-950/20",
    borderColor: "border-green-200 dark:border-green-800",
    description: "Power applications with server-side logic",
    salary: "$80K - $130K",
    technologies: ["Python", "Java", "Node.js", "Databases", "APIs"],
    path: [
      { step: 1, title: "Python", href: "/docs/python/introduction" },
      { step: 2, title: "JavaScript", href: "/docs/javascript/introduction" },
      { step: 3, title: "Java", href: "/docs/java/introduction" },
      { step: 4, title: "Databases (Coming Soon)", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Full-Stack Developer",
    icon: Layers,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    description: "Master both frontend and backend",
    salary: "$90K - $150K",
    technologies: ["React", "Node.js", "Python", "Databases", "Cloud"],
    path: [
      { step: 1, title: "HTML & CSS", href: "/docs/html/introduction" },
      { step: 2, title: "JavaScript", href: "/docs/javascript/introduction" },
      { step: 3, title: "Python/Java", href: "/docs/python/introduction" },
      { step: 4, title: "Cloud (Coming Soon)", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Data Scientist",
    icon: Brain,
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-950/20",
    borderColor: "border-pink-200 dark:border-pink-800",
    description: "Extract insights from data with AI/ML",
    salary: "$100K - $160K",
    technologies: ["Python", "Pandas", "TensorFlow", "SQL", "Statistics"],
    path: [
      { step: 1, title: "Python Basics", href: "/docs/python/introduction" },
      { step: 2, title: "Python Variables", href: "/docs/python/variables" },
      { step: 3, title: "Python Functions", href: "/docs/python/functions" },
      { step: 4, title: "Data Science (Coming Soon)", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Mobile Developer",
    icon: Smartphone,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
    borderColor: "border-cyan-200 dark:border-cyan-800",
    description: "Create apps for iOS and Android",
    salary: "$85K - $140K",
    technologies: ["Java/Kotlin", "Swift", "React Native", "Flutter"],
    path: [
      { step: 1, title: "Java Basics", href: "/docs/java/introduction" },
      { step: 2, title: "JavaScript", href: "/docs/javascript/introduction" },
      { step: 3, title: "React Native (Coming Soon)", href: "/docs/getting-started" },
      { step: 4, title: "Mobile Dev (Coming Soon)", href: "/docs/getting-started" },
    ],
  },
  {
    title: "DevOps Engineer",
    icon: Cloud,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    description: "Automate deployment and infrastructure",
    salary: "$95K - $150K",
    technologies: ["Linux", "Docker", "Kubernetes", "CI/CD", "Cloud"],
    path: [
      { step: 1, title: "Python Scripting", href: "/docs/python/introduction" },
      { step: 2, title: "C++ Basics", href: "/docs/cpp/introduction" },
      { step: 3, title: "Linux (Coming Soon)", href: "/docs/getting-started" },
      { step: 4, title: "Cloud (Coming Soon)", href: "/docs/getting-started" },
    ],
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
    case "Advanced":
      return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300";
  }
};

export default function DocsPage() {
  return (
    <DocLayout title="Documentation Hub">
      <div className="animate-in fade-in duration-500 space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 via-red-600 to-red-700 dark:from-red-900 dark:via-red-950 dark:to-black p-8 md:p-12">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-white" />
              <span className="text-sm font-medium text-white/90">Learning Platform</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Master Modern Technologies
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mb-6">
              Comprehensive guides, career paths, and interactive learning resources to help you become a professional developer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/docs/python/introduction"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-red-600 font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                View Roadmaps
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="doc-card p-6 text-center">
            <BookOpen className="h-8 w-8 text-[var(--color-docs-accent)] dark:text-[var(--color-docs-accent-dark)] mx-auto mb-2" />
            <div className="text-3xl font-bold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)]">6</div>
            <div className="text-sm text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)]">Languages</div>
          </div>
          <div className="doc-card p-6 text-center">
            <FileText className="h-8 w-8 text-[var(--color-docs-accent)] dark:text-[var(--color-docs-accent-dark)] mx-auto mb-2" />
            <div className="text-3xl font-bold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)]">37+</div>
            <div className="text-sm text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)]">Lessons</div>
          </div>
          <div className="doc-card p-6 text-center">
            <Users className="h-8 w-8 text-[var(--color-docs-accent)] dark:text-[var(--color-docs-accent-dark)] mx-auto mb-2" />
            <div className="text-3xl font-bold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)]">6</div>
            <div className="text-sm text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)]">Career Paths</div>
          </div>
          <div className="doc-card p-6 text-center">
            <Award className="h-8 w-8 text-[var(--color-docs-accent)] dark:text-[var(--color-docs-accent-dark)] mx-auto mb-2" />
            <div className="text-3xl font-bold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)]">Free</div>
            <div className="text-sm text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)]">Forever</div>
          </div>
        </div>

        {/* Programming Languages Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)] mb-2">
                Programming Languages
              </h2>
              <p className="text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)]">
                Choose a language to start learning
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <Link
                key={lang.name}
                href={lang.href}
                className="doc-card group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className={cn("w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold bg-gradient-to-br", lang.color, "text-white shadow-lg")}>
                    {lang.icon}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)] group-hover:text-[var(--color-docs-accent)] dark:group-hover:text-[var(--color-docs-accent-dark)] transition-colors">
                        {lang.name}
                      </h3>
                      <span className={cn("text-xs px-2 py-1 rounded-full font-medium", getDifficultyColor(lang.difficulty))}>
                        {lang.difficulty}
                      </span>
                    </div>
                    <span className="text-sm text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)]">
                      {lang.topics} topics
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] mb-4">
                  {lang.description}
                </p>
                <div className="space-y-2">
                  <div className="text-xs font-medium text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] uppercase tracking-wide">
                    Career Paths
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {lang.careerPaths.slice(0, 3).map((path) => (
                      <span
                        key={path}
                        className="text-xs px-2 py-1 rounded bg-[var(--color-docs-muted)] dark:bg-[var(--color-docs-muted-dark)] text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)]"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trending Technologies */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-[var(--color-docs-accent)] dark:text-[var(--color-docs-accent-dark)]" />
            <h2 className="text-2xl font-bold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)]">
              Trending Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingTechs.map((tech) => (
              <Link
                key={tech.name}
                href={tech.href}
                className="doc-card p-4 group hover:scale-105 transition-all"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)] text-sm mb-1 group-hover:text-[var(--color-docs-accent)] dark:group-hover:text-[var(--color-docs-accent-dark)] transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] mb-2">
                  {tech.category}
                </p>
                <span className={cn("text-xs px-2 py-1 rounded-full font-medium", tech.badgeColor)}>
                  {tech.badge}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Career Paths Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-6 w-6 text-[var(--color-docs-accent)] dark:text-[var(--color-docs-accent-dark)]" />
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)]">
                Career Paths
              </h2>
              <p className="text-sm text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)]">
                Follow structured learning paths to land your dream job
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((career) => (
              <div
                key={career.title}
                className="doc-card p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", career.bgColor, career.borderColor, "border")}>
                    <career.icon className={cn("h-6 w-6", career.color)} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)] mb-1">
                      {career.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-[var(--color-docs-accent)] dark:text-[var(--color-docs-accent-dark)]" />
                      <span className="text-sm font-medium text-[var(--color-docs-accent)] dark:text-[var(--color-docs-accent-dark)]">
                        {career.salary}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] mb-4">
                  {career.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs font-medium text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] uppercase tracking-wide mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {career.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-[var(--color-docs-muted)] dark:bg-[var(--color-docs-muted-dark)] text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] uppercase tracking-wide mb-2">
                    Learning Path
                  </div>
                  <div className="space-y-2">
                    {career.path.map((step, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[var(--color-docs-accent)] dark:bg-[var(--color-docs-accent-dark)] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {step.step}
                        </div>
                        <Link
                          href={step.href}
                          className="text-sm text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] hover:text-[var(--color-docs-accent)] dark:hover:text-[var(--color-docs-accent-dark)] transition-colors flex-1"
                        >
                          {step.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="doc-card p-8 bg-gradient-to-br from-[var(--color-docs-muted)] to-transparent dark:from-[var(--color-docs-muted-dark)] dark:to-transparent">
          <div className="flex items-start gap-4">
            <Rocket className="h-8 w-8 text-[var(--color-docs-accent)] dark:text-[var(--color-docs-accent-dark)] flex-shrink-0 mt-2" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)] mb-4">
                New to Programming?
              </h2>
              <p className="text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] mb-6">
                Don&apos;t know where to start? We recommend Python for beginners. It&apos;s easy to learn, versatile, and in high demand.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/docs/python/introduction"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-docs-accent)] dark:bg-[var(--color-docs-accent-dark)] text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Start with Python
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/docs/getting-started"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-docs-border)] dark:border-[var(--color-docs-border-dark)] text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)] font-semibold hover:border-[var(--color-docs-accent)] dark:hover:border-[var(--color-docs-accent-dark)] transition-colors"
                >
                  View All Roadmaps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}
