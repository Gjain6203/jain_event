"use client";

import Link from "next/link";

export default function BirthdayPartiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <header className="bg-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Birthday Party Planning Services
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-pink-50/90">
            We create fun, imaginative, and beautifully styled birthday
            celebrations for all ages, taking care of every detail so you can
            enjoy the party stress-free.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className="inline-block bg-white text-pink-500 px-5 py-3 rounded-lg font-medium shadow hover:shadow-md"
            >
              Book a Consultation
            </Link>
            <a
              href="/services"
              className="inline-block border border-white/30 text-white px-5 py-3 rounded-lg font-medium hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12 ">
        <section id="services" className="space-y-8">
          <h2 className="text-2xl font-bold">Our Birthday Party Services</h2>
          <p className="text-gray-600 max-w-3xl">
            We offer complete birthday party planning, from themes and
            decorations to food and entertainment. Customize your celebration to
            make it unforgettable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28 ">
            {/* Card: Theme & Decor */}
            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Theme & Decor</h3>
              <p className="text-sm text-gray-600 mb-3">
                Custom themes, balloons, centerpieces, stage decor, and table
                styling to match your vision.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Custom themes</li>
                <li>Balloons & decorations</li>
                <li>Party supplies coordination</li>
              </ul>
            </article>

            {/* Card: Entertainment */}
            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Entertainment</h3>
              <p className="text-sm text-gray-600 mb-3">
                DJs, games, performers, magic shows, or themed activities for
                kids and adults.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Live performers & DJs</li>
                <li>Games & party activities</li>
                <li>Theme-specific entertainment</li>
              </ul>
            </article>

            {/* Card: Photography */}
            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition ">
              <h3 className="text-lg font-semibold mb-2">
                Photography & Videography
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Capture every memorable moment with professional photography and
                video services.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Candid & posed photography</li>
                <li>Video highlights & reels</li>
                <li>Instant photo booths</li>
              </ul>
            </article>

          
          </div>

          {/* CTA Section */}
          {/* <aside className="mt-10 bg-gradient-to-r from-pink-50/60 to-white p-6 rounded-2xl border">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold">Custom Birthday Packages</h4>
                <p className="text-sm text-gray-600 max-w-xl">
                  Choose from ready-made packages or create your own. Contact us
                  for a personalized quote.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  className="inline-block bg-pink-500 text-white px-4 py-2 rounded"
                >
                  Get a Quote
                </Link>
                <a
                  href="#"
                  className="inline-block border border-pink-500 px-4 py-2 rounded text-pink-500"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </aside> */}
        </section>
      </main>
    </div>
  );
}
