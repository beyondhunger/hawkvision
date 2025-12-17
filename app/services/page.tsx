export default function ServicesPage() {
  return (
    <main className="py-20 text-slate-100">
      <div className="container mx-auto px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sky-300 text-sm">Solutions</p>
          <h1 className="text-5xl font-bold">Our Recruitment Services</h1>
        </div>

        {/* INTRO */}
        <section className="glass-panel rounded-3xl p-10 mb-16">
          <p className="text-lg leading-relaxed text-slate-100">
            At HawkVision Recruitment, we offer a full range of hiring solutions designed to help businesses scale
            efficiently while connecting professionals with meaningful job opportunities.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-slate-200">
            Whether you're looking for permanent employees, temporary staffing, or end-to-end recruitment process
            management, we have the tools, expertise, and network to support your growth.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {[
            {
              title: "Professional Hiring",
              desc: "Permanent recruitment solutions to hire skilled and experienced professionals across industries.",
              accent: "from-blue-600/80 via-sky-600/80 to-cyan-500/80",
            },
            {
              title: "Workforce Staffing",
              desc: "Reliable temporary and contract workforce to meet seasonal, project-based, or urgent demand.",
              accent: "from-indigo-600/80 via-purple-500/80 to-pink-500/70",
            },
            {
              title: "Contract Hiring",
              desc: "Scale quickly without long-term commitments through flexible contract models.",
              accent: "from-sky-600/80 via-cyan-500/80 to-emerald-500/70",
            },
            {
              title: "Payroll Outsourcing",
              desc: "Complete payroll management including compliance, onboarding, and reporting.",
              accent: "from-blue-800/80 via-slate-800/80 to-slate-600/70",
            },
            {
              title: "Recruitment Process Outsourcing (RPO)",
              desc: "End-to-end recruitment support from sourcing and screening to final hiring and onboarding.",
              accent: "from-purple-600/80 via-indigo-500/80 to-blue-500/70",
            },
            {
              title: "Talent Consulting",
              desc: "Strategic HR & staffing consultation to build stronger hiring strategies.",
              accent: "from-cyan-600/80 via-teal-500/80 to-lime-500/70",
            },
          ].map((service) => (
            <div key={service.title} className={`rounded-2xl p-8 text-white bg-gradient-to-br ${service.accent} shadow-2xl shadow-slate-900/40`}>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-slate-100/90">{service.desc}</p>
            </div>
          ))}
        </section>

        {/* HOW WE WORK SECTION */}
        <section className="glass-panel rounded-3xl p-10 mb-20">
          <h2 className="text-4xl font-bold text-center mb-10">How Our Hiring Process Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "1",
                title: "Understanding Your Needs",
                desc: "We analyse your requirements, team culture, and hiring expectations.",
              },
              {
                step: "2",
                title: "Sourcing & Screening",
                desc: "Our recruitment experts identify and assess the best candidates.",
              },
              {
                step: "3",
                title: "Hiring & Onboarding",
                desc: "We coordinate interviews, negotiate offers, and assist onboarding.",
              },
            ].map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-3xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
