"use client"

import type { ReactNode } from "react"

interface Step {
  id: string
  title: string
  status: "pending" | "processing" | "completed"
  icon?: ReactNode
}

interface ProgressStepperProps {
  steps: Step[]
  currentStep?: number
}

export function ProgressStepper({ steps, currentStep = 0 }: ProgressStepperProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-4">
          {/* Step Number */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              step.status === "completed"
                ? "bg-accent text-white"
                : step.status === "processing"
                  ? "bg-accent text-white animate-pulse"
                  : "bg-border text-muted-foreground"
            }`}
          >
            {step.status === "completed" ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              index + 1
            )}
          </div>

          {/* Step Info */}
          <div className="flex-1">
            <h4 className="font-semibold text-foreground">{step.title}</h4>
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={`absolute left-5 top-16 w-0.5 h-8 ${step.status === "completed" ? "bg-accent" : "bg-border"}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}
