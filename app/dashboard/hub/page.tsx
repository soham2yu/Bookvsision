"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardHub() {
  const [activeTab, setActiveTab] = useState("overview")

  const userStats = {
    totalBooks: 24,
    storageUsed: "2.3 GB",
    storageLimit: "10 GB",
    nftsCreated: 8,
    totalViews: 5284,
  }

  const recentBooks = [
    { id: 1, title: "The Future of AI", pages: 342, date: "2 days ago", status: "Completed" },
    { id: 2, title: "Quantum Computing Basics", pages: 256, date: "1 week ago", status: "Completed" },
    { id: 3, title: "Digital Marketing", pages: 198, date: "2 weeks ago", status: "Completed" },
    { id: 4, title: "Python Mastery", pages: 412, date: "3 weeks ago", status: "Completed" },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back, User</h1>
            <p className="text-muted-foreground">Manage your digitized books, uploads, and library</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="luxury-card border border-border/50">
              <p className="text-2xl font-bold text-accent">{userStats.totalBooks}</p>
              <p className="text-xs text-muted-foreground mt-1">Books Digitized</p>
            </div>
            <div className="luxury-card border border-border/50">
              <p className="text-2xl font-bold text-accent">{userStats.storageUsed}</p>
              <p className="text-xs text-muted-foreground mt-1">Storage Used</p>
            </div>
            <div className="luxury-card border border-border/50">
              <p className="text-2xl font-bold text-accent">{userStats.nftsCreated}</p>
              <p className="text-xs text-muted-foreground mt-1">NFTs Created</p>
            </div>
            <div className="luxury-card border border-border/50">
              <p className="text-2xl font-bold text-accent">{userStats.totalViews}</p>
              <p className="text-xs text-muted-foreground mt-1">Total Views</p>
            </div>
            <div className="luxury-card border border-border/50">
              <p className="text-2xl font-bold text-accent">{userStats.storageLimit}</p>
              <p className="text-xs text-muted-foreground mt-1">Storage Limit</p>
            </div>
          </div>

          {/* Main Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Upload Section */}
            <div className="luxury-card border-2 border-accent/50 md:col-span-1">
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Upload Video</h3>
              <p className="text-sm text-muted-foreground mb-4">Record your book and let AI handle the digitization</p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/upload">Start Upload</Link>
              </Button>
            </div>

            {/* Profile Section */}
            <div className="luxury-card border border-border/50">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Profile</h3>
              <p className="text-sm text-muted-foreground mb-4">Manage account, billing, and preferences</p>
              <Button
                asChild
                variant="outline"
                className="w-full border-accent/30 text-foreground hover:bg-accent/5 bg-transparent"
              >
                <Link href="/profile">Edit Profile</Link>
              </Button>
            </div>

            {/* Library Section */}
            <div className="luxury-card border border-border/50">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Your Library</h3>
              <p className="text-sm text-muted-foreground mb-4">Browse and manage all your digitized books</p>
              <Button
                asChild
                variant="outline"
                className="w-full border-accent/30 text-foreground hover:bg-accent/5 bg-transparent"
              >
                <Link href="/library">View Library</Link>
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-border mb-8">
            <div className="flex gap-8 overflow-x-auto">
              {[
                { id: "overview", label: "Recent Books" },
                { id: "history", label: "Upload History" },
                { id: "settings", label: "Settings" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-accent text-accent"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "overview" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-6">Recently Digitized Books</h3>
                {recentBooks.map((book) => (
                  <div
                    key={book.id}
                    className="luxury-card border border-border/50 flex items-center justify-between hover:border-accent/50"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{book.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {book.pages} pages • {book.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">{book.status}</span>
                      <Link href={`/book/${book.id}`} className="text-accent hover:text-accent/80 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "history" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-6">Upload History</h3>
                <div className="luxury-card border border-border/50">
                  <div className="space-y-3">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between pb-3 border-b border-border/30 last:border-0"
                      >
                        <div>
                          <p className="text-sm text-foreground">Upload #{i + 1}</p>
                          <p className="text-xs text-muted-foreground">
                            {Math.floor(Math.random() * 400) + 100} pages processed
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {Math.floor(Math.random() * 20) + 1} days ago
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6 max-w-2xl">
                <div className="luxury-card border border-border/50">
                  <h4 className="font-semibold text-foreground mb-4">Account Settings</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground">Email</label>
                      <p className="text-foreground">user@example.com</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Plan</label>
                      <p className="text-foreground">Professional ($19/month)</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Renewal Date</label>
                      <p className="text-foreground">December 13, 2025</p>
                    </div>
                  </div>
                </div>

                <div className="luxury-card border border-border/50">
                  <h4 className="font-semibold text-foreground mb-4">Preferences</h4>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">Email notifications for upload completions</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-foreground">Make my books publicly discoverable</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
