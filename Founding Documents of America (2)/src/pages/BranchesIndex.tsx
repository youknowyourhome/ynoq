/**
 * @file BranchesIndex.tsx
 * @description Index page explaining the three branches of the U.S. government
 * and how their roles have evolved over generations.
 */

import { Link } from 'react-router'
import { SiteHeader } from '../components/layout/SiteHeader'

/**
 * BranchesIndexPage introduces the separation of powers and
 * links to detailed pages for each branch.
 */
export default function BranchesIndexPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <header className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Structure of Government
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            The Three Branches of Government
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
            The Constitution divides power among three branches so that no single
            person or group can control the whole government. Over time, the balance
            between Congress, the President, and the courts has shifted as new
            laws, crises, and movements have emerged.
          </p>
          <p className="mt-2 max-w-3xl text-xs text-slate-300 sm:text-sm">
            Understanding how these branches have changed helps us see how a
            &quot;living&quot; Constitution works in practice—not just on paper.
          </p>
        </header>

        {/* High-level cards for each branch */}
        <section
          aria-label="Overview of the three branches"
          className="grid gap-5 md:grid-cols-3"
        >
          <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/60">
            <div className="relative h-32 w-full overflow-hidden border-b border-slate-800">
              <img
                src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/def3df6c-8145-49b2-b60b-1c8d514b7510.jpg"
                alt="Interior view of a legislative chamber with rows of seats."
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                Legislative Branch (Congress)
              </h2>
              <p className="mt-2 text-xs text-slate-200 sm:text-sm">
                Writes the laws, approves budgets, and represents the people and
                the states. Its membership and style of lawmaking have changed with
                expansions of voting and party politics.
              </p>
              <ul className="mt-2 space-y-1 text-[11px] text-slate-300">
                <li>• Early Congress chosen by a limited electorate.</li>
                <li>• 19th &amp; 20th centuries: more voters, more parties, longer careers.</li>
                <li>• Today: polarization, investigations, and new oversight tools.</li>
              </ul>
              <Link
                to="/branches/legislative"
                className="mt-3 inline-flex items-center rounded-full bg-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400"
              >
                Dive into Congress over time →
              </Link>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/60">
            <div className="relative h-32 w-full overflow-hidden border-b border-slate-800">
              <img
                src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/2507da6e-a1c3-4a27-9ad0-09b666fe20ee.jpg"
                alt="A view of a formal office symbolizing the presidency."
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                Executive Branch (President &amp; Agencies)
              </h2>
              <p className="mt-2 text-xs text-slate-200 sm:text-sm">
                Carries out the laws, leads the military, and responds to crises.
                The modern presidency is far more visible and far-reaching than
                the office the Framers imagined.
              </p>
              <ul className="mt-2 space-y-1 text-[11px] text-slate-300">
                <li>• 18th–19th centuries: smaller staff, slower communication.</li>
                <li>• 20th century: New Deal, world wars, and a growing federal bureaucracy.</li>
                <li>• Today: media, executive orders, and debates over limits on power.</li>
              </ul>
              <Link
                to="/branches/executive"
                className="mt-3 inline-flex items-center rounded-full bg-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400"
              >
                Explore the presidency&apos;s evolution →
              </Link>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/60">
            <div className="relative h-32 w-full overflow-hidden border-b border-slate-800">
              <img
                src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/47ba713c-8ad9-4342-8a5b-50fe4d1727e4.jpg"
                alt="Tall stone columns in front of a courthouse."
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h2 className="text-sm font-semibold text-slate-50 sm:text-base">
                Judicial Branch (Courts)
              </h2>
              <p className="mt-2 text-xs text-slate-200 sm:text-sm">
                Interprets laws and the Constitution. Courts have become central
                to battles over segregation, voting, privacy, and more.
              </p>
              <ul className="mt-2 space-y-1 text-[11px] text-slate-300">
                <li>• Early courts: building basic rules and authority.</li>
                <li>• 20th century: civil-rights era and rights revolutions.</li>
                <li>• Today: sharp debates over the Court&apos;s power and direction.</li>
              </ul>
              <Link
                to="/branches/judicial"
                className="mt-3 inline-flex items-center rounded-full bg-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400"
              >
                See how the courts have evolved →
              </Link>
            </div>
          </article>
        </section>

        {/* Brief explanation of separation of powers */}
        <section className="mt-10 space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/60 sm:p-6">
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Separation of Powers in a Living Constitution
          </h2>
          <p className="text-sm text-slate-200 sm:text-base">
            The Framers worried about concentrated power. By splitting government
            into three branches with different jobs, they hoped each branch would
            check the others. But they could not predict modern political parties,
            mass media, or a global superpower.
          </p>
          <p className="text-xs text-slate-200 sm:text-sm">
            As amendments, court decisions, and political movements changed the
            rules of voting, rights, and administration, the branches adjusted too.
            That ongoing adjustment is one way the Constitution acts as a living
            document—not simply a fixed blueprint set in stone.
          </p>
        </section>
      </div>
    </main>
  )
}