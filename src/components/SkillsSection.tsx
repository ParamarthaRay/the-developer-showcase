import { motion } from "framer-motion";

const techSkills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", level: 85 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 80 },
    ],
  },
  {
    category: "Technologies & Frameworks",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Angular", level: 80 },
      { name: "Laravel", level: 75 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Data Structures", level: 85 },
      { name: "Algorithms", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Problem Solving", level: 90 },
      { name: "Responsive Design", level: 85 },
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
