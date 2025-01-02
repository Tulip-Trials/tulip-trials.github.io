// app/page.tsx

'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import ProblemStatement from '@/components/problem-statement'
import Features from '@/components/features'
import Benefits from '@/components/benefits'
import Benchmarks from '@/components/benchmarks'
import CTA from '@/components/cta'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Introduction */}
        <Hero />
        
        {/* Problem/Solution Flow */}
        <ProblemStatement />
        <Features />
        
        {/* Proof and Trust */}
        <Benefits />
        <Benchmarks />
        
        {/* Call to Action */}
        <CTA />
      </main>
    </div>
  )
}
