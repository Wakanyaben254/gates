// components/OurImpactProjects.tsx
import React from 'react';
import Image from 'next/image'; // For optimized images
import { ArrowRight } from 'lucide-react'; // For the arrow icon
import Link from 'next/link'; // For navigation links
interface ImpactProject {
  id: number;
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  metric: string;
  href: string; // Add href to the interface
}

const GatesImpact: React.FC = () => {
  const impactProjects : ImpactProject[] = [
    {
      id: 1,
      imageSrc: "/grp.jpg", // Placeholder: Replace with your actual image path
      imageAlt: "A serene river in a natural landscape",
      tag: "Youth Entrepreneurship",
      title: "Youth Empowerment Program",
      description: "Empowering youth through MSME/SME funding,vocational training ,startup funding and entrepreneurship support.",
      metric: "500 youth trained",
      href: "/youth", // Add href for navigation
    },
    {
      id: 2,
      imageSrc: "/women.jpg", // Placeholder: Replace with your actual image path
      imageAlt: "A woman working on a machine in a workshop",
      tag: "Economic Empowerment",
      title: "Women's Cooperative Support",
      description: "Strengthening women-led cooperatives through training, funding,access to credit and market linkage support.",
      metric: "300 women empowered",
      href: "/wom",
    },
    {
      id: 3,
      imageSrc: "/lap.jpg", // Placeholder: Replace with your actual image path
      imageAlt: "Laptop screen displaying lines of code",
      tag: "Technology",
      title: "Digital Literacy Campaign",
      description: "Bridging the digital divide by providing technology access and training in underserved areas.",
      metric: "5,000 people trained",
      href: "/digi",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* You can add a main section title here if needed, consistent with "Our Programs" style */}
       
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Impact
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the tangible difference we&#39;re making in communities across Kenya.
          </p>
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactProjects.map((project) => (

             <Link 
             key={project.id} 
             href={project.href}
             className="block no-underline text-inherit" // Make it a block, remove underline, inherit text color
             role="link" // For accessibility, explicitly mark as a link
             tabIndex={0} // Make it focusable for keyboard navigation
             aria-label={`View details for ${project.title}`} // Provide a descriptive label
            >

             <div  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">

              <div className="relative h-48 w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  className="rounded-t-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  quality={80}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tag */}
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {project.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Metric with Arrow */}
                <div className="flex items-center text-green-600 font-semibold mt-auto">
                  <span>{project.metric}</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>
           
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GatesImpact;
