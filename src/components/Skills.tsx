
import { useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'C', 'C++', 'Java', 'PHP', 'Python']
  },
  {
    title: 'Frameworks',
    skills: ['Laravel', 'Node.js', 'Express.js', 'React.js']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Hasura', 'GraphQL']
  },
  {
    title: 'Front End',
    skills: ['HTML', 'CSS', 'React.js', 'Next.js']
  }
];

const Skills = () => {
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
    <section id="skills" className="section-container">
      <div className="max-w-4xl mx-auto">
        <span className="badge-subtle">Technical Expertise</span>
        <h2 className="section-title mt-2">Skills</h2>
        
        <div 
          ref={containerRef}
          className="grid sm:grid-cols-2 gap-6 sm:gap-8 stagger-animate"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 card-hover"
            >
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-bar"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
