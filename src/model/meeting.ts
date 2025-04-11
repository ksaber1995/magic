import { FileItem } from "./filte";
import { Project } from "./project";

export interface Meeting{
  title: string;
  content: string;
  meeting_address: string;
  meeting_date: string;
  meeting_time: string;
  reminder_time: string;
  end_meeting_time?:string;
  members_ids: number[];
  projects_ids: number[];
  files: File[] | FileItem[];
  coordinator_user?: {
    name: string, 
    image: string
  };

  members?: any[],
  projects?: Project[],

  id?:number;
}
