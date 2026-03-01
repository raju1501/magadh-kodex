export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <p className="mb-6 text-slate-600">
        At <strong>Magadh Kodex</strong>, we respect your privacy and are committed
        to protecting your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        1. Information We Collect
      </h2>
      <p className="text-slate-600 mb-6">
        When you submit our contact form, we may collect:
      </p>
      <ul className="list-disc pl-6 text-slate-600 space-y-2">
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Organization Name</li>
        <li>Project Requirement Details</li>
        <li>Message Information</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        2. How We Use Your Information
      </h2>
      <p className="text-slate-600 mb-6">
        We use the collected information only to:
      </p>
      <ul className="list-disc pl-6 text-slate-600 space-y-2">
        <li>Respond to your enquiries</li>
        <li>Communicate regarding potential projects</li>
        <li>Provide requested services</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        3. Data Storage & Security
      </h2>
      <p className="text-slate-600 mb-6">
        Your submitted information is securely stored and is not sold, rented,
        or shared with third parties. We take reasonable technical measures
        to protect your data.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        4. Third-Party Services
      </h2>
      <p className="text-slate-600 mb-6">
        Our website may use third-party hosting services such as Vercel and
        data storage services such as Google Sheets for processing enquiries.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3">
        5. Contact Us
      </h2>
      <p className="text-slate-600">
        If you have any questions regarding this Privacy Policy,
        you may contact us at:
      </p>
      <p className="mt-2 font-medium">
        info@magadhkodex.in
      </p>

      <p className="mt-10 text-sm text-slate-500">
        Last Updated: {new Date().getFullYear()}
      </p>
    </main>
  );
}