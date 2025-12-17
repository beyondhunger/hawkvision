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
    <main className="py-20 text-slate-100">
      <div className="container mx-auto px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sky-300 text-sm">Careers</p>
          <h1 className="text-5xl font-bold">Available Job Openings</h1>
          <p className="text-slate-300 mt-4">Explore the latest opportunities across healthcare, IT, and support functions.</p>
        </div>

        {/* JOBS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className={`p-8 rounded-2xl border border-white/10 backdrop-blur shadow-2xl shadow-slate-900/30 ${
                index % 2 === 0 ? "bg-white/5" : "bg-gradient-to-br from-blue-600/20 to-slate-900/40"
              }`}
            >
              <h2 className="text-2xl font-bold mb-2 text-white">{job.title}</h2>
              <p className="text-slate-300 mb-3">{job.location}</p>
              <p className="text-slate-200 mb-5">{job.description}</p>

              <a
                href={`/jobs/${job.id}`}
                className="inline-flex items-center gap-2 text-sky-300 font-semibold hover:translate-x-1 transition"
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
