"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Tab {
  id: string
  label: string
  icon: string
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("summary")

  const tabs: Tab[] = [
    { id: "summary", label: "Summary", icon: "📄" },
    { id: "pages", label: "Pages", icon: "📖" },
    { id: "chapters", label: "Chapters", icon: "📑" },
    { id: "glossary", label: "Glossary", icon: "📚" },
    { id: "qa", label: "Q&A", icon: "❓" },
    { id: "knowledge", label: "Knowledge Graph", icon: "🧠" },
  ]

  const bookData = {
    title: "The Future of AI",
    author: "Dr. Jane Smith",
    pages: 342,
    uploadDate: "Nov 13, 2025",
    fileSize: "125 MB",
    ipfsHash: "QmX3a4B2c1d5e...",
    nftAddress: "0x742d...8f3e",
    views: 1247,
    downloads: 89,
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/library" className="text-accent hover:underline text-sm">
              ← Back to Library
            </Link>
          </div>

          {/* Book Header */}
          <div className="mb-12 grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-border shadow-sm hover:border-accent/50 transition-colors">
                <svg
                  className="w-16 h-16 text-muted-foreground opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C6.5 6.253 2 10.753 2 16.253s4.5 10 10 10 10-4.5 10-10c0-5.5-4.5-10-10-10z"
                  />
                </svg>
              </div>
            </div>

            {/* Book Info */}
            <div className="md:col-span-3">
              <h1 className="text-4xl font-bold text-foreground mb-2">{bookData.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">by {bookData.author}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4 border border-border rounded-lg bg-card hover:border-accent/50 transition-colors">
                  <p className="text-2xl font-bold text-accent">{bookData.pages}</p>
                  <p className="text-xs text-muted-foreground">Pages</p>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card hover:border-accent/50 transition-colors">
                  <p className="text-2xl font-bold text-accent">{bookData.views}</p>
                  <p className="text-xs text-muted-foreground">Views</p>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card hover:border-accent/50 transition-colors">
                  <p className="text-2xl font-bold text-accent">{bookData.downloads}</p>
                  <p className="text-xs text-muted-foreground">Downloads</p>
                </div>
                <div className="p-4 border border-border rounded-lg bg-card hover:border-accent/50 transition-colors">
                  <p className="text-2xl font-bold text-accent">{bookData.fileSize}</p>
                  <p className="text-xs text-muted-foreground">Size</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="#">Download PDF</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-border text-foreground hover:bg-accent/5 bg-transparent"
                >
                  <Link href="#">Share Book</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-border text-foreground hover:bg-accent/5 bg-transparent"
                >
                  <Link href="#">View on IPFS</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-border text-foreground hover:bg-accent/5 bg-transparent"
                >
                  <Link href="#">Verify NFT</Link>
                </Button>
              </div>

              {/* Metadata */}
              <div className="text-xs text-muted-foreground space-y-1">
                <p>Uploaded: {bookData.uploadDate}</p>
                <p>IPFS: {bookData.ipfsHash}</p>
                <p>NFT: {bookData.nftAddress}</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-8">
            <div className="flex gap-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "summary" && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* AI Summary */}
                <div className="luxury-card border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-4">AI Summary</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This comprehensive guide explores the intersection of artificial intelligence and human creativity.
                    The author presents foundational concepts before diving into practical applications across
                    industries, from healthcare to finance. Key themes include ethical considerations, machine learning
                    fundamentals, and future implications of AI integration.
                  </p>
                  <p className="text-sm text-muted-foreground italic">Generated by BookVision AI</p>
                </div>

                {/* Book Stats */}
                <div className="space-y-4">
                  <div className="luxury-card border border-border/50">
                    <h4 className="font-semibold text-foreground mb-4">Content Analysis</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Text Density</span>
                          <span className="text-sm font-semibold text-foreground">85%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Image Count</span>
                          <span className="text-sm font-semibold text-foreground">48</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-muted-foreground">Extraction Quality</span>
                          <span className="text-sm font-semibold text-foreground">98%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: "98%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="luxury-card border border-border/50">
                    <h4 className="font-semibold text-foreground mb-4">Key Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Machine Learning", "Ethics", "Neural Networks", "Data Science", "AI Applications"].map(
                        (topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                          >
                            {topic}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "pages" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-video border border-border rounded-lg bg-muted hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 group-hover:from-accent/10 group-hover:to-blue-500/10 transition-all duration-300">
                      <span className="text-muted-foreground text-sm">Page {i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "chapters" && (
              <div className="space-y-3">
                {["Introduction", "Fundamentals", "Applications", "Ethics & Society", "Future Outlook"].map(
                  (chapter, i) => (
                    <div
                      key={i}
                      className="p-4 border border-border rounded-lg bg-card hover:shadow-sm transition-all duration-300 cursor-pointer hover:border-accent/50"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            Chapter {i + 1}: {chapter}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Pages {i * 68 + 1} - {(i + 1) * 68}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}

            {activeTab === "glossary" && (
              <div className="space-y-4">
                {[
                  { term: "Machine Learning", def: "A subset of AI that enables systems to learn from data." },
                  { term: "Neural Network", def: "A computational model inspired by biological neural networks." },
                  { term: "Data Science", def: "The discipline of extracting insights from data." },
                ].map((item, i) => (
                  <div key={i} className="luxury-card border border-border/50">
                    <h4 className="font-semibold text-foreground mb-2">{item.term}</h4>
                    <p className="text-muted-foreground text-sm">{item.def}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "qa" && (
              <div className="space-y-4">
                {[
                  {
                    q: "What are the main concepts covered?",
                    a: "The book covers ML fundamentals, applications, ethics, and future trends.",
                  },
                  {
                    q: "Who is the target audience?",
                    a: "Professionals, students, and anyone interested in AI fundamentals.",
                  },
                ].map((item, i) => (
                  <div key={i} className="luxury-card border border-border/50">
                    <h4 className="font-semibold text-accent mb-2 text-sm">Q: {item.q}</h4>
                    <p className="text-muted-foreground text-sm">A: {item.a}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "knowledge" && (
              <div className="p-12 border border-dashed border-border rounded-2xl bg-muted flex flex-col items-center justify-center text-center">
                <svg
                  className="w-24 h-24 text-muted-foreground opacity-30 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-foreground mb-2">Knowledge Graph</h3>
                <p className="text-muted-foreground mb-6">Interactive visualization of concepts and relationships</p>
                <p className="text-xs text-muted-foreground italic">Coming soon</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
