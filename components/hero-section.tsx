"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/Backround.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"100vh",
      
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/70"
      ></motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 3, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-white"
        ></motion.div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
              Maximize the Value of Your Software Licenses
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-200 md:text-xl">
              Turn your unused or surplus software licenses into cash quickly and easily. Get the best market value with
              our expert valuation service.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-x-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 transition-transform hover:scale-105"
            >
              <Link href="#contact-form">Get a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 transition-transform hover:scale-105"
            >
              <Link href="#contact-form">Sell My Licenses</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
