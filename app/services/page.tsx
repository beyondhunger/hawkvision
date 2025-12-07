export default function ServicesPage() {
  return (
    <main className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* PAGE TITLE */}
        <h1 className="text-5xl font-bold text-center mb-12">
          Our Recruitment Services
        </h1>

        {/* INTRO */}
        <section className="bg-white p-10 rounded-xl shadow-md mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            At HawkVision Recruitment, we offer a full range of hiring solutions 
            designed to help businesses scale efficiently while connecting 
            professionals with meaningful job opportunities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Whether you're looking for permanent employees, temporary staffing, 
            or end-to-end recruitment process management, we have the tools, 
            expertise, and network to support your growth.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Professional Hiring</h2>
            <p className="text-gray-700">
              Permanent recruitment solutions to help companies hire skilled and 
              experienced professionals across multiple industries.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Workforce Staffing</h2>
            <p className="text-gray-700">
              Reliable temporary and contract workforce to meet seasonal, 
              project-based, or urgent operational demands.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Contract Hiring</h2>
            <p className="text-gray-700">
              Flexible hiring solutions that allow businesses to scale quickly 
              without long-term commitments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Payroll Outsourcing</h2>
            <p className="text-gray-700">
              Complete payroll management including compliance, payroll 
              processing, employee onboarding, and reporting.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Recruitment Process Outsourcing (RPO)</h2>
            <p className="text-gray-700">
              End-to-end recruitment support from sourcing and screening 
              to final hiring and onboarding.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Talent Consulting</h2>
            <p className="text-gray-700">
              Strategic HR & staffing consultation to help businesses build 
              stronger workforce and hiring strategies.
            </p>
          </div>

        </section>

        {/* HOW WE WORK SECTION */}
        <section className="bg-white p-10 rounded-xl shadow-md mb-20">
          <h2 className="text-4xl font-bold text-center mb-10">How Our Hiring Process Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="text-center">
              <div className="text-5xl text-blue-700 font-bold mb-4">1</div>
              <h3 className="text-2xl font-semibold mb-3">Understanding Your Needs</h3>
              <p className="text-gray-700">
                We analyse your requirements, team culture, and hiring expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl text-blue-700 font-bold mb-4">2</div>
              <h3 className="text-2xl font-semibold mb-3">Sourcing & Screening</h3>
              <p className="text-gray-700">
                Our recruitment experts identify and assess the best candidates.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl text-blue-700 font-bold mb-4">3</div>
              <h3 className="text-2xl font-semibold mb-3">Hiring & Onboarding</h3>
              <p className="text-gray-700">
                We coordinate interviews, negotiate offers, and assist in onboarding.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}
