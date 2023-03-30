import { type IUniversity } from './university.model';

export interface IBlog {
  id?: number;
  title: string;
  coverImage: string;
  author: string;
  content: string;
  createdAt: string;
  likeCount: number;
  university?: IUniversity;
}

export class BlogModel implements IBlog {
  id?: number;
  title: string;
  coverImage: string;
  author: string;
  content: string;
  createdAt: string;
  likeCount: number;
  university?: IUniversity;

  constructor(blog: IBlog) {
    this.id = blog.id;
    this.title = blog.title;
    this.coverImage = blog.coverImage;
    this.author = blog.author;
    this.content = blog.content;
    this.createdAt = blog.createdAt;
    this.likeCount = blog.likeCount;
    this.university = blog.university;
  }
}
