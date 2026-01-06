/**
 * @file DeclarationOfIndependence.tsx
 * @description Page exploring the Declaration of Independence and how its core ideas have expanded over time.
 */

import { SiteHeader } from '../components/layout/SiteHeader'
import {
  KeyConcept,
  KeyConceptExplorer,
} from '../components/common/KeyConceptExplorer'

/**
 * DeclarationOfIndependencePage renders the standalone page
 * for the Declaration of Independence.
 */
export default function DeclarationOfIndependencePage() {
  const concepts: KeyConcept[] = [
    {
      id: 'equality',
      title: '“All men are created equal”',
      era: '1776 → Today',
      summary:
        'A bold claim about equality that originally excluded many, later used to press for inclusion of all.',
      thenDescription:
        'In 1776, the phrase was revolutionary but narrow in practice. Political equality was largely limited to white, property-owning men. Enslaved people, Indigenous peoples, women, and many others were not treated as equal under law or custom.',
      nowDescription:
        'The equality principle has been invoked by abolitionists, suffragists, civil rights leaders, LGBTQ+ advocates, and many others to argue that the promise of equality must apply to everyone, regardless of race, sex, wealth, or background.',
      quote: 'We hold these truths to be self-evident, that all men are created equal...',
      link: {
        label: 'Read the full Declaration (National Archives)',
        href: 'https://www.archives.gov/founding-docs/declaration-transcript',
      },
    },
    {
      id: 'natural-rights',
      title: 'Unalienable Rights',
      era: 'Natural Rights Tradition',
      summary:
        'Life, Liberty, and the pursuit of Happiness as rights that do not come from government.',
      thenDescription:
        'Drawing on Enlightenment thought, the Declaration claimed that certain rights are given by a Creator, not rulers. Yet, in practice, these rights were denied to enslaved people, women, and others whose liberty was restricted or erased.',
      nowDescription:
        'Today, the idea of unalienable rights is connected to human rights and civil rights movements that insist no government can legitimately strip people of basic dignity, safety, and freedom.',
      quote:
        'That they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.',
    },
    {
      id: 'consent',
      title: 'Government by Consent',
      era: 'Democratic Self-Rule',
      summary:
        'Legitimate government must be based on the consent of the governed.',
      thenDescription:
        'The colonists argued that Parliament and the King had violated their rights because they were taxed and ruled without direct representation. However, “the governed” did not include most adults living in the colonies.',
      nowDescription:
        'The demand for consent has fueled the expansion of voting rights, from ending property requirements to extending the vote to Black Americans, women, Indigenous peoples, and 18-year-olds.',
      quote: 'Governments are instituted among Men, deriving their just powers from the consent of the governed.',
    },
    {
      id: 'right-to-alter',
      title: 'Right to Alter or Abolish Government',
      era: 'Revolutionary Principle',
      summary:
        'People may change or replace a government that becomes destructive of their rights.',
      thenDescription:
        'The Declaration justified the American Revolution as a last resort after a “long train of abuses.” This principle was aimed at the British Crown, not at systems of oppression within the colonies themselves.',
      nowDescription:
        'Modern movements for reform and revolution around the world cite this principle to argue that people may peacefully (or, in some cases, forcibly) transform governments that deny basic rights.',
      quote:
        'It is the Right of the People to alter or to abolish it, and to institute new Government...',
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
            The Declaration of Independence
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-200 sm:text-base">
            Written in 1776, the Declaration announced that the thirteen colonies
            were breaking away from Great Britain. Its claims about equality,
            rights, and government by consent have been used ever since to
            challenge exclusion and expand the meaning of “the people.” The
            clickable concepts below show how its ideas have grown over time.
          </p>
        </section>

        <KeyConceptExplorer
          title="Key Ideas in the Declaration"
          intro="Select a concept to see how its meaning has shifted from 1776 to the present, and how different groups have used it to press for inclusion."
          concepts={concepts}
        />
      </div>
    </main>
  )
}
