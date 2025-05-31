'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Playing Waves", href: "/schedule" },
    { name: "Sponsors", href: "/sponsors" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full header-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* SVG Volleyball Icon */}
              <div className="w-12 h-12 flex-shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/images/volleyball/volleyball-icon-vector.svg"
                  alt="Volleyball Icon"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>
              
              {/* Organization Name */}
              <div className="hidden sm:block">
                <div className="text-lg font-bold tracking-wide leading-tight">
                  <span className="text-brand-red">MIDWEST JUNIOR</span>
                  <br />
                  <span className="text-brand-blue">VOLLEYBALL</span>
                </div>
              </div>
              
              {/* Mobile Organization Name */}
              <div className="sm:hidden">
                <div className="text-sm font-bold tracking-wide">
                  <span className="text-brand-red">MJV</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-red relative py-2',
                  pathname === item.href
                    ? 'text-brand-blue after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-blue after:rounded-full'
                    : 'text-neutral-700'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-200">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-neutral-200 bg-white/95 backdrop-blur">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'text-brand-blue bg-brand-powder/30'
                      : 'text-neutral-700 hover:text-brand-red hover:bg-neutral-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 