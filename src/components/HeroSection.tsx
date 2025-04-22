
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 md:max-w-2xl"
          >
            <span className="inline-block text-primary font-semibold mb-2">
              Full Stack Web Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm a passionate full stack developer with expertise in building modern web applications. 
              I specialize in creating responsive, user-friendly interfaces coupled with robust backend solutions.
              I love solving complex problems and turning ideas into reality through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/resume.pdf" download>
                  Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-80 h-80 md:w-96 md:h-96 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
              <div className="absolute inset-4 bg-primary/20 rounded-full"></div>
              <div className="absolute inset-8 bg-primary/30 rounded-full"></div>
              <div className="absolute inset-12 bg-white rounded-full overflow-hidden">
                {/* Replace with your actual profile image */}
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
