
import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Nrxen It Technologies',
    period: 'July 2024 - Present',
    description: [
      'Developed and implemented the Nimmos 2.0 project, focusing on front-end development and functionality enhancements.',
      'Tech Stack: Nextjs, Hasura, Graphql'
    ],
    link: '#'
  },
  {
    title: 'Software Engineering Intern',
    company: 'Nrxen It Technologies',
    period: 'Feb 2024 - July 2024',
    description: [
      'Developed and implemented the Railway Housekeeping Management System project, with a primary focus on frontend development and functionality creation.',
      'Tech Stack: Nextjs, Hasura, Graphql'
    ],
    link: '#'
  },
  {
    title: 'Backend Developer Intern',
    company: 'PMN Patralok',
    period: 'June 2023 - Dec 2023',
    description: [
      'Implemented social media login and Image compression',
      'Worked closely with the development team to troubleshoot and resolve backend issues.',
      'Tech Stack: Laravel, Javascript, Mysql, Php'
    ],
    link: '#'
  }
];

const Experience = () => {
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
    <section id="experience" className="section-container bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <span className="badge-subtle">Career Journey</span>
        <h2 className="section-title mt-2">Professional Experience</h2>
        
        <div 
          ref={containerRef}
          className="space-y-12 stagger-animate"
        >
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 card-hover"
            >
              <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <span className="badge-subtle">{exp.period}</span>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
              
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  View Project <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
