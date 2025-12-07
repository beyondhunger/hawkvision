export default function ContactPage() {
  return (
    <main className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold text-center mb-10">Contact Us</h1>

        {/* CONTACT INFO CARD */}
        <section className="bg-white p-10 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you're a company looking for talent or a professional exploring 
            new opportunities, we're here to help.
          </p>

          <ul className="space-y-2 text-gray-700 mt-6">
            <li>📍 <strong>Location:</strong> London, United Kingdom</li>
            <li>📞 <strong>Phone:</strong> +44 1234 567890</li>
            <li>✉️ <strong>Email:</strong> support@hawkvision.co.uk</li>
          </ul>
        </section>

        {/* CONTACT FORM */}
        <section className="bg-white p-10 rounded-xl shadow-md mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Send Us a Message</h2>

          <form className="space-y-6">

            {/* NAME */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition"
            >
              Send Message
            </button>

          </form>
        </section>

        {/* MAP PLACEHOLDER */}
        <section className="bg-white p-10 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700">Our Location</h2>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600">
            (Map Placeholder – can add Google Maps later)
          </div>
        </section>

      </div>
    </main>
  );
}
