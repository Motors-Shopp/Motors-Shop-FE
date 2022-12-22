interface IComment {
  id: string;
  name: string;
  img: string;
  date: string;
  text: string;
}

interface ICommentRequest {
  id: string;
  name: string;
  img: string;
  date: string;
  text: string;
}

export type { IComment, ICommentRequest };
