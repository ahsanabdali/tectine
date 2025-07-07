import { Link } from 'wouter';
import { ArrowRight, Bot, RefreshCw, Phone, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function ServicesSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  
  // Map icon names to their components
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'robot': return <Bot />;
      case 'refresh': return <RefreshCw />;
      case 'phone': return <Phone />;
      case 'chart': return <BarChart3 />;
      default: return <Bot />;
    }
  };
  
  return (
    <section 
      id="services" 
      className="py-16 md:py-24 bg-muted/30"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h6 className="text-primary font-semibold mb-3">OUR SERVICES</h6>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Intelligent Solutions to Propel Your Business Forward</h2>
          <p className="text-muted-foreground text-lg">
            Leverage our cutting-edge AI technology to transform your operations, engage your customers, and drive growth.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card bg-background rounded-xl p-6 shadow-md transition-all duration-700 delay-${index * 100} ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="feature-icon mb-5">
                {getIconComponent(service.icon)}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
              <div className="bg-primary/10 rounded-lg px-4 py-2 inline-block mb-5">
                <span className="text-primary font-medium">{service.stat}</span>
              </div>
              
              <Link href={`/services#${service.id}`}>
                <a className="group inline-flex items-center text-primary font-medium">
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Feature spotlight */}
        <div className="bg-gradient-to-br from-secondary to-secondary/90 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h6 className="text-primary-foreground/80 font-semibold mb-3">FEATURED SERVICE</h6>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                AI Workflow Automation
              </h3>
              <p className="text-white/80 mb-6">
                Our flagship automation platform combines machine learning, natural language processing, and advanced 
                analytics to transform your complex business processes into streamlined, intelligent workflows.
              </p>
              
              <ul className="space-y-3 mb-8">
                {services[1].features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start text-white/90">
                    <div className="mr-3 mt-1 h-5 w-5 text-accent flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/services#automation">
                  <a className="inline-flex items-center">
                    Explore Automation Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </Button>
            </div>
            
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent z-10"></div>
              <img 
                src={services[1].image} 
                alt="AI Workflow Automation"
                className="h-full w-full object-cover"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-8 right-8 bg-background/95 dark:bg-secondary/95 rounded-lg shadow-lg p-4 z-20">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-primary font-bold text-2xl">65%</div>
                    <div className="text-xs text-muted-foreground">Efficiency Gain</div>
                  </div>
                  <div className="h-10 w-px bg-border"></div>
                  <div className="text-center">
                    <div className="text-primary font-bold text-2xl">45%</div>
                    <div className="text-xs text-muted-foreground">Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="btn-primary">
            <Link href="/services">
              <a className="inline-flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}