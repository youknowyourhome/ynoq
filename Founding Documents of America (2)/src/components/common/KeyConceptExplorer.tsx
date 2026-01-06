/**
 * @file KeyConceptExplorer.tsx
 * @description Reusable explorer component for drilling into key concepts of a document via clickable items.
 */

import { useState } from 'react'
import { ArrowRight, QuoteIcon } from 'lucide-react'

/**
 * KeyConcept represents one concept within a founding document.
 */
export interface KeyConcept {
  /** Unique identifier for the concept. */
  id: string
  /** Short title for the concept. */
  title: string
  /** Historical era or label (e.g., "1776", "Reconstruction"). */
  era: string
  /** One-line summary for the list. */
  summary: string
  /** Explanation of how the concept was understood at the time of writing. */
  thenDescription: string
  /** Explanation of how the concept is understood and applied today. */
  nowDescription: string
  /** Optional key quote from the document or amendment. */
  quote?: string
  /** Optional external resource link. */
  link?: {
    /** Human-friendly label for the external link. */
    label: string
    /** URL to the external resource. */
    href: string
  }
}

/**
 * KeyConceptExplorerProps defines props for the explorer component.
 */
export interface KeyConceptExplorerProps {
  /** Heading displayed above the explorer. */
  title: string
  /** Short description explaining the group of concepts. */
  intro: string
  /** List of concepts to explore. */
  concepts: KeyConcept[]
}

/**
 * KeyConceptExplorer renders a two-column layout:
 * - Left: clickable list of concepts.
 * - Right: detail view showing "Then" vs "Now" for the selected concept.
 */
export function KeyConceptExplorer({
  title,
  intro,
  concepts,
}: KeyConceptExplorerProps) {
  const [selectedId, setSelectedId] = useState(concepts[0]?.id)

  const selected = concepts.find((c) => c.id === selectedId) ?? concepts[0]

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

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Concept list */}
        <div className="md:w-2/5">
          <ul className="flex flex-col gap-2">
            {concepts.map((concept) => {
              const isActive = concept.id === selected.id
              return (
                <li key={concept.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(concept.id)}
                    className={[
                      'w-full rounded-xl border px-3 py-3 text-left text-sm transition-colors',
                      isActive
                        ? 'border-sky-500/50 bg-sky-500/10 text-sky-100'
                        : 'border-slate-800 bg-slate-900/60 text-slate-200 hover:border-slate-600 hover:bg-slate-800',
                    ].join(' ')}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-medium uppercase tracking-wide text-sky-400">
                        {concept.era}
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
                      {concept.title}
                    </div>
                    <p className="mt-1 text-xs text-slate-300">
                      {concept.summary}
                    </p>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Detail panel */}
        <div className="md:w-3/5">
          <div className="h-full rounded-xl border border-slate-800 bg-slate-950/60 p-4 sm:p-5">
            <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
              {selected.title}
            </h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-sky-400">
              {selected.era}
            </p>
            <p className="mt-2 text-sm text-slate-200">{selected.summary}</p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Then — Original Understanding
                </h4>
                <p className="mt-1 text-xs text-slate-200">
                  {selected.thenDescription}
                </p>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Now — Expanded Meaning
                </h4>
                <p className="mt-1 text-xs text-slate-200">
                  {selected.nowDescription}
                </p>
              </div>
            </div>

            {selected.quote && (
              <figure className="mt-4 rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                <div className="flex items-start gap-2">
                  <QuoteIcon
                    className="mt-0.5 h-4 w-4 text-sky-400"
                    aria-hidden="true"
                  />
                  <blockquote className="text-xs italic text-slate-200">
                    “{selected.quote}”
                  </blockquote>
                </div>
              </figure>
            )}

            {selected.link && (
              <div className="mt-4">
                <a
                  href={selected.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-sky-300 underline underline-offset-2 hover:text-sky-200"
                >
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  <span>{selected.link.label}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
