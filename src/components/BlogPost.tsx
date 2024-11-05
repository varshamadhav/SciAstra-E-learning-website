import type { BlogPost as BlogPostType } from '../types';

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <span>{post.author}</span>
          <span>•</span>
          <time>{new Date(post.publishDate).toLocaleDateString()}</time>
        </div>
        <p className="text-gray-600">{post.content}</p>
      </div>
    </article>
  );
}