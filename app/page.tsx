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
      
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f16] via-[#07090d] to-black" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:120px_120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 md:px-10 lg:px-16">
          
          {/* NAV */}
          <header className="flex items-center justify-between">
            <a href="#top" className="text-sm uppercase tracking-[0.4em] text-white/72">
              BiNBiN
            </a>
            <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
              <a href="#sound">Sound</a>
              <a href="#listen">Listen</a>
              <a href="#booking">Booking</a>
            </nav>
          </header>

          {/* HERO CONTENT */}
          <div id="top" className="grid flex-1 items-center gap-16 py-20 lg:grid-cols-2">
            
            {/* LEFT */}
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/60">
                DJ • GROOVE • WITH INTENTION
              </p>

              <h1 className={`${bungee.className} text-6xl md:text-8xl text-white`}>
                BiNBiN
              </h1>

              <p className="mt-6 text-xl italic text-white/80">
                House, disco and beyond — always with groove and intention
              </p>

              <div className="mt-10 flex gap-4">
                <a
                  href="mailto:booking@binbinmusic.com"
                  className="bg-white text-black px-6 py-3 rounded-full"
                >
                  Book now
                </a>

                <a
                  href="https://www.instagram.com/binbin.dj"
                  target="_blank"
                  className="border border-white px-6 py-3 rounded-full"
                >
                  Instagram
                </a>
              </div>

              <div className="mt-10 flex gap-3 flex-wrap text-sm text-white/50">
                {highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src="/dj.jpg"
                alt="BiNBiN DJ"
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SOUND */}
      <section id="sound" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl text-white mb-10">
            Curated grooves, refined energy.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {musicStyles.map((item) => (
              <div key={item.title} className="border border-white/10 p-6 rounded-xl">
                <h3 className="text-white">{item.title}</h3>
                <p className="text-white/50 text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LISTEN */}
      <section id="listen" className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl text-white">Let the music do the talking.</h2>

            <a
              href="https://www.instagram.com/binbin.dj"
              target="_blank"
              className="border border-white px-4 py-2 rounded-full"
            >
              Instagram
            </a>
          </div>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djbinbin/benjyb-november-2012-mix"
          />

        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-white mb-6">
            Available for curated events.
          </h2>

          <a
            href="mailto:booking@binbinmusic.com"
            className="bg-white text-black px-6 py-3 rounded-full"
          >
            Send booking request
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/40">
        BiNBiN • Montpellier • booking@binbinmusic.com
      </footer>

    </main>
  );
}