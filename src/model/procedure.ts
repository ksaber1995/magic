import { FileItem } from "./filte";
import { Member } from "./member";
import { Project } from "./project";

export interface Procedure{
  id: number,
  members_ids: number[],
  procedure_group_id: number,
  project_id: number,
  procedure_group: number,
  project: Project,
  members: Member[],
  title: string,
  content: string,
  files: string[] | File[] | FileItem[],
  // comments: {},
  progress_percentage: string,
  status_id: number,
  status: null,
  created_at: string,
  updated_at: string
  procedure_date: string
}


export interface ProcedureGroup{
  project_id: number;
  id: number;
  name:string
}