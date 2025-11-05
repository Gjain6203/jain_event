import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Wedding Planning ",
    description:
      "Premium wedding planning in Jaipur with luxurious décor, flawless coordination, and personalized celebrations designed to make your special day truly unforgettable.",
    image: "/image/wedding_card.jpg",
    link: "/weddingplanning",
  },

  {
    title: "Birthday Parties",
    description:
      "Fun, creative, and beautifully decorated birthday parties in Jaipur, planned with unique themes, vibrant décor, and seamless coordination to make every moment truly unforgettable.",
    image: "/image/birthday_card.jpeg",
    link: "/birthdayparties",
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto  px-4">
      {/* page */}

      {/* background image */}
      <Image
        src="/image/home1.jpg"
        alt="Event planning background"
        fill
        className="object-cover -z-10 "
      />

      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* card */}

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-15">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.link}
            className="group block rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-900 hover:scale-105 transition-transform border border-gray-200 dark:border-gray-700"
          >
            <div className="relative w-full h-48">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:opacity-90 transition-opacity"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {card.description}
              </p>
              <span className="inline-block text-blue-600 dark:text-blue-400 font-medium">
                Learn More &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
