import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projectCategories = ["All", "Web"];

const projects = [
  {
    id: 3,
    title: "DAO Voting App",
    description:
      "A decentralized voting web application leveraging the MERN stack and smart contracts on Ethereum. Features include proposal creation, voting, real-time results, and Web3.js integration with MetaMask for wallet authentication.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0",
    skills: [
      "MERN Stack",
      "Blockchain",
      "Web3.js",
      "Ethereum",
      "Smart Contracts",
      "MetaMask",
    ],
    category: "Web",
    demoLink: "https://dao-voting-seven.vercel.app/",
    githubLink: "https://github.com/ParamarthaRay/DAO-Voting",
    date: "2025-03",
  },
  {
    id: 4,
    title: "E-LMS",
    description:
      "A feature-rich e-learning platform built with Laravel, enabling course management, student enrollment, quizzes, and performance tracking. Includes role-based access control and responsive design for enhanced user engagement.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    skills: ["Laravel", "MySQL", "PHP", "Responsive Design", "Role-based Access"],
    category: "Web",
    demoLink: "https://example.com",
    githubLink: "https://github.com/ParamarthaRay/Laravel-E-LMS",
    date: "2025-02",
  },
  {
    id: 1,
    title: "TMS Web App",
    description:
      "A responsive, full-stack web application to streamline travel planning and booking. Users can easily browse, select, and book travel options while managing their itineraries. Integrated real-time APIs for flight, hotel, and transport data.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    skills: ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "REST API"],
    category: "Web",
    demoLink: "https://react-project-travel.vercel.app/",
    githubLink: "https://github.com/ParamarthaRay/react-project-travel",
    date: "2024-12",
  },
  {
    id: 2,
    title: "Event Organizer App",
    description:
      "A dynamic event management platform that allows users to create, manage, and RSVP to events. Features include event listings, real-time updates, and user authentication for secure event registration.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    skills: ["Bootstrap", "Handlebars", "MongoDB", "Node.js", "Express"],
    category: "Web",
    demoLink: "https://example.com",
    githubLink: "https://github.com/ParamarthaRay/EventManagementWebsite",
    date: "2024-10",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
    className="bg-yellow-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
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
            className="text-xs font-medium bg-primary/10 text-primary- py-1 px-2 rounded-full"
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 shadow-xl rounded-lg bg-white">
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
            Web Projects
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10 p-4 bg-white rounded-lg shadow-md">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="basis-full md:basis-full">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-6"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </CarouselItem>
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-16" />
            <CarouselNext className="-right-16" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
