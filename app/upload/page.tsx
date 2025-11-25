"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      setFile(files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      setFile(files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return
    setUploading(true)

    // Simulate upload with progress
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 300))
      setUploadProgress(i)
    }

    setUploading(false)
    // Redirect to processing page
    window.location.href = "/processing"
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link href="/dashboard/hub" className="text-accent hover:underline text-sm mb-4 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">Upload Your Book Video</h1>
            <p className="text-pretty-subheading">
              Record yourself flipping through a book and we'll digitize it with AI-powered precision.
            </p>
          </div>

          <div
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
              dragActive ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleChange}
              className="hidden"
              disabled={uploading}
            />

            {!file ? (
              <div>
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-accent opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3m21-9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {dragActive ? "Drop your video here" : "Drag and drop your video"}
                </h3>
                <p className="text-muted-foreground mb-6">Supported formats: MP4, MOV, AVI, WebM (Max 5GB)</p>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Choose File
                </Button>
              </div>
            ) : (
              <div>
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-foreground mb-2">{file.name}</h3>
                <p className="text-muted-foreground mb-6">{formatFileSize(file.size)}</p>

                {uploading && (
                  <div className="mb-6">
                    <div className="w-full bg-border rounded-full h-2 mb-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{uploadProgress}% uploaded</p>
                  </div>
                )}

                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={() => setFile(null)}
                    variant="outline"
                    disabled={uploading}
                    className="border-border"
                  >
                    Change File
                  </Button>
                  <Button
                    onClick={handleUpload}
                    disabled={uploading}
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {uploading ? "Uploading..." : "Upload & Process"}
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="luxury-card border border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Tips for best results</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ensure good lighting on the book pages</li>
                <li>• Flip pages slowly and steadily</li>
                <li>• Avoid shadows on the text</li>
                <li>• Use a stable camera or tripod</li>
              </ul>
            </div>
            <div className="luxury-card border border-border/50">
              <h4 className="font-semibold text-foreground mb-3">Processing time</h4>
              <p className="text-sm text-muted-foreground mb-3">Processing time depends on video length and quality:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 5-10 min video: ~2-3 minutes</li>
                <li>• 10-30 min video: ~5-10 minutes</li>
                <li>• 30+ min video: ~15-30 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
