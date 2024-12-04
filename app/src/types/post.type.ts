export type PostType = {
  id: number;
  user_id: number;
  title: string;
  content: string;
  image_path: string;
};

export type PostDto = {
  user_id: number;
  title: string;
  content: string;
  image_path: string;
};
