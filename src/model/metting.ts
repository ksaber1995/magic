export interface Meeting{
  title: string;
  content: string;
  meeting_address: string;
  meeting_date: string;
  meeting_time: string;
  reminder_time: string;
  members_ids: number[];
  projects_ids: number[];
  files: File[]
  coordinator_user?: {
    name: string
  };

  id?:string;
}