'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideClock, LucideHeart, LucideDollarSign, LucideSmilePlus } from 'lucide-react'

const benefits = [
  {
    title: "Time Savings",
    description: "Reduce time spent on research and documentation by up to 40%",
    icon: LucideClock,
    metric: "40%",
    metricLabel: "Time Saved"
  },
  {
    title: "Decreased Staff Burnout",
    description: "Improve staff satisfaction and retention through reduced administrative burden",
    icon: LucideSmilePlus,
    metric: "85%",
    metricLabel: "Staff Satisfaction"
  },
  {
    title: "Increased Quality of Care",
    description: "Dr. Tulp helped catch errors and recommend best practices to improve quality of care for early customers",
    icon: LucideHeart,
    metric: "-4%",
    metricLabel: "Error Reduction"
  },
  {
    title: "Revenue Driving",
    description: "Increase efficiency and revenue with the same headcount",
    icon: LucideDollarSign,
    metric: "+30%",
    metricLabel: "Revenue Increase"
  }
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-extrabold text-[#1E1153] sm:text-4xl">
            Proven Results
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Real impact for healthcare providers and their patients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="flex-none">
                  <div className="flex items-center space-x-4">
                    <benefit.icon className="h-8 w-8 text-purple-400" />
                    <CardTitle className="text-[#1E1153]">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-purple-500">{benefit.metric}</span>
                      <span className="text-sm text-gray-500">{benefit.metricLabel}</span>
                    </div>
                    <p className="text-gray-500">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="max-w-3xl mx-auto text-lg text-[#1E1153]">
            Based on data from our early customers, [dr_tulp] delivers measurable improvements
            in efficiency, quality, and staff satisfaction.
          </p>
        </motion.div>
      </div>
    </div>
  )
}