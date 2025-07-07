import { BlogPost, Service, Testimonial } from './types';

// Services data
export const services: Service[] = [
  {
    id: 'chatbots',
    icon: 'robot',
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that engage customers, qualify leads, and provide 24/7 support.',
    stat: '+40% customer engagement',
    features: [
      'Natural language understanding and contextual responses',
      'Seamless integration with your existing platforms',
      '24/7 availability with instant response times',
      'Continuous learning from interactions',
      'Multi-language support for global businesses'
    ],
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'automation',
    icon: 'refresh',
    title: 'Workflow Automation',
    description: 'Streamline repetitive tasks and complex business processes with intelligent automation solutions.',
    stat: '+65% operational efficiency',
    features: [
      'Custom automation tailored to your specific workflows',
      'Integration with existing business systems',
      'Real-time monitoring and analytics dashboards',
      'Scalable solutions that grow with your business',
      'Reduced operational costs and improved accuracy'
    ],
    image: 'https://images.unsplash.com/photo-1581092335878-be36e993e12f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'telemarketing',
    icon: 'phone',
    title: 'AI-Assisted Telemarketing',
    description: 'Enhance telemarketing efforts with AI that qualifies leads, personalizes conversations, and boosts conversions.',
    stat: '+50% conversion rate',
    features: [
      'AI-powered lead scoring and prioritization',
      'Real-time conversation guidance for agents',
      'Automated follow-up scheduling and reminders',
      'Sentiment analysis for gauging prospect interest',
      'Detailed analytics on call performance and outcomes'
    ],
    image: 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'marketing',
    icon: 'chart',
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies powered by AI to target, engage, and convert your ideal customers.',
    stat: '+75% ROAS improvement',
    features: [
      'AI-powered audience targeting and segmentation',
      'Predictive analytics for campaign optimization',
      'Automated content creation and curation',
      'Cross-channel marketing orchestration',
      'Comprehensive performance tracking and reporting'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

// Testimonials data
export const testimonials: Testimonial[] = [
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

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Business: Trends to Watch in 2023",
    excerpt: "Explore the cutting-edge AI trends that are reshaping businesses across industries and how you can leverage them for competitive advantage.",
    content: "",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "June 15, 2023",
    author: "Alex Johnson",
    category: "AI Trends",
    readTime: 8,
    tags: ["AI", "Business", "Innovation", "Future Tech"]
  },
  {
    id: 2,
    title: "How Chatbots Are Revolutionizing Customer Service",
    excerpt: "Discover how AI-powered chatbots are transforming customer service by providing 24/7 support, reducing response time, and improving satisfaction.",
    content: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "May 27, 2023",
    author: "Sarah Miller",
    category: "Chatbots",
    readTime: 6,
    tags: ["Chatbots", "Customer Service", "AI", "Automation"]
  },
  {
    id: 3,
    title: "Workflow Automation: Boosting Productivity Across Departments",
    excerpt: "Learn how companies are implementing workflow automation to eliminate repetitive tasks, reduce errors, and allow employees to focus on high-value work.",
    content: "",
    image: "https://images.unsplash.com/photo-1581092335878-be36e993e12f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "May 10, 2023",
    author: "Michael Chen",
    category: "Automation",
    readTime: 7,
    tags: ["Workflow", "Automation", "Productivity", "Efficiency"]
  },
  {
    id: 4,
    title: "AI Ethics: Navigating the Challenges of Implementing AI Solutions",
    excerpt: "Explore the ethical considerations businesses must address when implementing AI technology and how to ensure responsible AI development.",
    content: "",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "April 22, 2023",
    author: "Dr. Elena Rodriguez",
    category: "AI Ethics",
    readTime: 10,
    tags: ["Ethics", "AI", "Responsible Tech", "Data Privacy"]
  },
  {
    id: 5,
    title: "The ROI of AI: Measuring the Impact of Intelligent Solutions",
    excerpt: "Discover practical frameworks for measuring the return on investment from AI implementation across various business functions.",
    content: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "April 5, 2023",
    author: "Robert Williams",
    category: "Business",
    readTime: 9,
    tags: ["ROI", "Analytics", "Business Intelligence", "Investment"]
  },
  {
    id: 6,
    title: "AI in Telemarketing: Humanizing Automated Conversations",
    excerpt: "How AI is making telemarketing more effective by providing real-time insights and assistance to human agents, creating better customer experiences.",
    content: "",
    image: "https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "March 18, 2023",
    author: "Jennifer Park",
    category: "Telemarketing",
    readTime: 7,
    tags: ["Telemarketing", "Sales", "AI", "Customer Experience"]
  },
  {
    id: 7,
    title: "Predictive Analytics: How AI is Reshaping Digital Marketing",
    excerpt: "Explore how predictive analytics powered by AI can help marketers anticipate consumer behavior and optimize campaigns for better results.",
    content: "",
    image: "https://images.unsplash.com/photo-1533750446969-255b5e2fe905?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "March 3, 2023",
    author: "Thomas Anderson",
    category: "Digital Marketing",
    readTime: 8,
    tags: ["Predictive Analytics", "Digital Marketing", "AI", "Data Science"]
  }
];

// Nav links
export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Footer links
export const footerLinks = {
  quickLinks: [
    { href: "/#about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/#solutions", label: "AI Solutions" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  serviceLinks: [
    { href: "/services#chatbots", label: "AI Chatbots" },
    { href: "/services#automation", label: "Workflow Automation" },
    { href: "/services#telemarketing", label: "AI-Assisted Telemarketing" },
    { href: "/services#marketing", label: "Digital Marketing" },
    { href: "/services#custom", label: "Custom AI Solutions" },
    { href: "/services#consulting", label: "AI Consulting" },
  ],
  legalLinks: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ],
};

// Company information
export const companyInfo = {
  name: "TECTINE",
  tagline: "Trust in Tech. Lead the Trend.",
  description: "Empowering businesses with intelligent AI solutions.",
  address: "123 Innovation Street, Techville",
  email: "info@tectine.com",
  phone: "+1 (234) 567-8900",
  socialMedia: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  whatsapp: "https://wa.me/1234567890",
  calendly: "https://calendly.com",
};

// Brand colors
export const brandColors = {
  primary: "#00C7B1", // Teal
  secondary: "#0B1C2B", // Navy Blue
  accent: "#39FF14", // Neon Green
  navy800: "#162A3F", // Darker Navy
};
