'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { LucideUsers, LucideStethoscope, LucideClipboardList, LucideBookOpen, LucideArrowUpDown, LucideInbox } from 'lucide-react'

const features = [
  {
    name: "Patient Retrieval & Summarization",
    description: "Quickly access and synthesize patient histories, allowing you to focus on what matters most - patient care",
    icon: LucideUsers,
    supportText: "Enhances your clinical workflow"
  },
  {
    name: "Diagnosis Support",
    description: "Access relevant research and clinical guidelines to support your diagnostic process",
    icon: LucideStethoscope,
    supportText: "Augments your expertise"
  },
  {
    name: "Care Planning",
    description: "Develop comprehensive care plans informed by the latest evidence-based practices",
    icon: LucideClipboardList,
    supportText: "Supports your decision-making"
  },
  {
    name: "Medical Topic Overviews",
    description: "Stay current with concise summaries of the latest research in your field",
    icon: LucideBookOpen,
    supportText: "Extends your knowledge"
  },
  {
    name: "Care Management Shifts",
    description: "Efficiently rollout new guidelines at your organization in real-time",
    icon: LucideArrowUpDown,
    supportText: "Keeps you informed"
  },
  {
    name: "Inbox Management",
    description: "Efficiently process and prioritize your patient communications",
    icon: LucideInbox,
    comingSoon: true,
    supportText: "Streamlines your workflow"
  }
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-24 bg-gray-50" id="features" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-[#1E1153] sm:text-4xl">
            Your AI Partner in Medicine
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Supporting your expertise with intelligent assistance across your clinical workflow
          </p>
        </motion.div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className={`${feature.comingSoon ? 'border-dashed bg-gray-100' : ''} h-full flex flex-col`}>
                  <CardHeader className="flex-none">
                    <div className="flex items-center space-x-2">
                      <feature.icon className={`h-8 w-8 ${feature.comingSoon ? 'text-purple-300' : 'text-purple-400'}`} />
                    </div>
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-[#1E1153]">{feature.name}</CardTitle>
                      {feature.comingSoon && (
                        <span className="text-sm font-normal text-purple-400 whitespace-nowrap">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <div className={`text-sm font-medium ${feature.comingSoon ? 'text-purple-300' : 'text-purple-400'}`}>
                      {feature.supportText}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className={`text-base ${feature.comingSoon ? 'text-gray-400' : ''}`}>
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="max-w-3xl mx-auto text-lg text-[#1E1153]">
            Each is designed to enhance your capabilities, not replace them,
            helping you deliver the best possible care to your patients.
          </p>
        </motion.div>
      </div>
    </div>
  )
}