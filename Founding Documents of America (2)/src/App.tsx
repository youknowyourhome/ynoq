/**  
 * @file App.tsx  
 * @description Configures client-side routing for the Ynoq civics learning experience  
 * using a hash-based router so it works reliably on static hosts like Cloudflare Pages.  
 */  
   
import React from 'react'  
import { createHashRouter, RouterProvider } from 'react-router'  
import HomePage from './pages/Home'  
import DeclarationOfIndependencePage from './pages/DeclarationOfIndependence'  
import ConstitutionPage from './pages/Constitution'  
import BillOfRightsPage from './pages/BillOfRights'  
import AmendmentsIndexPage from './pages/AmendmentsIndex'  
import AmendmentDetailPage from './pages/AmendmentDetail'  
import LivingDocumentsPage from './pages/LivingDocuments'  
import BranchesIndexPage from './pages/BranchesIndex'  
import LegislativeBranchPage from './pages/LegislativeBranch'  
import ExecutiveBranchPage from './pages/ExecutiveBranch'  
import JudicialBranchPage from './pages/JudicialBranch'  
   
/**  
 * Hash-based router that maps top-level application routes to their page components.  
 */  
const router = createHashRouter([  
  { path: '/', element: <HomePage /> },  
  { path: '/declaration', element: <DeclarationOfIndependencePage /> },  
  { path: '/constitution', element: <ConstitutionPage /> },  
  { path: '/bill-of-rights', element: <BillOfRightsPage /> },  
  { path: '/amendments', element: <AmendmentsIndexPage /> },  
  { path: '/amendments/:number', element: <AmendmentDetailPage /> },  
  { path: '/living-documents', element: <LivingDocumentsPage /> },  
  { path: '/branches', element: <BranchesIndexPage /> },  
  { path: '/branches/legislative', element: <LegislativeBranchPage /> },  
  { path: '/branches/executive', element: <ExecutiveBranchPage /> },  
  { path: '/branches/judicial', element: <JudicialBranchPage /> },  
])  
   
/**  
 * App is the root React component that renders the router provider.  
 */  
export default function App() {  
  return <RouterProvider router={router} />  
}  
