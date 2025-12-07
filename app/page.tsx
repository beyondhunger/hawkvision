export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-28">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Connecting Talent to Opportunity
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            HawkVision Recruitment helps companies hire smarter and professionals 
            find meaningful careers. Your success starts here.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/jobs"
              className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-100 transition"
            >
              Find Jobs
            </a>

            <a
              href="/contact"
              className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Hire Talent
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Recruitment Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Workforce Staffing</h3>
              <p className="text-gray-600">
                Hire skilled professionals and temporary workforce across multiple industries.
              </p>
            </div>

            <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Professional Hiring</h3>
              <p className="text-gray-600">
                Find qualified candidates for permanent and long-term roles.
              </p>
            </div>

            <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Contract Staffing</h3>
              <p className="text-gray-600">
                Flexible project-based hiring that adapts to your business needs.
              </p>
            </div>

            <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Payroll Outsourcing</h3>
              <p className="text-gray-600">
                Complete payroll management solutions with accuracy and compliance.
              </p>
            </div>

            <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">RPO Services</h3>
              <p className="text-gray-600">
                End-to-end recruitment process outsourcing for large-scale hiring.
              </p>
            </div>

            <div className="bg-white shadow-md p-8 rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-4">Talent Consulting</h3>
              <p className="text-gray-600">
                Strategic HR consulting to help businesses hire and retain top talent.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED JOBS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold">Featured Jobs</h2>
            <a href="/jobs" className="text-blue-600 font-semibold hover:underline">
              View All Jobs →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">Software Engineer</h3>
              <p className="text-gray-600 mb-4">London, UK</p>
              <a href="/jobs/1" className="text-blue-600 font-medium hover:underline">
                View Details →
              </a>
            </div>

            <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">HR Manager</h3>
              <p className="text-gray-600 mb-4">Manchester, UK</p>
              <a href="/jobs/2" className="text-blue-600 font-medium hover:underline">
                View Details →
              </a>
            </div>

            <div className="p-8 bg-white shadow-md rounded-xl hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">Project Coordinator</h3>
              <p className="text-gray-600 mb-4">Remote</p>
              <a href="/jobs/3" className="text-blue-600 font-medium hover:underline">
                View Details →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          
          <h2 className="text-4xl font-bold mb-12">Why Choose HawkVision?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">Expert Recruiters</h3>
              <p className="text-gray-600">
                Our experienced team understands industry needs and delivers top-quality talent.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">Fast Hiring Process</h3>
              <p className="text-gray-600">
                Quickly connect with qualified candidates using our streamlined recruitment system.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">Trusted by Businesses</h3>
              <p className="text-gray-600">
                Companies across the UK rely on HawkVision for reliable workforce solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3">Candidate-Focused</h3>
              <p className="text-gray-600">
                We help professionals find jobs that align with their skills and goals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="p-8 shadow-md rounded-xl bg-gray-50 hover:shadow-lg transition">
              <p className="text-gray-700 italic mb-6">
                “HawkVision helped us hire highly skilled candidates within days. 
                Their recruitment process is fast and professional.”
              </p>
              <h3 className="font-semibold text-xl">— Sarah Thompson</h3>
              <p className="text-gray-500">HR Director, FinTech UK</p>
            </div>

            <div className="p-8 shadow-md rounded-xl bg-gray-50 hover:shadow-lg transition">
              <p className="text-gray-700 italic mb-6">
                “The team understood our hiring needs perfectly. We filled several 
                critical roles through HawkVision.”
              </p>
              <h3 className="font-semibold text-xl">— Daniel Roberts</h3>
              <p className="text-gray-500">Operations Manager, RetailCo</p>
            </div>

            <div className="p-8 shadow-md rounded-xl bg-gray-50 hover:shadow-lg transition">
              <p className="text-gray-700 italic mb-6">
                “As a job seeker, HawkVision guided me at every step. 
                I landed my dream job thanks to their excellent support!”
              </p>
              <h3 className="font-semibold text-xl">— Amelia Johnson</h3>
              <p className="text-gray-500">Software Engineer</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
