export interface IPost {
  id: number;
  user_id: number;
  title: string;
  content: string;
  image_path: string;
}

export interface IPostDTO {
  user_id: number;
  title: string;
  content: string;
  image_path: string;
}
