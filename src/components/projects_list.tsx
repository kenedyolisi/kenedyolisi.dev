import Project from "@components/project";
import { type Project as IProject } from "@data/projects";

interface Props {
  projects: IProject[];
}
export default function ProjectsList({ projects }: Props) {
  return (
    <ul className="grid gap-5 grid-cols-1 md:grid-cols-2">
      {projects.map((project) => (
        <a href={`/projects/${project.id}`} key={project.id}>
          <Project project={project} />
        </a>
      ))}
    </ul>
  );
}
