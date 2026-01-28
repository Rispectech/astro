import Link from 'next/link';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Free Kundli', href: '/kundli' },
      { name: 'AI Prediction', href: '/ai-prediction' },
      { name: 'Daily Horoscope', href: '/daily-horoscope' },
      { name: 'Talk to Astrologer', href: '/astrologers' },
      { name: 'Compatibility Check', href: '/compatibility' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { name: 'What is Vedic Astrology', href: '/vedic-astrology' },
      { name: 'Rashi & Nakshatra Guide', href: '/rashi-nakshatra' },
      { name: 'Planets & Houses', href: '/planets-houses' },
      { name: 'Dasha & Transit Basics', href: '/dasha-transit' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Pricing & Plans', href: '/pricing' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Customer Support', href: '/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Refund & Cancellation', href: '/refund' },
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', icon: '📘', href: '#' },
  { name: 'Twitter', icon: '🐦', href: '#' },
  { name: 'Instagram', icon: '📷', href: '#' },
  { name: 'YouTube', icon: '▶️', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">VA</span>
              </div>
              <span className="text-xl font-bold text-white">VedicAstro</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Accurate Vedic Astrology with AI Precision. Get personalized predictions and connect with expert astrologers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Download Our App</h3>
              <p className="text-sm text-gray-400">
                Get astrology insights on the go
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <span>📱</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-medium text-white">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <span>🤖</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-sm font-medium text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} VedicAstro. All rights reserved. | Trusted by users of AstroTalk, AstroSage, InstaAstro, GaneshaSpeaks, and AstroYogi
          </p>
        </div>
      </div>
    </footer>
  );
}
