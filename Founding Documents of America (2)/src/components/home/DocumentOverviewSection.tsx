/**
 * @file DocumentOverviewSection.tsx
 * @description Overview of the key founding documents with a simple "Then vs Now" comparison.
 */

/**
 * DocumentOverviewSection presents concise explanations of the Declaration of Independence,
 * the Constitution, and the Bill of Rights, highlighting how their meanings have changed over time.
 */
export function DocumentOverviewSection() {
  const documents = [
    {
      name: 'The Declaration of Independence',
      year: 1776,
      then: 'Announced that the thirteen colonies were independent from Great Britain, claiming that all men are created equal and have rights that cannot be taken away.',
      now: 'Its language about equality and rights has been used by many groups — including abolitionists, women’s rights advocates, and civil rights leaders — to argue that the nation must live up to its own ideals.'
    },
    {
      name: 'The U.S. Constitution',
      year: 1787,
      then: 'Created a new framework for the federal government, dividing power among branches and between the states and national government. It originally protected slavery and did not mention many basic rights.',
      now: 'Amendments and court interpretations have reshaped the Constitution so that it now protects many individual rights and defines national citizenship, though debates about power and equality continue.'
    },
    {
      name: 'The Bill of Rights',
      year: 1791,
      then: 'The first ten amendments, added to win support for the Constitution. They protected freedoms like speech, religion, and the press, mostly from actions by the federal government.',
      now: 'Today many of these protections also apply to state and local governments, and they are central to debates over criminal justice, privacy, protest, and more.'
    }
  ]

  return (
    <section
      id="documents"
      aria-labelledby="documents-heading"
      className="space-y-6"
    >
      <header className="space-y-2">
        <h2
          id="documents-heading"
          className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
        >
          The Founding Documents
        </h2>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          These documents set out the basic ideas and structures of the United States. From the
          beginning, there was a gap between the words on the page and the realities of people&apos;s
          lives. Over time, that gap has been challenged again and again.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {documents.map((doc) => (
          <article
            key={doc.name}
            className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-xl shadow-slate-950/60 transition hover:border-sky-400/70 hover:shadow-sky-500/20 sm:p-5"
          >
            <header className="space-y-1">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                {doc.name}
              </h3>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">
                Adopted {doc.year}
              </p>
            </header>
            <dl className="mt-4 space-y-4 text-xs text-slate-200 sm:text-sm">
              <div className="rounded-xl bg-slate-950/60 p-3 ring-1 ring-slate-800">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Then
                </dt>
                <dd className="mt-1 text-slate-200">{doc.then}</dd>
              </div>
              <div className="rounded-xl bg-slate-950/40 p-3 ring-1 ring-slate-800">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  How it has been read over time
                </dt>
                <dd className="mt-1 text-slate-200">{doc.now}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}