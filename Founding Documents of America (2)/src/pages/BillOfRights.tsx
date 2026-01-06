/**
 * @file BillOfRights.tsx
 * @description Page exploring the Bill of Rights and how its protections have been extended to more people over time.
 */

import { SiteHeader } from '../components/layout/SiteHeader'
import {
  KeyConcept,
  KeyConceptExplorer,
} from '../components/common/KeyConceptExplorer'

/**
 * BillOfRightsPage renders the standalone page for the Bill of Rights.
 */
export default function BillOfRightsPage() {
  const concepts: KeyConcept[] = [
    {
      id: 'speech-religion',
      title: 'Freedom of Speech & Religion (First Amendment)',
      era: '1791 → Modern Rights',
      summary:
        'Protecting expression and belief, once applied narrowly, later extended to many voices and faiths.',
      thenDescription:
        'Originally, First Amendment protections were understood mainly as limits on the national government, and they did not prevent states from restricting speech or establishing religions. Many groups still faced punishment for dissent.',
      nowDescription:
        'Through the 20th century, the Supreme Court applied these protections to the states and broadened speech rights for activists, religious minorities, journalists, and everyday people—even when their views are unpopular.',
      quote:
        'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech...',
      link: {
        label: 'Read the Bill of Rights (National Archives)',
        href: 'https://www.archives.gov/founding-docs/bill-of-rights-transcript',
      },
    },
    {
      id: 'due-process',
      title: 'Due Process of Law (Fifth & Fourteenth Amendments)',
      era: 'Fair Procedures',
      summary:
        'Requiring government to follow fair procedures before taking life, liberty, or property.',
      thenDescription:
        'The Fifth Amendment limited the federal government, but many people—especially enslaved people, Indigenous peoples, and others outside the political community—received little to no process before being punished or dispossessed.',
      nowDescription:
        'The Fourteenth Amendment extended due process to actions by the states. Courts have used it to require fair trials, notice, and hearings, and to incorporate many Bill of Rights protections against state governments.',
    },
    {
      id: 'search-seizure',
      title: 'Freedom from Unreasonable Searches (Fourth Amendment)',
      era: 'Privacy & Security',
      summary:
        'Balancing the need for law enforcement with the right to be secure in one’s person, home, and effects.',
      thenDescription:
        'The amendment responded to colonial abuses like general warrants. Still, early enforcement often ignored the rights of enslaved people, poor people, and those without political power.',
      nowDescription:
        'Modern cases apply the Fourth Amendment to new technologies like phones and GPS tracking and seek to limit discriminatory policing, though debates over surveillance and racial profiling continue.',
    },
    {
      id: 'cruel-unusual',
      title: 'Cruel and Unusual Punishment (Eighth Amendment)',
      era: 'Evolving Standards of Decency',
      summary:
        'Prohibiting extreme punishments, with the meaning of “cruel” changing over time.',
      thenDescription:
        'In 1791, punishments like public whippings or executions were common and rarely questioned under the Eighth Amendment. Enslaved people and others could be subjected to brutal treatment with little legal protection.',
      nowDescription:
        'Courts now consider “evolving standards of decency” when interpreting the Eighth Amendment, limiting certain punishments for children, people with intellectual disabilities, and others, while activists push for broader reforms.',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <section className="mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Founding Document
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            The Bill of Rights
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
            Ratified in 1791, the first ten amendments to the Constitution
            protect core freedoms and set limits on government power. Over time,
            courts and movements have insisted that these protections must apply
            to all people, not only to a privileged few. The clickable concepts
            below trace that expansion.
          </p>
        </section>

        <KeyConceptExplorer
          title="Key Ideas in the Bill of Rights"
          intro="Select a right to see how it was originally understood and how its meaning has grown to cover more people and new situations."
          concepts={concepts}
        />
      </div>
    </main>
  )
}
