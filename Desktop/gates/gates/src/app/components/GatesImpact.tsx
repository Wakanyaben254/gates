// components/OurImpactProjects.tsx
import React from 'react';
import Image from 'next/image'; // For optimized images
import { ArrowRight } from 'lucide-react'; // For the arrow icon

const GatesImpact: React.FC = () => {
  const impactProjects = [
    {
      id: 1,
      imageSrc: "/agri.jpeg", // Placeholder: Replace with your actual image path
      imageAlt: "A serene river in a natural landscape",
      tag: "Water & Sanitation",
      title: "Water Access Project",
      description: "Installing clean water systems and training communities in water management and conservation.",
      metric: "80 water points built",
    },
    {
      id: 2,
      imageSrc: "/women.jpg", // Placeholder: Replace with your actual image path
      imageAlt: "A woman working on a machine in a workshop",
      tag: "Economic Empowerment",
      title: "Women's Cooperative Support",
      description: "Strengthening women-led cooperatives through training, funding, and market linkage support.",
      metric: "300 women empowered",
    },
    {
      id: 3,
      imageSrc: "/lap.jpg", // Placeholder: Replace with your actual image path
      imageAlt: "Laptop screen displaying lines of code",
      tag: "Technology",
      title: "Digital Literacy Campaign",
      description: "Bridging the digital divide by providing technology access and training in underserved areas.",
      metric: "5,000 people trained",
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
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  objectFit="cover"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default GatesImpact;