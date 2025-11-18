export default function Timeline({ items }) {
  return (
    <ol className="relative border-s border-white/10 ml-4">
      {items.map((it, i) => (
        <li key={i} className="mb-10 ms-6">
          <span className="absolute -start-2.5 mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-blue-500/80 shadow" />
          <h3 className="text-white font-semibold">{it.title}</h3>
          <p className="text-xs text-slate-400 mb-2">{it.period}</p>
          <p className="text-slate-200/90 leading-relaxed">{it.desc}</p>
        </li>
      ))}
    </ol>
  );
}
