import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="cta" 
      className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className={`rounded-3xl bg-gradient-to-br from-primary to-accent/80 p-8 md:p-12 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Ready to let AI take your business to the next level?
            </h2>
            
            <p className="text-white/90 text-lg md:text-xl mb-10">
              Join hundreds of forward-thinking companies that are already leveraging our AI solutions to drive growth, 
              efficiency, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-12 px-6 text-base">
                <Link href="/contact">
                  <a className="flex items-center">
                    Book a Free Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 h-12 px-6 text-base">
                <Link href="/case-studies">
                  <a className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" /> View Case Studies
                  </a>
                </Link>
              </Button>
            </div>
            
            <p className="text-white/80 mt-6 text-sm">
              No commitment required. Our experts will analyze your needs and show you how our solutions can help.
            </p>
          </div>
        </div>
        
        {/* Additional info cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className={`bg-background rounded-xl p-6 shadow-md transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-bold text-xl mb-3">Get Started Quickly</h3>
            <p className="text-muted-foreground mb-4">
              Implementation in as little as 2 weeks with our streamlined onboarding process.
            </p>
            <Link href="/contact">
              <a className="text-primary font-medium hover:underline">Contact Us</a>
            </Link>
          </div>
          
          <div className={`bg-background rounded-xl p-6 shadow-md transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-bold text-xl mb-3">Flexible Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Customized packages tailored to businesses of all sizes and industry requirements.
            </p>
            <Link href="/services">
              <a className="text-primary font-medium hover:underline">View Pricing</a>
            </Link>
          </div>
          
          <div className={`bg-background rounded-xl p-6 shadow-md transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="font-bold text-xl mb-3">24/7 Support</h3>
            <p className="text-muted-foreground mb-4">
              Dedicated account managers and technical support available around the clock.
            </p>
            <Link href="/contact#support">
              <a className="text-primary font-medium hover:underline">Get Support</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}