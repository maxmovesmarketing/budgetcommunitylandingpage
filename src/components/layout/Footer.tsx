import React from "react"
import { Facebook, Instagram, Mail, Phone } from "lucide-react"

// TikTok icon as SVG (lucide-react does not export Tiktok)
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M9.5 6.5v10a3.5 3.5 0 1 0 3.5-3.5h-1" stroke="#6D5656" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 3.5v3c0 1.933 1.567 3.5 3.5 3.5" stroke="#6D5656" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const Footer = () => {
  // TODO: Replace with real business phone logic when available
  const businessPhone = null // e.g. '+31 6 1234 5678' or null
  return (
    <footer className="w-full px-4 sm:px-0 bg-white border-t border-[#6D5656]/10">
      <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Snelle links */}
        <div>
          <h3 className="text-lg font-semibold text-[#6D5656] mb-4">Snelle links</h3>
          <ul className="space-y-2">
            <li><a href="/over-ons" className="text-[#6D5656]/80 hover:text-[#6D5656] transition-colors">Over ons</a></li>
            <li><a href="/tarieven" className="text-[#6D5656]/80 hover:text-[#6D5656] transition-colors">Tarieven</a></li>
            <li><a href="/contact" className="text-[#6D5656]/80 hover:text-[#6D5656] transition-colors">Contact</a></li>
            <li><a href="/faq" className="text-[#6D5656]/80 hover:text-[#6D5656] transition-colors">Veelgestelde vragen</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[#6D5656] mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:info@budgetcommunity.nl" className="flex items-center text-[#6D5656]/80 hover:text-[#6D5656] transition-colors">
                <Mail className="w-5 h-5 mr-2" /> info@budgetcommunity.nl
              </a>
            </li>
            {businessPhone && (
              <li>
                <a href={`tel:${businessPhone}`} className="flex items-center text-[#6D5656]/80 hover:text-[#6D5656] transition-colors">
                  <Phone className="w-5 h-5 mr-2" /> {businessPhone}
                </a>
              </li>
            )}
          </ul>
        </div>
        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-[#6D5656] mb-4">Volg ons</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E4E2DD] hover:bg-[#6D5656]/10 transition-colors">
              <Facebook className="w-5 h-5 text-[#6D5656]/80 hover:text-[#6D5656]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E4E2DD] hover:bg-[#6D5656]/10 transition-colors">
              <Instagram className="w-5 h-5 text-[#6D5656]/80 hover:text-[#6D5656]" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E4E2DD] hover:bg-[#6D5656]/10 transition-colors">
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#6D5656]/10 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6D5656]/60">
          <span> {new Date().getFullYear()} Budget Community. Alle rechten voorbehouden.</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-[#6D5656] transition-colors">Privacybeleid</a>
            <span className="hidden md:inline">•</span>
            <a href="/voorwaarden" className="hover:text-[#6D5656] transition-colors">Algemene voorwaarden</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
