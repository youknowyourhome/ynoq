/**
 * @file PrinciplesGridSection.tsx
 * @description Highlights core democratic principles and how their application has broadened over time.
 */

/**
 * PrinciplesGridSection presents key ideas found in the founding documents
 * and contrasts how they were originally applied with how they are commonly understood today.
 */
export function PrinciplesGridSection() {
  const principles = [
    {
      name: 'Liberty',
      then: 'Often meant freedom from a distant king and protection for property and contract rights, especially for white male property owners.',
      now: 'Includes freedom of speech, conscience, and personal life decisions for people of many different backgrounds and identities, balanced with the rights of others and the community.'
    },
    {
      name: 'Equality',
      then: 'Coexisted with slavery, the removal of Indigenous nations, and sharp legal differences based on race, sex, and wealth.',
      now: 'Used as a standard to challenge discrimination and unequal treatment in voting, education, employment, marriage, and more, even though inequalities still remain.'
    },
    {
      name: 'Representation',
      then: 'Many people — including enslaved people, most women, Indigenous peoples, and poor white men in some states — had no direct vote or voice in government.',
      now: 'More people can vote and run for office than ever before, though debates over gerrymandering, voter suppression, and money in politics continue.'
    },
    {
      name: 'Rule of Law',
      then: 'Helped create more stable government, but the law itself often protected inequality and did not treat everyone fairly.',
      now: 'The idea that even powerful people are subject to the law is central, and civil rights laws aim to make the law a tool for fairness rather than exclusion.'
    }
  ]

  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="space-y-6"
    >
      <header className="space-y-2">
        <h2
          id="principles-heading"
          className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
        >
          Big Ideas in the Documents
        </h2>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          The founding documents are full of big ideas. Some were applied narrowly at first. Over
          time, people have insisted that these principles must make room for them as well.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {principles.map((principle) => (
          <article
            key={principle.name}
            className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/60 sm:p-5"
          >
            <header>
              <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                {principle.name}
              </h3>
            </header>
            <dl className="grid gap-3 text-xs text-slate-200 sm:grid-cols-2 sm:text-sm">
              <div className="rounded-xl bg-slate-950/60 p-3 ring-1 ring-slate-800">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Originally applied as
                </dt>
                <dd className="mt-1">{principle.then}</dd>
              </div>
              <div className="rounded-xl bg-slate-950/40 p-3 ring-1 ring-slate-800">
                <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                  More common meaning today
                </dt>
                <dd className="mt-1">{principle.now}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  )
}