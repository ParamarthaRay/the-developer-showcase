
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectCategories = ["All", "Web", "Mobile", "Backend", "DevOps"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    skills: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
    category: "Web",
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects. Built with Next.js and PostgreSQL, featuring real-time updates with WebSockets.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    skills: ["Next.js", "PostgreSQL", "TypeScript", "Prisma", "Tailwind CSS"],
    category: "Web",
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/taskmanager",
  },
  {
    id: 3,
    title: "Weather Forecast API",
    description: "A RESTful API for retrieving weather forecasts. Built with Node.js and Express, integrating with external weather data providers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    skills: ["Node.js", "Express", "REST API", "Docker", "JWT"],
    category: "Backend",
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/weather-api",
  },
  {
    id: 4,
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile application for tracking fitness activities and progress. Built with React Native and Firebase.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    skills: ["React Native", "Firebase", "Redux", "Expo", "Google Maps API"],
    category: "Mobile",
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/fitness-tracker",
  },
  {
    id: 5,
    title: "CI/CD Pipeline for Microservices",
    description: "A comprehensive CI/CD pipeline for deploying microservices to Kubernetes. Built with GitHub Actions, Docker, and Kubernetes.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "AWS"],
    category: "DevOps",
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/cicd-pipeline",
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description: "A real-time chat application with private and group messaging. Built with Socket.io, React, and MongoDB.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    skills: ["React", "Socket.io", "MongoDB", "Express", "JWT"],
    category: "Web",
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/chat-app",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    variants={item}
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium bg-primary/10 text-primary py-1 px-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        </Button>
        <Button size="sm" asChild>
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold mb-2"
          >
            MY WORK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Recent Projects
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
