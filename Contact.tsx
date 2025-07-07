import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import ContactForm from '@/components/common/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - TECTINE</title>
        <meta name="description" content="Get in touch with TECTINE's team of AI experts. Schedule a free consultation or discuss your project requirements." />
      </Helmet>
      
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-poppins font-extrabold text-4xl md:text-5xl mb-6">Contact Us</h1>
              <p className="text-lg text-gray-600 mb-8">
                Have questions or ready to start your AI journey? Our team is here to help you transform your business.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollAnimation>
              <div>
                <h2 className="font-poppins font-bold text-3xl mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're excited to hear from you! Whether you have a question about our services, want to schedule a demo, or are ready to start a project, our team is ready to assist you.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00C7B1] bg-opacity-10 rounded-full flex items-center justify-center text-[#00C7B1] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Our Location</h3>
                      <p className="text-gray-600">123 Innovation Street, Techville</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00C7B1] bg-opacity-10 rounded-full flex items-center justify-center text-[#00C7B1] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Email Us</h3>
                      <p className="text-gray-600">info@tectine.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00C7B1] bg-opacity-10 rounded-full flex items-center justify-center text-[#00C7B1] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Call Us</h3>
                      <p className="text-gray-600">+1 (234) 567-8900</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="font-poppins font-bold text-xl">Schedule a Consultation</h3>
                  <p className="text-gray-600">
                    Book a free strategy session with our AI experts and discover how our intelligent solutions can transform your operations.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#00C7B1] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#00b3a0] transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>Book a Free Strategy Session</span>
                      </Button>
                    </a>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-[#00C7B1] text-[#00C7B1] hover:bg-[#00C7B1] hover:text-white transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 mr-2 fill-current">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                        <span>WhatsApp Support</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <ContactForm />
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="font-poppins font-bold text-3xl text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-poppins font-bold text-lg mb-3">How quickly can you implement an AI solution?</h3>
                <p className="text-gray-600">Implementation timelines vary based on complexity, but our standard chatbot solutions can be deployed within 2-4 weeks, while more comprehensive automation projects typically take 6-12 weeks.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-poppins font-bold text-lg mb-3">Do I need technical expertise to use your solutions?</h3>
                <p className="text-gray-600">No, our solutions are designed with user-friendly interfaces that don't require technical expertise. We also provide comprehensive training and ongoing support.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-poppins font-bold text-lg mb-3">How do you ensure data privacy and security?</h3>
                <p className="text-gray-600">We implement enterprise-grade security protocols including encryption, secure authentication, and regular security audits. We are compliant with major data protection regulations like GDPR.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-poppins font-bold text-lg mb-3">What industries do you specialize in?</h3>
                <p className="text-gray-600">We have expertise across multiple industries including e-commerce, finance, healthcare, education, and manufacturing, with customized solutions for each sector's unique challenges.</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <section className="py-20 bg-[#0B1C2B] text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Take the first step towards intelligent automation and improved business performance.
            </p>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#00C7B1] hover:bg-[#00b3a0] text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center">
                <span>Book Your Free Consultation Today</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </a>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
