/**
 * @file Constitution.tsx
 * @description Page exploring the U.S. Constitution and how its structure and meaning have evolved to include more people.
 */

import { SiteHeader } from '../components/layout/SiteHeader'
import {
  KeyConcept,
  KeyConceptExplorer,
} from '../components/common/KeyConceptExplorer'

/**
 * ConstitutionPage renders the standalone page for the U.S. Constitution.
 */
export default function ConstitutionPage() {
  const concepts: KeyConcept[] = [
    {
      id: 'we-the-people',
      title: '“We the People”',
      era: '1787 → Today',
      summary:
        'A powerful opening that originally referred to a limited group, later reimagined to include all who live under the law.',
      thenDescription:
        'In 1787, political power was concentrated in the hands of white, property-owning men. Enslaved people, Native nations, women, and many poor people were excluded from political life, even as the Constitution spoke in the name of “the People.”',
      nowDescription:
        'Over time, amendments and social movements have argued that “We the People” truly includes citizens of all races, genders, and backgrounds, and increasingly recognizes the voices of residents who may not yet be citizens.',
      quote: 'We the People of the United States, in Order to form a more perfect Union...',
      link: {
        label: 'Read the Constitution (National Archives)',
        href: 'https://www.archives.gov/founding-docs/constitution-transcript',
      },
    },
    {
      id: 'checks-balances',
      title: 'Separation of Powers & Checks and Balances',
      era: 'Constitutional Design',
      summary:
        'Dividing power among branches to prevent tyranny and protect liberty.',
      thenDescription:
        'The Framers distributed power across legislative, executive, and judicial branches to avoid the concentration of authority seen under monarchy. However, these protections did not prevent slavery, disenfranchisement, or discrimination.',
      nowDescription:
        'Today, checks and balances are used by courts, Congress, the President, and the public to challenge unconstitutional laws, abusive executive action, and violations of individual rights.',
    },
    {
      id: 'three-fifths',
      title: 'The Three-Fifths Clause to the 14th Amendment',
      era: 'From Exclusion to Birthright Citizenship',
      summary:
        'A shift from counting enslaved people as fractions for representation to recognizing full citizenship.',
      thenDescription:
        'Article I, Section 2 included the Three-Fifths Compromise, counting enslaved people as three-fifths of a person for representation and taxation, while denying them rights and personhood.',
      nowDescription:
        'After the Civil War, the 14th Amendment established birthright citizenship and equal protection, rejecting the logic of three-fifths and laying a constitutional foundation for civil rights claims.',
      quote:
        'All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States...',
    },
    {
      id: 'amendment',
      title: 'Amending the Constitution',
      era: 'Living Framework',
      summary:
        'A built-in process for change that has been used to expand who is protected and who can participate.',
      thenDescription:
        'The original Constitution included Article V to allow amendments but did not specify that changes must expand rights. Early amendments focused on structure and the Bill of Rights.',
      nowDescription:
        'Major expansions of inclusion—ending slavery (13th), guaranteeing equal protection (14th), extending voting rights regardless of race (15th), sex (19th), ending poll taxes (24th), and lowering the voting age (26th)—all came through amendments.',
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
            The United States Constitution
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
            Ratified in 1788, the Constitution created the basic structure of
            the national government. It is often called a “living document”
            because amendments, court decisions, and social movements have
            changed how it works and who it protects. The concepts below show
            how its meaning has shifted toward including all the people.
          </p>
        </section>

        <KeyConceptExplorer
          title="Key Ideas in the Constitution"
          intro="Select a constitutional idea to see how it has been interpreted over time and how it has been used to expand or restrict inclusion."
          concepts={concepts}
        />
      </div>
    </main>
  )
}
