/**
 * @file HeroSection.tsx
 * @description Hero section introducing YNOQ: We The People and the idea of using original civic documents
 * to move from conspiracies and rumors toward evidence-based understanding of American democracy.
 */

/**
 * HeroSection displays the main title, tagline, and primary navigation
 * links into the rest of the page content for exploring the founding
 * documents and how their meanings have expanded over time.
 */
export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center"
    >
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          YNOQ · We The People
        </p>
        <h1
          id="hero-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
        >
          Ask Better Questions. Find Real Answers.
        </h1>
        <p className="max-w-xl text-pretty text-base text-slate-300 sm:text-lg">
          YNOQ is a civic learning space that goes back to the record—original
          documents, amendments, and key court decisions—so we can separate
          evidence from rumor and see how &quot;We the People&quot; has expanded
          to include more of us over time.
        </p>
        <p className="max-w-xl text-pretty text-sm text-slate-400">
          Instead of chasing conspiracies or secret drops, we look directly at
          the Declaration of Independence, the Constitution, the Bill of Rights,
          later amendments, and landmark cases to understand how power, rights,
          and belonging really work—together, for everyone, everywhere.
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
          This site is not a legal commentary or a place for secret codes. It is
          a guide to help all of us read what the documents actually say, follow
          how they have been interpreted, and ask better questions about how
          democracy can serve everyone, everywhere, all at once.
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
              <span className="ml-2 font-medium text-slate-200">
                Founding Documents
              </span>
            </span>
            <span className="hidden sm:block">From rumor to record</span>
          </div>
          <div className="grid gap-4 p-4 sm:grid-cols-[1.2fr,1fr] sm:gap-6 sm:p-6">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                The questions
              </h2>
              <p className="text-xs text-slate-300 sm:text-sm">
                Who is included in &quot;We the People&quot;? Who has power,
                and how is it limited? What rights are protected—and for whom?
                These questions are too important to leave to rumors and
                screenshots.
              </p>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                The record
              </h2>
              <p className="text-xs text-slate-300 sm:text-sm">
                By reading the texts themselves, the amendments that changed
                them, and key Supreme Court cases, we can see how people have
                pushed the United States closer to its own promises.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-slate-950/60 p-3 ring-1 ring-slate-800 sm:p-4">
              <img
                src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/5e3c0ecc-337a-4538-822a-bb89d4458cdb.jpg"
                alt="A close-up of handwritten text on an aged parchment representing the United States Constitution."
                className="h-32 w-full rounded-xl object-cover"
              />
              <dl className="space-y-2 text-xs text-slate-200 sm:text-sm">
                <div className="flex items-start justify-between gap-2">
                  <dt className="font-semibold text-sky-300">Promise</dt>
                  <dd className="text-right text-slate-300">
                    &quot;All men are created equal&quot; and &quot;We the
                    People&quot;—ideas that people have used to demand a more
                    inclusive democracy.
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="font-semibold text-emerald-300">Evidence</dt>
                  <dd className="text-right text-slate-300">
                    Original texts, amendments, and court decisions—not
                    anonymous posts—show how those ideas have been applied,
                    limited, and expanded.
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <dt className="font-semibold text-amber-300">Story</dt>
                  <dd className="text-right text-slate-300">
                    The story of the United States is the story of people asking
                    hard questions and organizing to make the documents&apos;
                    promises real for everyone, everywhere.
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
  