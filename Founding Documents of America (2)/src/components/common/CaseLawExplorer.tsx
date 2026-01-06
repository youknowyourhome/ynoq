/**
 * @file CaseLawExplorer.tsx
 * @description Reusable explorer for drilling into landmark cases related to a constitutional provision or amendment.
 */

import { useState } from 'react'
import { Gavel, ArrowRight, ExternalLink } from 'lucide-react'

/**
 * CaseLaw describes one court decision connected to an amendment.
 */
export interface CaseLaw {
  /** Unique identifier for the case. */
  id: string
  /** Short name of the case (e.g., "Brown v. Board of Education"). */
  name: string
  /** Year the decision was issued. */
  year: number
  /** Optional official reporter citation (e.g., "347 U.S. 483"). */
  citation?: string
  /** Brief summary of the facts or legal question. */
  summary: string
  /** High-level description of how the case interprets or applies the amendment. */
  impact: string
  /** Optional external resource link for further reading. */
  link?: {
    /** Human-friendly label for the link. */
    label: string
    /** URL to the resource. */
    href: string
  }
}

/**
 * CaseLawExplorerProps defines props for the case law explorer.
 */
export interface CaseLawExplorerProps {
  /** Heading displayed above the list of cases. */
  title: string
  /** Short description explaining what connects these cases. */
  intro: string
  /** Collection of cases to browse. */
  cases: CaseLaw[]
}

/**
 * CaseLawExplorer renders a two-column layout:
 * - Left: clickable list of landmark cases.
 * - Right: detail panel for the selected case, including summary and impact.
 */
export function CaseLawExplorer({ title, intro, cases }: CaseLawExplorerProps) {
  const [selectedId, setSelectedId] = useState(cases[0]?.id)

  const selected = cases.find((c) => c.id === selectedId) ?? cases[0]

  const hasCases = cases.length > 0

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/60 sm:p-8">
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            {title}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-300">{intro}</p>
        </div>
      </div>

      {!hasCases ? (
        <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
          This amendment has had relatively few Supreme Court decisions directly
          focused on it. Its main effects are structural or political, and it
          often appears in the background of broader constitutional debates.
        </div>
      ) : (
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Case list */}
          <div className="md:w-2/5">
            <ul className="flex flex-col gap-2">
              {cases.map((caseItem) => {
                const isActive = caseItem.id === selected.id
                return (
                  <li key={caseItem.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(caseItem.id)}
                      className={[
                        'w-full rounded-xl border px-3 py-3 text-left text-sm transition-colors',
                        isActive
                          ? 'border-sky-500/50 bg-sky-500/10 text-sky-100'
                          : 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-slate-600 hover:bg-slate-800',
                      ].join(' ')}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium uppercase tracking-wide text-sky-400">
                          {caseItem.year}
                        </span>
                        <ArrowRight
                          className={[
                            'h-3 w-3 transition-transform',
                            isActive ? 'translate-x-0.5' : '',
                          ].join(' ')}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-1 text-sm font-semibold">
                        {caseItem.name}
                      </div>
                      {caseItem.citation && (
                        <p className="mt-1 text-[11px] text-slate-300">
                          {caseItem.citation}
                        </p>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Detail panel */}
          <div className="md:w-3/5">
            <div className="h-full rounded-xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
              <div className="flex items-start gap-2">
                <Gavel
                  className="mt-0.5 h-4 w-4 text-sky-400"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    {selected.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-sky-400">
                    Decided {selected.year}
                    {selected.citation ? ` • ${selected.citation}` : ''}
                  </p>
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    Case Snapshot
                  </h4>
                  <p className="mt-1 text-xs text-slate-200">
                    {selected.summary}
                  </p>
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    Why It Matters
                  </h4>
                  <p className="mt-1 text-xs text-slate-200">
                    {selected.impact}
                  </p>
                </div>
              </div>

              {selected.link && (
                <div className="mt-4">
                  <a
                    href={selected.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 underline underline-offset-2 hover:text-sky-200"
                  >
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    <span>{selected.link.label}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
