"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

interface ProcessingStep {
  id: string
  title: string
  description: string
  icon: string
  status: "pending" | "processing" | "completed"
}

export default function ProcessingPage() {
  const [steps, setSteps] = useState<ProcessingStep[]>([
    {
      id: "stabilizing",
      title: "Stabilizing",
      description: "Applying video stabilization",
      icon: "🎬",
      status: "processing",
    },
    {
      id: "page-detection",
      title: "Page Detection",
      description: "Detecting page boundaries",
      icon: "📖",
      status: "pending",
    },
    {
      id: "frame-extraction",
      title: "Frame Extraction",
      description: "Extracting clean frames",
      icon: "🖼️",
      status: "pending",
    },
    {
      id: "unwarping",
      title: "Unwarping & Glare Removal",
      description: "Correcting perspective and removing glare",
      icon: "✨",
      status: "pending",
    },
    {
      id: "ocr",
      title: "OCR & AI Knowledge",
      description: "Extracting text and generating insights",
      icon: "🧠",
      status: "pending",
    },
    {
      id: "pdf-build",
      title: "PDF Build",
      description: "Creating searchable PDF",
      icon: "📄",
      status: "pending",
    },
    {
      id: "ipfs-upload",
      title: "IPFS Upload",
      description: "Storing on decentralized network",
      icon: "🌐",
      status: "pending",
    },
    {
      id: "nft-registration",
      title: "NFT Registration",
      description: "Registering ownership NFT",
      icon: "🏆",
      status: "pending",
    },
  ])

  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  useEffect(() => {
    if (currentStepIndex < steps.length) {
      const timer = setTimeout(() => {
        setSteps((prev) => {
          const updated = [...prev]
          if (updated[currentStepIndex].status === "processing") {
            updated[currentStepIndex].status = "completed"
            if (currentStepIndex + 1 < updated.length) {
              updated[currentStepIndex + 1].status = "processing"
            }
            setCurrentStepIndex((prev) => prev + 1)
          }
          return updated
        })
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [currentStepIndex, steps])

  const progress = Math.round((currentStepIndex / steps.length) * 100)
  const isComplete = currentStepIndex >= steps.length

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">Processing Your Book</h1>
            <p className="text-pretty-subheading">
              {isComplete
                ? "Your book has been successfully digitized!"
                : "This usually takes 5-10 minutes. You can close this window."}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full bg-border rounded-full h-2 mb-3">
              <div
                className="bg-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-right text-sm text-muted-foreground">{progress}% complete</p>
          </div>

          <div className="space-y-4 mb-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`p-4 border rounded-xl transition-all ${
                  step.status === "completed"
                    ? "border-accent bg-accent/5"
                    : step.status === "processing"
                      ? "border-accent/50 bg-accent/10"
                      : "border-border bg-card"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Status Icon */}
                  <div className="flex-shrink-0">
                    {step.status === "completed" ? (
                      <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ) : step.status === "processing" ? (
                      <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center animate-pulse border-2 border-accent">
                        {step.icon}
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground">
                        {step.icon}
                      </div>
                    )}
                  </div>

                  {/* Step Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Status Badge */}
                  {step.status === "processing" && (
                    <div className="flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full animate-pulse">
                        Processing
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {isComplete && (
            <div className="p-8 border-2 border-accent bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl text-center golden-glow">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Processing Complete!</h2>
              <p className="text-muted-foreground mb-8">
                Your book has been digitized and is ready to view, download, and share with the world.
              </p>
              <Link href="/dashboard/hub" className="inline-block">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:scale-105">
                  View Results
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
