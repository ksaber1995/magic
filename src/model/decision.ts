import { Project } from "./project";

export interface Decision {
  project_id: string,
  title: string,
  content: string,
  progress_percentage: string,
  status_id: number,
  decision_date: string,
  id: number,
  files: File[],
  project: Project
}