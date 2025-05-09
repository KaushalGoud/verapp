"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Testimonials() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Ensure this runs only on the client
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <section
      className="w-full py-12 md:py-24 relative text-white"
      style={{
        backgroundImage: "url('/images/starry-night-background-design_1114-17.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    >
      {/* Animated code particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              opacity: 0.1,
              transform: `translate(${Math.random() * windowSize.width}px, ${
                Math.random() * windowSize.height
              }px)`,
            }}
          >
            Testimonial {index + 1}
          </div>
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <AnimatedSection>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Customer Testimonials</h2>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl">
                See what our satisfied customers have to say about our service
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 mt-8">
            <AnimatedSection delay={0.1}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <p className="text-lg font-bold">Sarah Johnson</p>
                        <p className="text-sm text-slate-500">IT Director, TechCorp Inc.</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      "We had surplus enterprise licenses after downsizing, and this service made the process of selling
                      them incredibly easy. The valuation was fair and the payment was processed quickly. Highly
                      recommended!"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-white/90 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Chen" />
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div>
                        <p className="text-lg font-bold">Michael Chen</p>
                        <p className="text-sm text-slate-500">CTO, Innovate Solutions</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      "After switching our tech stack, we had several unused licenses. This service helped us recover a
                      significant portion of our investment. The team was professional and the process was seamless from
                      start to finish."
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
