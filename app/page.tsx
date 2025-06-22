export default function HomePage() {
  return (
    <main className="bg-white p-6 rounded shadow-md text-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome</h2>
      <p className="mb-6 text-gray-600">Navigate to the relevant pages:</p>
      <div className="space-x-4">
        <a href="/register" className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">Register</a>
        <a href="/login" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Login</a>
        <a href="/dashboard" className="text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-800">Dashboard</a>
      </div>
    </main>
  );
}
