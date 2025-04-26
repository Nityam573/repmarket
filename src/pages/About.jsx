import React from 'react';
import { FaUsers, FaShoppingCart, FaHandshake, FaGlobe, FaCheckCircle, FaLightbulb, FaChartLine, FaStar, FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "CEO & Founder",
      image: "https://via.placeholder.com/300x300",
      bio: "John has over 15 years of experience in e-commerce and retail management."
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "CTO",
      image: "https://via.placeholder.com/300x300",
      bio: "Sarah leads our technology team with her expertise in web development and UX design."
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Marketing Director",
      image: "https://via.placeholder.com/300x300",
      bio: "Michael brings creative marketing strategies to help grow our marketplace."
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Customer Support Manager",
      image: "https://via.placeholder.com/300x300",
      bio: "Emily ensures that all our customers receive exceptional support and service."
    }
  ];

  // Company stats
  const stats = [
    { id: 1, value: "10M+", label: "Active Users" },
    { id: 2, value: "50K+", label: "Daily Transactions" },
    { id: 3, value: "99.9%", label: "Uptime" },
    { id: 4, value: "24/7", label: "Support" }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "David Wilson",
      position: "Regular Customer",
      image: "https://via.placeholder.com/80x80",
      quote: "RepMarket has completely transformed how I shop online. The quality of products and customer service is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Jennifer Lee",
      position: "Business Owner",
      image: "https://via.placeholder.com/80x80",
      quote: "As a seller on RepMarket, I've been able to reach customers worldwide and grow my business exponentially.",
      rating: 5
    },
    {
      id: 3,
      name: "Robert Johnson",
      position: "Tech Enthusiast",
      image: "https://via.placeholder.com/80x80",
      quote: "The verification process ensures that I only get authentic products. I've never had a bad experience with RepMarket.",
      rating: 4
    }
  ];

  return (
    <div className="bg-white">
      <div className="px-4 py-2 md:px-8 md:py-2">
        <h1 className="text-2xl font-bold text-gray-900 my-4 md:text-3xl md:mb-6">Lorem ipsum dolor sit amet</h1>

        <div className="flex flex-col md:flex-row">
          <div className="w-full mb-4 md:hidden">
            <img 
              src="image.png" 
              alt="Trading Chart" 
              className="w-full rounded-md"
            />
          </div>

          <div className="md:w-1/2 md:pr-8">
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-600 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit ornare tempus. Nunc congue congue accumsan. Vivamus ultricies scelerisque risus ut accumsan. Fusce urna neque, finibus at metus non, lacinia malesuada urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu lacus pellentesque, viverra urna consectetur, ultricies lectus. Mauris pellentesque nunc a vehicula auctor. Nunc
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit ornare tempus. Nunc congue congue accumsan. Vivamus ultricies scelerisque risus ut accumsan. Fusce urna neque, finibus at metus non, lacinia malesuada urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu lacus pellentesque, viverra urna consectetur, ultricies lectus. Mauris pellentesque nunc a vehicula auctor. Nunc lobortis risus a purus commodo, sed feugiat erat sodales. Integer accumsan euismod dolor eu egestas. Integer malesuada at libero a mattis. Praesent et nulla et lorem ullamcorper tempor. Donec eu mauris in diam feugiat finibus et quis elit.
              </p>
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 md:mt-0 md:flex md:items-center md:justify-center">
            <img 
              src="image.png" 
              alt="Trading Chart" 
              className="w-full h-[60vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 