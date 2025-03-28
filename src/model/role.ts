export interface Role{
  name: string;
  color: string;
  transformation: boolean;
  id: number | string;
  edit_permission: boolean;
  permission_ids: number[]
}