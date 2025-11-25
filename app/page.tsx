"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { FloatingElements } from "@/components/floating-elements"
import { ParticleBackground } from "@/components/particle-background"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <FloatingElements />
      <Navbar />
      <main className="min-h-screen bg-background relative">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 border-b border-border/50 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 ai-circuit opacity-5"></div>

          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent/20 to-blue-500/20 border border-accent/30 text-accent rounded-full text-sm font-semibold ai-glow">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    AI-Powered Digitization Platform
                  </span>
                </div>
                <h1 className="text-pretty-display text-gradient leading-tight">
                  Where Books become data.
                </h1>
                <p className="text-pretty-subheading max-w-xl">
                  Record books with your smartphone. AI extracts pages, removes glare, and generates searchable PDFs
                  with NFT ownership proof.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 transition-all duration-300 hover:scale-105 ai-glow"
                  >
                    <Link href="/dashboard">Get Started Free</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-accent/30 text-foreground hover:bg-accent/5 transition-all duration-300 bg-transparent glass-effect"
                  >
                    <Link href="#how-it-works">Learn More</Link>
                  </Button>
                </div>
                <div className="pt-4 flex gap-6 text-sm">
                  <div className="flex items-center gap-2 ai-glow rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-accent rounded-full pulse-glow"></div>
                    <span className="text-muted-foreground">Instant Processing</span>
                  </div>
                  <div className="flex items-center gap-2 ai-glow rounded-full px-3 py-1">
                    <div className="w-2 h-2 bg-accent rounded-full pulse-glow"></div>
                    <span className="text-muted-foreground">Secure IPFS Storage</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual - Enhanced Book Animation */}
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl floating-element"></div>
                <div className="relative group">
                  {/* 3D Book Effect */}
                  <div className="w-64 h-80 bg-gradient-to-br from-accent/20 via-blue-500/10 to-purple-500/10 rounded-2xl border border-accent/30 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-500 hover:rotate-1 ai-glow">
                    {/* Book Spine */}
                    <div className="absolute left-0 top-4 bottom-4 w-2 book-spine rounded-l-lg"></div>

                    {/* Book Pages Animation */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="absolute inset-4 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl animate-pulse"></div>
                      <div className="text-center relative z-10">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-accent to-yellow-400 rounded-full flex items-center justify-center pulse-glow">
                          <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.253s4.5 10 10 10 10-4.5 10-10c0-5.5-4.5-10-10-10z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">AI Processing</p>
                        <div className="mt-2 flex justify-center gap-1">
                          <div className="w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                          <div className="w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1 h-1 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Particles Around Book */}
                  <div className="absolute -top-4 -right-4 w-3 h-3 bg-accent rounded-full floating-element opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-blue-400 rounded-full floating-element opacity-60" style={{ animationDelay: '2s' }}></div>
                  <div className="absolute top-1/2 -right-6 w-2 h-2 bg-purple-400 rounded-full floating-element opacity-60" style={{ animationDelay: '4s' }}></div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats with Animations */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-border/50">
              {[
                { value: "50K+", label: "Books Digitized", icon: "📚", color: "from-accent to-yellow-400" },
                { value: "99.9%", label: "Uptime", icon: "⚡", color: "from-blue-500 to-purple-500" },
                { value: "10K+", label: "Active Users", icon: "👥", color: "from-green-500 to-teal-500" },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 ai-glow group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced How It Works */}
        <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border/50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 ai-circuit opacity-5"></div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gradient">How BookVision Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple steps to digitize your entire book collection in minutes with cutting-edge AI
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Record Video",
                  desc: "Flip through your book with your smartphone camera",
                  icon: "🎥",
                  color: "from-blue-500 to-cyan-500",
                  glow: "glow-secondary",
                },
                {
                  step: 2,
                  title: "Upload",
                  desc: "Submit your video file to BookVision",
                  icon: "☁️",
                  color: "from-purple-500 to-pink-500",
                  glow: "glow-accent",
                },
                {
                  step: 3,
                  title: "AI Processing",
                  desc: "Automatic page detection and glare removal",
                  icon: "⚡",
                  color: "from-accent to-yellow-400",
                  glow: "glow-primary",
                },
                {
                  step: 4,
                  title: "Download & Own",
                  desc: "Get PDF, IPFS link, and NFT certificate",
                  icon: "🏆",
                  color: "from-green-500 to-emerald-500",
                  glow: "glow-secondary",
                },
              ].map((item) => (
                <div key={item.step} className="text-center group">
                  <div className="mb-6 relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} border border-white/20 flex items-center justify-center mx-auto text-3xl ai-glow shadow-2xl transform group-hover:scale-110 transition-all duration-500 ${item.glow}`}>
                      {item.icon}
                    </div>
                    {/* Animated connection line */}
                    {item.step < 4 && (
                      <div className="absolute -right-4 top-8 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent hidden md:block shimmer-effect"></div>
                    )}
                    {/* Floating particles */}
                    <div className={`absolute -top-2 -right-2 w-2 h-2 bg-gradient-to-br ${item.color} rounded-full floating-element opacity-60`}></div>
                  </div>
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-accent text-sm font-semibold">
                      Step {item.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything needed to digitize, organize, and monetize your book collection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Smart Page Detection",
                  desc: "AI identifies book pages from video automatically",
                  icon: "📄",
                },
                {
                  title: "Glare & Reflection Removal",
                  desc: "Advanced algorithms clean up reflections and shadows",
                  icon: "✨",
                },
                { title: "OCR & Text Extraction", desc: "Searchable text from every page", icon: "🔍" },
                { title: "PDF Generation", desc: "High-quality, optimized PDFs ready to share", icon: "📋" },
                { title: "IPFS Storage", desc: "Permanent, decentralized storage with content addressing", icon: "🔐" },
                { title: "NFT Minting", desc: "Mint NFTs to prove ownership and uniqueness", icon: "🎖️" },
              ].map((feature, i) => (
                <div key={i} className="luxury-card border border-border/50 hover:border-accent/50">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Perfect For</h2>
              <p className="text-muted-foreground">Designed for everyone who values knowledge preservation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🎓", title: "Students", desc: "Digitize textbooks for searchable study materials" },
                { icon: "👨‍🏫", title: "Teachers", desc: "Build digital classroom libraries and archives" },
                { icon: "📚", title: "Libraries", desc: "Scale digitization of entire collections" },
                { icon: "🏢", title: "Publishers", desc: "Archive and monetize rare or valuable editions" },
                { icon: "🏛️", title: "Institutions", desc: "Preserve historical documents and collections" },
                { icon: "👤", title: "Book Collectors", desc: "Create searchable catalogs of personal collections" },
              ].map((useCase, i) => (
                <div key={i} className="luxury-card border border-border/50 flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{useCase.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{useCase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-muted-foreground">Choose the plan that fits your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Starter",
                  price: "Free",
                  desc: "Try BookVision risk-free",
                  features: ["5 books/month", "100MB storage", "Basic OCR", "Email support"],
                  cta: "Get Started",
                  featured: false,
                },
                {
                  name: "Professional",
                  price: "$19",
                  per: "/month",
                  desc: "For serious digitizers",
                  features: [
                    "50 books/month",
                    "1TB storage",
                    "Advanced OCR",
                    "Priority support",
                    "NFT minting",
                    "IPFS included",
                  ],
                  cta: "Start Free Trial",
                  featured: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  desc: "For organizations",
                  features: [
                    "Unlimited books",
                    "Unlimited storage",
                    "White-label",
                    "Dedicated account",
                    "API access",
                    "Priority support",
                  ],
                  cta: "Contact Sales",
                  featured: false,
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 transition-all ${
                    plan.featured
                      ? "border-2 border-accent bg-gradient-to-br from-card to-card/50"
                      : "border border-border hover:border-accent/50"
                  }`}
                >
                  {plan.featured && (
                    <div className="mb-4 inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-accent">{plan.price}</span>
                    {plan.per && <span className="text-muted-foreground">{plan.per}</span>}
                  </div>
                  <Button className="w-full mb-8" variant={plan.featured ? "default" : "outline"} asChild>
                    <Link href="/dashboard">{plan.cta}</Link>
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm">
                        <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative border border-accent/30 bg-gradient-to-br from-card to-card/50 rounded-3xl p-12 text-center golden-glow">
                <h2 className="text-3xl font-bold mb-4">Ready to Digitize Your Books?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of users preserving knowledge and building searchable libraries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/dashboard">Get Started Free</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-accent/30 text-foreground hover:bg-accent/5 bg-transparent"
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
