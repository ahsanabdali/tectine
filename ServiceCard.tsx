import { Link } from 'wouter';

interface ServiceProps {
  service: {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    stat: string;
    delay?: number;
  };
}

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="h-3 bg-[#00C7B1]"></div>
      <div className="p-6">
        <div className="w-16 h-16 bg-[#00C7B1] bg-opacity-10 rounded-full flex items-center justify-center text-[#00C7B1] mb-6">
          {service.icon}
        </div>
        <h3 className="font-poppins font-bold text-xl mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center text-[#00C7B1] font-medium mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
          <span>{service.stat}</span>
        </div>
        <Link href={`/services#${service.id}`} className="inline-flex items-center text-[#0B1C2B] font-medium hover:text-[#00C7B1] transition-colors">
          <span>Learn More</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
