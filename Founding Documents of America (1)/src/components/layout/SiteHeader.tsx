/**
 * @file SiteHeader.tsx
 * @description Global site header with navigation between the home page, founding document pages, and amendments.
 */

import { Link, useLocation } from 'react-router'
import { BookOpen, Flag } from 'lucide-react'

/**
 * SiteHeader renders the top navigation bar with links to the main pages.
 */
export function SiteHeader() {
  const location = useLocation()

  /**
   * isActive checks if the given path matches the current location.
   */
  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-slate-50">
          <Flag className="h-5 w-5 text-sky-400" aria-hidden="true" />
          <span className="text-sm font-semibold tracking-wide">
            The Living Documents
          </span>
        </Link>

        <nav className="flex items-center gap-2 text-xs sm:text-sm">
          <NavLink to="/" active={isActive('/')}>
            Overview
          </NavLink>
          <NavLink to="/declaration" active={isActive('/declaration')}>
            Declaration
          </NavLink>
          <NavLink to="/constitution" active={isActive('/constitution')}>
            Constitution
          </NavLink>
          <NavLink to="/bill-of-rights" active={isActive('/bill-of-rights')}>
            Bill of Rights
          </NavLink>
          <NavLink to="/amendments" active={isActive('/amendments')}>
            Amendments
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

interface NavLinkProps {
  /** Destination path for the navigation link. */
  to: string
  /** Whether this link is currently active. */
  active: boolean
  /** Text or elements to render inside the link. */
  children: React.ReactNode
}

/**
 * NavLink renders an individual navigation link with active styling.
 */
function NavLink({ to, active, children }: NavLinkProps) {
  return (
    <Link
      to={to}
      className={[
        'inline-flex items-center gap-1 rounded-full px-3 py-1 transition-colors',
        active
          ? 'bg-sky-500/20 text-sky-300'
          : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50',
      ].join(' ')}
    >
      <BookOpen className="h-3 w-3" aria-hidden="true" />
      <span>{children}</span>
    </Link>
  )
}
