import { FileItem } from "./filte";
import { User } from "./user";

export interface CommentItem {
  id: number,
  files: FileItem[],
  user_data: User,
  comment: string
  created_at: string
}