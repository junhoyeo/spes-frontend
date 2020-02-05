export interface IPost {
  name: string;
  text: string;
  image: string;
  vote: [number, number];
  currentVote: 0 | 1 | 2;
}

export interface IRoom {
  name: string;
  goal: string;
  posts: IPost[];
}

export interface IRank {
  name: string;
  image: string;
  roomCount: number;
  points: number;
}
