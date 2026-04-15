'use client';

import { useEffect, useRef, useState } from 'react';
import { Bungee } from 'next/font/google';

const bungee = Bungee({
  subsets: ['latin'],
  weight: '400',
});

type Lang = 'fr' | 'en';
type ListenTab = 'mix' | 'edit' | 'remix';
type MediaItem = {
  type: 'image' | 'video';
  src: string;
};

const media: MediaItem[] = [
  { type: 'image', src: '/photos/dj-1.jpg' },
  { type: 'video', src: '/videos/set-1.mp4' },
  { type: 'image', src: '/photos/dj-2.jpg' },
  { type: 'video', src: '/videos/set-2.mp4' },
  { type: 'image', src: '/photos/dj-3.jpg' },
];

const content = {
  en: {
    nav: {
      bio: 'Bio',
      sound: 'Sound',
      listen: 'Listen',
      booking: 'Booking',
    },
    heroTag: 'DJ • GROOVE • WITH INTENTION',
    heroTitle: 'BiNBiN',
    heroSubtitle: 'House, disco and beyond — always with groove and intention',
    heroText:
      'From warm-up atmospheres to late-night energy. A refined sound built for rooftops, bars, clubs and curated events.',
    ctaBook: 'Book now',
    ctaInstagram: 'Instagram',
    highlights: ['Vinyl & digital', 'Curated energy', 'Elegant progression'],
    photoBadge: 'Montpellier • House • Vinyl & digital',

    bioLabel: 'Bio',
    bioTitle: 'A journey shaped by groove and culture.',
    bioText: (
      <>
        Initially rooted in hip-hop culture, BiNBiN was introduced to deejaying by{' '}
        <a
          href="https://www.instagram.com/djgetdown/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 transition hover:text-white"
        >
          DJ GETDOWN
        </a>
        , building a foundation based on rhythm, technique and musical curiosity.
        <br />
        <br />
        Over time, his sound naturally evolved toward electronic music, exploring house, disco, deep
        house and UK garage, while preserving a strong sense of groove and flow.
        <br />
        <br />
        In 2007, he released his first record under the alias{' '}
        <a
          href="https://www.discogs.com/fr/release/890857-Benjy-B-Love-Has-Come-Around"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 transition hover:text-white"
        >
          Benjy B
        </a>
        , marking the beginning of a deeper artistic exploration between production and DJing.
      </>
    ),

    soundLabel: 'Sound',
    soundTitle: 'Curated grooves, refined energy.',
    musicStyles: [
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
    ],

    listenLabel: 'Listen',
    listenTitle: 'Let the music do the talking.',
    listenText:
      'A first taste of the atmosphere. Warm grooves, elegant progression and club-rooted energy.',
    visitInstagram: 'Visit Instagram',
    tabs: {
      mix: 'Mix',
      edit: 'Edit',
      remix: 'Remix',
    },
    tabDescriptions: {
      mix: 'A recorded mix that reflects the musical direction, flow and atmosphere.',
      edit: 'A reworked version designed for dancefloor energy and personal interpretation.',
      remix: 'A rebuilt track with a stronger identity, groove and club perspective.',
    },
    placeholders: {
      edit: 'Add your edit here',
      remix: 'Add your remix here',
    },

    bookingLabel: 'Booking',
    bookingTitle: 'Available for curated events and refined venues.',
    bookingText:
      'Rooftops, cocktail bars, clubs, private events and sunset sessions. Tasteful selection, elegant progression and the right energy for the room.',
    bookingButton: 'Send booking request',

    footerCity: 'Montpellier, France',
  },

  fr: {
    nav: {
      bio: 'Bio',
      sound: 'Univers',
      listen: 'Écoute',
      booking: 'Booking',
    },
    heroTag: 'DJ • GROOVE • WITH INTENTION',
    heroTitle: 'BiNBiN',
    heroSubtitle: 'House, disco et au-delà — toujours avec groove et intention',
    heroText:
      'Des warm-up atmosphériques jusqu’aux moments plus intenses de la nuit. Un univers raffiné pensé pour les rooftops, bars, clubs et événements soignés.',
    ctaBook: 'Réserver',
    ctaInstagram: 'Instagram',
    highlights: ['Vinyl & digital', 'Énergie maîtrisée', 'Progression élégante'],
    photoBadge: 'Montpellier • House • Vinyl & digital',

    bioLabel: 'Bio',
    bioTitle: 'Un parcours guidé par le groove et la culture musicale.',
    bioText: (
      <>
        D’abord ancré dans la culture hip-hop, BiNBiN découvre le deejaying aux côtés de{' '}
        <a
          href="https://www.instagram.com/djgetdown/"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 transition hover:text-white"
        >
          DJ GETDOWN
        </a>
        , développant une base solide autour du rythme, de la technique et de la sélection musicale.
        <br />
        <br />
        Son univers évolue progressivement vers les musiques électroniques, naviguant entre house,
        disco, deep house et UK garage, tout en conservant une approche centrée sur le groove et la
        fluidité.
        <br />
        <br />
        En 2007, il sort un premier maxi sous le pseudonyme{' '}
        <a
          href="https://www.discogs.com/fr/release/890857-Benjy-B-Love-Has-Come-Around"
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-4 transition hover:text-white"
        >
          Benjy B
        </a>
        , marquant le début d’une exploration plus poussée entre production et DJing.
      </>
    ),

    soundLabel: 'Univers',
    soundTitle: 'Grooves sélectionnés, énergie raffinée.',
    musicStyles: [
      {
        title: 'House',
        description:
          'Textures chaleureuses, profondeur vocale et sélections guidées par le groove pour des atmosphères élégantes.',
      },
      {
        title: 'Deep House',
        description:
          'Énergie raffinée, mouvement hypnotique et transitions subtiles pour des sets immersifs.',
      },
      {
        title: 'Late-Night Flow',
        description:
          'Des warm-up progressifs jusqu’aux moments plus denses du dancefloor, toujours avec contrôle et intention.',
      },
    ],

    listenLabel: 'Écoute',
    listenTitle: 'Laisse la musique parler.',
    listenText:
      'Un premier aperçu de l’atmosphère. Des grooves chaleureux, une progression élégante et une énergie ancrée dans la culture club.',
    visitInstagram: 'Voir Instagram',
    tabs: {
      mix: 'Mix',
      edit: 'Edit',
      remix: 'Remix',
    },
    tabDescriptions: {
      mix: 'Un mix enregistré qui reflète la direction musicale, le flow et l’atmosphère.',
      edit: 'Une version retravaillée pensée pour l’énergie du dancefloor et une interprétation personnelle.',
      remix: 'Un morceau reconstruit avec une identité plus marquée, du groove et une vraie vision club.',
    },
    placeholders: {
      edit: 'Ajoute ici ton edit',
      remix: 'Ajoute ici ton remix',
    },

    bookingLabel: 'Booking',
    bookingTitle: 'Disponible pour des événements soignés et lieux raffinés.',
    bookingText:
      'Rooftops, bars à cocktails, clubs, événements privés et sunset sessions. Une sélection de goût, une progression élégante et la bonne énergie pour chaque lieu.',
    bookingButton: 'Envoyer une demande',

    footerCity: 'Montpellier, France',
  },
} as const;

export default function BinbinLandingPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeTab, setActiveTab] = useState<ListenTab>('mix');
  const [currentMedia, setCurrentMedia] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const t = content[lang];

  const nextMedia = () => {
    setCurrentMedia((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMedia((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextMedia();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (touchStartX.current === null || touchEndX.current === null) return;

    const delta = touchStartX.current - touchEndX.current;

    if (delta > 50) nextMedia();
    if (delta < -50) prevMedia();

    touchStartX.current = null;
    touchEndX.current = null;
  };

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

            <div className="flex items-center gap-6">
              <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
                <a href="#bio" className="transition hover:text-white">
                  {t.nav.bio}
                </a>
                <a href="#sound" className="transition hover:text-white">
                  {t.nav.sound}
                </a>
                <a href="#listen" className="transition hover:text-white">
                  {t.nav.listen}
                </a>
                <a href="#booking" className="transition hover:text-white">
                  {t.nav.booking}
                </a>
              </nav>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLang('fr')}
                  className={`rounded-full border px-3 py-1.5 text-sm transition ${
                    lang === 'fr'
                      ? 'border-white/30 bg-white/10 text-white'
                      : 'border-white/10 bg-white/[0.03] text-white/65 hover:bg-white/10'
                  }`}
                  aria-label="Version française"
                  type="button"
                >
                  🇫🇷
                </button>

                <button
                  onClick={() => setLang('en')}
                  className={`rounded-full border px-3 py-1.5 text-sm transition ${
                    lang === 'en'
                      ? 'border-white/30 bg-white/10 text-white'
                      : 'border-white/10 bg-white/[0.03] text-white/65 hover:bg-white/10'
                  }`}
                  aria-label="English version"
                  type="button"
                >
                  🇬🇧
                </button>
              </div>
            </div>
          </header>

          <div
            id="top"
            className="grid flex-1 items-center gap-16 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24"
          >
            <div className="animate-[fadeIn_0.9s_ease-out]">
              <p className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/60 shadow-[0_0_30px_rgba(255,255,255,0.04)] backdrop-blur-sm">
                {t.heroTag}
              </p>

              <h1
                className={`${bungee.className} text-6xl tracking-[-0.03em] text-white md:text-8xl lg:text-[7.2rem]`}
              >
                {t.heroTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-xl italic text-white/82 md:text-2xl">
                {t.heroSubtitle}
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-white/50 md:text-lg">
                {t.heroText}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:booking@binbinmusic.com?subject=Booking request - BiNBiN"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-[#f3ede1]"
                >
                  {t.ctaBook}
                </a>

                <a
                  href="https://www.instagram.com/binbin.dj"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 text-sm text-white transition duration-300 hover:scale-[1.03] hover:bg-white/10"
                >
                  {t.ctaInstagram}
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/48">
                {t.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="relative animate-[fadeIn_1.2s_ease-out]"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-white/[0.04] blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="relative h-full min-h-[520px] w-full">
                  {media.map((item, index) => (
                    <div
                      key={`${item.src}-${index}`}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        index === currentMedia
                          ? 'z-10 opacity-100 scale-100'
                          : 'z-0 opacity-0 scale-[1.02]'
                      }`}
                    >
                      {item.type === 'image' ? (
                        <img
                          src={item.src}
                          alt={`BiNBiN media ${index + 1}`}
                          className="h-full min-h-[520px] w-full object-cover brightness-90 contrast-110"
                        />
                      ) : (
                        <video
                          src={item.src}
                          className="h-full min-h-[520px] w-full object-cover brightness-90 contrast-110"
                          autoPlay={index === currentMedia}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/45 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between p-6 md:p-8">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/65 backdrop-blur-sm">
                    {t.photoBadge}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevMedia}
                      className="rounded-full border border-white/15 bg-black/35 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                      aria-label="Previous media"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={nextMedia}
                      className="rounded-full border border-white/15 bg-black/35 px-3 py-2 text-sm text-white transition hover:bg-white/10"
                      aria-label="Next media"
                    >
                      →
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-20 left-6 z-30 flex gap-2 md:left-8">
                  {media.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentMedia(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        index === currentMedia ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Go to media ${index + 1}`}
                    />
                  ))}
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

      <section id="bio" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.28)] md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/42">{t.bioLabel}</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {t.bioTitle}
            </h2>

            <div className="mt-6 max-w-3xl text-base leading-8 text-white/62 md:text-lg">
              {t.bioText}
            </div>
          </div>
        </div>
      </section>

      <section id="sound" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/42">{t.soundLabel}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {t.soundTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.musicStyles.map((item) => (
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
                <p className="text-xs uppercase tracking-[0.35em] text-white/42">{t.listenLabel}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                  {t.listenTitle}
                </h2>
                <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">
                  {t.listenText}
                </p>
              </div>

              <a
                href="https://www.instagram.com/binbin.dj"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                {t.visitInstagram}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {(['mix', 'edit', 'remix'] as ListenTab[]).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    activeTab === tab
                      ? 'border-white/30 bg-white/10 text-white'
                      : 'border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/10'
                  }`}
                >
                  {t.tabs[tab]}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
              <p className="mb-4 text-sm leading-7 text-white/60">
                {t.tabDescriptions[activeTab]}
              </p>

              {activeTab === 'mix' && (
                <iframe
                  title="BiNBiN SoundCloud mix"
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  className="rounded-xl"
                  src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djbinbin/benjyb-november-2012-mix&color=%230b0f16&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false"
                />
              )}

              {activeTab === 'edit' && (
                <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-white/40">
                  {t.placeholders.edit}
                </div>
              )}

              {activeTab === 'remix' && (
                <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-white/40">
                  {t.placeholders.remix}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.28)] md:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/42">{t.bookingLabel}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                {t.bookingTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
                {t.bookingText}
              </p>
            </div>

            <a
              href="mailto:booking@binbinmusic.com?subject=Booking request - BiNBiN"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.03] hover:bg-[#f3ede1]"
            >
              {t.bookingButton}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/40">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 px-6 md:flex-row md:gap-6">
          <span>BiNBiN</span>
          <span className="hidden md:inline">•</span>
          <span>{t.footerCity}</span>
          <span className="hidden md:inline">•</span>
          <a href="mailto:booking@binbinmusic.com" className="transition hover:text-white/70">
            booking@binbinmusic.com
          </a>
        </div>
      </footer>
    </main>
  );
}