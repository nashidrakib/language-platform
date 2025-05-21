// src/pages/Welcome.jsx
export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-lg">Start your language learning adventure.</p>
        <div className="space-x-4">
          <a href="/login" className="px-4 py-2 bg-blue-500 text-white rounded">Login</a>
          <a href="/create-account" className="px-4 py-2 bg-green-500 text-white rounded">Create Account</a>
        </div>
      </div>
    </div>
  );
}
