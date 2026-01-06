/**
 * @file AboutYnoqSection.tsx
 * @description About section explaining the origin of YNOQ, the meaning of "why no queue," and
 * how the project responds to conspiracies and misinformation by returning to shared civic records.
 */

/**
 * AboutYnoqSection tells the story behind the YNOQ name and frames the site
 * as a response to the wave of conspiracies and fragmented information since 2016.
 */
export function AboutYnoqSection() {
  return (
    <section
      id="about-ynoq"
      aria-labelledby="about-ynoq-heading"
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/50 sm:p-8"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            About YNOQ
          </p>
          <h2
            id="about-ynoq-heading"
            className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            YNOQ: Why No Queue?
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            YNOQ was named in the middle of the so‑called “Q drops” — when anonymous posts and
            fast‑moving conspiracies were pulling people into rabbit holes. Many of us who care
            about the idea of “We the People” were alarmed by how quickly rumor could start to
            feel more real than any shared record.
          </p>
          <p className="text-sm text-slate-300 sm:text-base">
            The letters sound like a question: <span className="font-semibold text-sky-200">
              “why no queue?”
            </span>{' '}
            Why stand in line, waiting for the next cryptic drop or secret decoder ring, when we
            can go straight to what we actually have in common — the texts, the history, and the
            work people have done to push those promises closer to reality?
          </p>
          <p className="text-sm text-slate-300 sm:text-base">
            Since 2016, elections, public health crises, protests, and even violence at democratic
            institutions have shown how fragile our shared sense of truth can be. Across the
            political spectrum, people have felt confused, manipulated, or shut out. YNOQ was
            imagined as a different kind of response: not another feed of hot takes, but a place
            where anyone can slow down, read the record, and learn together.
          </p>
          <p className="text-sm text-slate-300 sm:text-base">
            This project starts with the founding documents, amendments, and key court decisions.
            Over time, it can grow to include voices of organizers, educators, and neighbors who
            used those texts to demand a more honest “We the People” — for everyone, everywhere,
            all at once.
          </p>
        </div>

        <div className="space-y-3 rounded-2xl bg-slate-950/70 p-4 ring-1 ring-slate-800 sm:p-5">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-sky-300">
            What this place is for
          </p>
          <ul className="space-y-2 text-xs text-slate-200 sm:text-sm">
            <li>
              <span className="font-semibold text-sky-200">From drops to documents.</span>{' '}
              We trade anonymous “insider” queues for original texts, amendments, cases, and
              historical context.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">From spectators to participants.</span>{' '}
              Instead of waiting for the next clue, we ask our own questions and learn how power,
              rights, and responsibility actually work.
            </li>
            <li>
              <span className="font-semibold text-amber-200">From isolation to learning together.</span>{' '}
              This isn&apos;t a secret club. It&apos;s a public workspace where students, teachers,
              families, and curious people can explore the same records side by side.
            </li>
          </ul>
          <p className="text-[0.7rem] text-slate-400 sm:text-xs">
            YNOQ does not offer legal advice or partisan talking points. It offers something more
            basic and more demanding: a chance to look at the same sources, name what we see, and
            imagine what a more honest &quot;We the People&quot; could look like next.
          </p>
        </div>
      </div>
    </section>
  )
}
