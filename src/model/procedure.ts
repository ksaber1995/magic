import { Member } from "./member";
import { Project } from "./project";

export interface Procedure{
  id: number,
  procedure_group: number,
  project: Project,
  members: Member[],
  title: string,
  content: string,
  files: string[],
  // comments: {},
  progress_percentage: string,
  status_id: number,
  status: null,
  procedure_date: null,
  created_at: string,
  updated_at: string

}
