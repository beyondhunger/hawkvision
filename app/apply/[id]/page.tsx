interface ApplyPageProps {
  params: {
    id: string;
  };
}

export default function ApplyPage({ params }: ApplyPageProps) {
  const jobId = params.id;

  return (
    <main className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Apply for Job #{jobId}
        </h1>

        {/* APPLICATION FORM */}
        <section className="bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-700">
            Candidate Application Form
          </h2>

          <form action="/apply/success" method="GET" className="space-y-6">


            {/* FULL NAME */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 
                           focus:ring-blue-500 outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 
                           focus:ring-blue-500 outline-none"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 
                           focus:ring-blue-500 outline-none"
              />
            </div>

            {/* RESUME UPLOAD */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Upload Resume (PDF or DOC)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg bg-white 
                           focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* COVER LETTER */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Cover Letter
              </label>
              <textarea
                rows={6}
                placeholder="Write your cover letter here..."
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 
                           focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-700 text-white text-lg font-semibold 
                         rounded-lg hover:bg-blue-800 transition"
            >
              Submit Application
            </button>

          </form>
        </section>

      </div>
    </main>
  );
}
