import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
      {/* Animated background blob */}
      <div className="blob-animation"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">Trust in Tech. Lead the Trend.</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Empower Your Brand with <span className="gradient-text">Intelligent Solutions</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Smart AI, Seamless Automation, Scalable Growth. Unlock the potential of AI for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="btn-primary h-12 px-6 text-base">
                <Link href="/contact">
                  <a className="flex items-center">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
                <a href="#demo-video" className="flex items-center">
                  <PlayCircle className="mr-2 h-5 w-5" /> Watch How It Works
                </a>
              </Button>
            </div>
            
            <div className="pt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium">{'U' + i}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">500+</span> happy clients
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                alt="AI Technology Dashboard" 
                className="w-full h-auto"
              />
              
              {/* Stats overlay */}
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 text-center">
                <div className="text-primary font-bold text-xl">+45%</div>
                <div className="text-xs text-muted-foreground">Efficiency</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 text-center">
                <div className="text-primary font-bold text-xl">68%</div>
                <div className="text-xs text-muted-foreground">Cost Reduction</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/30 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/30 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        
        {/* Trusted partners */}
        <div className="mt-16 md:mt-24">
          <p className="text-center text-muted-foreground text-sm mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Google', 'Microsoft', 'Amazon', 'IBM', 'Oracle'].map((company) => (
              <div key={company} className="text-muted-foreground text-xl font-bold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}