export default function ApplySuccessPage() {
  return (
    <main className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl text-center">

        <h1 className="text-5xl font-bold text-green-600 mb-8">
          Application Submitted!
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          Thank you for applying. Our recruitment team will review your application
          and get back to you shortly.
        </p>

        <a
          href="/jobs"
          className="px-8 py-3 bg-blue-700 text-white rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
        >
          Back to Jobs
        </a>

      </div>
    </main>
  );
}
