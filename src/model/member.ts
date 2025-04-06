import { Project } from './project';
import { User } from './user';

export interface Member {
  id: number;
  user: User;
  projects: Project;
  project_id: number;
  name: string,
  mobile: string,
  email: string,
  position: string,
  created_at: string;
  updated_at: string;
}
