export default function NotFound() {
  return (
    <main className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 text-center">

        <h1 className="text-6xl font-bold text-blue-700 mb-6">404</h1>

        <h2 className="text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          The page you are looking for doesn't exist or was moved.
        </p>

        <a
          href="/"
          className="px-8 py-3 bg-blue-700 text-white text-lg rounded-lg hover:bg-blue-800 transition"
        >
          Go Back Home
        </a>

      </div>
    </main>
  );
}
