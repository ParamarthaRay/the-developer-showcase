
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NavbarItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const SocialLinks = [
  { Icon: Github, href: "https://github.com/ParamarthaRay", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/paramartha-ray/", label: "LinkedIn" },
  { Icon: Code2, href: "https://leetcode.com/u/Paramartha_Ray/", label: "LeetCode" },
  { Icon: Mail, href: "rayparamartha@gmail.com", label: "Email" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          <span className="sr-only">Portfolio</span>
          <span className="flex items-center gap-2">
            <span>WebDev</span>
            <span className="text-primary/190">Portfolio</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {NavbarItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3">
            {SocialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NavbarItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMobileMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              {SocialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
