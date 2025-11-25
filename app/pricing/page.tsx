"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  description: string
  cta: string
  featured: boolean
  features: Array<{ text: string; included: boolean }>
  popular?: boolean
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const plans: PricingPlan[] = [
    {
      id: "starter",
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for trying BookVision",
      cta: "Get Started",
      featured: false,
      features: [
        { text: "5 books per month", included: true },
        { text: "100 MB storage", included: true },
        { text: "Basic OCR", included: true },
        { text: "Email support", included: true },
        { text: "IPFS storage", included: false },
        { text: "NFT minting", included: false },
        { text: "Advanced analytics", included: false },
        { text: "API access", included: false },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: billingCycle === "monthly" ? "$19" : "$190",
      period: billingCycle === "monthly" ? "/month" : "/year",
      description: "For serious digitizers",
      cta: "Start Free Trial",
      featured: true,
      popular: true,
      features: [
        { text: "50 books per month", included: true },
        { text: "1 TB storage", included: true },
        { text: "Advanced OCR", included: true },
        { text: "Priority support", included: true },
        { text: "IPFS storage", included: true },
        { text: "NFT minting", included: true },
        { text: "Advanced analytics", included: true },
        { text: "API access", included: false },
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For organizations",
      cta: "Contact Sales",
      featured: false,
      features: [
        { text: "Unlimited books", included: true },
        { text: "Unlimited storage", included: true },
        { text: "Advanced OCR", included: true },
        { text: "24/7 dedicated support", included: true },
        { text: "IPFS storage", included: true },
        { text: "NFT minting", included: true },
        { text: "Advanced analytics", included: true },
        { text: "API access", included: true },
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground mb-8">Choose the plan that powers your digitization journey</p>

            <div className="inline-flex gap-2 border border-border rounded-lg p-1 bg-card">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded font-medium transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded font-medium transition-all duration-300 ${
                  billingCycle === "annual"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <span className="ml-2 inline-block px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl border transition-all ${
                    plan.featured
                      ? "md:scale-105 border-accent bg-accent/5 shadow-md"
                      : "border-border bg-card shadow-sm"
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-block px-4 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full mb-8" variant={plan.featured ? "default" : "outline"} asChild>
                      <Link href="/signup">{plan.cta}</Link>
                    </Button>

                    {/* Features */}
                    <div className="space-y-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        What's included
                      </p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <div
                              className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center mt-0.5 ${
                                feature.included ? "bg-accent text-white" : "bg-border text-muted-foreground"
                              }`}
                            >
                              {feature.included ? (
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              ) : (
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">Frequently asked questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: "Can I change plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
                },
                {
                  q: "What happens if I exceed my monthly limit?",
                  a: "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional credits.",
                },
                {
                  q: "Is there a free trial for paid plans?",
                  a: "Yes, Pro plan includes a 14-day free trial with full access to all features.",
                },
                {
                  q: "Do you offer discounts for annual billing?",
                  a: "Yes, annual billing saves you 20% compared to monthly pricing.",
                },
                {
                  q: "What about refunds?",
                  a: "We offer a 30-day money-back guarantee if you're not satisfied with your plan.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes, you can cancel your subscription at any time. No questions asked.",
                },
              ].map((item, i) => (
                <details key={i} className="p-6 border border-border rounded-lg bg-card group">
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground">
                    {item.q}
                    <svg
                      className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-12">Detailed comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 font-semibold text-foreground">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-foreground">Starter</th>
                    <th className="text-center py-4 px-6 font-semibold text-foreground">Pro</th>
                    <th className="text-center py-4 px-6 font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Books per month", starter: "5", pro: "50", enterprise: "Unlimited" },
                    { feature: "Storage", starter: "100 MB", pro: "1 TB", enterprise: "Unlimited" },
                    { feature: "OCR Quality", starter: "Standard", pro: "Advanced", enterprise: "Advanced" },
                    { feature: "Support", starter: "Email", pro: "Priority", enterprise: "24/7 Dedicated" },
                    { feature: "IPFS Storage", starter: "No", pro: "Yes", enterprise: "Yes" },
                    { feature: "NFT Minting", starter: "No", pro: "Yes", enterprise: "Yes" },
                    { feature: "API Access", starter: "No", pro: "No", enterprise: "Yes" },
                    { feature: "Custom Domain", starter: "No", pro: "No", enterprise: "Yes" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-6 text-foreground font-medium">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-muted-foreground">{row.starter}</td>
                      <td className="py-4 px-6 text-center text-foreground font-medium">{row.pro}</td>
                      <td className="py-4 px-6 text-center text-foreground font-medium">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg opacity-90 mb-8">Choose a plan and start digitizing your book collection today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="transition-all duration-300 hover:scale-105">
                <Link href="/signup">Get Started Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="transition-all duration-300 hover:scale-105 text-white border-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
