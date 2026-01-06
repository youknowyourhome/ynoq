/**
 * @file HeroSection.tsx
 * @description Hero section introducing the site's theme: how the United States' founding documents have evolved in meaning over time.
 */

/**
 * HeroSection displays the main title, subtitle, and primary navigation
 * links into the rest of the page content.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center"
    >
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          The United States of America
        </p>
        <h1
          id="hero-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
        >
          The Living Documents of American Democracy
        </h1>
        <p className="max-w-xl text-pretty text-base text-slate-300 sm:text-lg">
          Explore what the founding documents of the United States meant to the people who wrote
          them, and how their meanings have expanded over time to move closer to the promise of
          &quot;We the People&quot; — inclusive of all.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#documents"
            className="inline-flex items-center rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Explore the documents
          </a>
          <a
            href="#evolution"
            className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Trace the journey to &quot;We the People&quot;
          </a>
        </div>
        <p className="max-w-lg text-xs text-slate-400">
          This site is not a legal commentary, but a guide to help you see how ideas about rights,
          citizenship, and belonging have changed across American history.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-sky-400/10 to-emerald-400/20 blur-3xl" />
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-slate-950/70">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-rose-400" />
              <span className="ml-2 font-medium text-slate-200">Founding Documents</span>
            </span>
            <span className="hidden sm:block">Then &amp; Now</span>
          </div>
          <div className="grid gap-4 p-4 sm:grid-cols-[1.2fr,1fr] sm:gap-6 sm:p-6">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                Then
              </h2>
              <p className="text-xs text-slate-300 sm:text-sm">
                When the Declaration of Independence, Constitution, and Bill of Rights were written,
                their promises were mainly applied to white, property-owning men. Many people living
                in the new nation — including enslaved people, Indigenous nations, women, and the
                poor — were left out.
              </p>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Over time
              </h2>
              <p className="text-xs text-slate-300 sm:text-sm">
                Through amendments, court decisions, and movements for justice, these same documents
                have been reinterpreted to protect more people and more rights, often by those who
                were once excluded.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-slate-950/60 p-3 ring-1 ring-slate-800 sm:p-4">
              <img
                src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/df092b56-d842-487d-8b42-9cd63e5910ed.jpg"
                alt="A close-up of handwritten text on an aged parchment representing the United States Constitution."
                className="h-32 w-full rounded-xl object-cover"
              />
              <dl className="space-y-2 text-xs text-slate-200 sm:text-sm">
                <div className="flex items-start justify-between gap-2">
                  <dt className="font-semibold text-sky-300">Promise</dt>
                  <dd className="text-right text-slate-300">
                    &quot;All men are created equal&quot; and &quot;We the People&quot;.
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="font-semibold text-emerald-300">Struggle</dt>
                  <dd className="text-right text-slate-300">
                    Who counts as part of &quot;the People&quot; and who fully enjoys those
                    promises?
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="font-semibold text-amber-300">Story</dt>
                  <dd className="text-right text-slate-300">
                    The story of the United States is the story of people working to make the words
                    of these documents true for everyone.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}