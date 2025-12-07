export default function AboutPage() {
  return (
    <main className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold text-center mb-10">
          About HawkVision Recruitment
        </h1>

        {/* INTRO SECTION */}
        <section className="bg-white p-10 rounded-xl shadow-md mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            HawkVision Recruitment is a UK-based talent acquisition agency focused on 
            connecting skilled professionals with leading companies. Our mission is to 
            simplify the hiring process and empower businesses with exceptional talent 
            that drives growth and success.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            With industry expertise, advanced sourcing strategies, and a commitment to 
            excellence, we support companies of all sizes — from startups to enterprise 
            organizations — across multiple sectors.
          </p>
        </section>

        {/* MISSION - VISION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* MISSION */}
          <div className="bg-white p-10 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To help businesses hire smarter and enable professionals to unlock 
              meaningful career opportunities through transparent, efficient, 
              and human-centered recruitment practices.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-white p-10 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted recruitment partner in the UK by delivering 
              innovative hiring solutions and building long-term relationships with 
              employers and job seekers alike.
            </p>
          </div>

        </section>

        {/* CORE VALUES */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Integrity</h3>
              <p className="text-gray-700">
                We believe in honesty, transparency, and ethical hiring practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Excellence</h3>
              <p className="text-gray-700">
                We deliver quality-focused recruitment solutions with attention to detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">Commitment</h3>
              <p className="text-gray-700">
                We are dedicated to helping businesses grow and candidates succeed.
              </p>
            </div>

          </div>
        </section>

        {/* COMPANY STRENGTHS */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Clients Trust Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">10+</h3>
              <p className="text-gray-600">Years of Combined Expertise</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">200+</h3>
              <p className="text-gray-600">Successful Placements</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">50+</h3>
              <p className="text-gray-600">Companies Served</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-blue-700 mb-2">100%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
