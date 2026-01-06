/**
 * @file ExecutiveBranch.tsx
 * @description Page explaining how the Executive Branch and the presidency have
 * evolved from the Founding era to the modern administrative state.
 */

import { SiteHeader } from '../components/layout/SiteHeader'
import {
  KeyConcept,
  KeyConceptExplorer,
} from '../components/common/KeyConceptExplorer'

/**
 * ExecutiveBranchPage presents key phases in the growth of presidential and
 * executive power, highlighting how expectations of the office have changed.
 */
export default function ExecutiveBranchPage() {
  const concepts: KeyConcept[] = [
    {
      id: 'modest-presidency',
      title: 'A Modest Office Under the Constitution',
      era: '1789–1820s',
      summary:
        'Early Presidents worked with a small staff and limited communication tools in a young republic.',
      thenDescription:
        'The Framers worried about kings, so they gave the President important but limited powers—like leading the military and enforcing laws—subject to checks from Congress and the courts.',
      nowDescription:
        'These early practices showed that the President could be strong in foreign affairs yet still be constrained by the need for congressional support and public trust.',
    },
    {
      id: 'popular-presidency',
      title: 'The Rise of a More Popular Presidency',
      era: '1820s–1890s',
      summary:
        'Presidents increasingly claimed to speak directly for the people, not just for the political elite.',
      thenDescription:
        'Leaders like Andrew Jackson used elections, vetoes, and public appeals to build a more personal, populist style of presidency, clashing with Congress and the courts over policy and power.',
      nowDescription:
        'This era helped redefine the President as a national political leader who could rally voters and parties, not just administer laws quietly behind the scenes.',
    },
    {
      id: 'modern-executive',
      title: 'The Modern Executive & Administrative State',
      era: '1930s–1970s',
      summary:
        'The Great Depression, world wars, and the Cold War fueled a dramatic expansion of executive agencies and presidential responsibilities.',
      thenDescription:
        'New Deal agencies, wartime mobilization, and Cold War security created a large federal bureaucracy that answered to the President, raising questions about how closely Congress and courts could supervise executive action.',
      nowDescription:
        'Modern presidents issue executive orders, oversee vast agencies, and respond quickly to crises, while Congress and courts use investigations and judicial review to keep this power from becoming unchecked.',
    },
    {
      id: 'limits-and-media',
      title: 'Limits, Media, and Ongoing Debates',
      era: '1970s–Today',
      summary:
        'Scandals, media coverage, and new technologies reshaped how presidents are watched and constrained.',
      thenDescription:
        'Watergate and later controversies led to new laws on campaign finance, transparency, and war powers, while 24-hour news and social media put every presidential move under a spotlight.',
      nowDescription:
        'Today&apos;s debates over executive orders, emergency powers, and independence of agencies show that the meaning of &quot;executive power&quot; continues to evolve within the same constitutional text.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <section className="mb-8 grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Branch of Government
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
              The Executive Branch: The Presidency Over Generations
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
              The Executive Branch carries out the laws, leads the military, and
              often becomes the public face of the nation. From a cautious office
              designed to avoid monarchy, the presidency has grown into a powerful,
              contested institution at the center of American politics.
            </p>
            <p className="mt-2 max-w-3xl text-xs text-slate-300 sm:text-sm">
              The concepts below trace how technology, war, social change, and
              constitutional interpretation have reshaped what people expect from
              a President—and how other branches try to keep that power in check.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-slate-950/70">
            <img
              src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/16caeeff-f719-4cc7-83e6-3e2c867d31e7.jpg"
              alt="A podium with microphones in front of a government building."
              className="h-40 w-full object-cover"
            />
            <div className="space-y-2 p-4 text-xs text-slate-200 sm:text-sm">
              <p className="font-semibold text-sky-300">
                A Growing Center of National Life
              </p>
              <p>
                As the nation grew and crises multiplied, the presidency became a
                focal point for leadership, hope, and criticism—all within the same
                basic constitutional job description.
              </p>
            </div>
          </div>
        </section>

        <KeyConceptExplorer
          title="Key Phases in the Executive Branch"
          intro="Select a phase to see how the presidency’s role, tools, and limits have shifted from the early republic to the modern era."
          concepts={concepts}
        />
      </div>
    </main>
  )
}