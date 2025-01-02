'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideBookOpen, LucideBrain, LucideClock, LucideShield, LucideAward, LucideLock } from 'lucide-react'

export default function ProblemStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-[#1E1153] sm:text-4xl">
            Challenge of Today's Doctor
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            The pace of medical advancement and growing complexity of care delivery creates unprecedented challenges for healthcare providers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <LucideBookOpen className="h-8 w-8 text-purple-400" />
                <CardTitle>Exponential Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Medical knowledge doubles every 75 days, creating an overwhelming amount of new information to process</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <LucideClock className="h-8 w-8 text-purple-400" />
                <CardTitle>Time Pressure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Doctors face increasing administrative burdens while trying to maintain high-quality patient care</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <LucideBrain className="h-8 w-8 text-purple-400" />
                <CardTitle>Increasing Complexity of Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Converting new research into actionable clinical decisions becomes increasingly complex</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="max-w-3xl mx-auto text-lg text-[#1E1153]">
            [dr_tulp] was purpose built to support modern human doctors to continue to deliver high-quality, compassionate care in this increasingly complex environment
          </p>
        </motion.div>
      </div>
    </div>
  )
}