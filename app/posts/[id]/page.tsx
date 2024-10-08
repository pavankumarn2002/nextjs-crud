// app/posts/[id]/page.tsx
"use client"
// app/posts/[id]/page.tsx

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PostDetail({ params }: { params: { id: string } }) {
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();
  const postId = params.id;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        setPost(response.data);
        setTitle(response.data.title);
        setBody(response.data.body);
      })
      .catch(error => console.error(error));
  }, [postId]);

  const handleUpdate = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    router.push('/posts');
  };

  const handleDelete = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });

    router.push('/posts');
  };

  if (!post) return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-3 border border-gray-300 rounded mb-4"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button
        onClick={handleUpdate}
        className="w-full bg-yellow-500 text-white p-3 rounded hover:bg-yellow-600 mb-4"
      >
        Update Post
      </button>
      <button
        onClick={handleDelete}
        className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600"
      >
        Delete Post
      </button>
    </div>
  );
}
