'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { LucideBookOpen, LucideUsers, LucideLightbulb } from 'lucide-react'

export default function Heritage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="pt-36 pb-36 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Historical Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px]">
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0 h-full">
                <Image
                  src="/images/dr-tulp-portrait.jpg"
                  alt="The Anatomy Lesson of Dr. Nicolaes Tulp by Rembrandt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </CardContent>
            </Card>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-extrabold text-[#1E1153] sm:text-4xl mb-6">
              A Legacy of Medical Innovation
            </h2>
            <div className="prose prose-lg text-gray-500">
              <p>
              Our namesake, Dr. Nicolaes Tulp, stands immortalized in Rembrandt's masterpiece "The Anatomy Lesson" (1632)—and for good reason. As Amsterdam's mayor and Head of Anatomy at the Guild of Surgeons, he transformed medical education by bringing anatomical knowledge from private chambers into public view. 
              This spirit of democratizing healthcare expertise continues to guide our work today, carrying forward Dr. Tulp's vision that broader access to medical knowledge creates better healthcare for all.                
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bridge Section */}
        <div className="my-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-[#1E1153] mb-4">
              From 1632 to 2024: The Evolution of Medical Knowledge Sharing
            </h3>
            <p className="text-lg text-gray-500">
              The principles that guided Dr. Tulp's innovations continue to inspire our approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <LucideBookOpen className="h-8 w-8 text-purple-400 mb-4" />
                  <h4 className="text-xl text-[#1E1153] font-semibold mb-4">Knowledge Accessibility</h4>
                  <p className="text-gray-500">From public anatomy lessons to AI-powered insights, making medical knowledge accessible remains our core mission</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <LucideUsers className="h-8 w-8 text-purple-400 mb-4" />
                  <h4 className="text-xl text-[#1E1153] font-semibold mb-4">Peer Learning</h4>
                  <p className="text-gray-500">Building on the tradition of collaborative learning, [dr_tulp] serves as a trusted peer in modern medical practice</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <LucideLightbulb className="h-8 w-8 text-purple-400 mb-4" />
                  <h4 className="text-xl text-[#1E1153] font-semibold mb-4">Practical Innovation</h4>
                  <p className="text-gray-500">Just as Dr. Tulp innovated in medical education, we're pioneering new ways to support modern healthcare providers</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Modern Connection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-purple-500 font-semibold mb-4">
            From anatomical discoveries to AI-powered insights
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            The mission remains the same: advancing medical knowledge for better patient care.
            Today's [dr_tulp] uses the latest advancements in LLM-based artificial intelligence to make the exponentially growing body
            of medical knowledge accessible and actionable for healthcare providers worldwide.
          </p>
        </motion.div>
      </div>
    </div>
  )
}