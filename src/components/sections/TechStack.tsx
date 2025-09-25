import React, { useEffect, useRef } from "react";
import {
  Code,
  Database,
  Cloud,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";

const TechStack: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".reveal");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      technologies: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "MUI", level: 80 },
        { name: "Styled Components", level: 85 },
      ],
    },
    {
      title: "State Management & Tools",
      icon: Code,
      color: "from-green-400 to-emerald-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      technologies: [
        { name: "Redux Toolkit", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "WordPress", level: 85 },
        { name: "CSS Modules", level: 80 },
      ],
    },
    {
      title: "Content Management",
      icon: Globe,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      technologies: [
        { name: "WordPress", level: 90 },
        { name: "Elementor", level: 85 },
        { name: "WPBakery", level: 80 },
        { name: "WooCommerce", level: 85 },
        { name: "Custom Plugins", level: 75 },
        { name: "SEO Optimization", level: 80 },
      ],
    },
  ];

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="py-20 bg-slate-900/30 relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`reveal ${category.bgColor} ${category.borderColor} border rounded-xl p-6 hover-lift hover-glow transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="reveal">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">
                        {tech.name}
                      </span>
                      <span className="text-slate-400 text-sm">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {[
            { label: "Technologies", value: "50+" },
            { label: "Projects Built", value: "100+" },
            { label: "Years Experience", value: "4+" },
            { label: "Certifications", value: "8" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover-lift animate-scale-in stagger-${
                index + 1
              }`}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-cyan-500/5 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/5 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
};

export default TechStack;
