interface JobDetailsProps {
  params: {
    id: string;
  };
}

export default function JobDetailsPage({ params }: JobDetailsProps) {
  const jobId = params.id;

  // Temporary placeholder job data (later replaced with real backend data)
  const job = {
    title: "Software Engineer",
    location: "London, UK",
    description:
      "We are looking for a skilled Software Engineer to join our rapidly growing technology team. The candidate should be experienced in modern JavaScript frameworks and comfortable working in a fast-paced environment.",
    responsibilities: [
      "Develop and maintain web applications.",
      "Collaborate with designers, developers, and stakeholders.",
      "Write clean, scalable, and reliable code.",
      "Participate in code reviews and team meetings.",
    ],
    requirements: [
      "2+ years of software development experience.",
      "Strong knowledge of JavaScript, React, or Next.js.",
      "Experience with REST APIs or GraphQL.",
      "Good communication and problem-solving skills.",
    ],
  };

  return (
    <main className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* JOB HEADER */}
        <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
        <p className="text-xl text-gray-600 mb-10">{job.location}</p>

        {/* JOB DESCRIPTION */}
        <section className="bg-white p-10 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </section>

        {/* RESPONSIBILITIES */}
        <section className="bg-white p-10 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* REQUIREMENTS */}
        <section className="bg-white p-10 rounded-xl shadow-md mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Requirements</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {job.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* APPLY BUTTON */}
        <div className="text-center">
          <a
            href={`/apply/${jobId}`}
            className="px-10 py-3 bg-blue-700 text-white font-semibold text-lg rounded-lg hover:bg-blue-800 transition"
          >
            Apply Now
          </a>
        </div>

      </div>
    </main>
  );
}
