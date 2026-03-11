const PlatformSupportSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto max-w-7xl px-6 text-center">
      <h2 className="text-2xl font-bold text-slate-800 mb-12 uppercase tracking-widest">Global Platform Support</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {["Shopify", "WooCommerce", "Custom Dev", "Marketplace Hub"].map((p, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-xl font-bold text-xl flex items-center justify-center">
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformSupportSection