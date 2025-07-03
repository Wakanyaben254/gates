// pages/projects/water-access.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'; // Don't forget Link for back button if needed
import { ArrowLeft } from 'lucide-react'; // For the back arrow icon

const YutGates: React.FC = () => {
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
    title: "Youth Empowerment Program",
    tag: "Youth Entrepreneurship",
    fullDescription: "Our Youth Empowerment Program focuses on providing practical skills training, mentorship, and entrepreneurship support to young people in marginalized communities, helping them create sustainable livelihoods and become agents of change.",
    sections: [
      {
        heading: "Project Overview",
        content: "Our Youth Economic Initiative is designed to empower young people by nurturing their entrepreneurial spirit. We provide aspiring young entrepreneurs with comprehensive training, mentorship, and access to resources necessary to launch and grow sustainable businesses. This program focuses on equipping youth with essential business skills, financial literacy, and practical support to transform innovative ideas into viable enterprises, contributing to job creation and economic growth within their communities.",
      },
    
      {
        heading: "Impact Stories",
        stories: [
          {
            name: "Steve J., Aspiring Entrepreneur",
            quote: "Before this initiative, I had ideas but no clue how to turn them into reality. The mentorship was invaluable; it helped me navigate challenges and showed me that entrepreneurship is truly achievable for young people like me.",
            image: "/by.jpg" // Placeholder
          },
          {
            name: "Maria C., Program Mentor",
            quote: "It's incredible to see the talent and drive of young people when given the right support. This program is a vital step in helping them contribute to the economy and create jobs for themselves and others.",
            image: "/man.jpg" // Placeholder
          },
        ]
      }
    ] as Section[],
    galleryImages: [
      "/grp.jpg", // Placeholder
      "/by.jpg", // Placeholder
      "/man.jpg", // Placeholder
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
          src={projectDetails.galleryImages[0] || "/grp.jpg"} // Use first gallery image or a default
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
        <p className="text-lg text-green-700 mb-6">Youth-led change. Your crucial support. Together, we can build a generation of creators, not just consumers</p>
        <Link href="/donate" passHref>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default YutGates;
