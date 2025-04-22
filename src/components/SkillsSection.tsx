
import { motion } from "framer-motion";

const techSkills = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "TailwindCSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Jest", level: 80 },
      { name: "Webpack", level: 75 },
    ],
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

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <motion.div 
    variants={item}
    className="mb-6"
  >
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium">{name}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-primary h-2 rounded-full"
      ></motion.div>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold mb-2"
          >
            MY TECH STACK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Technologies & Skills
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {techSkills.map((tech) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-200">
                {tech.category}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {tech.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
