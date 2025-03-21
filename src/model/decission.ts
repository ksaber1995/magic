export interface Decision {
  project_id: string,
  title: string,
  content: string,
  progress_percentage: string,
  status_id: number,
  decision_date: string,
  // files[0]: File
}