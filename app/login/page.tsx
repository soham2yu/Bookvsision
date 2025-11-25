"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FloatingElements } from "@/components/floating-elements"
import { ParticleBackground } from "@/components/particle-background"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage("")

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // For demo purposes, accept any email and redirect to dashboard
      if (email.includes("@")) {
        setMessage("Magic link sent! Check your email.")
        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)
      } else {
        setMessage("Please enter a valid email address.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    setMessage("")

    try {
      // Simulate Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1500))
      router.push("/dashboard")
    } catch (error) {
      setMessage("Google login failed. Please try again.")
      setLoading(false)
    }
  }

  return (
    <>
      <ParticleBackground />
      <FloatingElements />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-background relative">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2 mb-12 transition-all duration-300 hover:scale-105 ai-glow rounded-lg px-2 py-1"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-yellow-400 rounded-lg flex items-center justify-center text-accent-foreground text-white font-bold pulse-glow">
            
            <img
              src="9.png"
              alt="BookVision Logo"
              className="relative h-full w-full object-cover rounded-2xl"
            
            />
            </div>
            <span className="font-bold text-xl text-gradient">BookVision</span>
          </Link>

          {/* Card */}
          <div className="luxury-card-premium border border-accent/20 rounded-2xl p-8 bg-card/95 backdrop-blur-md shadow-2xl golden-glow">
            <h1 className="text-3xl font-bold mb-2 text-gradient">Welcome back</h1>
            <p className="text-muted-foreground mb-8">Sign in to your BookVision account</p>

            {message && (
              <div className={`mb-6 p-4 rounded-lg text-sm ${
                message.includes("sent") || message.includes("redirecting")
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}>
                {message}
              </div>
            )}

            <form onSubmit={handleMagicLink} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50 border-accent/20 focus:border-accent/50 focus:ring-accent/30"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 ai-glow"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Magic Link...
                  </div>
                ) : (
                  "Send Magic Link"
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card/80 text-muted-foreground rounded-full">Or continue with</span>
              </div>
            </div>

            {/* Google Login */}
            <Button
              variant="outline"
              className="w-full mb-6 bg-transparent border-accent/30 hover:bg-accent/5 glass-effect"
              onClick={handleGoogleLogin}
              disabled={loading}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>

            {/* Footer */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="text-accent hover:underline font-medium ai-glow rounded px-1">
                Sign up
              </Link>
            </p>
          </div>

          {/* Footer Text */}
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-sm">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="hover:underline text-accent">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="hover:underline text-accent">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
