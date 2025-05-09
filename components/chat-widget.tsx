"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { getChatResponse } from "@/app/actions/ai-chat"
import { motion, AnimatePresence } from "framer-motion"

// Define message type
type Message = {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

// Example questions
const exampleQuestions = [
  "How do I sell my license?",
  "What types of licenses do you buy?",
  "How long does the process take?",
  "How is payment handled?",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi there! How can I help you with selling your software licenses today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Handle sending a message
  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      // Add a small delay to simulate processing time (between 500ms and 1500ms)
      await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 1000))

      // Get mock AI response
      const response = await getChatResponse(content)

      // Add AI message
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.message,
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.error("Error in chat:", error)

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle example question click
  const handleExampleClick = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 w-14 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              as={motion.button}
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}

        {/* Chat window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl border"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Assistant" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                </motion.div>
                <div>
                  <p className="text-sm font-medium">License Assistant</p>
                  <p className="text-xs text-slate-500">Online</p>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%] rounded-lg p-3 bg-slate-100 text-slate-900">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Example questions */}
            {messages.length <= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-4 py-2 border-t"
              >
                <p className="text-xs text-slate-500 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleQuestions.map((question, index) => (
                    <motion.button
                      key={question}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      onClick={() => handleExampleClick(question)}
                      className="text-xs bg-slate-100 hover:bg-slate-200 rounded-full px-3 py-1 text-slate-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Chat input */}
            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage(inputValue)
                }}
                className="flex space-x-2"
              >
                <motion.div className="flex-1" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button type="submit" size="icon" disabled={!inputValue.trim() || isLoading}>
                    {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
