import React, { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "Front-End Developer",
    "React.js Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToNext = () => {
    const element = document.querySelector("#education");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-8 animate-slide-up">
            <span className="text-blue-400 text-lg font-medium">
              Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up stagger-1">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Muhammad Usama
            </span>
          </h1>

          {/* Animated Title */}
          <div className="mb-8 animate-slide-up stagger-2">
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 h-16 flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up stagger-3">
            Front-End Developer with hands-on experience building responsive and
            user-friendly web interfaces using React.js. Turning design mockups
            into clean, interactive, and reusable components.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up stagger-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover-lift hover-glow transition-all duration-300 animate-pulse-glow">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 hover-lift">
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-slide-up stagger-5">
            {[
              {
                icon: Github,
                href: "https://github.com/musama",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/musama",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:ser.musama@gmail.com",
                label: "Email",
              },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className={`p-3 bg-slate-800/50 rounded-full text-slate-400 hover:text-white hover:bg-blue-500/20 transition-all duration-300 hover-lift animate-scale-in stagger-${
                  index + 1
                }`}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-white transition-colors duration-300 animate-bounce-gentle"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-500/10 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-pink-500/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};

export default Hero;
