import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Award, Shield, Briefcase, Users } from 'lucide-react';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="py-16 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image and stats */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
                alt="TECTINE Team" 
                className="w-full h-auto object-cover"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-white font-bold text-3xl">5+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-3xl">500+</div>
                    <div className="text-sm text-white/80">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-3xl">30+</div>
                    <div className="text-sm text-white/80">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-bold text-3xl">15+</div>
                    <div className="text-sm text-white/80">Industry Awards</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-primary/20 rounded-lg rotate-6 z-0"></div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-accent/20 rounded-lg -rotate-6 z-0"></div>
          </div>
          
          {/* Content */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-medium text-sm">ABOUT US</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Born from Vision, Built with Intelligence</h2>
            
            <p className="text-muted-foreground text-lg mb-8">
              TECTINE was founded in 2018 with a mission to make advanced AI technologies accessible to 
              businesses of all sizes. What began as a small team of AI enthusiasts has grown into a 
              leading technology company specializing in intelligent automation solutions.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="feature-icon flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Quality First</h3>
                  <p className="text-muted-foreground">
                    Our commitment to excellence ensures that every solution we deliver meets the highest standards of performance and reliability.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="feature-icon flex-shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Security & Privacy</h3>
                  <p className="text-muted-foreground">
                    We implement robust data protection measures and adhere to industry best practices to keep your information secure.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="feature-icon flex-shrink-0">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Business-Focused</h3>
                  <p className="text-muted-foreground">
                    Our solutions are designed with your business goals in mind, ensuring tangible results and measurable ROI.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="feature-icon flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our diverse team includes AI engineers, data scientists, and industry specialists with extensive experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}