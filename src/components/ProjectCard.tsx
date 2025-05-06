'use client';

import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl?: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  liveDemoUrl,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">GitHub</a>
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
    </Link>
  );
}