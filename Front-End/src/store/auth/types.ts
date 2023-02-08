import { Faculty } from "../../types/Faculty";
import { Subject } from "../../types/Subject";

export interface IAuthSuccessResponse {
  token: string;
  user: any;
}

export interface UserState {
  user?: User;
}

export interface User {
  id: string;
  name: string,
  surname: string,
  gender: string,
  dateOfBirth: string,
  createdAt: string,
  email: string,
  role: string,
  subjects: Subject[],
  faculty: Faculty
}
