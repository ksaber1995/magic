import { Member } from './member';
import { User } from './user';
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


export interface ProjectHistory {

action: 'update'
changes: any
created_at: string
historable_id: number
historable_type: string
id: number
updated_at: string
user: User,
user_id: number}
