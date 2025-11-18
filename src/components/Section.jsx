export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-blue-400/70">{eyebrow}</p>
          <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-white">{title}</h2>
        </div>
        <div className="prose prose-invert prose-slate max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
