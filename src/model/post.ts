import { FileItem } from "./filte";
import { Project } from "./project";

export interface Post{
  project_id: string;
  project: Project;
  image: File;
  content: string;
  title: string;
  id: number
  files: string[] | File[] | FileItem[]
}
