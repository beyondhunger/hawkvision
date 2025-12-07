export default function JobsPage() {
  // Placeholder jobs (Later we will replace with real backend data)
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      location: "London, UK",
      description: "We are looking for a talented software engineer to join our growing team."
    },
    {
      id: 2,
      title: "HR Manager",
      location: "Manchester, UK",
      description: "Lead recruiting, onboarding, and talent development activities."
    },
    {
      id: 3,
      title: "Project Coordinator",
      location: "Remote",
      description: "Coordinate schedules, track deliverables, and manage communication."
    },
    {
      id: 4,
      title: "Data Analyst",
      location: "Birmingham, UK",
      description: "Analyze large datasets and produce business insights."
    },
    {
      id: 5,
      title: "Customer Support Executive",
      location: "Leeds, UK",
      description: "Assist customers and resolve service-related inquiries."
    },
    {
      id: 6,
      title: "Marketing Specialist",
      location: "Remote",
      description: "Create and manage marketing campaigns across digital platforms."
    },
  ];

  return (
    <main className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold text-center mb-12">Available Job Openings</h1>

        {/* JOBS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold mb-3">{job.title}</h2>
              <p className="text-gray-500 mb-2">{job.location}</p>
              <p className="text-gray-700 mb-4">{job.description}</p>

              <a
                href={`/jobs/${job.id}`}
                className="text-blue-600 font-semibold hover:underline"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
