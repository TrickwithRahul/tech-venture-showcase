
import { useEffect, useRef } from 'react';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const About = () => {
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
    <section id="about" className="section-container">
      <div 
        ref={containerRef}
        className="grid md:grid-cols-2 gap-8 md:gap-12 stagger-animate"
      >
        <div>
          <span className="badge-subtle">About Me</span>
          <h2 className="section-title mt-2">A passionate software engineer from Howrah, India.</h2>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              I'm a software engineer with experience in both frontend and backend development. 
              Currently working at Nrxen It Technologies, I'm passionate about creating efficient, 
              user-friendly applications using modern technologies.
            </p>
            
            <p className="text-lg text-muted-foreground">
              I have hands-on experience with various frameworks and technologies including React.js, Next.js,
              Laravel, and Firebase. I'm constantly learning and expanding my skill set to stay
              up-to-date with the latest developments in the field.
            </p>
          </div>
        </div>
        
        <div className="bg-secondary/50 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>11/11 Hem Chakraborty Lane, Howrah, 711101, India</span>
            </li>
            
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a 
                href="tel:+916290741412" 
                className="link-with-hover"
              >
                (+91) 6290741412
              </a>
            </li>
            
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a 
                href="mailto:myselfrahul6290@gmail.com" 
                className="link-with-hover"
              >
                myselfrahul6290@gmail.com
              </a>
            </li>
            
            <li className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-primary flex-shrink-0" />
              <a 
                href="https://www.linkedin.com/in/rahulshaw1002/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-with-hover"
              >
                linkedin.com/in/rahulshaw1002
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
