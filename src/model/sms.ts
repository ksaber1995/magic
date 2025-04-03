export interface Sms{
  message: string;
  status_id: number;
  members_ids: number[] | string
  created_at: string
}
