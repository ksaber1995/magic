export interface Procedure{
  project_id: number,
  procedure_group_id: number,
  // members_ids[0]: number,
  title: string,
  content: string,
  progress_percentage: number,
  status_id: number,
  procedure_date: string

}