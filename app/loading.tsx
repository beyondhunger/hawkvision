export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-700 rounded-full animate-spin" />

        {/* Text */}
        <p className="text-gray-700 text-lg font-medium">
          Loading HawkVision...
        </p>
      </div>
    </main>
  );
}
