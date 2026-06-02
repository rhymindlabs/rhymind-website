export default function RhymindLabsWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 opacity-95"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-block border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm mb-6 tracking-wide">
              LAB GROWN DIAMOND MANUFACTURER
            </div>

           <div>
  <h4 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
    Rhymind Labs Pvt Ltd.
  </h4>

  <h5 className="block text-zinc-200 mt-3 text-2xl lg:text-4xl font-medium">
    Lab Grown Diamond Source For Jewellers
  </h5>
</div>
            <p className="mt-8 text-zinc-300 text-lg leading-8 max-w-xl">
              Certified lab grown diamonds for jewellers, retailers and manufacturers.
              Access live inventory, HD videos, certificates and dealer pricing directly on WhatsApp.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#register"
                className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 transition text-black font-semibold"
              >
                Request Live Inventory
              </a>

              <a
                href="https://wa.me/917007715017"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-emerald-500 transition"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Live Inventory Preview</h3>
                  <p className="text-zinc-400 text-sm mt-1">Dealer access only</p>
                </div>
                <div className="h-3 w-3 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    shape: 'Round',
                    carat: '2.01',
                    color: 'E',
                    clarity: 'VVS1',
                    cert: 'IGI'
                  },
                  {
                    shape: 'Oval',
                    carat: '3.12',
                    color: 'D',
                    clarity: 'VS1',
                    cert: 'IGI'
                  },
                  {
                    shape: 'Emerald',
                    carat: '1.80',
                    color: 'F',
                    clarity: 'VVS2',
                    cert: 'IGI'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-zinc-800 rounded-2xl p-4 hover:border-emerald-500/50 transition"
                  >
                    <div className="grid grid-cols-5 gap-3 text-sm">
                      <div>
                        <p className="text-zinc-500">Shape</p>
                        <p>{item.shape}</p>
                      </div>

                      <div>
                        <p className="text-zinc-500">Carat</p>
                        <p>{item.carat}</p>
                      </div>

                      <div>
                        <p className="text-zinc-500">Color</p>
                        <p>{item.color}</p>
                      </div>

                      <div>
                        <p className="text-zinc-500">Clarity</p>
                        <p>{item.clarity}</p>
                      </div>

                      <div>
                        <p className="text-zinc-500">Lab</p>
                        <p>{item.cert}</p>
                      </div>
                    </div>

                    <button className="mt-4 w-full bg-zinc-900 hover:bg-emerald-500 hover:text-black transition border border-zinc-700 rounded-xl py-3 font-medium">
                      Get Live Price on WhatsApp
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'IGI Certified Diamonds',
              'Worldwide Supply',
              'HD Video Inventory',
              'Dealer Pricing Support',
              'CVD & HPHT Availability',
              'Custom Matching',
              'Jeweller Only Access',
              'WhatsApp Based Operations'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6"
              >
                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  ✓
                </div>
                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Simple B2B Supply Process
            </h2>
            <p className="text-zinc-400 mt-6 text-lg">
              Built for jewellers, retailers and diamond traders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              'Register as Jeweller',
              'Get Stock List',
              'Confirm Requirements',
              'Receive Live Pricing',
              'Close Order on WhatsApp'
            ].map((step, index) => (
              <div
                key={index}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8"
              >
                <div className="text-5xl font-bold text-emerald-500/30">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-8">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section id="register" className="py-24 border-b border-zinc-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Request Dealer Inventory Access
            </h2>
            <p className="text-zinc-400 mt-5 text-lg">
              Registration required before receiving live stock list and pricing.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                placeholder="Full Name"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-emerald-500"
              />

              <input
                placeholder="Company Name"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-emerald-500"
              />

              <input
                placeholder="WhatsApp Number"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-emerald-500"
              />

              <input
                placeholder="GST Number"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-emerald-500"
              />

              <input
                placeholder="City"
                className="bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-emerald-500"
              />

              <select className="bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-emerald-500">
                <option>Monthly Purchase Volume</option>
                <option>Below ₹5L</option>
                <option>₹5L - ₹25L</option>
                <option>₹25L - ₹1Cr</option>
                <option>₹1Cr+</option>
              </select>
            </div>

            <textarea
              placeholder="Requirement Details"
              rows="5"
              className="w-full mt-6 bg-black border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-emerald-500"
            ></textarea>

            <button className="w-full mt-8 bg-emerald-500 hover:bg-emerald-400 transition text-black font-semibold py-5 rounded-2xl text-lg">
              Get Inventory on WhatsApp
            </button>

            <p className="text-zinc-500 text-sm mt-5 text-center">
              Inventory and pricing shared only with verified jewellers.
            </p>
          </div>
        </div>
      </section>

      {/* INVENTORY SYSTEM */}
      <section className="py-24 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Integrated Inventory Management System
            </h2>

            <p className="mt-8 text-zinc-300 text-lg leading-8">
              Sync your Google Sheet inventory with certificates, HD videos and stock specifications.
              Automatically share filtered stock lists directly on WhatsApp.
            </p>

            <div className="space-y-5 mt-10">
              {[
                'Google Sheet Based Inventory',
                'Certificate Link Integration',
                'Video Link Support',
                'WhatsApp Auto Delivery',
                'No Public Pricing',
                'Lead Capture Before Access'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    ✓
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400">
                    <th className="py-4">Shape</th>
                    <th>Carat</th>
                    <th>Color</th>
                    <th>Clarity</th>
                    <th>Certificate</th>
                    <th>Video</th>
                  </tr>
                </thead>

                <tbody>
                  {[1, 2, 3, 4].map((row) => (
                    <tr key={row} className="border-b border-zinc-900">
                      <td className="py-5">Round</td>
                      <td>2.01</td>
                      <td>E</td>
                      <td>VVS1</td>
                      <td>
                        <span className="text-emerald-400">View</span>
                      </td>
                      <td>
                        <span className="text-emerald-400">Watch</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-[40px] p-10 lg:p-16">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Start Working Directly With Rhymind Labs
            </h2>

            <p className="text-zinc-400 text-lg mt-8 max-w-2xl mx-auto leading-8">
              Get certified lab grown diamond inventory directly from the manufacturing source.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="#register"
                className="px-8 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 transition text-black font-semibold"
              >
                Request Inventory
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="px-8 py-5 rounded-2xl border border-zinc-700 hover:border-emerald-500 transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">Rhymind Labs</h3>
            <p className="text-zinc-500 mt-2">
              Lab Grown Diamond Manufacturing Company
            </p>
          </div>

          <div className="text-zinc-500 text-sm">
            © 2026 Rhymind Labs Pvt Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
