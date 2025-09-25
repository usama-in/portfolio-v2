import React, { useEffect, useRef } from "react";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";

const Experience: React.FC = () => {
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
              }, index * 150);
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

  const experiences = [
    {
      title: "Front End Developer",
      company: "Upmotion Tech",
      location: "Remote",
      period: "Dec 2024 - Present",
      type: "Full-time",
      description:
        "Developing responsive web applications using React.js and Next.js. Building clean, mobile-first UIs with modern technologies and best practices.",
      achievements: [
        "Developed responsive web applications using React.js and Next.js",
        "Styled components with Tailwind CSS and styled-components for clean, mobile-first UIs",
        "Integrated REST APIs, including Firebase Realtime Database",
        "Built admin panels with role-based access, authentication, and protected routes",
        "Worked with Redux Toolkit and Context API for state management",
        "Focused on reusable components, performance optimization, and clean code practices",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Styled Components",
        "Redux Toolkit",
        "Firebase",
      ],
    },
    {
      title: "Front End Intern",
      company: "Xovolt Technologies",
      location: "Remote",
      period: "July 2024 - Nov 2024",
      type: "Internship",
      description:
        "Assisted in developing UI components using React.js and modern JavaScript. Gained hands-on experience with responsive layouts and API integration.",
      achievements: [
        "Assisted in developing UI components using React.js and modern JavaScript (ES6+)",
        "Collaborated on responsive layouts with Tailwind CSS and styled-components",
        "Supported integration of REST APIs and helped test frontend-backend connectivity",
        "Gained experience with React Router and basic state management using Context API",
      ],
      technologies: [
        "React.js",
        "JavaScript ES6+",
        "Tailwind CSS",
        "Styled Components",
        "React Router",
        "Context API",
      ],
    },
    {
      title: "WordPress Website Developer",
      company: "Brik Solutions",
      location: "Remote",
      period: "Feb 2021 - March 2022",
      type: "Full-time",
      description:
        "Developed and customized WordPress websites using premium themes and page builders. Ensured responsive design and performance optimization across multiple sites.",
      achievements: [
        "Developed and customized WordPress websites using premium themes, page builders (Elementor, WPBakery), and custom code (HTML, CSS, JS)",
        "Implemented and configured plugins for SEO, performance optimization, security, and form handling",
        "Modified existing themes and created custom templates to meet client or project requirements",
        "Ensured responsive design, cross-browser compatibility, and optimized site speed",
        "Performed regular maintenance, updates, and troubleshooting across multiple WordPress sites",
      ],
      technologies: [
        "WordPress",
        "Elementor",
        "WPBakery",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-slate-900/30 relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My professional journey and the impact I've made in the tech
            industry
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 reveal">
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-14 top-32 w-0.5 h-40 bg-gradient-to-b from-blue-400 to-transparent"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline dot and period */}
                <div className="flex-shrink-0 w-32 flex items-start">
                  <div className="flex flex-col items-center w-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div className="mt-4 text-center w-full">
                      <div className="text-blue-400 font-semibold text-sm break-words">
                        {exp.period}
                      </div>
                      <div className="text-slate-500 text-xs break-words">
                        {exp.type}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 h-full bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover-lift hover-glow">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-blue-400 mb-2">
                        <span className="font-semibold">{exp.company}</span>
                        <div className="flex items-center space-x-1 text-slate-400 text-sm">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <button className="self-start mt-2 md:mt-0 p-2 text-slate-400 hover:text-blue-400 transition-colors duration-300">
                      <ExternalLink size={20} />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Key Achievements:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-400 text-sm">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-500/30 transition-colors duration-300 animate-scale-in stagger-${
                            techIndex + 1
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Projects Completed", value: "25+" },
            { label: "Companies Worked", value: "3" },
            { label: "Team Members Led", value: "5" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover-lift animate-scale-in stagger-${
                index + 1
              }`}
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-purple-500/5 rounded-full animate-float"></div>
      <div
        className="absolute bottom-40 right-10 w-28 h-28 bg-blue-500/5 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Experience;
