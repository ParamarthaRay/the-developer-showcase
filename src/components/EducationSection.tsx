import { motion } from "framer-motion";
import { Award, CalendarIcon, GraduationCap, MapPin, Trophy } from "lucide-react";

// Import the certificate images
import cert1 from './nptelcloudcomputing.jpg';
import cert2 from './boardinfinity.jpg';
import cert3 from './webphp.jpg';
import cert4 from './jswithnodejs.jpg';

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "2022 - Present",
    description:
      "Currently pursuing Computer Science and Engineering with focus on web development and programming.",
    gpa: "8.00",
  },
  {
    id: 2,
    degree: "Higher Secondary (12th) - Science",
    institution: "Hindi Higher Secondary School",
    location: "Agartala, Tripura",
    duration: "2020 - 2022",
    description: "Completed 12th grade with focus on Science subjects.",
    gpa: "90.00%",
  },
  {
    id: 3,
    degree: "Secondary Education (10th)",
    institution: "Holy Cross School",
    location: "Agartala, Tripura",
    duration: "2018 - 2020",
    description:
      "Completed secondary education with strong academic foundation.",
    gpa: "95.40%",
  },
];

const certifications = [
  {
    id: 3,
    name: "NPTEL Certification in Cloud Computing",
    issuer: "National Programme on Technology Enhanced Learning",
    date: "2025-04-01",
    credential: "NPTEL-WD2025-CERT-12345",
    imagePath: cert1,
  },
  {
    id: 4,
    name: "BOARD INFINITY Certification in Database Management & SQL",
    issuer: "BOARD INFINITY",
    date: "2025-03-01",
    credential: "BOARD-SE-2025-67890",
    imagePath: cert2,
  },
  {
    id: 1,
    name: "Building Web Applications in PHP",
    issuer: "Coursera",
    date: "2024-11-01",
    credential: "EQ4RITK1JOCR",
    imagePath: cert3,
  },
  {
    id: 2,
    name: "Server Side JavaScript with NodeJS",
    issuer: "Coursera",
    date: "2024-03-01",
    credential: "6SQ8D68J9SMB",
    imagePath: cert4,
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const achievements = [
  {
    id: 1,
    title: "LeetCode 100 Days Badge",
    event: "LeetCode 2025",
    description:
      "Earned the prestigious 100 Days Badge by consistently solving problems daily, showcasing commitment to continuous learning.",
    date: "2025-03-01",
  },
  {
    id: 2,
    title: "LeetCoding Challenge Streak",
    event: "LeetCode Challenges 2025",
    description:
      "Successfully completed the January, February, and March LeetCoding Month Challenges, strengthening problem-solving and coding speed.",
    date: "2025-02-01",
  },
  {
    id: 3,
    title: "Global LeetCode Ranking",
    event: "LeetCode Global Platform",
    description:
      "Secured a global rank of 700,000+ among millions of users, reflecting active participation and steady progress on the platform.",
    date: "2024-12-01",
  },
  {
    id: 4,
    title: "Dean’s List – Top 10% of Batch",
    event: "Academic Excellence",
    description:
      "Recognized as part of the top 10% performers in the batch based on academic performance and consistent excellence.",
    date: "2024-10-01",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const EducationCard = ({
  education,
  index,
}: {
  education: typeof educationData[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-start">
      <div className="bg-primary/10 p-3 rounded-full mr-4">
        <GraduationCap className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-green-600">{education.degree}</h3>
        <h4 className="text-lg font-medium text-green-700">{education.institution}</h4>
        <div className="flex items-center gap-2 mt-2 text-black">
          <CalendarIcon className="h-4 w-4" />
          <span>{education.duration}</span>
        </div>
        <div className="flex items-center gap-2 mt-1 text-black">
          <MapPin className="h-4 w-4" />
          <span>{education.location}</span>
        </div>
        {education.gpa && (
          <div className="mt-2 font-medium text-black">GPA: {education.gpa}</div>
        )}
        <p className="mt-3 text-black">{education.description}</p>
      </div>
    </div>
  </motion.div>
);

const CertificationCard = ({
  certification,
  index,
}: {
  certification: typeof certifications[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="flex flex-col justify-between bg-orange-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <Award className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-bold text-green-600">{certification.name}</h4>
        <p className="text-sm text-black">
          {certification.issuer} • Issued {certification.date}
          {certification.credential && ` • Credential: ${certification.credential}`}
        </p>
      </div>
    </div>
    <div className="mt-4">
      <a
        href={certification.imagePath}
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200 text-sm"
      >
        View Certificate
      </a>
    </div>
  </motion.div>
);

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: typeof achievements[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-pink-300 p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <div className="flex items-start">
      <div className="bg-primary/10 p-2 rounded-full mr-4">
        <Trophy className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-green-600">{achievement.title}</h3>
        <p className="font-medium text-green-700">{achievement.event}</p>
        <p className="mt-2 text-black">{achievement.description}</p>
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
            className="inline-block text-green-700 font-semibold mb-2 text-xl md:text-2xl"
          >
            MY QUALIFICATIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-4xl font-bold text-green-700"
          >
            EDUCATION
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </div>

        <div className="my-16">
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-semibold text-green-700"
            >
              CERTIFICATIONS
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {certifications.map((certification, index) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="my-16">
          <div className="text-center mb-10">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-semibold text-green-700"
            >
              ACHIEVEMENTS
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
