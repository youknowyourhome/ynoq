/**
 * @file AmendmentsIndex.tsx
 * @description Index page listing all 27 amendments with links to detailed pages and case law.
 */

import { Link } from 'react-router'
import { SiteHeader } from '../components/layout/SiteHeader'
import { AMENDMENTS } from '../data/amendments'

/**
 * AmendmentsIndexPage lists the amendments and links to individual detail views.
 */
export default function AmendmentsIndexPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <section className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            The Constitution in Practice
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            The 27 Amendments &amp; Their Case Law
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
            Each amendment adds a new layer to the Constitution. Together, they
            abolish slavery, expand voting rights, shape criminal justice, and
            refine the structure of government. Select any amendment below to
            explore its core ideas and landmark cases that interpret it.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {AMENDMENTS.map((amendment) => (
            <Link
              key={amendment.number}
              to={`/amendments/${amendment.number}`}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition transform hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-sky-400">
                Amendment {amendment.number} • Ratified {amendment.ratified}
              </span>
              <h2 className="mt-1 text-base font-semibold text-slate-50">
                {amendment.shortName}
              </h2>
              <p className="mt-1 text-xs text-slate-300">{amendment.title}</p>
              <p className="mt-2 line-clamp-3 text-xs text-slate-200">
                {amendment.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-1">
                {amendment.themes.slice(0, 3).map((theme) => (
                  <span
                    key={theme}
                    className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[11px] text-slate-200 group-hover:bg-sky-500/20 group-hover:text-sky-100"
                  >
                    {theme}
                  </span>
                ))}
              </div>
              <span className="mt-3 text-[11px] font-medium text-sky-300">
                View details &amp; landmark cases →
              </span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
