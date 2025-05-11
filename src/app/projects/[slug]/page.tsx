import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProjectDetail({ params }: Props) { 
const resolvedParams = await params;
const project = projects.find(p => p.slug === resolvedParams?.slug);

if (!project) {
    notFound();
}

  return (
    <main className="flex flex-col items-center justify-center p-8 animate-fadeIn">
        {/* Back Button */}
      <div className="w-full max-w-3xl mb-6">
      <Link href="/projects" className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded transition">
        ← Back to Projects
      </Link>
      </div>

        {/* Project Content */}
      <div className="w-full max-w-3xl mb-6">
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          width={1200}
          height={600}
          className="w-full max-w-3xl object-cover rounded-lg mb-8"
          priority
        />
      </div>
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>

      <p className="text-gray-700 text-lg mb-6 text-center max-w-2xl">{project.fullDescription}</p>

      <div className="text-left max-w-3xl w-full mb-6">
        <h2 className="text-3xl font-semibold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="text-left max-w-3xl w-full mb-8">
        <h2 className="text-3xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-8">
        <a href={project.githubUrl} target="_blank" className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition">
          View GitHub
        </a>
        {project.liveDemoUrl && (
          <a href={project.liveDemoUrl} target="_blank" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-400 transition">
            Live Demo
          </a>
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
    return projects.map((project) => ({
      slug: project.slug,
    }));
  }