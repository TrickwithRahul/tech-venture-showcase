
import { useEffect, useRef } from 'react';

const educationData = [
  {
    institution: 'Om Dayal Group of Institutions',
    degree: 'B. Tech in Computer Science',
    period: '2020 - 2024',
    score: 'SGPA: 8.83'
  },
  {
    institution: 'Vikram Vidyalaya branch',
    degree: 'Higher Secondary',
    period: '2019',
    score: 'Percentage: 61'
  },
  {
    institution: 'Howrah Shiksha Sadan High School',
    degree: 'Secondary',
    period: '2017',
    score: 'Percentage: 74'
  }
];

const Education = () => {
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
    <section id="education" className="section-container">
      <div className="max-w-4xl mx-auto">
        <span className="badge-subtle">Academic Background</span>
        <h2 className="section-title mt-2">Education</h2>
        
        <div 
          ref={containerRef}
          className="grid gap-6 sm:gap-8 stagger-animate"
        >
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 card-hover"
            >
              <div className="flex flex-wrap gap-4 items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
                  <p className="text-lg text-muted-foreground">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <span className="badge-subtle mb-2">{edu.period}</span>
                  <p className="text-sm font-medium text-primary">{edu.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
