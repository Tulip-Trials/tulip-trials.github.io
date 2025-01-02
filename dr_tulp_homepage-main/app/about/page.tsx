// app/about/page.tsx
'use client'

import Header from '@/components/header'
import Heritage from '@/components/heritage'
import CTA from '@/components/cta'
import Team from '@/components/team'
import LogoCloud from '@/components/logo-cloud'
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Opening Section */}
        <Heritage />

        {/* Team Section */}
        <Team />
        
        {/* Logo Cloud */}
        <LogoCloud />

        {/* Call to Action */}
        <CTA />
      </main>
    </div>
  )
}