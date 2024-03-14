import { FaChevronRight } from "react-icons/fa6";
import projectsData from "@data/projects";

export default function ProjectsFilterForm() {
  const technologies = [
    ...new Set(projectsData.map(({ techs }) => techs).flat()),
  ];

  return (
    <form>
      <details className="space-y-3" open>
        <summary className="flex justify-between items-center cursor-pointer">
          <strong>Technology</strong>

          <FaChevronRight className="transition-transform duration-300" />
        </summary>

        <div className="flex flex-col space-y-1">
          {technologies.map((tech) => (
            <label
              className="inline-flex items-center gap-2 py-2 px-4 capitalize hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg cursor-pointer"
              key={tech}
            >
              <input
                className=""
                name="technologies"
                value={tech}
                type="checkbox"
              />
              {tech}
            </label>
          ))}
        </div>
      </details>

      <button
        className="py-1 px-2 border rounded-3xl bg-primary dark:bg-primary-dark"
        type="submit"
      >
        View Results
      </button>
    </form>
  );
}
