"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-8 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-12">Profile Settings</h1>

          <div className="space-y-8">
            {/* Profile Info */}
            <div className="luxury-card border border-border/50">
              <h2 className="text-xl font-semibold text-foreground mb-6">Profile Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                  <textarea
                    defaultValue="Book digitizer and AI enthusiast"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
            </div>

            {/* Billing */}
            <div className="luxury-card border border-border/50">
              <h2 className="text-xl font-semibold text-foreground mb-6">Billing & Subscription</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Professional Plan</p>
                    <p className="text-sm text-muted-foreground">$19/month</p>
                  </div>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Next billing date</span>
                  <span className="text-foreground">December 13, 2025</span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="luxury-card border border-border/50">
              <h2 className="text-xl font-semibold text-foreground mb-6">Security</h2>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-accent/5 bg-transparent"
                >
                  Change Password
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-border text-foreground hover:bg-accent/5 bg-transparent"
                >
                  Enable Two-Factor Authentication
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Save Changes</Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-accent/5 bg-transparent">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
