export default function HomePage() {
  return (
    <main className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 grid md:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
              Ancient Wisdom <br />
              <span className="text-yellow-400">Future Technology</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl">
              Magadh Kodex builds secure, scalable and intelligent digital solutions
              that empower businesses, governments and enterprises in the modern era.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-semibold transition text-center"
              >
                Start a Project
              </a>

              <a
                href="/about"
                className="border border-slate-400 hover:border-yellow-400 px-8 py-4 rounded-xl font-medium transition text-center"
              >
                Learn About Us
              </a>
            </div>
          </div>

          {/* Right Tech Visual */}
          <div className="hidden md:block">
            <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <p className="text-yellow-400 font-mono text-sm mb-4">
                system.core.initialize()
              </p>
              <pre className="font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                {`{
  "technology": ["AI", "Cloud", "Web", "Mobile"],
  "focus": "Scalable & Secure Systems",
  "clients": ["Startups", "Enterprises", "Government"],
  "philosophy": "Purpose-driven Engineering"
}`}
              </pre>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TRUST / HIGHLIGHTS ================= */}

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24">

        {/* subtle background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Enterprise-Grade Technology",
              desc: "Robust architecture designed for scale, security and long-term growth.",
            },
            {
              title: "Govt & Institution Ready",
              desc: "Processes and systems aligned with governance and compliance standards.",
            },
            {
              title: "Future-Focused Engineering",
              desc: "AI-ready solutions built with modern frameworks and cloud platforms.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`border border-slate-200 rounded-2xl p-8 bg-white
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400
              fade-up fade-delay-${i + 1}`}
            >


              {/* top accent line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-16 
                        bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition" />

              {/* soft glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
                        bg-gradient-to-br from-yellow-100/30 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* icon placeholder */}
                <div className="mx-auto mb-6 w-14 h-14 rounded-2xl
                          bg-yellow-100 text-yellow-600
                          flex items-center justify-center text-xl font-bold">
                  {item.title.charAt(0)}
                </div>

                <h3 className="font-semibold text-lg text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROBLEM / SOLUTION ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 grid md:grid-cols-2 gap-14 items-center">

          {/* Problem */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              The Challenge Organizations Face
            </h2>
            <ul className="space-y-4 text-slate-600">
              <li>• Disconnected systems and manual processes</li>
              <li>• Lack of real-time visibility and reporting</li>
              <li>• Security, compliance and audit challenges</li>
              <li>• Systems that don’t scale with growth</li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Our Solution
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Magadh Kodex designs centralized, secure and scalable digital systems
              that replace chaos with clarity — enabling organizations to operate
              efficiently, transparently and confidently.
            </p>
          </div>
        </div>
      </section>
      {/* ================= SERVICES SNAPSHOT ================= */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-14">
            What We Build
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Custom Software",
              "Web & Mobile Apps",
              "Education ERP",
              "Enterprise IT Systems",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 text-center border border-slate-200
                     hover:border-yellow-400 hover:shadow-xl transition"
              >
                <div className="text-yellow-500 font-bold text-xl mb-3">
                  {item}
                </div>
                <p className="text-slate-600 text-sm">
                  Scalable, secure and future-ready solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ================= FEATURED ERP ================= */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Education ERP & College Information System
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A complete digital platform for colleges and institutions covering
              admissions, academics, examinations, finance, HR and governance.
            </p>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>✔ Role-based access & dashboards</li>
              <li>✔ Audit & compliance ready</li>
              <li>✔ Scalable for universities & govt bodies</li>
            </ul>
          </div>

          <div className="bg-slate-800 rounded-3xl p-10 border border-slate-700">
            <p className="font-mono text-sm text-yellow-400 mb-4">
              erp.system.status()
            </p>
            <pre className="font-mono text-sm text-slate-300 whitespace-pre-wrap">
              {`{
  "students": "centralized",
  "academics": "automated",
  "finance": "transparent",
  "governance": "compliant"
}`}
            </pre>
          </div>

        </div>
      </section>
      {/* ================= WHY MAGADH KODEX ================= */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-14">
            Why Magadh Kodex
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              "Startup Agility with Enterprise Discipline",
              "Govt & Institution Friendly Architecture",
              "Ethical, Secure & Scalable Engineering",
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <p className="font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-900 mb-14">
            Technology That Powers Progress
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Software Development",
                desc: "Scalable and secure systems built with modern architectures.",
              },
              {
                title: "Web & Mobile Solutions",
                desc: "High-performance applications with seamless user experience.",
              },
              {
                title: "Digital Transformation",
                desc: "Helping organizations evolve into digital-first enterprises.",
              },
              {
                title: "Strategic IT Consulting",
                desc: "Technology decisions guided by clarity, discipline and vision.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-yellow-400 hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-28 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Building Digital Systems That Endure
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
            From startups to governments, Magadh Kodex partners with organizations
            to design technology that is ethical, resilient and future-ready.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-xl font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </section>

    </main>
  )
}
