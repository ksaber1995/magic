export interface User{
  id: number,
  name:  string,
  email: string,
  password: string,
  position: string,
  phone: string,
  mobile: string,
  fax: string,
  role: string,
  status: string,
  image: File | string,
  group:string,
  updated_at:string,
  created_at:string
  email_verified: boolean;
}
