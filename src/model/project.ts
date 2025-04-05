import { Member } from './member';
export interface Project {
  title: string,
  content: string,
  status_id: number,
  image: string,
  updated_at: string,
  created_at: string,
  id: number,

  members: Member[]
}
