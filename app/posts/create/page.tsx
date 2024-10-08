// app/posts/create/page.tsx
"use client"
// app/posts/create/page.tsx

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    router.push('/posts');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-3 border border-gray-300 rounded"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

