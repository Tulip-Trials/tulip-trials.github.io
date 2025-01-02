'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <>
      <div className="bg-[#1E1153]" ref={ref}>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <hgroup>
              <h2 className="text-base font-semibold text-purple-400">Get started</h2>
              <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Ready to transform with [dr_tulp]?
              </p>
            </hgroup>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-300">
              Join the growing community leveraging AI to improve patient care and stay at the forefront of medical knowledge.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#1E1153] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                asChild
              >
                <a href="https://6umtixnj3yz.typeform.com/to/POxuB4ye">Join The Waitlist</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between">
          <p className="text-sm/6 text-gray-400 text-center w-full">
            &copy; 2025 Tulip Trials, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  )
}