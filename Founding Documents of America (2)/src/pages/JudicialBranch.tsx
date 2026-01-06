/**
 * @file JudicialBranch.tsx
 * @description Page explaining how the Judicial Branch and the federal courts
 * have evolved, especially in their role interpreting the Constitution.
 */

import { SiteHeader } from '../components/layout/SiteHeader'
import {
  KeyConcept,
  KeyConceptExplorer,
} from '../components/common/KeyConceptExplorer'

/**
 * JudicialBranchPage shows how the courts moved from a relatively quiet branch
 * to a powerful interpreter of rights and limits on government.
 */
export default function JudicialBranchPage() {
  const concepts: KeyConcept[] = [
    {
      id: 'judicial-review',
      title: 'Establishing Judicial Review',
      era: 'Early 1800s',
      summary:
        'The Supreme Court claimed the power to say what the Constitution means in real disputes.',
      thenDescription:
        'In cases like Marbury v. Madison, the Court announced that when laws conflict with the Constitution, judges must follow the Constitution. This created the practice of judicial review, even though those exact words are not in the text.',
      nowDescription:
        'Judicial review became central to the Court&apos;s role in checking Congress and the President and in shaping how the Constitution applies over time.',
      quote: 'It is emphatically the province and duty of the judicial department to say what the law is.',
    },
    {
      id: 'economic-rights',
      title: 'Economic Regulation and &quot;Lochner Era&quot;',
      era: 'Late 1800s–1930s',
      summary:
        'Courts often struck down economic regulations in the name of liberty of contract.',
      thenDescription:
        'In cases like Lochner v. New York, the Court limited laws that tried to regulate working hours or conditions, reading &quot;liberty&quot; in the Due Process Clause to protect business interests.',
      nowDescription:
        'This approach later shifted, as courts allowed more economic regulation while turning greater attention to civil rights and civil liberties for individuals.',
    },
    {
      id: 'civil-rights-revolution',
      title: 'The Civil-Rights &amp; Civil-Liberties Revolution',
      era: '1940s–1970s',
      summary:
        'The Court used the Constitution to challenge segregation and expand protections for speech, religion, and the accused.',
      thenDescription:
        'In Brown v. Board of Education, Gideon v. Wainwright, Miranda v. Arizona, and other cases, the Court read equal protection and due process to dismantle Jim Crow laws and strengthen rights in criminal cases.',
      nowDescription:
        'These decisions helped transform the Court into a major arena for struggles over racial justice and fairness in the legal system, showing how old words could support new understandings of equality and liberty.',
    },
    {
      id: 'modern-court',
      title: 'A Contested Modern Court',
      era: '1980s–Today',
      summary:
        'The Court remains central to battles over voting, privacy, and the scope of government power.',
      thenDescription:
        'Recent decades have seen sharp debates over how to read the Constitution—whether to focus on original meaning or evolving values—as well as high-profile decisions on issues like campaign finance, marriage, and healthcare.',
      nowDescription:
        'Because Justices serve for life, each appointment can shape constitutional meaning for a generation, underscoring how a &quot;living&quot; Constitution is influenced by who sits on the bench.',
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
              The Judicial Branch: Courts and a Living Constitution
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
              The Judicial Branch interprets the laws and the Constitution. At first,
              federal courts played a quieter role. Over time, especially in the
              20th century, they became central to debates over rights, equality, and
              the limits of government power.
            </p>
            <p className="mt-2 max-w-3xl text-xs text-slate-300 sm:text-sm">
              The eras below show how judges have used the same constitutional text
              to answer very different questions in different generations.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-slate-950/70">
            <img
              src="https://pub-cdn.sider.ai/u/U04XH66V5J1/web-coder/695a9ecc6ef7c0cd1b0c9622/resource/4239896e-5432-4b66-8422-b05cf176ba28.jpg"
              alt="Stone steps leading up to a courthouse with tall columns."
              className="h-40 w-full object-cover"
            />
            <div className="space-y-2 p-4 text-xs text-slate-200 sm:text-sm">
              <p className="font-semibold text-sky-300">
                Courts as Interpreters of the Text
              </p>
              <p>
                When courts decide real disputes, they also decide what the
                Constitution means in practice—helping explain why the document is
                described as &quot;living&quot; rather than frozen in the 1700s.
              </p>
            </div>
          </div>
        </section>

        <KeyConceptExplorer
          title="Key Eras in the Judicial Branch"
          intro="Select an era to see how the courts’ role in interpreting the Constitution has grown and shifted, and how that affects people’s rights."
          concepts={concepts}
        />
      </div>
    </main>
  )
}