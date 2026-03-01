'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError(false)

    const form = e.currentTarget

    const formData = {
      fullName: (form.elements.namedItem('fullName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      organization: (form.elements.namedItem('organization') as HTMLSelectElement).value,
      requirement: (form.elements.namedItem('requirement') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyyqo1jwR9JzSXqb-ssCbThvODqqtViDTmeia8KaK_VtiLkkJMqpCI-r1s_ZQoqmg5y/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // no-cors me response check nahi hota
      setSuccess(true)
      form.reset()
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-28 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            Contact <span className="text-yellow-400">Magadh Kodex</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-base sm:text-lg">
            Tell us about your requirement. We’ll help you design the right
            digital system — securely and responsibly.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Let’s Discuss Your Project
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Whether you represent a college, enterprise, startup or government
              institution, we approach every project with clarity, discipline
              and long-term vision.
            </p>

            <ul className="space-y-3 text-slate-600 text-sm">
              <li>✔ Education ERP & College Systems</li>
              <li>✔ Enterprise & Govt IT Solutions</li>
              <li>✔ Secure Web & Application Development</li>
              <li>✔ Long-term Support & Maintenance</li>
            </ul>

            <div className="mt-10 text-sm text-slate-600">
              <p><strong>Location:</strong> Patna, Bihar, India</p>
              <p><strong>Email:</strong> info@magadhkodex.in</p>
              <p><strong>Phone:</strong> +91-7631940258</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6"
          >

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:border-yellow-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:border-yellow-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Organization Type
              </label>
              <select
                name="organization"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:border-yellow-500"
              >
                <option value="">Select</option>
                <option>College / University</option>
                <option>Government Department</option>
                <option>Enterprise / Company</option>
                <option>Startup</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Project Requirement
              </label>
              <select
                name="requirement"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:border-yellow-500"
              >
                <option value="">Select</option>
                <option>Education ERP / College System</option>
                <option>Web / Application Development</option>
                <option>Enterprise / Govt IT Solution</option>
                <option>Consultation / Architecture</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Brief Description
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:outline-none focus:border-yellow-500"
                placeholder="Briefly describe your requirement"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-xl font-semibold transition disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>

            {success && (
              <p className="text-green-600 text-sm text-center">
                ✅ Enquiry submitted successfully!
              </p>
            )}

            {error && (
              <p className="text-red-600 text-sm text-center">
                ❌ Something went wrong. Please try again.
              </p>
            )}

          </form>

        </div>
      </section>

    </main>
  )
}