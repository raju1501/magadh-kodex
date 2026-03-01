export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
            About <span className="text-yellow-400">Magadh Kodex</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Bridging India’s Ancient Wisdom with the World’s Future Code
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 space-y-28">

        {/* STORY + PHILOSOPHY */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Rooted in the Land of Knowledge
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Rooted in the sacred land of Bihar — the center of knowledge since the era
              of Samrat Ashoka — Magadh Kodex is a premier IT solutions provider. We bridge
              India’s profound Ancient Wisdom with the world’s most advanced Future Code.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Just as Magadh once led the world in philosophy and governance, we aim to
              lead the global digital landscape through integrity, intellect, and
              innovation.
            </p>
          </div>

          <div className="bg-slate-50 border-l-4 border-yellow-400 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Our Philosophy
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Technology should not only be powerful, but purposeful. Every solution we
              build is guided by ethics, discipline, and long-term impact.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "10+", label: "Years of Collective Experience" },
            { value: "100%", label: "Client-Centric Approach" },
            { value: "∞", label: "Commitment to Quality" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 hover:shadow-xl transition"
            >
              <div className="text-4xl font-extrabold text-yellow-500">
                {item.value}
              </div>
              <div className="mt-3 text-slate-600 font-medium text-sm sm:text-base">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* LEADERSHIP */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src="/director.jpeg"
                alt="Director – Magadh Kodex"
                className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Leadership
            </h2>

            <h3 className="text-lg md:text-xl font-semibold text-slate-800">
              Raju Kumar
            </h3>

            <p className="text-slate-500 mb-4">
              Founder & Director, Magadh Kodex
            </p>

            <p className="text-slate-600 leading-relaxed mb-4">
              Leadership at Magadh Kodex is driven by purpose, discipline, and long-term
              vision. Inspired by the legacy of Magadh, our focus is on building ethical,
              scalable, and future-ready technology solutions.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              True innovation lies in balancing ancient wisdom with modern engineering —
              creating systems that not only perform, but endure.
            </p>

            <a
              href="/director-message"
              className="inline-flex items-center border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Read Message from Director →
            </a>
          </div>
        </div>

        {/* VISION */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="bg-yellow-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Our Vision
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Our vision is to restore Bihar’s legacy as a global Knowledge Hub by
              empowering businesses, institutions, and governments with future-ready
              technology.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              As the world enters the age of Artificial Intelligence, the spirit of
              Magadh continues to thrive.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Vision Beyond Technology
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We don’t just build software — we build digital ecosystems that enable
              growth, governance, and long-term global impact.
            </p>
          </div>
        </div>

        {/* WHY US */}
        <div className="bg-slate-900 rounded-3xl p-12 md:p-16 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Why <span className="text-yellow-400">Magadh Kodex</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "Legacy of Excellence",
                desc: "We carry the values of Magadh — transparency, dedication, and global vision.",
              },
              {
                title: "Innovative Engineering",
                desc: "Modern tech stacks applied to real-world governance and enterprise challenges.",
              },
              {
                title: "Trust & Reliability",
                desc: "Long-term partnerships built on trust, delivery, and accountability.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg mb-4 text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Let’s Build the Future Together
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Whether you are a startup, enterprise, or government organization,
            Magadh Kodex is ready to partner in your digital journey.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-medium transition"
          >
            Get in Touch
          </a>
        </div>

      </section>
    </main>
  )
}
