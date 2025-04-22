
import { motion } from "framer-motion";
import { Award, CalendarIcon, GraduationCap, MapPin, Trophy } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    location: "San Francisco, CA",
    duration: "2016 - 2018",
    description: "Specialized in Web Technologies and Distributed Systems. Completed thesis on Scalable Microservices Architecture for Web Applications.",
    gpa: "3.9/4.0",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Software Engineering",
    institution: "State College of Engineering",
    location: "Boston, MA",
    duration: "2012 - 2016",
    description: "Focused on Software Development, Data Structures, and Algorithms. Participated in multiple hackathons and coding competitions.",
    gpa: "3.8/4.0",
  },
];

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Apr 2022",
    expires: "Apr 2025",
  },
  {
    id: 2,
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "Jan 2021",
    expires: "Jan 2024",
  },
  {
    id: 3,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB Inc.",
    date: "Jun 2020",
    expires: "Jun 2023",
  },
];

const achievements = [
  {
    id: 1,
    title: "Best Web Application Award",
    event: "Global Hackathon 2022",
    description: "Developed an innovative web application for real-time disaster management and resource allocation.",
  },
  {
    id: 2,
    title: "1st Place - Full Stack Challenge",
    event: "CodeFest 2021",
    description: "Built a complete full-stack e-learning platform in 48 hours, featuring real-time collaboration and interactive assessments.",
  },
  {
    id: 3,
    title: "Top Contributor",
    event: "Open Source Project - WebFramework",
    description: "Recognized for significant contributions to a popular open-source web framework, including performance optimizations and new features.",
  },
  {
    id: 4,
    title: "Technology Innovation Award",
    event: "Developer Conference 2020",
    description: "Awarded for creating an accessibility toolkit that helps developers build more inclusive web applications.",
  },
];

const EducationCard = ({ education, index }: { education: typeof educationData[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex items-start">
      <div className="bg-primary/10 p-3 rounded-full mr-4">
        <GraduationCap className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-bold">{education.degree}</h3>
        <h4 className="text-lg text-primary font-medium">{education.institution}</h4>
        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <CalendarIcon className="h-4 w-4" />
          <span>{education.duration}</span>
        </div>
        <div className="flex items-center gap-2 mt-1 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{education.location}</span>
        </div>
        {education.gpa && (
          <div className="mt-2 font-medium">GPA: {education.gpa}</div>
        )}
        <p className="mt-3 text-gray-600">{education.description}</p>
      </div>
    </div>
  </motion.div>
);

const CertificationCard = ({ certification, index }: { certification: typeof certifications[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
  >
    <div className="bg-primary/10 p-2 rounded-full">
      <Award className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h4 className="font-bold">{certification.name}</h4>
      <p className="text-sm text-gray-600">
        {certification.issuer} • Issued {certification.date}
        {certification.expires && ` • Expires ${certification.expires}`}
      </p>
    </div>
  </motion.div>
);

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-5 rounded-lg shadow-md"
  >
    <div className="flex items-start">
      <div className="bg-primary/10 p-2 rounded-full mr-4">
        <Trophy className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-bold">{achievement.title}</h3>
        <p className="text-primary font-medium">{achievement.event}</p>
        <p className="mt-2 text-gray-600">{achievement.description}</p>
      </div>
    </div>
  </motion.div>
);

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold mb-2"
          >
            MY QUALIFICATIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Education & Achievements
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Certifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} certification={cert} index={index} />
            ))}
          </div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8 text-center"
        >
          Awards & Achievements
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
