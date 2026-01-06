/**
 * @file App.tsx
 * @description Main application entry that configures client-side routing between pages.
 */

import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import DeclarationOfIndependencePage from './pages/DeclarationOfIndependence'
import ConstitutionPage from './pages/Constitution'
import BillOfRightsPage from './pages/BillOfRights'
import AmendmentsIndexPage from './pages/AmendmentsIndex'
import AmendmentDetailPage from './pages/AmendmentDetail'

/**
 * App configures routes for the home page, each founding document page,
 * and the amendments index and detail pages.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/declaration" element={<DeclarationOfIndependencePage />} />
        <Route path="/constitution" element={<ConstitutionPage />} />
        <Route path="/bill-of-rights" element={<BillOfRightsPage />} />
        <Route path="/amendments" element={<AmendmentsIndexPage />} />
        <Route path="/amendments/:number" element={<AmendmentDetailPage />} />
      </Routes>
    </HashRouter>
  )
}
