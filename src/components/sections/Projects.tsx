import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

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

  const projects = [
    {
      title: "Customer Support & E-Commerce Platform",
      description:
        "Developed a responsive front-end interface using React.js, focused on user experience and performance with real-time chat and order management.",
      image: "/api/placeholder/400/250",
      category: "Full Stack",
      technologies: ["React.js", "Stripe API", "TailwindCSS"],
      features: [
        "Real-time chat interfaces (1-on-1 and group)",
        "Secure user authentication screens",
        "Order management views with Stripe checkout",
        "Comprehensive dashboard with user activity",
      ],
      github: "https://github.com/musama",
      live: "https://assist-kappa.vercel.app",
      status: "Completed",
    },
    {
      title: "Company Website",
      description:
        "Developed a modern, high-performance company website using Next.js and TypeScript for robust and scalable architecture with advanced animations.",
      image: "/api/placeholder/400/250",
      category: "Frontend",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      features: [
        "Modern, high-performance design",
        "Advanced animations with Framer Motion",
        "Responsive design across devices",
        "TypeScript for robust architecture",
      ],
      github: "https://github.com/musama",
      live: "https://upmotion-v2.vercel.app",
      status: "Completed",
    },
    {
      title: "Ads Campaign Portal",
      description:
        "Integrated REST APIs into a static HTML-based portal using vanilla JavaScript and DOM manipulation with dynamic admin and user panels.",
      image: "/api/placeholder/400/250",
      category: "Frontend",
      technologies: ["JavaScript", "HTML5", "CSS3", "REST APIs"],
      features: [
        "Dynamic admin and user panels",
        "Campaign creation and media uploads",
        "Approval workflows",
        "Manual state management",
      ],
      github: "https://github.com/musama",
      live: "https://demo.com",
      status: "Completed",
    },
    {
      title: "Ali Zafar Foundation Website",
      description:
        "Developed and launched a full-featured charity website using WordPress, tailored to the foundation's branding and mission with secure donation system.",
      image: "/api/placeholder/400/250",
      category: "WordPress",
      technologies: ["WordPress", "WooCommerce", "Custom Plugin Integration"],
      features: [
        "Secure online donation system",
        "WooCommerce integration",
        "Bank-provided payment plugin",
        "Mobile responsive design",
      ],
      github: "https://github.com/musama",
      live: "https://www.alizafarfoundation.org/",
      status: "Completed",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "WordPress"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-slate-900/30 relative"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and the solutions I've built
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="text-slate-400" size={20} />
            <span className="text-slate-400 font-medium">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover-lift hover-glow reveal animate-scale-in stagger-${
                (index % 6) + 1
              } flex flex-col h-full`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-6xl text-slate-600">🚀</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.live}
                    className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
                    aria-label="View Live"
                  >
                    <Eye size={20} />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-slate-700 rounded-full text-white hover:bg-slate-600 transition-colors duration-300 transform hover:scale-110"
                    aria-label="View Code"
                  >
                    <Github size={20} />
                  </a>
                </div>
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title and Category */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <span className="text-blue-400 text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold text-sm mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-xs text-slate-400"
                      >
                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6 flex-grow">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto">
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700/50 hover:text-white transition-all duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {[
            { label: "Projects Completed", value: "25+" },
            { label: "Technologies Used", value: "20+" },
            { label: "Client Satisfaction", value: "100%" },
            { label: "Code Commits", value: "1000+" },
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
      <div className="absolute top-40 left-10 w-20 h-20 bg-blue-500/5 rounded-full animate-float"></div>
      <div
        className="absolute bottom-40 right-10 w-28 h-28 bg-purple-500/5 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  );
};

export default Projects;
