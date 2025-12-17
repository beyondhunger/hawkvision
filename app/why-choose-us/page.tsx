export default function WhyChooseUsPage() {
  return (
    <main className="py-20 text-slate-100">
      <div className="container mx-auto px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-6">
          <p className="uppercase tracking-[0.3em] text-sky-300 text-sm">Why choose us</p>
          <h1 className="text-5xl font-bold">Why Choose Us</h1>
        </div>
        <p className="text-lg text-slate-200 text-center max-w-3xl mx-auto mb-16">
          Hawkvision Recruitment blends ethical hiring practices with rigorous compliance so clients receive dependable,
          industry-aligned talent across healthcare, IT, and business support functions.
        </p>

        {/* MISSION & VISION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          <div className="glass-panel p-10 rounded-3xl border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-200 leading-relaxed">
              Deliver recruitment solutions that keep compliance, transparency, and service quality at the core, ensuring
              every placement strengthens client operations and candidate careers.
            </p>
          </div>

          <div className="glass-panel p-10 rounded-3xl border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-slate-200 leading-relaxed">
              Become the most trusted partner for mission-critical staffing, recognized for unwavering ethics and long-term
              partnerships across regulated industries.
            </p>
          </div>

        </section>

        {/* VALUE CARDS */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-10">What Sets Us Apart</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="glass-panel p-8 rounded-2xl border-t-4 border-blue-400">
              <h3 className="text-2xl font-semibold text-white mb-3">Fully compliant recruitment</h3>
              <p className="text-slate-200">
                Every process aligns with UK employment regulations, giving you peace of mind.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-t-4 border-indigo-400">
              <h3 className="text-2xl font-semibold text-white mb-3">
                DBS & professional checks
              </h3>
              <p className="text-slate-200">
                Healthcare talent undergoes full DBS, license, and professional credential verification.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-t-4 border-teal-400">
              <h3 className="text-2xl font-semibold text-white mb-3">Fast and reliable staffing</h3>
              <p className="text-slate-200">
                Agile sourcing and vetted talent pools reduce time-to-fill for critical vacancies.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-t-4 border-emerald-400">
              <h3 className="text-2xl font-semibold text-white mb-3">
                GDPR-secure data handling
              </h3>
              <p className="text-slate-200">
                Candidate and client information stays secure with GDPR-aligned systems and processes.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl border-t-4 border-purple-400 md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Ethical and transparent processes
              </h3>
              <p className="text-slate-200">
                Clear communication, honest feedback, and a partnership mindset at every stage.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
