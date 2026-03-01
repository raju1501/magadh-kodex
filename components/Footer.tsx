import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-slate-300">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Magadh Kodex"
              width={100}
              height={100}
              className="object-contain"
            />
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">
                Magadh <span className="text-yellow-400">Kodex</span>
              </h3>
              <p className="text-xs text-slate-400">
                Ancient Wisdom, Future Code
              </p>
            </div>
          </div>

          <p className="text-sm mt-4 max-w-xs">
            Building scalable, secure and intelligent digital solutions
            for businesses and government organizations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link href="/careers" className="hover:text-yellow-400">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Mobile Applications</li>
            <li>ERP / Govt Projects</li>
            <li>UI / UX Design</li>
            <li>Cloud & DevOps</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-2">📍Patna, Bihar, India</p>
          <p className="text-sm mb-2">📧 info@magadhkodex.in</p>
          <p className="text-sm">📞 +91-7631940258</p>

          {/* Social (optional, future ready) */}
          <div className="flex gap-3 mt-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 transition cursor-pointer">
              in
            </span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 transition cursor-pointer">
              f
            </span>
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-500 transition cursor-pointer">
              X
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 text-center py-4 text-sm text-slate-400">
        © 2026 Magadh Kodex. All rights reserved.
      </div>
    </footer>
  )
}
