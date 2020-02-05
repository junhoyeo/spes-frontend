export interface IVote {
  agreed: boolean;
  agreedUsers: string[];
}

export interface IPostCreation {
  content: string;
  image?: string;
}

export interface IPost extends IVote, IPostCreation {
  _id: string;
  author: string;
  created: number;
}
