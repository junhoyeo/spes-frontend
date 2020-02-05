import { IPost } from './post';
import { IUser } from './user';

export interface IRoomSummary {
  _id: string;
  author: IUser;
  users: IUser[];
  title: string;
  closed?: boolean;
}

export interface IRoomCreation {
  title: string;
  goal: string;
  continuous: boolean;
  finish: number;
}

export interface IRoom extends IRoomCreation {
  _id: string;
  users: IUser[];
  posts: IPost[];
}
