import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/musama", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/musama",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com/musama", label: "Twitter" },
    { icon: Mail, href: "mailto:ser.musama@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-900/50 border-t border-slate-800/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Muhammad Usama
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Front-End Developer with hands-on experience building responsive
                and user-friendly web interfaces using React.js and modern
                technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 hover-lift animate-scale-in stagger-${
                    index + 1
                  }`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`text-slate-400 hover:text-white transition-colors duration-300 animate-slide-in-left stagger-${
                      index + 1
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="text-slate-400">
                <p className="text-sm">Email</p>
                <a
                  href="mailto:ser.musama@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  ser.musama@gmail.com
                </a>
              </div>
              <div className="text-slate-400">
                <p className="text-sm">Phone</p>
                <a
                  href="tel:+923025059077"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  +92 302 5059077
                </a>
              </div>
              <div className="text-slate-400">
                <p className="text-sm">Location</p>
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© {currentYear} Muhammad Usama. Made with</span>
              <Heart className="text-red-400 animate-pulse" size={16} />
              <span>and lots of coffee</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 text-slate-400 rounded-full hover:text-white hover:bg-blue-500/20 transition-all duration-300 hover-lift"
            >
              <ArrowUp size={16} />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full animate-float"></div>
      <div
        className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-500/5 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            animation: "grid-move 30s linear infinite",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
