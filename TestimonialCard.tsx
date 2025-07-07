import { Link } from 'wouter';

interface TestimonialProps {
  testimonial: {
    id: number;
    image: string;
    industry: string;
    company: string;
    quote: string;
    rating: number;
    delay?: number;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`star-${i}`} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half-star" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    return (
      <div className="text-yellow-400 flex">
        {stars}
      </div>
    );
  };

  return (
    <div className="testimonial-card bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
      <div className="h-40 overflow-hidden">
        <img 
          src={testimonial.image} 
          alt={`${testimonial.company} case study`} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="bg-[#00C7B1] bg-opacity-10 text-[#00C7B1] text-sm font-medium px-3 py-1 rounded-full">
            {testimonial.industry}
          </span>
        </div>
        <h3 className="font-poppins font-bold text-xl mb-3">{testimonial.company}</h3>
        <p className="text-gray-600 mb-4 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {renderStars(testimonial.rating)}
          </div>
          <Link href={`/case-studies/${testimonial.id}`} className="text-[#0B1C2B] font-medium hover:text-[#00C7B1] transition-colors inline-flex items-center">
            <span>Read Case Study</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
