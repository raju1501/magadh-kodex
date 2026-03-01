export default function ServicesPage() {
    return (
        <main className="bg-white">

            {/* ================= HERO ================= */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#facc15,_transparent_45%)]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
                        Our <span className="text-yellow-400">Services</span>
                    </h1>
                    <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
                        Building secure, scalable and future-ready digital solutions
                        for startups, enterprises and government organizations.
                    </p>
                </div>
            </section>

            {/* ================= CORE SERVICES ================= */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
                    What We Do Best
                </h2>
                <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
                    We design, build and scale digital systems that are secure, reliable
                    and ready for real-world impact.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Custom Software Development",
                            desc: "Scalable, secure and high-performance software systems aligned with business goals.",
                        },
                        {
                            title: "Web Application Development",
                            desc: "Modern, responsive and SEO-friendly web applications using cutting-edge technologies.",
                        },
                        {
                            title: "Mobile App Development",
                            desc: "User-centric Android and cross-platform mobile applications with smooth performance.",
                        },
                        {
                            title: "Cloud & DevOps Solutions",
                            desc: "Cloud-native architectures, CI/CD automation and infrastructure optimization.",
                        },
                        {
                            title: "Enterprise & Govt IT Solutions",
                            desc: "Robust systems designed for security, compliance, audits and governance.",
                        },
                        {
                            title: "UI / UX Design",
                            desc: "Intuitive, accessible and elegant user experiences that strengthen your brand.",
                        },
                        {
                            title: "Education ERP & College Information System",
                            desc: "End-to-end ERP for colleges covering admissions, academics, exams, finance and HR.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300
                   hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
                        bg-gradient-to-br from-yellow-200/20 to-transparent pointer-events-none" />

                            {/* Icon Placeholder */}
                            <div className="relative z-10 w-12 h-12 mb-6 rounded-xl bg-yellow-100 text-yellow-600
                        flex items-center justify-center font-bold text-lg">
                                {item.title.charAt(0)}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="font-semibold text-lg text-slate-900 mb-3">
                                    {item.title}
                                </h3>

                                <div className="w-10 h-[2px] bg-yellow-400 mb-4" />

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= EDUCATION ERP ================= */}
            <section className="bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24">

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6">
                        Education ERP & College Information System
                    </h2>

                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-16">
                        We build end-to-end College ERP solutions that digitize academic,
                        administrative and governance processes for higher education institutions.
                    </p>

                    {/* ERP Modules */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Student Information System",
                                desc: "Complete student lifecycle management from admission to alumni with secure profile and document handling.",
                            },
                            {
                                title: "Admissions & Enrollment",
                                desc: "Online applications, merit lists, counseling workflows and automated admission processes.",
                            },
                            {
                                title: "Academic Management",
                                desc: "Course structure, semesters, timetable, faculty allocation and syllabus planning.",
                            },
                            {
                                title: "Examination & Results",
                                desc: "Exam forms, marks entry, grading, result generation and digital marksheets.",
                            },
                            {
                                title: "Fee & Finance Management",
                                desc: "Fee collection, scholarships, dues tracking, receipts and financial reporting.",
                            },
                            {
                                title: "HR, Payroll & Administration",
                                desc: "Staff records, payroll, leave management and institutional compliance reporting.",
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

                    {/* ERP Highlights */}
                    <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-10">
                        <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                            Why Our College ERP?
                        </h3>

                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                "Role-Based Access",
                                "Audit & Compliance Ready",
                                "Scalable Architecture",
                                "Govt & University Friendly",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-50 rounded-xl p-6 text-sm font-medium text-slate-700"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* ================= PROCESS ================= */}
            <section className="bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-14">
                        Our Delivery Approach
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            {
                                step: "01",
                                title: "Understand",
                                desc: "We deeply understand your business, users and objectives.",
                            },
                            {
                                step: "02",
                                title: "Design",
                                desc: "We design clean architectures and intuitive user experiences.",
                            },
                            {
                                step: "03",
                                title: "Build",
                                desc: "We develop scalable systems with quality and security in mind.",
                            },
                            {
                                step: "04",
                                title: "Scale",
                                desc: "We support growth, optimization and long-term evolution.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition"
                            >
                                <div className="text-yellow-500 font-extrabold text-3xl mb-3">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2">
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

            {/* ================= WHY CHOOSE US ================= */}
            <section className="bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
                        Why Choose <span className="text-yellow-400">Magadh Kodex</span>
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
                        {[
                            {
                                title: "Startup-Friendly Mindset",
                                desc: "We understand speed, constraints and innovation required in early-stage companies.",
                            },
                            {
                                title: "Enterprise-Grade Quality",
                                desc: "Our systems are built with long-term scalability, security and governance in mind.",
                            },
                            {
                                title: "Transparent & Ethical",
                                desc: "Clear communication, honest timelines and responsible engineering.",
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
            </section>

            {/* ================= CTA ================= */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        Let’s Build Something Impactful
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-10">
                        Whether you are building a startup product or modernizing an existing system,
                        Magadh Kodex is ready to partner with you.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-xl font-medium transition"
                    >
                        Start a Conversation
                    </a>
                </div>
            </section>

        </main>
    )
}
