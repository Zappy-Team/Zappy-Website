import { ProjectsTypes } from "../../@types/project/project";
import { SERVER_URL } from "../../middlewares/env";

export async function getProjectsFeatureData(): Promise<ProjectsTypes> {
  const res = await fetch(`${SERVER_URL}api/v1/project?feature=true`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
