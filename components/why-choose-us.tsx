"use client"

import { Shield, Clock, DollarSign, Award } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"

export function WhyChooseUs() {
  return (
    <section
      className="w-full py-12 md:py-24 relative"
      style={{
       

        backgroundImage: "url('/images/why.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundColor: "#000000",
      }}
    >
      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-full h-12 opacity-10"
          style={{
            backgroundImage: "url('/images/digital-wave.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            
          }}
        ></motion.div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col     h-71px items-center justify-center space-y-4 text-center">
          <AnimatedSection>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">Why Choose Us</h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl text-white">
                We offer the best service in the industry for selling your software licenses
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white"
              >
                <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Shield className="h-8 w-8 text-slate-900" />
                </motion.div>
                <h3 className="text-xl font-bold">Secure Process</h3>
                <p className="text-slate-500">Your license information is handled with enterprise-grade security</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col bg-white items-center space-y-2 rounded-lg border p-6 shadow-sm h-[200px]"
              >
                <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Clock className="h-8 w-8 text-slate-900" />
                </motion.div>
                <h3 className="text-xl font-bold">Fast Turnaround</h3>
                <p className="text-slate-500">Get valuations within 24 hours and payment within days</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white"
              >
                <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <DollarSign className="h-8 w-8 text-slate-900" />
                </motion.div>
                <h3 className="text-xl font-bold">Best Value</h3>
                <p className="text-slate-500">Our market expertise ensures you get the highest possible value</p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white"
              >
                <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Award className="h-8 w-8 text-slate-900" />
                </motion.div>
                <h3 className="text-xl font-bold">Expert Team</h3>
                <p className="text-slate-500">Our specialists have years of experience in software licensing</p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
