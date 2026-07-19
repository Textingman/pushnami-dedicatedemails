'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkColor = (href: string) =>
    pathname === href ? '#0891B2' : '#6B7280';

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold" style={{ color: '#0891B2' }}>Dedicated Emails</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" style={{ color: linkColor('/') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" style={{ color: linkColor('/about') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" style={{ color: linkColor('/contact') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="/privacy" style={{ color: linkColor('/privacy') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Privacy
              </Link>
              <Link href="/terms" style={{ color: linkColor('/terms') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Terms
              </Link>
              <Link href="/signup" className="text-white px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#0891B2' }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
