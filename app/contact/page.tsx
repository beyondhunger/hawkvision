export default function ContactPage() {
  return (
    <main className="py-20 text-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sky-300 text-sm">Contact</p>
          <h1 className="text-5xl font-bold">Let's Connect</h1>
          <p className="text-slate-300 mt-4">
            Whether you're a company looking for talent or a professional exploring new opportunities, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* CONTACT INFO CARD */}
          <section className="glass-panel p-10 rounded-3xl">
            <h2 className="text-3xl font-semibold mb-6 text-white">Get in Touch</h2>
            <p className="text-slate-200 leading-relaxed mb-6">
              Share your hiring plans or career goals and our team will respond within one business day.
            </p>

            <ul className="space-y-4 text-slate-100 mt-6">
              <li>📍 <strong>Location:</strong> London, United Kingdom</li>
              <li>📞 <strong>Phone:</strong> +44 1234 567890</li>
              <li>✉️ <strong>Email:</strong> support@hawkvision.co.uk</li>
            </ul>
          </section>

          {/* CONTACT FORM */}
          <section className="glass-panel p-10 rounded-3xl">
            <h2 className="text-3xl font-semibold mb-6 text-white">Send Us a Message</h2>

            <form className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block text-slate-200 mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-white/20 bg-white/5 px-4 py-3 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-400 outline-none"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-slate-200 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-white/20 bg-white/5 px-4 py-3 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-400 outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-slate-200 mb-2 font-medium">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your hiring needs or career goals..."
                  className="w-full border border-white/20 bg-white/5 px-4 py-3 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-sky-400 outline-none"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-lg font-semibold rounded-xl hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>
          </section>
        </div>

        {/* MAP PLACEHOLDER */}
        <section className="glass-panel p-10 rounded-3xl mt-10">
          <h2 className="text-3xl font-semibold mb-6 text-white">Our Location</h2>
          <div className="w-full h-64 bg-gradient-to-br from-blue-900/60 to-slate-900/60 rounded-2xl flex items-center justify-center text-slate-300 border border-white/10">
            (Map Placeholder – Google Maps coming soon)
          </div>
        </section>

      </div>
    </main>
  );
}
