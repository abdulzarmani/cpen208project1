import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans min-h-screen">
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">CPEN 208 Project</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
