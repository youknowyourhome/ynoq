/**
 * @file CallToActionSection.tsx
 * @description Closing call-to-action section encouraging visitors to keep exploring the founding documents and their evolving meaning.
 */

/**
 * CallToActionSection invites visitors to engage more deeply with the documents
 * and signals that the story of inclusion and interpretation is still ongoing.
 */
export function CallToActionSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-r from-sky-500/20 via-slate-900 to-emerald-500/10 p-6 shadow-2xl shadow-sky-900/40 sm:p-8"
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-3">
          <h2
            id="cta-heading"
            className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            The story is still being written.
          </h2>
          <p className="max-w-xl text-sm text-slate-200 sm:text-base">
            Every generation reads the founding documents in light of its own struggles and hopes.
            Learning what they meant then — and how their meanings have changed — helps us ask a
            central question: What kind of &quot;We the People&quot; do we want to be?
          </p>
          <p className="text-xs text-slate-200 sm:text-sm">
            You might explore the full text of the documents, landmark Supreme Court cases, or the
            words of activists who demanded that the nation keep its promises. This site can grow to
            include those resources.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl bg-slate-950/70 p-4 ring-1 ring-slate-800 sm:p-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky-300">
            Next steps
          </p>
          <ul className="space-y-2 text-xs text-slate-200 sm:text-sm">
            <li>
              • Compare the original text of a document with a modern plain-language explanation.
            </li>
            <li>
              • Create timelines for specific groups — such as Black Americans, women, or
              immigrants — and how the documents affected them.
            </li>
            <li>
              • Collect quotes from people who used these documents to argue for justice and
              inclusion.
            </li>
          </ul>
          <a
            href="#documents"
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-sm"
          >
            Start with the founding documents
          </a>
        </div>
      </div>
    </section>
  )
}