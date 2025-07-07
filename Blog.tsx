import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import { Separator } from '@/components/ui/separator';
import { blogPosts } from '@/lib/constants';

const BlogCard = ({ post }: { post: any }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute bottom-0 left-0 bg-[#00C7B1] text-white text-sm font-medium px-3 py-1">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
        </div>
        <h3 className="font-poppins font-bold text-xl mb-3 group-hover:text-[#00C7B1] transition-colors">{post.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        <Link href={`/blog/${post.id}`} className="inline-flex items-center text-[#0B1C2B] font-medium hover:text-[#00C7B1] transition-colors">
          <span>Read More</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const FeaturedPost = () => {
  const featured = blogPosts[0];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 rounded-xl overflow-hidden shadow-xl">
      <div className="lg:col-span-3 h-64 lg:h-auto">
        <img 
          src={featured.image} 
          alt={featured.title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="lg:col-span-2 p-8 bg-white flex flex-col justify-center">
        <div className="mb-2">
          <span className="bg-[#00C7B1] bg-opacity-10 text-[#00C7B1] text-sm font-medium px-3 py-1 rounded-full">
            {featured.category}
          </span>
        </div>
        <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-4">{featured.title}</h2>
        <p className="text-gray-600 mb-6">{featured.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span>{featured.date}</span>
          <span className="mx-2">•</span>
          <span>{featured.readTime} min read</span>
        </div>
        <Link href={`/blog/${featured.id}`}>
          <Button className="bg-[#00C7B1] hover:bg-[#00b3a0] text-white font-medium inline-flex items-center">
            <span>Read Featured Article</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - TECTINE</title>
        <meta name="description" content="Explore TECTINE's latest articles on AI, automation, and marketing strategies to transform your business operations." />
      </Helmet>
      
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-poppins font-extrabold text-4xl md:text-5xl mb-6">Our Blog</h1>
              <p className="text-lg text-gray-600 mb-8">
                Explore the latest insights, trends, and strategies in AI, automation, and digital marketing.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <FeaturedPost />
          </ScrollAnimation>
          
          <div className="mb-12">
            <h2 className="font-poppins font-bold text-2xl mb-4">Latest Articles</h2>
            <Separator className="bg-gray-200" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <ScrollAnimation key={post.id} delay={index * 0.1}>
                <BlogCard post={post} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollAnimation>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <h2 className="font-poppins font-bold text-3xl mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest articles, case studies, and insights on AI and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00C7B1] focus:border-[#00C7B1] transition-colors"
                />
                <Button className="bg-[#00C7B1] hover:bg-[#00b3a0] text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="font-poppins font-bold text-3xl mb-6">Have a Topic in Mind?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for new topics to cover. Let us know what you'd like to learn more about.
            </p>
            <Link href="/contact">
              <Button className="bg-[#0B1C2B] hover:bg-[#162A3F] text-white font-medium px-8 py-3 rounded-lg transition-colors inline-flex items-center">
                <span>Suggest a Topic</span>
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

export default Blog;
