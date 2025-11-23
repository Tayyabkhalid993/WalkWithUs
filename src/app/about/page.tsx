export const metadata = {
  title: "About - GlobexTrader",
  description: "About GlobexTrader - our story and mission",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">About GlobexTrader</h1>
        <p className="mt-6 text-gray-600 leading-relaxed">
          GlobexTrader designs comfortable, sustainable footwear for everyday
          life. Our mission is to make shoes that look great, feel better, and
          last longer. We partner with responsible manufacturers and source
          materials with care.
        </p>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Our Values</h2>
          <ul className="mt-3 list-disc list-inside text-gray-600">
            <li>Comfort-first design</li>
            <li>Quality materials</li>
            <li>Responsible manufacturing</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
