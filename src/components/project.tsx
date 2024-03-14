import type { Project as IProject } from "@data/projects";

interface Props {
  project: IProject;
}

export default function Project({ project }: Props) {
  const { image, title } = project;

  return (
    <li className="border rounded-lg">
      <img
        className="rounded-t-lg aspect-video"
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
      />
      <h2>{title}</h2>
    </li>
  );
}
