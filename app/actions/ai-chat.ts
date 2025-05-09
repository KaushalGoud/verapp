"use server"

// Mock responses for common questions
const mockResponses = [
  {
    keywords: ["how", "sell", "license"],
    response:
      "Selling your license is easy! Just follow our 3-step process: 1) Upload your license details through our secure form, 2) Receive a valuation from our experts within 24 hours, and 3) Accept our offer and get paid within 3-5 business days.",
  },
  {
    keywords: ["what", "type", "license", "buy", "accept"],
    response:
      "We buy all types of software licenses including enterprise software, cloud services, SaaS subscriptions, desktop applications, and more. If you're unsure about your specific license, please provide details in the contact form and our team will evaluate it.",
  },
  {
    keywords: ["how", "long", "process", "take", "time"],
    response:
      "Our process is designed to be quick and efficient. You'll typically receive a valuation within 24 hours after submitting your license details. Once you accept our offer, payment is processed within 3-5 business days.",
  },
  {
    keywords: ["payment", "paid", "money", "handle"],
    response:
      "We offer multiple payment methods including bank transfer, PayPal, and other secure electronic payment options. You can select your preferred method when accepting our offer. All transactions are secure and confidential.",
  },
  {
    keywords: ["secure", "security", "safe", "confidential"],
    response:
      "Security is our top priority. We use enterprise-grade encryption for all data transfers and storage. Your license information and personal details are handled with strict confidentiality and in compliance with data protection regulations.",
  },
  {
    keywords: ["value", "worth", "price", "valuation"],
    response:
      "The value of your license depends on several factors including the software type, remaining subscription period, market demand, and current retail price. Our experts analyze these factors to provide you with the best possible valuation.",
  },
]

// Default responses for when no match is found
const defaultResponses = [
  "Thank you for your question. Our team specializes in buying unused software licenses at competitive rates. Could you provide more specific details about your license so I can better assist you?",
  "I'd be happy to help with your inquiry. We buy various types of software licenses and offer a simple 3-step process. Could you clarify what specific information you're looking for?",
  "Thanks for reaching out. We help businesses recover value from unused software licenses. For more specific information about your situation, please provide additional details or use our contact form.",
]

export async function getChatResponse(message: string) {
  try {
    // Convert message to lowercase for better matching
    const lowerMessage = message.toLowerCase()

    // Find a matching response based on keywords
    let bestMatch = null
    let bestMatchCount = 0

    for (const item of mockResponses) {
      const matchCount = item.keywords.filter((keyword) => lowerMessage.includes(keyword.toLowerCase())).length

      if (matchCount > bestMatchCount) {
        bestMatch = item
        bestMatchCount = matchCount
      }
    }

    // If we have a good match (at least 2 keywords), use that response
    if (bestMatch && bestMatchCount >= 2) {
      return { success: true, message: bestMatch.response }
    }

    // Otherwise use a random default response
    const randomDefault = defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
    return { success: true, message: randomDefault }
  } catch (error) {
    console.error("Error in mock chat response:", error)
    return {
      success: false,
      message:
        "Sorry, I'm having trouble processing your request right now. Please try again later or contact our support team directly.",
    }
  }
}
