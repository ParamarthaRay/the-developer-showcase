import { motion } from "framer-motion";
import { CalendarIcon, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Freelancer",
    company: "Kohinoor Tour and Travels",
    location: "Remote",
    duration: "May 2024 - October 2024",
    description: [
      "Contributed to the advancement of the organization's robust Tourism Booking web application.",
      "Developed a responsive tourism agency website offering seamless travel planning and booking.",
      "Enhanced application performance by implementing server-side pagination and nested child pagination.",
      "Managed UI design enabling users to become efficient in tour booking and further offer user-engaging experience.",
    ],
  },
  {
    id: 2,
    role: "Problem Setter Intern",
    company: "Coden Asylums",
    location: "Remote",
    duration: "Feb 2024 - Aug 2024",
    description: [
      "Designed and developed competitive programming problems focused on data structures and algorithms for Code Asylums contests.",
      "Built Java scripts to generate random input, automate test case creation, and produce expected outputs for problem validation.",
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
