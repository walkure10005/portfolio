"use client";

import { Button } from "@/components/ui/button";
import {Bot, Vote, School } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard, ProjectData } from "@/components/ui/project-card";

// Projects updated to reflect your latest work.
const projects: ProjectData[] = [
    {
        id: 'erp-system-diam-odoo',
        title: 'ERP System for DIAM Deutschland GmbH',
        description: 'Built a customized ERP solution using Odoo to streamline business operations, integrating modules for sales, inventory, and accounting.',
        status: "Completed",
        tags: ['Odoo', 'PHP', 'ERP', 'Docker', 'AWS'],
        icon: Bot,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
        image: "/projects/odoo.png",
        liveHref: "#", // Placeholder until deployment
        githubHref: "#" // Disabled: no public repository yet
    },
    {
        id: 'commonlit-lms-software-dev',
        title: 'Learning Platform Analysis for CommonLit',
        description: 'Improved user experience by streamlining navigation and enhancing accessibility across the reading and feedback modules.',
        status: "Live",
        tags: ['Ruby on Rails', 'LMS', 'Amazon Redshift', 'Kubernetes'],
        icon: School,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
        liveHref: "#",
        githubHref: "#", 
        image: "/projects/commonlit.png",
    },
    {
        id: 'ai-jockey-betting-program',
        title: 'AI Jockey Challenge Betting Program',
        description: 'Created an AI-driven program to analyze race data and predict outcomes for the "Jockey Challenge," utilizing web scraping and machine learning models.',
        status: "Conceptual Project",
        tags: ['Python', 'Web Scraping', 'scikit-learn', 'Flash'],
        icon: Vote,
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
        image: "/projects/aijockey.png",
    liveHref: "#", // No live demo yet
    githubHref: "#" // Disabled: concept/no repo
    },
];

export function FeaturedProjects() {
    return (
        <section className="py-24 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        My Featured{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                            Projects
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        A selection of my work that demonstrates my skills in software engineering, from concept to deployment.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Updated Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Button asChild size="lg" className="font-semibold">
                        <Link href="/projects">
                            View All Projects
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}