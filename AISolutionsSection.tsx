import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Play } from 'lucide-react';

export default function AISolutionsSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="solutions" className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">AI SOLUTIONS</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Transforming Data into <span className="gradient-text">Actionable Intelligence</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              Our proprietary AI platform transforms your raw data into valuable business insights and automated 
              workflows, enabling smarter decisions and more efficient operations.
            </p>
            
            <div className="bg-background rounded-2xl shadow-lg p-6 mb-10">
              <h3 className="font-bold text-xl mb-4">How Our AI Works</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Data Collection & Processing</h4>
                    <p className="text-muted-foreground text-sm">
                      We securely gather and normalize your data from multiple sources, preparing it for analysis.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold mb-1">AI Pattern Recognition</h4>
                    <p className="text-muted-foreground text-sm">
                      Our advanced algorithms identify patterns, anomalies, and opportunities in your business data.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Intelligent Automation</h4>
                    <p className="text-muted-foreground text-sm">
                      We automate routine tasks and complex workflows based on the intelligence gathered.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="h-8 w-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold mb-1">Continuous Improvement</h4>
                    <p className="text-muted-foreground text-sm">
                      The system continuously learns from new data, improving its performance over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-primary">
                <Link href="/contact">
                  <a className="flex items-center">
                    Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <a 
                  href="#demo-video" 
                  className="flex items-center"
                  id="demo-video"
                >
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </a>
              </Button>
            </div>
          </div>
          
          {/* Video/Animation Section */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Video container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1639322537231-2f206e06af84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                  alt="AI Visualization" 
                  className="w-full h-full object-cover"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:bg-primary/90 transition-colors">
                    <Play className="h-10 w-10 ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="absolute -bottom-6 -left-6 bg-background dark:bg-secondary p-4 rounded-xl shadow-lg max-w-[180px]">
                <div className="text-primary font-bold text-2xl">87%</div>
                <div className="text-sm text-muted-foreground">Faster data processing</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-background dark:bg-secondary p-4 rounded-xl shadow-lg max-w-[180px]">
                <div className="text-primary font-bold text-2xl">93%</div>
                <div className="text-sm text-muted-foreground">Accuracy rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}