import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg">SAVAK</h1>
          <p className="mt-4 text-slate-200 max-w-2xl text-base sm:text-lg">
            A neutral, historical overview exploring its formation, organizational structure, key milestones, and lasting legacy.
          </p>
        </div>
      </div>
    </section>
  );
}
