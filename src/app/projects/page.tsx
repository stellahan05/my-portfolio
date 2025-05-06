import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
          key={index}
          title={project.title}
          description={project.shortDescription} // ONLY show shortDescription here
          imageUrl={project.imageUrl}
          githubUrl={project.githubUrl}
          liveDemoUrl={project.liveDemoUrl}
          slug={project.slug}
        />
        ))}
      </div>
    </main>
  );
}
