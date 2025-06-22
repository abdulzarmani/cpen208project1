'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('user', email);
      router.push('/dashboard');
    } else {
      alert('Enter email and password');
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
    </form>
  );
}
