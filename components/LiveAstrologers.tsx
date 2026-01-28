import Link from 'next/link';

const astrologers = [
  {
    name: 'Pandit Rajesh Kumar',
    experience: '15+ Years',
    expertise: ['Love & Marriage', 'Career'],
    rating: 4.9,
    reviews: 1250,
    price: 25,
    languages: ['Hindi', 'English'],
    image: '👨‍🦳',
    status: 'online',
  },
  {
    name: 'Acharya Priya Sharma',
    experience: '12+ Years',
    expertise: ['Health', 'Finance'],
    rating: 4.8,
    reviews: 980,
    price: 30,
    languages: ['Hindi', 'English', 'Gujarati'],
    image: '👩‍🦰',
    status: 'online',
  },
  {
    name: 'Dr. Vikram Singh',
    experience: '20+ Years',
    expertise: ['Career', 'Marriage', 'Health'],
    rating: 5.0,
    reviews: 2100,
    price: 35,
    languages: ['Hindi', 'English', 'Punjabi'],
    image: '👨‍⚕️',
    status: 'online',
  },
  {
    name: 'Jyotishi Meera Devi',
    experience: '18+ Years',
    expertise: ['Love & Marriage', 'Compatibility'],
    rating: 4.9,
    reviews: 1750,
    price: 28,
    languages: ['Hindi', 'English', 'Marathi'],
    image: '👩',
    status: 'busy',
  },
];

export default function LiveAstrologers() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Talk to Expert Astrologers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with verified Vedic astrologers for personalized guidance
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium">
            All
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
            Love & Marriage
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
            Career
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
            Health
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200">
            Finance
          </button>
        </div>

        {/* Astrologer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {astrologers.map((astrologer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative">
                <div className="h-32 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl">{astrologer.image}</div>
                </div>
                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                  astrologer.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {astrologer.name}
                    </h3>
                    <p className="text-sm text-gray-600">{astrologer.experience}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(astrologer.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    {astrologer.rating} ({astrologer.reviews})
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {astrologer.expertise.slice(0, 2).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ₹{astrologer.price}/min
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Languages</p>
                    <p className="text-sm text-gray-700">
                      {astrologer.languages.slice(0, 2).join(', ')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/astrologers/${index}`}
                    className="flex-1 px-4 py-2 bg-purple-600 text-white text-center rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    Chat
                  </Link>
                  <Link
                    href={`/astrologers/${index}?call=true`}
                    className="flex-1 px-4 py-2 bg-white text-purple-600 text-center rounded-lg font-medium border-2 border-purple-600 hover:bg-purple-50 transition-colors"
                  >
                    Call
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/astrologers"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            View All Astrologers
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
