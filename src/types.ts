export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}