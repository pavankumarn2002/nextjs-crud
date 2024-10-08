// app/posts/page.tsx
"use client"
// app/posts/page.tsx

import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>
      <Link href="/posts/create">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create New Post
        </button>
      </Link>
      <ul className="mt-6 space-y-4">
        {posts.map((post:any) => (
          <li key={post.id} className="border-b border-gray-200 pb-2">
            <Link href={`/posts/${post.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
