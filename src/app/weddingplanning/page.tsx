"use client";

import Link from "next/link";

export default function weddingplanningservices() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 sm:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Wedding Planning Services
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-amber-50/90">
            Jain Events offers comprehensive wedding planning, from elegant
            décor and to seamless coordination of every detail. We create
            stress-free, unforgettable celebrations tailored to your vision.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className="inline-block bg-white text-amber-600 px-5 py-3 rounded-lg font-medium shadow hover:shadow-md"
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

      {/* SERVICES GRID */}
      <main className="max-w-7xl mx-auto px-6 py-12 mb-28">
        <section id="services" className="space-y-8">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="text-gray-600 max-w-3xl">
            We offer a full suite of wedding services — pick a package or
            customize a plan that fits your vision and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card: Venue & Planning */}
            {/* <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                Venue Selection & Planning
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                We shortlist venues based on your guest count, style and budget,
                manage site visits, negotiate contracts and handle booking
                logistics.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Venue scouting & proposals</li>
                <li>Booking & contract negotiation</li>
                <li>Logistics & site layout</li>
              </ul>
            </article> */}

            {/* Card: Decor & Theme */}
            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                🌸 Decor & Theme Design
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Personalized themes — Royal, Rustic, Boho, Modern or
                Traditional. Full-stage, floral and lighting design to match
                your story.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Stage, mandap & entrance design</li>
                <li>Floral installations & centerpieces</li>
                <li>Lighting design & special effects</li>
              </ul>
            </article>

            {/* Card: Catering */}
            {/* <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">Catering & F&B</h3>
              <p className="text-sm text-gray-600 mb-3">
                Curated multi-cuisine menus, live stations and dietary-specific
                options (Jain, vegan, gluten-free) with professional service
                teams.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Custom menu curation</li>
                <li>Live food & dessert stations</li>
                <li>Guest service & staff management</li>
              </ul>
            </article> */}

            {/* Card: Entertainment */}
            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                🎶 Entertainment & Music
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                DJs,DJ on wheel, live bands, folk performers, choreographed
                sangeet and stage entertainment designed to keep your guests
                thrilled.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>DJ & live bands</li>
                <li>Dance choreography & performers</li>
                <li>Special acts </li>
              </ul>
            </article>

            {/* Card: Styling */}
            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">✂️ Utilities</h3>
              <p className="text-sm text-gray-600 mb-3">
                Providing complete utility services such as salon, mehndi,
                welcome arrangements, beauty stalls, and event essentials to
                make every celebration seamless.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Salon & Hair Styling </li>

                <li> Ironing & Dressing Assistance</li>

                <li>Professional Mehndi Artists </li>

                <li>Welcome Mala & Safa Arrangement </li>

                <li> Bangles and Accessory Stalls </li>

                <li>Nail Art & Beauty Booths </li>

                <li> Live Sketch and Tattoo Art </li>
              </ul>
            </article>

            {/* Card: Photo & Video */}
            <article className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">
                📸 Photography & Videography
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Candid coverage, cinematic films, drone footage and highlight
                reels to relive every emotion.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Candid & traditional photography</li>
                <li>Cinematic wedding films & highlights</li>
                <li>Drone photography & 360° coverage</li>
              </ul>
            </article>

             <section className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2">🏨 Hospitality</h3>
            <p className="text-sm text-gray-600 mb-3">
              We provide warm, professional hospitality services ensuring every
              guest feels welcomed, comfortable, and cared for throughout your
              event.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Hospitality Help Desk</li>
              <li>Guest Management & Assistance</li>
              <li>On-Site Support & Service Team</li>
            </ul>
          </section>
          </div>

     
         

               {/* Expanded details */}
          {/* <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Ceremony & Ritual Management
              </h3>
              <p className="text-gray-600 mb-3">
                From selecting a priest to sequencing every ritual, we ensure
                the ceremony flows smoothly and respectfully. We handle mandap
                setup, announcements, seating plans and ritual materials.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Pandit / officiant booking</li>
                <li>Ritual coordination & rehearsal</li>
                <li>Guest seating & program printing</li>
              </ul>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Destination Weddings & Travel
              </h3>
              <p className="text-gray-600 mb-3">
                We plan destination weddings end-to-end — travel, accommodation,
                local vendor coordination and on-site execution so you can
                celebrate without logistical stress.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Travel & hotel bookings</li>
                <li>Local vendor & permits coordination</li>
                <li>Legal/document assistance for international events</li>
              </ul>
            </section>
          </div> */}

        </section>
      </main>
    </div>
  );
}
