import React, { useEffect, useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education: React.FC = () => {
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

  const educationData = [
    {
      degree: "BS Computer Science",
      institution: "University of Sargodha",
      location: "Sargodha, Pakistan",
      period: "2016 - 2020",
      gpa: "3.7/4.0",
      description:
        "Comprehensive study of computer science fundamentals, software development, algorithms, and system design with focus on web technologies and programming languages.",
      achievements: [
        "Completed 4-year comprehensive CS program",
        "Strong foundation in programming and algorithms",
        "Hands-on experience with multiple programming languages",
      ],
    },
    {
      degree: "AWS Certified Solutions Architect - Associate",
      institution: "Amazon Web Services",
      location: "Online",
      period: "Valid until: 06/06/2027",
      gpa: "Validation Number: 9cc4e657618447ec89ee2513b62839dd",
      description:
        "Certified in designing distributed systems on AWS platform. Demonstrated ability to design and deploy scalable, highly available, and fault-tolerant systems.",
      achievements: [
        "AWS Certified Solutions Architect - Associate",
        "Validation Number: 9cc4e657618447ec89ee2513b62839dd",
        "Validate At: https://aws.amazon.com/verification",
        "Valid until: 06/06/2027",
      ],
    },
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My academic journey and the foundation of my technical expertise
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {educationData.map((edu, index) => (
              <div key={index} className="reveal">
                {/* Education Card */}
                <div className="h-full bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover-lift hover-glow">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <GraduationCap className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <div className="text-right text-sm text-slate-400">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* GPA */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-slate-400 text-sm flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {[
            { label: "Years of Study", value: "6+" },
            { label: "GPA Average", value: "3.85" },
            { label: "Research Papers", value: "2" },
            { label: "Academic Awards", value: "5" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/30 hover-lift animate-scale-in stagger-${
                index + 1
              }`}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/5 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-purple-500/5 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  );
};

export default Education;
