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
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Leading development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Increased test coverage from 60% to 95%",
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "PostgreSQL",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2021 - 2022",
      type: "Full-time",
      description:
        "Developed MVP for fintech startup from ground up. Built responsive web applications and RESTful APIs handling financial transactions.",
      achievements: [
        "Built entire frontend application in React with TypeScript",
        "Designed and implemented secure payment processing system",
        "Achieved 99.9% uptime for critical financial services",
        "Collaborated with design team to create intuitive UX",
      ],
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Stripe API",
        "JWT",
        "Material-UI",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2020 - 2021",
      type: "Internship",
      description:
        "Contributed to client projects building responsive websites and web applications. Gained experience in modern frontend frameworks and design systems.",
      achievements: [
        "Delivered 8 client projects on time and within budget",
        "Improved website performance scores by average of 25%",
        "Created reusable component library for team",
        "Received outstanding intern performance review",
      ],
      technologies: [
        "Vue.js",
        "Sass",
        "Webpack",
        "Figma",
        "Git",
        "Responsive Design",
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
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-transparent"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline dot and period */}
                <div className="flex-shrink-0 flex items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse-glow">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div className="mt-4 text-center">
                      <div className="text-blue-400 font-semibold text-sm">
                        {exp.period}
                      </div>
                      <div className="text-slate-500 text-xs">{exp.type}</div>
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover-lift hover-glow">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
