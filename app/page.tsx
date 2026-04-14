import { Bungee } from 'next/font/google';

const bungee = Bungee({
  subsets: ['latin'],
  weight: '400',
});

export default function BinbinLandingPage() {
  const musicStyles = [
    {
      title: 'House',
      description:
        'Warm textures, vocal depth and groove-led selections shaped for elegant atmospheres.',
    },
    {
      title: 'Deep House',
      description:
        'Refined energy, hypnotic movement and subtle transitions for immersive sets.',
    },
    {
      title: 'Late-Night Flow',
      description:
        'From slow-burn warm-ups to fuller dancefloor moments, always with control and intention.',
    },
  ];

  const highlights = ['Vinyl & digital', 'Curated energy', 'Elegant progression'];

  return (
    <main className="min-h-screen scroll-smooth bg-[#040506] text-[#f7f3eb]">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f16] via-[#07090d] to-black" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:120px_120px]" />
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute left-[-10%] top-1/3 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-[-5%] h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10 lg:px-16">
          <header className="flex items-center justify-between">
            <a
              href="#top"
              className="text-sm uppercase tracking-[0.4em] text-white/72 transition hover:text-white"
            >
              BiNBiN
            </a>

            <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
              <a href="#sound" className="transition hover:text-white">
                Sound
              </a>
              <a href="#listen" className="transition hover:text-white">
                Listen
              </a>
              <a href="#booking" className="transition hover:text-white">
                Booking
              </a>
            </nav>
          </header>

          <div
            id="top"
            className="grid flex-1 items-center gap-16 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24"
          >
            <div className="animate-[fadeIn_0.9s_ease-out]">
              <p className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm">
                DJ • GROOVE • WITH INTENTION
              </p>

              <h1
                className={`${bungee.className} text-6xl tracking-[-0.03em] text-white md:text-8xl lg:text-[7.2rem]`}
              >
                BiNBiN
              </h1>

              <p className="mt-6 max-w-2xl text-xl italic text-white/82 md:text-2xl">
                House, disco and beyond — always with groove and intention
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/50 md:text-lg">
                From warm-up atmospheres to late-night energy. A refined sound built for rooftops,
                bars, clubs and curated events.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:booking@binbinmusic.com?subject=Booking request - BiNBiN"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-[#f3ede1]"
                >
                  Book now
                </a>

                <a
                  href="https://www.instagram.com/binbin.dj"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 text-sm text-white transition duration-300 hover:scale-[1.03] hover:bg-white/10"
                >
                  Instagram
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/48">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative animate-[fadeIn_1.2s_ease-out]">
              <div className="absolute -inset-4 rounded-[2rem] bg-white/[0.04] blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <img
                  src="/dj.jpg"
                  alt="BiNBiN DJ"
                  className="h-full min-h-[520px] w-full object-cover brightness-90 contrast-110 transition duration-700 hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/65 backdrop-blur-sm">
                    Montpellier • House • Vinyl & digital
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      <section id="sound" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/42">Sound</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              Curated grooves, refined energy.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {musicStyles.map((item) => (
              <div
                key={item.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
              >
                <div className="mb-5 h-px w-10 bg-white/20 transition-all duration-300 group-hover:w-16 group-hover:bg-white/45" />
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="listen" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/42">Listen</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                  Let the music do the talking.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">
                  A first taste of the atmosphere. Warm grooves, elegant progression and club-rooted
                  energy.
                </p>
              </div>

              <a
                href="https://www.instagram.com/binbin.dj"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Visit Instagram
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 p-3 backdrop-blur-sm">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                className="rounded-xl"
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djbinbin/benjyb-november-2012-mix&color=%230b0f16&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.28)] md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/42">Booking</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                Available for curated events and refined venues.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
                Rooftops, cocktail bars, clubs, private events and sunset sessions. Tasteful
                selection, elegant progression and the right energy for the room.
              </p>
            </div>

            <a
              href="mailto:booking@binbinmusic.com?subject=Booking request - BiNBiN"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-[#f3ede1]"
            >
              Send booking request
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/40">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 px-6 md:flex-row md:gap-6">
          <span>BiNBiN</span>
          <span className="hidden md:inline">•</span>
          <span>Montpellier, France</span>
          <span className="hidden md:inline">•</span>
          <a href="mailto:booking@binbinmusic.com" className="transition hover:text-white/70">
            booking@binbinmusic.com
          </a>
        </div>
      </footer>
    </main>
  );
}