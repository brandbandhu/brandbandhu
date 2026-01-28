export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Glow background */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Turning Pune’s Corporates into Global Brands.
        </h1>

        <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-xl mx-auto">
          Strictly Corporate. Strictly Performance. No Fluff.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-6 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: 'var(--brand-blue)' }}
          >
            View Case Studies
          </button>

          <button className="px-6 py-3 rounded-lg border border-white text-white">
            Our Services
          </button>
        </div>
      </div>
    </section>
  )
}
