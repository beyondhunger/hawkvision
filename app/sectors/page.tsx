export default function SectorsPage() {
  return (
    <main className="py-20 text-slate-100">
      <div className="container mx-auto px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-sky-300 text-sm">Sectors</p>
          <h1 className="text-5xl font-bold">Sectors Overview</h1>
        </div>

        <p className="text-lg text-slate-200 text-center max-w-3xl mx-auto mb-16">
          Hawkvision Recruitment covers critical hiring needs across healthcare, IT, and non-IT domains, tailoring each search
          to the regulatory requirements, skills, and culture of your organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* HEALTHCARE */}
          <section className="glass-panel p-10 rounded-3xl border-t-4 border-blue-400">
            <h2 className="text-3xl font-bold text-white mb-4">Healthcare</h2>
            <p className="text-slate-200 leading-relaxed">
              Fully compliant clinical and non-clinical staffing for hospitals, clinics, and care providers. We prioritise
              regulatory adherence and patient-centered professionals across nursing, allied health, admin, and leadership roles.
            </p>
          </section>

          {/* IT RECRUITMENT */}
          <section className="glass-panel p-10 rounded-3xl border-t-4 border-indigo-400">
            <h2 className="text-3xl font-bold text-white mb-4">IT Recruitment</h2>
            <p className="text-slate-200 leading-relaxed">
              End-to-end hiring for software, infrastructure, cybersecurity, and digital transformation teams. We match engineers,
              analysts, and project leaders with environments where they can deliver impact quickly.
            </p>
          </section>

          {/* NON-IT / SUPPORT */}
          <section className="glass-panel p-10 rounded-3xl border-t-4 border-teal-400">
            <h2 className="text-3xl font-bold text-white mb-4">Non-IT / Support Roles</h2>
            <p className="text-slate-200 leading-relaxed">
              Business support professionals covering HR, finance, operations, customer service, and admin functions. We focus on
              reliability, cultural fit, and long-term partnership for sustained success.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
