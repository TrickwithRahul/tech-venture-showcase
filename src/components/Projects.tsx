
import { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Chat-app',
    description: 'A real-time chat application that allows users to log in with Google authentication and start chatting seamlessly. Built with Firebase for live data storage and Google Auth for secure user authentication.',
    techStack: ['React.js', 'Firebase'],
    links: {
      github: 'https://github.com/myselfrahul6290/chat-app',
      live: '#'
    },
    date: 'Jan 2024'
  },
  {
    title: 'NonVegKing',
    description: 'NonVeg king is a food ordering website design with features including Register/Login, Add to cart, Filter menu, and Photo Gallery.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/myselfrahul6290/NonVegKing',
      live: '#'
    },
    date: 'Mar 2023'
  }
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current?.classList.add('revealed');
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section-container bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <span className="badge-subtle">Featured Work</span>
        <h2 className="section-title mt-2">Projects</h2>
        
        <div 
          ref={containerRef}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 stagger-animate"
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-hover"
            >
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="badge-subtle text-xs">{project.date}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
