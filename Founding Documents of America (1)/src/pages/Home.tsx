/**
 * @file Home.tsx
 * @description Home page for exploring the founding documents of the United States and how their meanings have expanded over time to include more people.
 */

import { SiteHeader } from '../components/layout/SiteHeader'
import { HeroSection } from '../components/home/HeroSection'
import { DocumentOverviewSection } from '../components/home/DocumentOverviewSection'
import { EvolutionTimelineSection } from '../components/home/EvolutionTimelineSection'
import { PrinciplesGridSection } from '../components/home/PrinciplesGridSection'
import { CallToActionSection } from '../components/home/CallToActionSection'

/**
 * HomePage composes the main sections that explain the founding documents
 * and trace the expansion of rights and inclusion in the United States.
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <SiteHeader />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        <HeroSection />
        <DocumentOverviewSection />
        <EvolutionTimelineSection />
        <PrinciplesGridSection />
        <CallToActionSection />
      </div>
    </main>
  )
}
