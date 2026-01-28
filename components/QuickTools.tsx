import Link from 'next/link';

const tools = [
  {
    title: 'Birth Chart Generator',
    description: 'Generate your free Kundli in seconds',
    icon: '📊',
    href: '/kundli',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI Prediction',
    description: 'Get personalized AI-powered insights',
    icon: '🤖',
    href: '/ai-prediction',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Compatibility Check',
    description: 'Check marriage & relationship compatibility',
    icon: '💑',
    href: '/compatibility',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    title: 'Daily Horoscope',
    description: 'Your daily astrological guidance',
    icon: '⭐',
    href: '/daily-horoscope',
    gradient: 'from-yellow-500 to-amber-500',
  },
];

export default function QuickTools() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access powerful astrology tools instantly
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className="p-6 relative z-10">
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
                <div className="mt-4 flex items-center text-purple-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Try Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
