/**
 * @file EvolutionTimelineSection.tsx
 * @description Timeline section tracing key moments where the meaning of the founding documents expanded to include more people.
 */

/**
 * EvolutionTimelineSection shows a simplified historical timeline of amendments,
 * laws, and movements that pushed the founding documents toward broader inclusion.
 */
export function EvolutionTimelineSection() {
  const events = [
    {
      era: 'Reconstruction Amendments',
      years: '1865–1870',
      title: 'Ending slavery and defining citizenship',
      description:
        'After the Civil War, the 13th Amendment abolished slavery (except as punishment for a crime), the 14th Amendment defined national citizenship and promised equal protection of the laws, and the 15th Amendment protected voting rights for Black men.',
      who: 'Formerly enslaved people and their descendants, especially in the former Confederacy.',
      effect:
        'These amendments rewrote the meaning of &quot;We the People&quot; and gave the federal government new power to protect individual rights.'
    },
    {
      era: 'Women’s Suffrage',
      years: '1920',
      title: 'The 19th Amendment',
      description:
        'The 19th Amendment prohibited denying the right to vote on the basis of sex, after decades of activism by women who argued that they, too, were part of &quot;the people&quot; mentioned in the founding documents.',
      who: 'Many women, especially white women; many women of color still faced legal and practical barriers to voting.',
      effect:
        'Expanded political representation by bringing millions of women into the electorate and reshaped how equality in the founding documents was understood.'
    },
    {
      era: 'Civil Rights Era',
      years: '1954–1965',
      title: 'Desegregation and voting rights',
      description:
        'Supreme Court decisions like Brown v. Board of Education and laws like the Civil Rights Act of 1964 and Voting Rights Act of 1965 challenged segregation and discrimination, especially in the South.',
      who: 'Black Americans and other racial minorities facing segregation and voter suppression.',
      effect:
        'Used the language of equal protection, due process, and voting rights from the Constitution to strike down Jim Crow and strengthen federal protections.'
    },
    {
      era: 'Continuing Struggles',
      years: '1960s–present',
      title: 'Expanding ideas of equality and liberty',
      description:
        'Movements for disability rights, LGBTQ+ rights, Indigenous sovereignty, immigrant rights, and more have relied on the founding documents to argue for full inclusion and protection.',
      who: 'Communities historically excluded or marginalized in law and practice.',
      effect:
        'Show that the meaning of the founding documents is still being contested and expanded in our own time.'
    }
  ]

  return (
    <section
      id="evolution"
      aria-labelledby="evolution-heading"
      className="space-y-6"
    >
      <header className="space-y-2">
        <h2
          id="evolution-heading"
          className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
        >
          From &quot;We the People&quot; to All the People
        </h2>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          The founding documents did not automatically protect everyone. Amendments, court cases,
          and social movements pushed their words to cover more people, often in the face of strong
          opposition.
        </p>
      </header>

      <ol className="relative space-y-6 border-s-l border-slate-800 pl-5 sm:space-y-8 sm:pl-8">
        <span className="absolute left-0 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 ring-4 ring-slate-950" />
        {events.map((event, index) => (
          <li key={event.title} className="relative">
            <div className="absolute -left-5 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-700 sm:-left-8" />
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/60 sm:p-5">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky-400">
                    {event.era}
                  </p>
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {event.title}
                  </h3>
                </div>
                <p className="text-xs font-medium text-slate-400">{event.years}</p>
              </header>
              <p className="mt-3 text-xs text-slate-200 sm:text-sm">{event.description}</p>
              <dl className="mt-3 grid gap-3 text-xs text-slate-200 sm:grid-cols-2 sm:text-sm">
                <div className="rounded-xl bg-slate-950/40 p-3 ring-1 ring-slate-800">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                    Who was included?
                  </dt>
                  <dd className="mt-1">{event.who}</dd>
                </div>
                <div className="rounded-xl bg-slate-950/40 p-3 ring-1 ring-slate-800">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber-300">
                    How the meaning shifted
                  </dt>
                  <dd className="mt-1">{event.effect}</dd>
                </div>
              </dl>
              <p className="mt-2 text-[0.7rem] text-slate-400">
                Step {index + 1} of {events.length} in a much longer and ongoing story.
              </p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}