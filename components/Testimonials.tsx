const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'The AI predictions were incredibly accurate! Got insights about my career that helped me make important decisions.',
    image: '👨',
  },
  {
    name: 'Priya Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Talked to an astrologer about marriage compatibility. The guidance was detailed and helped us understand each other better.',
    image: '👩',
  },
  {
    name: 'Amit Kumar',
    location: 'Delhi',
    rating: 5,
    text: 'Best astrology platform! The daily horoscope and personalized reports are spot on. Highly recommended!',
    image: '👨‍💼',
  },
];

const trustBadges = [
  { text: '10M+ Users', icon: '👥' },
  { text: '50K+ Reviews', icon: '⭐' },
  { text: '500+ Astrologers', icon: '🔮' },
  { text: 'ISO Certified', icon: '✅' },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-2">{badge.icon}</div>
              <p className="text-lg font-semibold text-gray-900">{badge.text}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by millions for accurate predictions and expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Competitor References */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-6">
            Trusted by users who also use:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {['AstroTalk', 'AstroSage', 'InstaAstro', 'GaneshaSpeaks', 'AstroYogi'].map(
              (name, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-gray-700 font-medium text-sm hover:shadow-md transition-shadow"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
