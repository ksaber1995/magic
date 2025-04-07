import { FileItem } from "./filte";
import { Project } from "./project";

export interface IReport{
  project_id: number;
  status: number;
  image: File | string;
  content: string;
  title: string;
  id: number
  project: Project
  created_at: string
  updated_at: string
  files: string[] | File[] | FileItem[]

  status_id: number
}
