import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <ul className="space-y-5 ">
        <Link href="/weddingplanning">
          <li className="border p-4 rounded shadow-sm mb-5 ">
            <h2 className="text-xl font-semibold">Wedding Planning</h2>
            <p>
              Elegant and stress-free wedding planning in <span className="font-bold"> Jaipur</span>  with complete
              services including décor, DJ, DJ on Wheels, cameraman, videography, dhol,
              fireworks, Choreographer, Anchor and premium hospitality—everything you need to
              create your dream celebration.
            </p>
          </li>
        </Link>

        <Link href="/birthdayparties">
          <li className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold">Birthday Parties</h2>
            <p>
             Fun and memorable birthday celebrations <span className="font-bold"> Jaipur</span> featuring creative themes, vibrant decorations, exciting entertainment, and personalized planning to make every age group feel special.
            </p>
          </li>
        </Link>
      </ul>
    </main>
  );
}
