"use client"

import { Upload, BarChart2, CreditCard } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

export function HowItWorks() {
  return (
    <section
      className="w-full py-12 md:py-24 relative"
      style={{
        backgroundImage: "url('/images/abstract-tech.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"100vh",
        backgroundRepeat:"no-repeat"
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl">
                Our simple three-step process makes selling your licenses quick and hassle-free
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mt-8 w-full">
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="flex flex-col items-center space-y-2 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm h-full"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <Upload className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold">Upload License</h3>
                <p className="text-slate-500">Submit your license details through our secure portal for review</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="flex flex-col items-center space-y-2 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm h-full"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <BarChart2 className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold">Get Valuation</h3>
                <p className="text-slate-500">
                  Our experts analyze market conditions to provide the best possible valuation
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="flex flex-col items-center space-y-2 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm h-full"
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white"
                >
                  <CreditCard className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold">Get Paid</h3>
                <p className="text-slate-500">Accept our offer and receive payment through your preferred method</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
