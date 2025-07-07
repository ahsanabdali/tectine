import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import TestimonialCard from '@/components/common/TestimonialCard';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Industries' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'finance', label: 'Finance' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' },
    { id: 'manufacturing', label: 'Manufacturing' },
  ];
  
  const caseStudies = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      industry: "E-commerce",
      company: "RetailPlus",
      quote: "TECTINE's AI chatbot solution increased our conversion rate by 45% and customer satisfaction scores by 60% within just three months.",
      rating: 5,
      categories: ['ecommerce'],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      industry: "Finance",
      company: "Global Financial",
      quote: "The workflow automation platform saved our team over 30 hours per week and reduced processing errors by 87%, transforming our operations.",
      rating: 4.5,
      categories: ['finance'],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      industry: "Healthcare",
      company: "MediCare Solutions",
      quote: "TECTINE's AI-assisted telemarketing solution helped us reach 200% more patients while maintaining a personal touch in communications.",
      rating: 5,
      categories: ['healthcare'],
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      industry: "Education",
      company: "LearnSmart Academy",
      quote: "Our student engagement increased by 78% after implementing TECTINE's AI chatbot solution for our online learning platform.",
      rating: 5,
      categories: ['education'],
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      industry: "E-commerce",
      company: "FashionTrend",
      quote: "Digital marketing campaigns powered by TECTINE's AI resulted in a 3x increase in our customer acquisition rate and 40% lower cost per acquisition.",
      rating: 4.5,
      categories: ['ecommerce'],
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      industry: "Manufacturing",
      company: "IndusTech Solutions",
      quote: "Workflow automation implemented by TECTINE reduced our production cycle time by 35% and improved quality control accuracy by 50%.",
      rating: 5,
      categories: ['manufacturing'],
    },
  ];
  
  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.categories.includes(activeFilter));

  return (
    <>
      <Helmet>
        <title>Case Studies - TECTINE</title>
        <meta name="description" content="Explore success stories of businesses transformed by TECTINE's AI solutions across e-commerce, finance, healthcare, and more." />
      </Helmet>
      
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-poppins font-extrabold text-4xl md:text-5xl mb-6">Case Studies</h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover how businesses across various industries have achieved remarkable results with our AI-powered solutions.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filters.map(filter => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={activeFilter === filter.id ? "bg-[#00C7B1] text-white" : "border-gray-300 text-gray-700"}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <ScrollAnimation key={study.id} delay={index * 0.1}>
                <TestimonialCard testimonial={study} />
              </ScrollAnimation>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-600">No case studies found for this filter. Please try another category.</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-20 bg-[#0B1C2B] text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollAnimation>
            <div className="bg-[#162A3F] rounded-xl p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-[#00C7B1] bg-opacity-10 rounded-full flex items-center justify-center text-[#00C7B1] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-poppins font-bold text-2xl mb-4">Want to be our next success story?</h2>
                  <p className="text-gray-300 mb-6">
                    Let our AI experts analyze your business challenges and develop a custom solution tailored to your specific needs and goals.
                  </p>
                  <Button className="bg-[#00C7B1] hover:bg-[#00b3a0] text-white font-medium px-6 py-3 rounded-lg transition-colors inline-flex items-center">
                    <span>Get Your Free Assessment</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
