'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold neon-text">
          BrandBandhu
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-[var(--text-secondary)]">
          {['Home', 'Work', 'Services', 'Blog'].map(link => (
            <a key={link} href="#" className="hover:text-white transition">
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            className="px-5 py-2 rounded-lg font-semibold text-white"
            style={{ backgroundColor: 'var(--brand-orange)' }}
          >
            Book Strategy Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-panel px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {['Home', 'Work', 'Services', 'Blog'].map(link => (
                <a key={link} href="#" className="text-white">
                  {link}
                </a>
              ))}

              <button
                className="mt-4 px-5 py-2 rounded-lg font-semibold text-white"
                style={{ backgroundColor: 'var(--brand-orange)' }}
              >
                Book Strategy Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
