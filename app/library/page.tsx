"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Book {
  id: string
  title: string
  author: string
  pages: number
  uploadDate: string
  storage: "local" | "s3" | "ipfs"
  hasNFT: boolean
  size: string
  views: number
}

export default function LibraryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filterStorage, setFilterStorage] = useState<"all" | "local" | "s3" | "ipfs">("all")
  const [filterNFT, setFilterNFT] = useState<"all" | "with" | "without">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const books: Book[] = [
    {
      id: "1",
      title: "The Future of AI",
      author: "Dr. Jane Smith",
      pages: 342,
      uploadDate: "2025-11-13",
      storage: "ipfs",
      hasNFT: true,
      size: "125 MB",
      views: 1247,
    },
    {
      id: "2",
      title: "Advanced Machine Learning",
      author: "Prof. Michael Chen",
      pages: 528,
      uploadDate: "2025-11-10",
      storage: "local",
      hasNFT: false,
      size: "215 MB",
      views: 342,
    },
    {
      id: "3",
      title: "Digital Transformation Guide",
      author: "Sarah Anderson",
      pages: 289,
      uploadDate: "2025-11-08",
      storage: "s3",
      hasNFT: true,
      size: "98 MB",
      views: 856,
    },
    {
      id: "4",
      title: "Quantum Computing Basics",
      author: "Dr. Robert Brown",
      pages: 410,
      uploadDate: "2025-11-05",
      storage: "ipfs",
      hasNFT: true,
      size: "167 MB",
      views: 654,
    },
    {
      id: "5",
      title: "Data Science Handbook",
      author: "Emily Wilson",
      pages: 356,
      uploadDate: "2025-11-01",
      storage: "local",
      hasNFT: false,
      size: "142 MB",
      views: 923,
    },
    {
      id: "6",
      title: "Ethics in AI Systems",
      author: "Prof. Lisa Zhang",
      pages: 287,
      uploadDate: "2025-10-28",
      storage: "s3",
      hasNFT: true,
      size: "104 MB",
      views: 543,
    },
  ]

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStorage = filterStorage === "all" || book.storage === filterStorage
    const matchesNFT =
      filterNFT === "all" || (filterNFT === "with" && book.hasNFT) || (filterNFT === "without" && !book.hasNFT)
    return matchesSearch && matchesStorage && matchesNFT
  })

  const totalBooks = books.length
  const totalStorage = books.reduce((sum, book) => sum + Number.parseInt(book.size), 0)
  const nftCount = books.filter((b) => b.hasNFT).length

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Your Digital Library</h1>
            <p className="text-pretty-subheading">Organize, access, and manage all your digitized books</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="luxury-card border border-border/50">
              <p className="text-3xl font-bold text-accent">{totalBooks}</p>
              <p className="text-sm text-muted-foreground mt-1">Books</p>
            </div>
            <div className="luxury-card border border-border/50">
              <p className="text-3xl font-bold text-accent">{nftCount}</p>
              <p className="text-sm text-muted-foreground mt-1">NFTs</p>
            </div>
            <div className="luxury-card border border-border/50">
              <p className="text-3xl font-bold text-accent">{(totalStorage / 1000).toFixed(1)}</p>
              <p className="text-sm text-muted-foreground mt-1">GB Used</p>
            </div>
            <div className="luxury-card border border-border/50">
              <p className="text-3xl font-bold text-accent">{books.reduce((sum, b) => sum + b.views, 0)}</p>
              <p className="text-sm text-muted-foreground mt-1">Total Views</p>
            </div>
          </div>

          {/* Filters & Controls */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="flex-1 min-w-0 w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Search books or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Filter & View Controls */}
              <div className="flex gap-3 items-center w-full lg:w-auto">
                <select
                  value={filterStorage}
                  onChange={(e) => setFilterStorage(e.target.value as any)}
                  className="px-3 py-2 border border-border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="all">All Storage</option>
                  <option value="local">Local</option>
                  <option value="s3">S3</option>
                  <option value="ipfs">IPFS</option>
                </select>

                <select
                  value={filterNFT}
                  onChange={(e) => setFilterNFT(e.target.value as any)}
                  className="px-3 py-2 border border-border rounded-lg bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="all">All NFTs</option>
                  <option value="with">With NFT</option>
                  <option value="without">Without NFT</option>
                </select>

                {/* View Mode Toggle */}
                <div className="flex border border-border rounded-lg bg-card p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-all duration-300 ${
                      viewMode === "grid" ? "bg-accent text-white" : "text-muted-foreground"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-all duration-300 ${
                      viewMode === "list" ? "bg-accent text-white" : "text-muted-foreground"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Books View */}
          {filteredBooks.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <Link key={book.id} href={`/dashboard?id=${book.id}`}>
                    <div className="h-full p-6 border border-border rounded-xl bg-card hover:shadow-md transition-all duration-300 group cursor-pointer">
                      {/* Thumbnail */}
                      <div className="aspect-video bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                        <svg
                          className="w-12 h-12 text-muted-foreground opacity-30"
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

                      {/* Info */}
                      <h3 className="font-semibold text-foreground mb-1 line-clamp-2">{book.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{book.author}</p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span>{book.pages} pages</span>
                        <span>{book.size}</span>
                      </div>

                      {/* Badges */}
                      <div className="flex gap-2 flex-wrap mb-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            book.storage === "ipfs"
                              ? "bg-accent/20 text-accent"
                              : book.storage === "s3"
                                ? "bg-blue-500/20 text-blue-600"
                                : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {book.storage.toUpperCase()}
                        </span>
                        {book.hasNFT && (
                          <span className="px-2 py-1 rounded text-xs font-medium bg-purple-500/20 text-purple-600">
                            NFT
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-border flex gap-2 text-xs">
                        <button className="flex-1 py-2 hover:bg-muted rounded transition-all duration-300">View</button>
                        <button className="flex-1 py-2 hover:bg-muted rounded transition-all duration-300">
                          Share
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredBooks.map((book) => (
                  <Link key={book.id} href={`/dashboard?id=${book.id}`}>
                    <div className="p-4 border border-border rounded-lg bg-card hover:shadow-sm transition-all duration-300 group cursor-pointer">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground line-clamp-1">{book.title}</h4>
                          <p className="text-sm text-muted-foreground">{book.author}</p>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground flex-shrink-0">
                          <span>{book.pages} pages</span>
                          <span>{book.size}</span>
                          <div className="flex gap-2">
                            {book.storage === "ipfs" && (
                              <span className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium">
                                IPFS
                              </span>
                            )}
                            {book.hasNFT && (
                              <span className="px-2 py-1 bg-purple-500/20 text-purple-600 rounded text-xs font-medium">
                                NFT
                              </span>
                            )}
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
                    </div>
                  </Link>
                ))}
              </div>
            )
          ) : (
            <div className="p-12 border border-dashed border-border rounded-2xl text-center bg-muted">
              <svg
                className="w-16 h-16 mx-auto text-muted-foreground opacity-30 mb-4"
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
              <h3 className="text-lg font-semibold text-foreground mb-2">No books found</h3>
              <p className="text-muted-foreground mb-6">Start digitizing your books to build your library</p>
              <Button asChild>
                <Link href="/upload">Upload First Book</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
