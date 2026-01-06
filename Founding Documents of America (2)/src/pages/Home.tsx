/**  
 * @file Home.tsx  
 * @description Landing page for Ynoq, composed of hero, document overview,  
 * branches summary, timeline, principles grid, about section, and CTA.  
 */  
   
import React from 'react'  
import { SiteHeader } from '../components/layout/SiteHeader'  
import { HeroSection } from '../components/home/HeroSection'  
import { DocumentOverviewSection } from '../components/home/DocumentOverviewSection'  
import { BranchesOverviewSection } from '../components/home/BranchesOverviewSection'  
import { EvolutionTimelineSection } from '../components/home/EvolutionTimelineSection'  
import { PrinciplesGridSection } from '../components/home/PrinciplesGridSection'  
import { AboutYnoqSection } from '../components/home/AboutYnoqSection'  
import { CallToActionSection } from '../components/home/CallToActionSection'  
   
/**  
 * HomePage arranges the primary marketing and educational sections into a  
 * scrollable, high-contrast layout that serves as the main entry into Ynoq.  
 */  
const HomePage: React.FC = () => {  
  return (  
    <div className="min-h-screen bg-slate-950 text-slate-50">  
      <SiteHeader />  
      <main className="flex flex-col gap-20 pb-20">  
        <HeroSection />  
        <DocumentOverviewSection />  
        <BranchesOverviewSection />  
        <EvolutionTimelineSection />  
        <PrinciplesGridSection />  
        <AboutYnoqSection />  
        <CallToActionSection />  
      </main>  
    </div>  
  )  
}  
   
export default HomePage  
