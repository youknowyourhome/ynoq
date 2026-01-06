/**
 * @file SiteHeader.tsx
 * @description Global site header with navigation between the home page, founding document pages,
 * amendments, an explanation of why these texts are living documents, and the three branches.
 */

import { Link, useLocation } from 'react-router'
import { BookOpen, Flag, ChevronDown } from 'lucide-react'
import type React from 'react'
import { useState } from 'react'

/**
 * SiteHeader renders the top navigation bar with links to the main pages.
 * It also exposes dropdowns for "Branches" and "Founding Documents" so users
 * can jump directly to specific sections.
 */
export function SiteHeader() {
  const location = useLocation()

  /**
   * isActive checks if the given path matches the current location.
   * For non-root paths, it also treats nested routes (e.g., /amendments/1)
   * as active for their parent link.
   */
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return (
      location.pathname === path ||
      location.pathname.startsWith(path + '/')
    )
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-slate-50">
          <Flag className="h-5 w-5 text-sky-400" aria-hidden="true" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-50">
              YNOQ
            </span>
            <span className="text-[10px] font-medium tracking-wide text-sky-300">
              We The People
            </span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 text-xs sm:text-sm">
          <NavLink to="/" active={isActive('/')}>
            Overview
          </NavLink>
          <NavLink to="/living-documents" active={isActive('/living-documents')}>
            Living Documents
          </NavLink>

          {/* Branches dropdown with direct links to each branch */}
          <BranchesMenu active={isActive('/branches')} />

          {/* Founding documents dropdown for Declaration, Constitution, Bill of Rights, and Amendments */}
          <FoundingDocumentsMenu
            active={
              isActive('/declaration') ||
              isActive('/constitution') ||
              isActive('/bill-of-rights') ||
              isActive('/amendments')
            }
          />
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

/**
 * BranchesMenuProps defines props for the branches dropdown trigger.
 */
interface BranchesMenuProps {
  /** Whether any of the branch-related routes is currently active. */
  active: boolean
}

/**
 * BranchesMenu renders a dropdown navigation item for the three branches
 * of government, allowing users to jump straight to each branch page.
 */
function BranchesMenu({ active }: BranchesMenuProps) {
  const [open, setOpen] = useState(false)

  /**
   * toggleMenu flips the open/closed state of the dropdown.
   */
  const toggleMenu = () => setOpen((prev) => !prev)

  /**
   * closeMenu closes the dropdown, used after selecting a link.
   */
  const closeMenu = () => setOpen(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        className={[
          'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs sm:text-sm transition-colors',
          active
            ? 'bg-sky-500/20 text-sky-300'
            : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50',
        ].join(' ')}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <BookOpen className="h-3 w-3" aria-hidden="true" />
        <span>Branches</span>
        <ChevronDown
          className={[
            'h-3 w-3 transition-transform',
            open ? 'rotate-180' : '',
          ].join(' ')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          className="absolute right-0 z-50 mt-2 w-52 rounded-xl border border-slate-800 bg-slate-950/95 p-1 shadow-lg shadow-slate-950/70 backdrop-blur"
          role="menu"
        >
          <DropdownLink to="/branches" onSelect={closeMenu}>
            Branches overview
          </DropdownLink>
          <DropdownLink
            to="/branches/legislative"
            onSelect={closeMenu}
          >
            Legislative Branch
          </DropdownLink>
          <DropdownLink
            to="/branches/executive"
            onSelect={closeMenu}
          >
            Executive Branch
          </DropdownLink>
          <DropdownLink
            to="/branches/judicial"
            onSelect={closeMenu}
          >
            Judicial Branch
          </DropdownLink>
        </div>
      )}
    </div>
  )
}

/**
 * FoundingDocumentsMenuProps defines props for the founding-documents dropdown trigger.
 */
interface FoundingDocumentsMenuProps {
  /** Whether any of the founding-document routes is currently active. */
  active: boolean
}

/**
 * FoundingDocumentsMenu renders a dropdown navigation item for the
 * Declaration, Constitution, Bill of Rights, and Amendments pages.
 */
function FoundingDocumentsMenu({ active }: FoundingDocumentsMenuProps) {
  const [open, setOpen] = useState(false)

  /** Toggles the open state of the founding-documents dropdown. */
  const toggleMenu = () => setOpen((prev) => !prev)

  /** Closes the dropdown after a document link is selected. */
  const closeMenu = () => setOpen(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        className={[
          'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs sm:text-sm transition-colors',
          active
            ? 'bg-sky-500/20 text-sky-300'
            : 'text-slate-300 hover:bg-slate-800 hover:text-slate-50',
        ].join(' ')}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <BookOpen className="h-3 w-3" aria-hidden="true" />
        <span>Founding Documents</span>
        <ChevronDown
          className={[
            'h-3 w-3 transition-transform',
            open ? 'rotate-180' : '',
          ].join(' ')}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          className="absolute right-0 z-50 mt-2 w-60 rounded-xl border border-slate-800 bg-slate-950/95 p-1 shadow-lg shadow-slate-950/70 backdrop-blur"
          role="menu"
        >
          <DropdownLink to="/declaration" onSelect={closeMenu}>
            Declaration of Independence
          </DropdownLink>
          <DropdownLink to="/constitution" onSelect={closeMenu}>
            U.S. Constitution
          </DropdownLink>
          <DropdownLink to="/bill-of-rights" onSelect={closeMenu}>
            Bill of Rights
          </DropdownLink>
          <DropdownLink to="/amendments" onSelect={closeMenu}>
            Amendments Index
          </DropdownLink>
        </div>
      )}
    </div>
  )
}

interface DropdownLinkProps {
  /** Destination path for the dropdown item. */
  to: string
  /** Handler to call when a dropdown item is selected. */
  onSelect: () => void
  /** Label content for the dropdown item. */
  children: React.ReactNode
}

/**
 * DropdownLink renders a link styled for use inside dropdown panels.
 */
function DropdownLink({ to, onSelect, children }: DropdownLinkProps) {
  return (
    <Link
      to={to}
      onClick={onSelect}
      role="menuitem"
      className="flex w-full items-center rounded-lg px-3 py-1.5 text-xs text-slate-200 transition-colors hover:bg-slate-800 hover:text-slate-50"
    >
      {children}
    </Link>
  )
}
