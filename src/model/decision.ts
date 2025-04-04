import { Project } from "./project";

export interface Decision {
  project_id: string,
  projects_ids: string[] | string,
  title: string,
  content: string,
  progress_percentage: string,
  status_id: number,
  decision_date: string,
  id: number,
  files: File[] | string[],
  project: Project
}
