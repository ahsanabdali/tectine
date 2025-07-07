import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import ScrollAnimation from '@/components/common/ScrollAnimation';

const ServiceDetailSection = ({ 
  id, 
  title, 
  description, 
  features, 
  image, 
  stat, 
  reverse = false 
}: { 
  id: string, 
  title: string, 
  description: string, 
  features: string[], 
  image: string, 
  stat: { value: string, label: string },
  reverse?: boolean 
}) => {
  return (
    <section id={id} className="py-16 border-b border-gray-200 last:border-0">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <ScrollAnimation>
            <div>
              <h2 className="font-poppins font-bold text-3xl mb-4">{title}</h2>
              <p className="text-gray-600 mb-6">{description}</p>
              
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-[#00C7B1] mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-[#0B1C2B] text-white p-6 rounded-lg inline-block mb-6">
                <div className="text-3xl font-bold text-[#00C7B1] mb-1">{stat.value}</div>
                <p className="text-sm">{stat.label}</p>
              </div>
              
              <div>
                <Link href="/contact">
                  <Button className="bg-[#00C7B1] hover:bg-[#00b3a0] text-white font-medium px-6 py-3 rounded-lg transition-colors">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation>
            <img 
              src={image} 
              alt={title} 
              className="rounded-xl shadow-xl w-full" 
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: 'chatbots',
      title: 'AI Chatbots',
      description: 'Our AI chatbots provide intelligent, conversational experiences that engage customers, qualify leads, and deliver 24/7 support without human intervention. Powered by advanced natural language processing, they understand context and intent to provide relevant responses.',
      features: [
        'Natural language understanding and contextual responses',
        'Seamless integration with your existing platforms',
        '24/7 availability with instant response times',
        'Continuous learning from interactions',
        'Multi-language support for global businesses'
      ],
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      stat: { value: '+40%', label: 'Increase in customer engagement' }
    },
    {
      id: 'automation',
      title: 'Workflow Automation',
      description: 'Streamline your business processes with our intelligent workflow automation solutions. We identify repetitive tasks and inefficiencies, then implement AI-powered systems that reduce manual work, minimize errors, and accelerate throughput across your organization.',
      features: [
        'Custom automation tailored to your specific workflows',
        'Integration with existing business systems',
        'Real-time monitoring and analytics dashboards',
        'Scalable solutions that grow with your business',
        'Reduced operational costs and improved accuracy'
      ],
      image: 'https://images.unsplash.com/photo-1581092335878-be36e993e12f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      stat: { value: '+65%', label: 'Improvement in operational efficiency' },
      reverse: true
    },
    {
      id: 'telemarketing',
      title: 'AI-Assisted Telemarketing',
      description: 'Transform your telemarketing efforts with our AI-assisted solutions. Our intelligent systems qualify leads, personalize conversations, and guide your agents with real-time suggestions, creating more meaningful engagements and dramatically improving conversion rates.',
      features: [
        'AI-powered lead scoring and prioritization',
        'Real-time conversation guidance for agents',
        'Automated follow-up scheduling and reminders',
        'Sentiment analysis for gauging prospect interest',
        'Detailed analytics on call performance and outcomes'
      ],
      image: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      stat: { value: '+50%', label: 'Increase in conversion rates' }
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      description: 'Our data-driven digital marketing strategies leverage AI to target, engage, and convert your ideal customers. We analyze vast amounts of data to create highly personalized campaigns that deliver measurable results and exceptional return on investment.',
      features: [
        'AI-powered audience targeting and segmentation',
        'Predictive analytics for campaign optimization',
        'Automated content creation and curation',
        'Cross-channel marketing orchestration',
        'Comprehensive performance tracking and reporting'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      stat: { value: '+75%', label: 'Improvement in marketing ROI' },
      reverse: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - TECTINE</title>
        <meta name="description" content="Explore TECTINE's comprehensive AI-powered services: AI Chatbots, Workflow Automation, AI-Assisted Telemarketing, and Digital Marketing solutions." />
      </Helmet>
      
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-poppins font-extrabold text-4xl md:text-5xl mb-6">Our Services</h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover our comprehensive suite of AI-powered solutions designed to transform your business operations and drive exceptional results.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      {services.map((service) => (
        <ServiceDetailSection 
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          features={service.features}
          image={service.image}
          stat={service.stat}
          reverse={service.reverse}
        />
      ))}
      
      <section className="py-20 bg-[#0B1C2B] text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our AI-powered solutions can help your business achieve extraordinary results.
            </p>
            <Link href="/contact">
              <Button className="bg-[#00C7B1] hover:bg-[#00b3a0] text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Services;
