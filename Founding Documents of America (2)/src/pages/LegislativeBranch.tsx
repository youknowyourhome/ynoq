/**
 * @file LegislativeBranch.tsx
 * @description Page explaining how the Legislative Branch (Congress) has changed
 * across different eras, using an interactive concept explorer.
 */

import { SiteHeader } from '../components/layout/SiteHeader'
import {
  KeyConcept,
  KeyConceptExplorer,
} from '../components/common/KeyConceptExplorer'

/**
 * LegislativeBranchPage presents key eras in the history of Congress and
 * shows how its representation, powers, and style of lawmaking have shifted.
 */
export default function LegislativeBranchPage() {
  const concepts: KeyConcept[] = [
    {
      id: 'founding-congress',
      title: 'Early Congress & Limited Representation',
      era: '1789–1820s',
      summary:
        'The first Congress represented a small group of voters and worked in a slower, less centralized system.',
      thenDescription:
        'Only certain men—often white property owners—could vote for members of the House. Senators were chosen by state legislatures. Congress was important but smaller, and it often deferred to local and state power.',
      nowDescription:
        'This early model built basic procedures and traditions but left many communities out. It also showed that Congress could grow stronger or weaker depending on how elections and parties developed.',
    },
    {
      id: 'expanding-vote',
      title: 'More Voters, Bigger Congress',
      era: '1820s–1920s',
      summary:
        'Expanding voting rights and new amendments changed who could choose members of Congress.',
      thenDescription:
        'Property requirements fell, and the 15th and 19th Amendments barred race- and sex-based limits on voting. The 17th Amendment shifted Senate elections from state legislatures to direct election by the people.',
      nowDescription:
        'As more people gained the right to vote, Congress had to answer to a broader electorate. Party organizations, campaigns, and mass media reshaped how members connected to their districts and states.',
    },
    {
      id: 'modern-congress',
      title: 'Modern Party Leadership & Oversight',
      era: '1930s–1970s',
      summary:
        'Congress developed strong party leadership, committees, and oversight tools in response to a larger federal government.',
      thenDescription:
        'The New Deal, wars, and the growth of federal agencies gave the President and executive branch more power. In response, Congress used hearings, investigations, and new statutes to oversee agencies and limit executive action.',
      nowDescription:
        'Modern Congress relies on committees, staff, and specialized rules to manage complex issues like budgets, civil rights, and foreign policy, showing how its role adapts to a more active national government.',
    },
    {
      id: 'polarization',
      title: 'Polarization & New Battles Over Power',
      era: '1980s–Today',
      summary:
        'Sharp party divisions and media changes have altered how Congress uses its constitutional powers.',
      thenDescription:
        'Conflicts over budgets, confirmations, and investigations became more frequent and highly visible, with televised hearings and 24-hour news coverage.',
      nowDescription:
        'Today, Congress still controls the purse and can check the President and the courts—but intense partisanship, gerrymandering, and procedural fights shape how often and how effectively it acts.',
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
              The Legislative Branch: Congress Over Time
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
              The Legislative Branch makes the laws and controls the federal budget.
              From the first Congress—chosen by a narrow group of voters—to today&apos;s
              large, party-driven institution, it shows how representation and power
              can shift within a &quot;living&quot; constitutional framework.
            </p>
            <p className="mt-2 max-w-3xl text-xs text-slate-300 sm:text-sm">
              Use the timeline below to see how Congress responded to new amendments,
              social movements, and changes in the presidency and courts.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-slate-950/70">
            <img
              src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/1d091c40-449a-4033-8773-38dbb166f1e4.jpg"
              alt="A wide view of a legislative chamber with desks and a central podium."
              className="h-40 w-full object-cover"
            />
            <div className="space-y-2 p-4 text-xs text-slate-200 sm:text-sm">
              <p className="font-semibold text-sky-300">
                Congress as a Living Institution
              </p>
              <p>
                Even though the Constitution names Congress in just a few sections,
                amendments and practice have changed who sits there, how they are
                chosen, and which voices count.
              </p>
            </div>
          </div>
        </section>

        <KeyConceptExplorer
          title="Key Eras in the Legislative Branch"
          intro="Select an era to see how representation, lawmaking, and checks on power have changed in Congress from the Founding to today."
          concepts={concepts}
        />
      </div>
    </main>
  )
}