// Client component for interactive resume page
'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Code,
  Star,
  ExternalLink
} from 'lucide-react'

const personalInfo = {
  name: 'Benjamin Miller',
  title: 'Software Developer',
  email: 'smartdev379@gmail.com',
  location: 'West Sacramento, CA',
  website: 'https://cedric-dev.netlify.app/',
  freelancer: 'https://www.upwork.com/freelancers/~01c15dc748e18d8fe4',
  portfolioAlt: 'http://miller.netlify.app/',
  github: 'github.com/walkure10005',
}

const professionalSummary = `8 years of experience, including 2 years driving EdTech innovation. Led cross-functional teams to deliver AI-powered learning platforms, large-scale enterprise solutions, and mobile applications adopted across education and industry. Passionate about mentorship and clean engineering practices, Cedric has guided 20+ junior developers into leadership roles while advancing technology that makes education more intelligent and accessible.`

const experience = [
  {
    title: 'Freelance Consultant & Team Lead',
    company: 'Upwork, WellFound, LinkedIn',
    location: 'Remote',
    period: 'Nov 2015 - Present',
    achievements: [
      "Delivered full-stack development services across Upwork, Wellfound, and LinkedIn, building and maintaining mobile apps, websites, web applications, and enterprise systems for international clients",
      "Worked both as a solo freelancer and as a team leader, coordinating distributed teams of frontend and backend developers, designers, DevOps engineers, data scientists, and digital marketers",
      "Managed the full development lifecycle: from requirements gathering and architecture design to deployment, monitoring, and long-term operations",
      "Recently led a remote team of freelancers to deliver end-to-end solutions, balancing technical execution with project management, resource allocation, and client communication",
      "Built a reputation for high-quality, scalable solutions and agile collaboration, successfully completing projects across industries including education, e-commerce, enterprise SaaS, and digital marketing"
    ],
  },
  {
    title: 'Project Consultant',
    company: 'AVAAL',
    location: 'West Sacramento, CA, USA',
    period: 'Nov 2023 - Apr 2025',
    achievements: [
      "Led the design and implementation of an AI-driven coding education platform, inspired by Codecademy, with real-time code feedback and personalized learning paths",
      "Developed an intelligent exercise recommendation system using LLMs and TensorFlow, improving learner engagement and completion rates",
      "Collaborated with cross-border teams to integrate cloud-based deployment pipelines and optimize scalability for thousands of concurrent learners",
      "Partnered with educators to design curriculum-aligned coding modules, bridging the gap between academic requirements and practical programming skills.",
      "Delivered a working MVP within 6 months, enabling the client to secure funding and early university partnerships"
    ],
  },
  {
    title: 'Tech Director & Mentor',
    company: 'CLEEVIO s.r.o.',
    location: 'Prague, Czechia',
    period: 'Apr 2018 - Sep 2023',
    achievements: [
      "Led development of AI-powered EdTech platforms, including intelligent classroom systems and adaptive learning modules",
      "Oversaw a team of 10+ developers across frontend, backend, and AI projects", 
      "Directed R&D strategy and technology roadmaps in collaboration with academic and industry partners", 
      "Mentored junior engineers and interns, implementing best practices for clean code, architecture, and DevOps"
    ],
  },
  {
    title: 'Full stack developer/Team lead',
    company: 'Comerto s.r.o.',
    location:'Prague, Czechia',
    period: 'Oct 2015 - Feb 2018',
    achievements: [
      "Developed mobile/web applications, websites for e-commerce, real-estate, business",
      "Key project: Artisanal Living, a native iOS/Android app that integrated social features with property management services."
    ],
  },
  {
    title: 'Software Developer',
    company: 'SDE Software Solutions',
    location: 'Prague, Czechia',
    period: 'Aug 2011 - Sep 2015',
    achievements: [
      "Developed and maintained secure ERP and CRM solutions used by manufactural enterprises",
      "Built backend services with RESTful APIs and integration with third-party platforms",
      "Collaborated with cross-functional teams to deliver high-quality, timely product updates"
    ],
  }
]

const education = [
  {
    degree: 'M.Sc. in Software Engineering',
    school: 'Brno University of Technology',
    location: 'Brno, Czechia',
    period: '2005 - 2011',
    details: [
      'Completed both undergraduate and graduate programs in software engineering',
      'Focus areas: Software Architecture, AI Fundamentals, Intelligent Tutoring System',
    ],
  },
]

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'SQL'],
  'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  'Data & Machine Learning': ['Apache Spark', 'PySpark', 'Pandas', 'Scikit-learn', 'XGBoost', 'LightGBM', 'ETL Processes'],
  'Data Visualization & BI': ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI', 'Looker', 'Creating Intuitive Dashboards'],
  'Web Scraping & Data Extraction': ['Scrapy', 'BeautifulSoup', 'Selenium', 'Custom Crawlers', 'Network-level Analysis', 'DOM-based Analysis'],
  'Project Management & Collaboration': ['Agile/Scrum Methodologies', 'Cross-functional Team Communication', 'Business Requirements Gathering', 'Documentation']
};


const certifications = [
  'Oracle Cloud Infrastructure 2024 Generative AI Certified - Oracle (2024)',
  'HCIA-AI V3.5 Certificate - Huawei (2022)',
  'McKinsey Forward Program - McKinsey & Company (2019)',
  'Foundation of Project Management - Google (2019)',
  'English Proficiency (C2) - EF SET (2018)',
]

const achievements = [
  "Voices of Deep Tech MEA for 2023",
  "3rd place in Business Game x Inetum Consulting",
  "3rd place in ISIC Rabat Hackathon on cyber violence for the project 'Web Shelter'",
  "1st place in Hult Prize local competition at ENSAM Rabat",
  "3rd place in ONDE E-Toufoula Hackathon"
]


export default function ResumePage() {
  useEffect(() => {
    document.title = 'Resume | Benjamin Miller - Software Developer'
  }, [])

  return (
    <div className="min-h-screen relative bg-transparent print:bg-white">
      <AnimatedBackground variant="resume" />

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl opacity-40 group-hover:opacity-60 transition-opacity print:hidden" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-xl print:border-0 print:shadow-none print:bg-white print:backdrop-blur-none">
          <div className="p-8 print:p-6">
            {/* Personal Info Header */}
            <header className="text-center mb-10 print:mb-6">
              <h1 className="text-4xl font-bold text-foreground mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-5">{personalInfo.title}</h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {personalInfo.location}
                </div>
              </div>
              
              {/* Link bar redesigned (website removed as requested) */}
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Link
                  href={personalInfo.freelancer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">upwork.com</span>
                </Link>
                <Link
                  href={personalInfo.portfolioAlt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">cedric.dev</span>
                </Link>
                <Link
                  href={`https://}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Linkedin className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide"></span>
                </Link>
                <Link
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Github className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">github.com/walkure10005</span>
                </Link>
              </div>

              {/* Quick Stats removed per request to remove numbers */}

              <div className="mt-6 flex justify-center gap-4 print:hidden">
                <Button size="sm" variant="outline" onClick={() => window.print()} className="text-xs">Print / PDF</Button>
                <Button size="sm" asChild className="text-xs">
                  <Link href="/contact">Hire Me</Link>
                </Button>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center relative">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:block w-2 h-6 bg-gradient-to-b from-primary to-accent rounded" />
                <Star className="w-5 h-5 mr-2 text-primary drop-shadow" />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base" style={{textAlign: 'justify'}}>
                {professionalSummary}
              </p>
            </section>

            <Separator className="my-8" />

            {/* Experience */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2 text-primary" />
                Professional Experience
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {experience.map((job, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    {/* Timeline bullet improved alignment */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{job.company}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60" style={{ textAlign: 'justify' }}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Education */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                Education
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {education.map((edu, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-base font-semibold text-foreground">{edu.degree}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{edu.school}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Skills */}
      <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
          <div className="flex flex-wrap gap-1">
                      {skillList.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-[10px] tracking-wide uppercase rounded-md bg-muted/70 hover:bg-muted">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Certifications & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Certifications
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-primary" />
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-14 pt-8 border-t border-border/60 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                References available upon request
              </p>
              <div className="flex justify-center gap-4 print:hidden">
                <Button variant="outline" asChild>
                  <Link href="/projects">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Projects
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </div>
      </div>
      </div>{/* end container */}

      {/* Additional Actions */}
      <section className="py-16 bg-card print:hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in working together? I&apos;d love to discuss how my skills and experience 
              can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
  </div>
  )
}
