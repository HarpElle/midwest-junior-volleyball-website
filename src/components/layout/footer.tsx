import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG, CONTACT_INFO, ORGANIZATION_INFO } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { getImagePath } from '@/lib/utils'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 flex-shrink-0">
                  <Image
                    src={getImagePath("/images/volleyball/volleyball-icon-vector-white.svg")}
                    alt="Volleyball Icon"
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-xl font-bold">Midwest Junior Volleyball</span>
              </div>
              <p className="text-brand-powder mb-4 max-w-md">
                The official home of the ASICS Junior National Volleyball Championships. 
                Bringing together the best young volleyball talent from across the nation.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-white border-white hover:bg-white hover:text-brand-blue"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-brand-powder hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="text-brand-powder hover:text-white transition-colors">
                    Tournament Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="text-brand-powder hover:text-white transition-colors">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-brand-powder hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-brand-powder">
                <p>Navy Pier</p>
                <p>600 E Grand Ave</p>
                <p>Chicago, IL 60611</p>
                <p className="mt-4">
                  <a href="mailto:midwestjvb@gmail.com" className="hover:text-white transition-colors">
                    midwestjvb@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-brand-blue/70 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-brand-powder mb-6 max-w-md mx-auto">
              Get the latest news, tournament updates, and important announcements delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-neutral-800 bg-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-brand-coral focus:border-brand-coral placeholder:text-neutral-500"
                required
              />
              <Button type="submit" variant="white" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-brand-powder/80 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-brand-blue/70 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-powder text-sm">
              © 2025 Midwest Junior Volleyball. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-brand-powder hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-brand-powder hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 