
import { motion } from "framer-motion";
import { CalendarIcon, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    duration: "Jan 2022 - Present",
    description: [
      "Led a team of 5 developers in building a high-traffic e-commerce platform using React, Node.js, and MongoDB.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%.",
      "Designed and implemented a microservices architecture, improving system scalability and reliability.",
      "Mentored junior developers and conducted code reviews to maintain code quality standards.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "InnovateTech Solutions",
    location: "New York, NY",
    duration: "Mar 2020 - Dec 2021",
    description: [
      "Developed and maintained multiple client-facing web applications using React, Express.js, and PostgreSQL.",
      "Implemented RESTful APIs and GraphQL endpoints for various client projects.",
      "Collaborated with UX/UI designers to implement responsive, user-friendly interfaces.",
      "Optimized database queries and implemented caching strategies, improving application performance by 30%.",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "WebVision Interactive",
    location: "Boston, MA",
    duration: "Jun 2018 - Feb 2020",
    description: [
      "Built responsive and interactive user interfaces using React, Redux, and SCSS.",
      "Implemented client-side form validation and state management for complex multi-step forms.",
      "Collaborated with backend developers to integrate frontend components with RESTful APIs.",
      "Conducted cross-browser testing and fixed compatibility issues across different browsers and devices.",
    ],
  },
  {
    id: 4,
    role: "Web Development Intern",
    company: "CodeLab Studios",
    location: "Remote",
    duration: "Jan 2018 - May 2018",
    description: [
      "Assisted in the development of client websites using HTML, CSS, and JavaScript.",
      "Collaborated with senior developers to implement new features and fix bugs.",
      "Participated in code reviews and team meetings to improve development skills.",
      "Gained hands-on experience with version control using Git and project management using Jira.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold mb-2"
          >
            MY PROFESSIONAL JOURNEY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Work Experience
          </motion.h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2 md:pr-8 md:pl-0 md:text-right px-4 mb-6 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
                    <div className="flex items-center gap-2 mt-2 text-gray-600 md:justify-end">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-gray-600 md:justify-end">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"} px-4`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <ul className="list-disc space-y-2 pl-5">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
