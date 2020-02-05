export interface IUser {
  _id?: string;
  username: string;
  email?: string;
  profile?: string;
  points?: number;
  achievement?: [number, number];
}
