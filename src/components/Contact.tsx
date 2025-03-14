
import { useEffect, useRef } from 'react';
import { Github, Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" className="section-container bg-secondary/30">
      <div 
        ref={containerRef}
        className="max-w-4xl mx-auto text-center stagger-animate"
      >
        <span className="badge-subtle">Get in Touch</span>
        <h2 className="section-title mt-2">Contact Me</h2>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <a
            href="mailto:myselfrahul6290@gmail.com"
            className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-sm border border-gray-100 card-hover"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span>myselfrahul6290@gmail.com</span>
          </a>
          
          <a
            href="tel:+916290741412"
            className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-sm border border-gray-100 card-hover"
          >
            <Phone className="w-5 h-5 text-primary" />
            <span>(+91) 6290741412</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/rahulshaw1002/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-sm border border-gray-100 card-hover"
          >
            <Linkedin className="w-5 h-5 text-primary" />
            <span>LinkedIn Profile</span>
          </a>
          
          <a
            href="https://github.com/myselfrahul6290"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-6 bg-white rounded-xl shadow-sm border border-gray-100 card-hover"
          >
            <Github className="w-5 h-5 text-primary" />
            <span>GitHub Profile</span>
          </a>
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <span>11/11 Hem Chakraborty Lane, Howrah, 711101, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
