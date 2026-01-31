'use client';

import { useState } from 'react';

export default function Home() {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Dramatic Image */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-green-800/80 to-emerald-700/70">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0wIDBsMCA2MCw2MCAwTDYwIDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-5xl">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-6 py-2 bg-yellow-400 text-green-900 font-bold rounded-full text-sm mb-6 shadow-lg">
                🔥 LIMITED OFFER: ₹3,500/Night (Regular ₹5,000)
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
              Escape to Your<br/>
              <span className="text-yellow-300">Private Paradise</span>
            </h1>
            <p className="text-2xl md:text-3xl text-green-50 mb-12 font-light">
              Luxury 1BR Farmhouse • Fruit Orchards • 20min to Pondy Beach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setShowBooking(true)}
                className="group relative px-12 py-5 bg-yellow-400 text-green-900 text-xl font-bold rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/50"
              >
                <span className="relative z-10">Book Your Escape Now</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
              <a 
                href="#gallery" 
                className="px-12 py-5 bg-white/10 backdrop-blur-sm text-white text-xl font-semibold rounded-full hover:bg-white/20 transition-all border-2 border-white/30"
              >
                View Photos
              </a>
            </div>
            <div className="mt-12 flex justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>Premium Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <span>Nature Lovers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span>Secure & Private</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-900 mb-4">Why VinES Farmstay?</h2>
            <p className="text-xl text-gray-600">Your perfect weekend getaway awaits</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🌳",
                title: "Private Orchard",
                desc: "Surrounded by mango, guava, cashew & coconut trees"
              },
              {
                icon: "🏖️",
                title: "Perfect Location",
                desc: "20 min to Pondy Beach • 10 min to Ousteri Lake"
              },
              {
                icon: "🏡",
                title: "Entire Place",
                desc: "Whole farmhouse just for you. No sharing!"
              },
              {
                icon: "🍽️",
                title: "Outdoor Dining",
                desc: "Enjoy meals under the stars in your private garden"
              },
              {
                icon: "📹",
                title: "24/7 Security",
                desc: "CCTV surveillance for your peace of mind"
              },
              {
                icon: "💰",
                title: "Best Price",
                desc: "₹3,500/night special rate (Save ₹1,500!)"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-green-100">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">4.8★</div>
              <div className="text-green-200">Guest Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">100+</div>
              <div className="text-green-200">Happy Guests</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">1BR</div>
              <div className="text-green-200">Private Farmhouse</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">₹3,500</div>
              <div className="text-green-200">Per Night</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-bold text-green-900 mb-12 text-center">Your Private Retreat</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-green-800">What You'll Love</h3>
              {[
                "🛏️ Spacious bedroom with queen bed (sleeps 4)",
                "🚿 Modern private bathroom",
                "🌳 2-acre fruit orchard all to yourself",
                "🍳 Outdoor dining area with garden views",
                "📶 High-speed WiFi",
                "🚗 Free parking on premises",
                "❄️ Air conditioning",
                "🔐 Secure with 24/7 CCTV"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-lg">
                  <span className="text-2xl">{item.split(' ')[0]}</span>
                  <span className="text-gray-700">{item.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl text-white shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-yellow-400 text-green-900 font-bold rounded-full text-sm mb-4">
                  ⚡ SPECIAL LAUNCH OFFER
                </div>
                <div className="text-6xl font-black mb-2">₹3,500</div>
                <div className="text-2xl text-green-100 line-through mb-2">₹5,000</div>
                <div className="text-xl text-yellow-300 font-semibold">Save ₹1,500 per night!</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-lg">
                  <span>1 Night</span>
                  <span className="font-bold">₹3,500</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Weekend (2 nights)</span>
                  <span className="font-bold">₹7,000</span>
                </div>
                <div className="border-t border-white/30 pt-4 flex justify-between text-xl font-bold">
                  <span>You Save</span>
                  <span className="text-yellow-300">₹3,000</span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowBooking(true)}
                className="w-full py-4 bg-yellow-400 text-green-900 text-xl font-bold rounded-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
              >
                Check Availability →
              </button>
              
              <p className="text-center text-sm text-green-100 mt-4">
                ✓ Instant confirmation • ✓ Secure payment • ✓ Free cancellation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">⚠️ Only 3 Spots Left This Month!</h2>
            <p className="text-xl mb-6">
              This special ₹3,500 rate is only for the first 15 bookings. 
              <span className="font-bold"> 12 already booked!</span>
            </p>
            <button 
              onClick={() => setShowBooking(true)}
              className="px-12 py-5 bg-white text-red-600 text-xl font-bold rounded-full hover:bg-yellow-300 hover:text-green-900 transition-all transform hover:scale-105 shadow-2xl"
            >
              Secure Your Spot Now →
            </button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-bold text-green-900 mb-12 text-center">Perfect Location</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Poothurai, Pondicherry</h3>
                    <p className="text-gray-600 text-lg">Peaceful village setting, away from city noise</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🏖️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">20 min to Pondy Beach</h3>
                    <p className="text-gray-600 text-lg">Quick drive to famous Promenade & Rock Beach</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🦆</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">10 min to Ousteri Lake</h3>
                    <p className="text-gray-600 text-lg">Beautiful bird sanctuary & boating</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✈️</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Easy Access</h3>
                    <p className="text-gray-600 text-lg">3 hours from Chennai by car/train</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <div className="text-2xl font-bold">Interactive Map</div>
                  <div className="text-green-100">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0wIDBsMCA2MCw2MCAwTDYwIDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6">Ready for Your Escape?</h2>
          <p className="text-2xl text-green-100 mb-12 max-w-2xl mx-auto">
            Book now and save ₹1,500. Limited time offer for first 15 bookings!
          </p>
          <button 
            onClick={() => setShowBooking(true)}
            className="px-16 py-6 bg-yellow-400 text-green-900 text-2xl font-bold rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/50"
          >
            Book Your Dates Now →
          </button>
          <div className="mt-8 flex justify-center gap-8 text-green-200">
            <span>✓ Instant Confirmation</span>
            <span>✓ Secure Payment</span>
            <span>✓ Free Cancellation</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">VinES Farmstay</h3>
              <p className="text-green-200">Your private paradise in Pondicherry</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact</h4>
              <p className="text-green-200 mb-2">📞 +91 9994415497</p>
              <p className="text-green-200 mb-2">✉️ thiaguvinoth.pkiet@gmail.com</p>
              <p className="text-green-200">📍 Poothurai, Pondicherry</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href="https://www.airbnb.com/rooms/1501647202568762556" target="_blank" rel="noopener noreferrer" className="block text-green-200 hover:text-yellow-400 transition">
                  Book on Airbnb →
                </a>
                <button onClick={() => setShowBooking(true)} className="block text-green-200 hover:text-yellow-400 transition">
                  Check Availability →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 pt-6 text-center text-green-300">
            <p>© 2026 VinES Farmstay. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 relative">
            <button 
              onClick={() => setShowBooking(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl"
            >
              ×
            </button>
            <h3 className="text-4xl font-bold text-green-900 mb-6">Book Your Stay</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Check-in Date</label>
                <input type="date" className="w-full p-4 border-2 border-green-200 rounded-xl focus:border-green-500 outline-none text-lg" />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Check-out Date</label>
                <input type="date" className="w-full p-4 border-2 border-green-200 rounded-xl focus:border-green-500 outline-none text-lg" />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">Number of Guests</label>
                <select className="w-full p-4 border-2 border-green-200 rounded-xl focus:border-green-500 outline-none text-lg">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="flex justify-between text-lg mb-2">
                  <span>Rate per night:</span>
                  <span className="font-bold">₹3,500</span>
                </div>
                <div className="text-sm text-gray-600">Special launch offer • Save ₹1,500</div>
              </div>
              <a 
                href="https://www.airbnb.com/rooms/1501647202568762556"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-green-600 text-white text-xl font-bold rounded-xl hover:bg-green-700 transition text-center"
              >
                Continue to Booking →
              </a>
              <p className="text-center text-sm text-gray-500">
                Or call/WhatsApp: <a href="tel:+919994415497" className="text-green-600 font-semibold">+91 9994415497</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
