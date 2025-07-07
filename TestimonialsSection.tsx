import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { testimonials } from '@/lib/constants';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 bg-muted/30"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h6 className="text-primary font-semibold mb-3">SUCCESS STORIES</h6>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Discover how our AI solutions have transformed businesses and driven measurable results.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card bg-background rounded-xl p-6 shadow-md transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? 'text-primary fill-primary' : 'text-muted'}`}
                  />
                ))}
                {testimonial.rating % 1 > 0 && (
                  <div className="relative">
                    <Star className="h-5 w-5 text-muted" />
                    <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${(testimonial.rating % 1) * 100}%` }}>
                      <Star className="h-5 w-5 text-primary fill-primary" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Quote */}
              <blockquote className="mb-6 text-foreground">
                <p className="text-lg italic">"{testimonial.quote}"</p>
              </blockquote>
              
              {/* Client info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.company} testimonial`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.company}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Company logos */}
        <div className="mt-20">
          <p className="text-center text-muted-foreground text-sm mb-8">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['Microsoft', 'Amazon', 'Google', 'IBM', 'Oracle', 'Meta'].map((company, index) => (
              <div 
                key={company}
                className={`text-muted-foreground font-bold text-xl transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}