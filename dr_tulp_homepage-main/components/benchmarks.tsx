'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideShield, LucideAward, LucideLock } from 'lucide-react'

const benchmarks = [
  { name: 'MedQA', score: 'State-of-the-Art' },
  { name: 'PubMedQA', score: 'State-of-the-Art' },
  { name: 'MMLU - Clinical- and Medicine-Focused Benchmarks', score: 'State-of-the-Art' },
]

const security = [
  {
    title: "HIPAA Compliant",
    description: "Fully compliant with healthcare data privacy regulations",
    icon: LucideShield,
  },
  {
    title: "Secure Environment",
    description: "Your data is secured at the highest level of security and encryption. No sharing with third parties.",
    icon: LucideLock,
  },
  {
    title: "Performance Verified",
    description: "Validated clinical performance against the leading benchmarks",
    icon: LucideAward,
  },
]

export default function Benchmarks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 bg-white" id="benchmarks" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-[#1E1153] sm:text-4xl">
            Trust & Performance
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Leading the way in secure, reliable medical AI
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#1E1153] mb-4 text-center">Security & Compliance</h3>
            <p className="max-w-3xl mx-auto text-center text-gray-500 mb-8">
              Our platform is built with enterprise-grade security and compliance at its core, ensuring your sensitive medical data remains protected at all times.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {security.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex-none">
                      <div className="flex items-center space-x-4">
                        <item.icon className="h-8 w-8 text-purple-400" />
                        <CardTitle>{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-gray-500">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1E1153] mb-4 text-center">Performance Metrics</h3>
            <p className="max-w-3xl mx-auto text-center text-gray-500 mb-8">
              Our proprietary AI model consistently achieves state-of-the-art performance across leading medical benchmarks, demonstrating exceptional clinical performance.
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benchmarks.map((benchmark, index) => (
                <motion.div
                  key={benchmark.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex-none">
                      <CardTitle className="text-[#1E1153]">{benchmark.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex items-center justify-center">
                      <p className="text-2xl font-semibold text-purple-500">{benchmark.score}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}