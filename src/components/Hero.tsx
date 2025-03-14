
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-70"></div>
      </div>
      
      <div 
        ref={containerRef}
        className="container max-w-5xl mx-auto px-4 sm:px-6 py-16 stagger-animate"
      >
        <div className="text-center space-y-6 sm:space-y-8">
          <span className="inline-block badge-subtle mb-2 animate-fade-in">Software Engineer</span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight leading-tight md:leading-tight">
            Rahul Shaw
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Creating impactful digital experiences through clean, efficient code.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8 sm:mt-12">
            <a 
              href="#contact" 
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300"
            >
              Get in touch
            </a>
            <a 
              href="#projects" 
              className="bg-transparent border border-gray-300 px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
            >
              View my work
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a 
          href="#about" 
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/80 shadow-md backdrop-blur-sm hover:bg-white transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
