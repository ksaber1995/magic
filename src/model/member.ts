import { Project } from './project';
import { User } from './user';

export interface Member {
  id: number;
  user: User;
  projects: Project;
  created_at: string;
  updated_at: string;
}
