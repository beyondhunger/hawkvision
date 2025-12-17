export default function AboutPage() {
  return (
    <main className="py-20 text-slate-100">
      <div className="container mx-auto px-6">

        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sky-300 text-sm">About</p>
          <h1 className="text-5xl font-bold">About HawkVision Recruitment</h1>
        </div>

        {/* INTRO SECTION */}
        <section className="glass-panel p-10 rounded-3xl mb-16">
          <p className="text-lg leading-relaxed">
            Hawkvision Recruitment delivers ethical, transparent, and fully compliant recruitment solutions
            across healthcare, IT, and business support sectors, combining industry expertise with a strong
            commitment to quality, compliance, and long-term partnerships.
          </p>
        </section>

        {/* MISSION - VISION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* MISSION */}
          <div className="glass-panel p-10 rounded-3xl border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-slate-200 leading-relaxed">
              To help businesses hire smarter and enable professionals to unlock meaningful career opportunities
              through transparent, efficient, and human-centered recruitment practices.
            </p>
          </div>

          {/* VISION */}
          <div className="glass-panel p-10 rounded-3xl border-l-4 border-indigo-500">
            <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
            <p className="text-slate-200 leading-relaxed">
              To become the most trusted recruitment partner in the UK by delivering innovative hiring solutions
              and building long-term relationships with employers and job seekers alike.
            </p>
          </div>

        </section>

        {/* CORE VALUES */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Integrity", desc: "Honesty, transparency, and ethical hiring practices." },
              { title: "Excellence", desc: "Quality-focused recruitment with attention to detail." },
              { title: "Commitment", desc: "Dedicated to helping businesses grow and candidates succeed." },
            ].map((value, index) => (
              <div
                key={value.title}
                className={`rounded-2xl p-8 shadow-2xl shadow-slate-900/30 border border-white/10 ${
                  index === 0
                    ? "bg-gradient-to-br from-blue-600/70 to-indigo-700/70"
                    : index === 1
                      ? "bg-gradient-to-br from-purple-600/70 to-pink-600/60"
                      : "bg-gradient-to-br from-cyan-600/70 to-emerald-600/60"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-slate-100">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPANY STRENGTHS */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Clients Trust Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { value: "10+", label: "Years of Combined Expertise", accent: "from-blue-500 to-indigo-500" },
              { value: "200+", label: "Successful Placements", accent: "from-purple-500 to-pink-500" },
              { value: "50+", label: "Companies Served", accent: "from-cyan-500 to-emerald-500" },
              { value: "100%", label: "Client Satisfaction", accent: "from-amber-500 to-red-500" },
            ].map((item) => (
              <div key={item.label} className="glass-panel p-8 rounded-3xl text-center">
                <div className={`mx-auto mb-3 inline-flex items-center justify-center rounded-full px-5 py-2 text-lg font-bold bg-gradient-to-r ${item.accent}`}>
                  {item.value}
                </div>
                <p className="text-slate-200">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
