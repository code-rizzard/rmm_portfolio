import { Project } from "@/types";

export async function getProjects(): Promise<Project[]> {
  const rootUrl =
    "https://raw.githubusercontent.com/fireWizard23/profile_projects_list/main";

  const projectsResponse = await fetch(`${rootUrl}/list.json`, {
    next: { revalidate: 3000 },
  });

  const projects: Project[] = await projectsResponse.json();

  return projects.map((project) => {
    return {
      ...project,
      image: `${rootUrl}/${project.image}`,
    };
  });
}
