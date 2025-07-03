// pages/projects/water-access.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'; // Don't forget Link for back button if needed
import { ArrowLeft } from 'lucide-react'; // For the back arrow icon

const WomGates: React.FC = () => {
  const router = useRouter();

  // In a real application, you would fetch data for this specific project
  // based on its slug or ID from an API or a local data source.
  type Section = {
    heading: string;
    content?: string;
    points?: string[];
    stories?: { name: string; quote: string; image: string }[];
  };

  const projectDetails = {
    title: "Women Empowerment Initiative",
    tag: "Economic Empowerment",
    fullDescription: "Our Women Empowerment Initiative  is a multifaceted approach aimed at improving the ability of women to access and control economic resources and opportunities, participate in economic decision-making, and benefit from economic growth. It goes beyond simply providing income and seeks to address the systemic barriers that often limit women's financial independence and agency..",
    sections: [
      {
        heading: "Project Overview",
        content: "Focuses on strengthening women-led cooperatives by providing comprehensive training in business management, financial literacy, and marketing strategies. This initiative also offers essential seed funding, micro-loans, and facilitates crucial market linkages. The program aims to enable women entrepreneurs to expand their ventures, generate sustainable income, and ultimately enhance their families' well-being and overall community economic resilience, having successfully empowered 300 women to date.",
      },
    
      {
        heading: "Impact Stories",
        stories: [
          {
            name: "Sarah K., Agricultural Cooperative Founder",
            quote: "Our cooperative started with just a few women, but with the support and market linkages provided, we've grown significantly. We're getting fair prices for our produce now, and the increased income has transformed our families' lives. It's truly about empowerment, not just handouts.",
            image: "/of.jpg" // Placeholder
          },
          {
            name: "Fatuma A., Business Owner",
            quote: "The financial literacy training was a game-changer. I used to be intimidated by managing money, but now I budget, track my sales, and feel confident making decisions for my household. The support for our cooperative has given us a collective strength we never had.",
            image: "/grc.jpg" // Placeholder
          },
        ]
      }
    ] as Section[],
    galleryImages: [
      "/h.jpg", // Placeholder
      "/hse.jpg", // Placeholder
      "/of.jpg", // Placeholder
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-8 flex items-center text-gray-700 hover:text-gray-900 font-semibold"
      >
        <ArrowLeft className="mr-2 w-5 h-5" />
        Back to Our Impact
      </button>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center lg:text-left">
        {projectDetails.title}
      </h1>
      <p className="text-green-600 text-lg font-medium mb-8 text-center lg:text-left">{projectDetails.tag}</p>

      {/* Main image or hero for the project */}
      <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-8 shadow-md">
        <Image
          src={projectDetails.galleryImages[0] || "/mas.jpg"} // Use first gallery image or a default
          alt={projectDetails.title}
          fill
          className="rounded-lg"
        />
      </div>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        {projectDetails.fullDescription}
      </p>

      {projectDetails.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
          {section.content && <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>}
          {section.points && (
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {section.points.map((point, pIndex) => (
                <li key={pIndex} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          )}
          {section.stories && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {section.stories.map((story, sIndex) => (
                <div key={sIndex} className="bg-gray-100 p-6 rounded-lg shadow-sm">
                  {story.image && (
                    <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                      <Image src={story.image} alt={story.name} layout="fill" objectFit="cover" />
                    </div>
                  )}
                  <p className="text-gray-800 italic text-center mb-3">&quot;{story.quote}&quot;</p>
                  <p className="font-semibold text-right text-gray-600">- {story.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {projectDetails.galleryImages && projectDetails.galleryImages.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {projectDetails.galleryImages.map((imgSrc, index) => (
              <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={imgSrc}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Optional: Call to Action for donations/support */}
      <div className="text-center mt-16 p-8 bg-green-50 rounded-lg shadow-inner">
        <h3 className="text-2xl font-bold text-green-800 mb-4">Support This Project</h3>
        <p className="text-lg text-green-700 mb-6">Beyond charity, a powerful partnership. Collaborate with us  to co-create sustainable economic growth, driven by the ingenuity and resilience of women</p>
        <Link href="/donate" passHref>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WomGates;