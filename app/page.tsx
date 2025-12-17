const services = [
  {
    title: "Workforce Staffing",
    description: "Fast access to vetted healthcare, IT, and business-support professionals on demand.",
    accent: "from-blue-600/90 via-blue-500/80 to-cyan-500/80",
  },
  {
    title: "Professional Hiring",
    description: "Build long-term teams with senior specialists ready to drive your growth agenda.",
    accent: "from-indigo-600/90 via-purple-500/80 to-fuchsia-500/70",
  },
  {
    title: "Contract Staffing",
    description: "Flexible, project-ready talent pools for urgent or seasonal workloads.",
    accent: "from-sky-600/90 via-cyan-500/80 to-teal-500/80",
  },
  {
    title: "Payroll Outsourcing",
    description: "Fully managed payroll operations with compliance and transparent reporting.",
    accent: "from-blue-700/80 via-slate-800/80 to-slate-600/80",
  },
  {
    title: "RPO Services",
    description: "Embedded recruitment pods that handle sourcing through onboarding at scale.",
    accent: "from-purple-600/80 via-indigo-500/80 to-blue-500/70",
  },
  {
    title: "Talent Consulting",
    description: "Advisory support to optimise hiring processes and employer branding.",
    accent: "from-cyan-600/80 via-emerald-500/80 to-lime-500/70",
  },
];

const featuredJobs = [
  { title: "Software Engineer", location: "London, UK" },
  { title: "HR Manager", location: "Manchester, UK" },
  { title: "Project Coordinator", location: "Remote" },
];

const testimonials = [
  {
    quote:
      "HawkVision helped us hire highly skilled candidates within days. Their recruitment process is fast and professional.",
    name: "Sarah Thompson",
    title: "HR Director, FinTech UK",
  },
  {
    quote:
      "The team understood our hiring needs perfectly. We filled several critical roles through HawkVision and kept compliance tight.",
    name: "Daniel Roberts",
    title: "Operations Manager, RetailCo",
  },
  {
    quote:
      "As a job seeker, HawkVision guided me at every step. I landed my dream job thanks to their excellent support!",
    name: "Amelia Johnson",
    title: "Software Engineer",
  },
];

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-32">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.5),_transparent_55%)]" />
        <div className="container relative mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="text-center lg:text-left max-w-2xl">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sky-200 uppercase tracking-wide text-sm">
              Premium hiring partner
            </p>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Hawkvision Recruitment <span className="text-sky-300">Precision Talent Solutions</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8">
              Providing Healthcare, IT, and Non-IT professionals nationwide with a perfect blend of compliance,
              innovation, and speed.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="/jobs"
                className="px-8 py-4 rounded-full bg-white text-blue-700 font-semibold shadow-xl shadow-slate-900/20 hover:-translate-y-0.5 transition"
              >
                Find Jobs
              </a>

              <a
                href="/contact"
                className="px-8 py-4 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
              >
                Hire Talent
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
            {[
              { stat: "250+", label: "Placements made" },
              { stat: "48hrs", label: "Average shortlist time" },
              { stat: "98%", label: "Compliance accuracy" },
              { stat: "24/7", label: "Client support" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/10 border border-white/10 p-6 text-center backdrop-blur">
                <p className="text-4xl font-bold text-white">{item.stat}</p>
                <p className="text-sm text-blue-100 mt-2 uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-sky-300 text-sm">What we do</p>
            <h2 className="text-4xl font-bold text-white mt-2">Recruitment services designed for speed and trust</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl p-8 text-white shadow-2xl shadow-blue-950/30 bg-gradient-to-br ${service.accent}`}
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-slate-100/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED JOBS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-6">
            <div>
              <p className="uppercase tracking-widest text-sm text-sky-300">Featured roles</p>
              <h2 className="text-4xl font-bold text-white">Open mandates this week</h2>
            </div>
            <a href="/jobs" className="px-5 py-3 rounded-full border border-sky-400/60 text-sky-100 hover:bg-sky-500/20 transition">
              View All Jobs →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job) => (
              <div key={job.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur shadow-2xl shadow-slate-900/30">
                <h3 className="text-2xl font-semibold text-white mb-2">{job.title}</h3>
                <p className="text-slate-300 mb-4">{job.location}</p>
                <a href="/jobs" className="text-sky-300 font-semibold hover:underline">
                  View Details →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-sm text-sky-300">Why clients return</p>
          <h2 className="text-4xl font-bold text-white mb-12">Recruitment engineered for impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Expert Recruiters", desc: "Industry insiders who understand regulated hiring." },
              { title: "Fast Hiring Process", desc: "Streamlined pipelines to fill roles within days." },
              { title: "Trusted by Businesses", desc: "Proven delivery for startups through enterprise teams." },
              { title: "Client Satisfaction", desc: "Dedicated support with transparent reporting." },
            ].map((item, idx) => (
              <div
                key={item.title}
                className={`p-8 rounded-2xl text-left shadow-2xl shadow-slate-900/20 border border-white/5 ${
                  idx % 2 === 0
                    ? "bg-gradient-to-br from-blue-700/70 to-slate-900/60"
                    : "bg-gradient-to-br from-slate-900/60 to-indigo-800/60"
                }`}
              >
                <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="uppercase tracking-widest text-sm text-sky-300">Testimonials</p>
          <h2 className="text-4xl font-bold text-white mb-12">What our clients and candidates say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur shadow-2xl shadow-slate-900/25 text-left"
              >
                <p className="text-slate-100 italic mb-6">“{testimonial.quote}”</p>
                <h3 className="font-semibold text-xl text-white">{testimonial.name}</h3>
                <p className="text-slate-300">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
