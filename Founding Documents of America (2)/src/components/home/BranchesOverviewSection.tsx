/**
 * @file BranchesOverviewSection.tsx
 * @description Home-page section introducing the three branches of the U.S. government
 * and linking to deeper pages that explain how each branch has changed over time.
 */

import { Link } from 'react-router'

/**
 * BranchesOverviewSection highlights the three branches of government and
 * offers quick links to more detailed branch pages.
 */
export function BranchesOverviewSection() {
  return (
    <section
      id="branches"
      aria-labelledby="branches-heading"
      className="space-y-6"
    >
      <header className="space-y-2">
        <h2
          id="branches-heading"
          className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
        >
          The Three Branches of Government
        </h2>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          The Constitution does not just list rights. It also builds a government
          with three separate branches that share and check power. Over time, each
          branch&apos;s role has shifted as the country, laws, and expectations have
          changed.
        </p>
        <p className="text-xs text-slate-400 sm:text-sm">
          Explore how the Legislative, Executive, and Judicial branches have grown,
          clashed, and adapted from the 1700s to today.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {/* Legislative */}
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/60">
          <div className="relative h-28 w-full overflow-hidden border-b border-slate-800">
            <img
              src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/a3c55644-15ee-4b7b-980b-26bedc13a43b.jpg"
              alt="The United States Capitol building under a blue sky."
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
              Legislative Branch (Congress)
            </h3>
            <p className="mt-2 text-xs text-slate-200 sm:text-sm">
              Makes the laws and controls the budget. Over time, Congress has gone from
              representing a small slice of the population to a much broader electorate.
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              Themes: representation, lawmaking, oversight.
            </p>
            <Link
              to="/branches/legislative"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              See how Congress has changed →
            </Link>
          </div>
        </article>

        {/* Executive */}
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/60">
          <div className="relative h-28 w-full overflow-hidden border-b border-slate-800">
            <img
              src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/6a9797c4-8b9a-4eca-bb6a-45f46533dfc1.jpg"
              alt="The White House viewed from the front lawn."
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
              Executive Branch (President &amp; Agencies)
            </h3>
            <p className="mt-2 text-xs text-slate-200 sm:text-sm">
              Enforces the laws and leads the military. The presidency has grown from a
              limited office to a powerful institution at the center of national life.
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              Themes: presidential power, administration, crisis leadership.
            </p>
            <Link
              to="/branches/executive"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Explore the presidency over time →
            </Link>
          </div>
        </article>

        {/* Judicial */}
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/60">
          <div className="relative h-28 w-full overflow-hidden border-b border-slate-800">
            <img
              src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/d0c8d3e4-f139-498a-98fb-0f9ececb64f7.jpg"
              alt="The front of a courthouse with tall columns."
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
              Judicial Branch (Courts)
            </h3>
            <p className="mt-2 text-xs text-slate-200 sm:text-sm">
              Interprets the law and the Constitution. Courts have moved from a quiet
              role to a powerful voice in debates over rights, equality, and democracy.
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              Themes: judicial review, civil rights, limits on power.
            </p>
            <Link
              to="/branches/judicial"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Follow the courts through history →
            </Link>
          </div>
        </article>
      </div>

      <div className="pt-1 text-xs text-slate-400 sm:text-sm">
        Want the full story? Visit the{' '}
        <Link
          to="/branches"
          className="font-semibold text-sky-300 underline underline-offset-2 hover:text-sky-200"
        >
          Branches of Government
        </Link>{' '}
        page for a bigger-picture overview.
      </div>
    </section>
  )
}