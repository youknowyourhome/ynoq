/**
 * @file AmendmentDetail.tsx
 * @description Detail page for a single amendment, including themes and key case law.
 */

import { useParams, Link } from 'react-router'
import { SiteHeader } from '../components/layout/SiteHeader'
import { AMENDMENTS, type AmendmentDefinition } from '../data/amendments'
import { CaseLawExplorer } from '../components/common/CaseLawExplorer'

/**
 * findAmendmentByNumber locates an amendment definition by numeric route param.
 */
function findAmendmentByNumber(num: number): AmendmentDefinition | undefined {
  return AMENDMENTS.find((amendment) => amendment.number === num)
}

/**
 * AmendmentDetailPage renders the deep-dive view for a single amendment
 * and its related case law.
 */
export default function AmendmentDetailPage() {
  const params = useParams<{ number: string }>()
  const rawNumber = params.number
  const parsedNumber = rawNumber ? Number(rawNumber) : NaN
  const amendment = Number.isFinite(parsedNumber)
    ? findAmendmentByNumber(parsedNumber)
    : undefined

  if (!amendment) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-50">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Amendment not found
          </h1>
          <p className="mt-3 text-sm text-slate-200">
            The amendment you tried to view does not exist. Please return to the
            list of amendments.
          </p>
          <Link
            to="/amendments"
            className="mt-5 inline-flex items-center rounded-full bg-sky-600 px-4 py-1.5 text-xs font-semibold text-slate-50 shadow hover:bg-sky-500"
          >
            ← Back to all amendments
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Constitutional Amendment
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            {amendment.shortName}
          </h1>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
            Amendment {amendment.number} • Ratified {amendment.ratified}
          </p>
          <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
            {amendment.summary}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {amendment.themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-200"
              >
                {theme}
              </span>
            ))}
            <Link
              to="/amendments"
              className="ml-auto inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-[11px] font-semibold text-slate-200 hover:border-sky-500 hover:text-sky-200"
            >
              ← All amendments
            </Link>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            How this amendment changed the Constitution
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            This amendment is part of the story of how the Constitution
            stretches to include more people and situations over time. Courts,
            lawmakers, and social movements have all argued about what it means
            in practice. The cases below show how judges have read this
            amendment in different eras.
          </p>
        </section>

        <CaseLawExplorer
          title="Landmark and Illustrative Cases"
          intro="Click a case to see how judges used this amendment to answer real-world disputes. Together, these examples show how a short constitutional phrase can shape people’s lives."
          cases={amendment.caseLaw}
        />
      </div>
    </main>
  )
}
