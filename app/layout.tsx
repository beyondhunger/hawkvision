import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "HawkVision Recruitment",
  description: "Connecting talent with opportunity — HawkVision Recruitment Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-slate-100">

        {/* HEADER */}
        <SiteHeader />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#03071c] border-t border-white/10 mt-20 py-14 text-slate-300">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* COLUMN 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">HawkVision</h2>
              <p className="text-slate-400">
                Connecting businesses with top-tier talent and helping professionals
                find meaningful careers across the UK.
              </p>
            </div>

            {/* COLUMN 2 */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/jobs" className="hover:text-white">Jobs</a></li>
                <li><a href="/why-choose-us" className="hover:text-white">Why Choose Us</a></li>
                <li><a href="/sectors" className="hover:text-white">Sectors Overview</a></li>
                <li><a href="/services" className="hover:text-white">Services</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Recruitment Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Professional Hiring</a></li>
                <li><a href="#" className="hover:text-white">Staffing Solutions</a></li>
                <li><a href="#" className="hover:text-white">Contract Hiring</a></li>
                <li><a href="#" className="hover:text-white">Payroll Outsourcing</a></li>
                <li><a href="#" className="hover:text-white">RPO Services</a></li>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>📍 London, United Kingdom</li>
                <li>📞 +44 1234 567890</li>
                <li>✉️ support@hawkvision.co.uk</li>
              </ul>

              <div className="flex gap-4 mt-4 text-2xl">
                <a href="#" className="hover:text-white transition">🌐</a>
                <a href="#" className="hover:text-white transition">🔗</a>
                <a href="#" className="hover:text-white transition">📘</a>
                <a href="#" className="hover:text-white transition">🐦</a>
              </div>
            </div>

          </div>

          <p className="text-center text-slate-500 mt-12">
            © {new Date().getFullYear()} HawkVision Recruitment. All rights reserved.
          </p>
        </footer>

      </body>
    </html>
  );
}
