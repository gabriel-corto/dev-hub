import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <div className="grid grid-cols-3 gap-12 px-16 py-16 max-lg:py-4 max-lg:px-5 max-lg:grid-cols-1">
      {Array.from({ length: 6 }).map((_) => {
        return <ProjectCard />;
      })}
    </div>
  );
}
