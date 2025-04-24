import { ExternalLink, Github, Heart, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ParamarthaRay", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/paramartha-ray", label: "LinkedIn" },
  { icon: Mail, href: "mailto:paramartharay@example.com", label: "Email" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold">
              <span>Dev</span>
              <span className="text-primary">Portfolio</span>
            </span>
            <p className="mt-2 text-gray-400">Building the web, one line at a time.</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p className="flex items-center justify-center gap-1">
            © {year} Paramartha Ray. All rights reserved.
            <span className="inline-flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Paramartha Ray
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
