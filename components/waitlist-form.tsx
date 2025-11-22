"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Loader2, CheckCircle2 } from "lucide-react"

const niches = [
  "Fashion & Style",
  "Beauty & Cosmetics",
  "Fitness & Wellness",
  "Tech & Gadgets",
  "Gaming",
  "Food & Beverage",
  "Travel & Lifestyle",
  "Music & Entertainment",
  "Education & Learning",
  "Business & Finance",
  "Sports",
  "Photography",
  "Other",
]

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "" as "creator" | "brand" | "",
    niche: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Send to Formspree - replace with your Formspree endpoint
      const response = await fetch("https://formspree.io/f/mvgyazgj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          role: formData.role === "creator" ? "Creator" : "Brand",
          niche: formData.niche,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", role: "", niche: "" })
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="p-8 border-primary/20 bg-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <Mail className="w-5 h-5 text-primary" />
        <h2 className="font-bold text-xl">Join the Waitlist</h2>
      </div>

      {isSuccess ? (
        <div className="space-y-3 text-center py-8">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-12 h-12 text-primary animate-in fade-in zoom-in" />
          </div>
          <p className="font-semibold text-lg">Welcome to Proffita!</p>
          <p className="text-sm text-muted-foreground">
            Check your email for updates. We'll notify you when we launch.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">I am a...</label>
            <div className="flex gap-3">
              {(["creator", "brand"] as const).map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setFormData({ ...formData, role })}
                  className={`flex-1 px-4 py-2 rounded-lg border-2 transition-all font-medium text-sm ${
                    formData.role === role
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  {role === "creator" ? "✨ Creator" : "🎯 Brand"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Niche / Industry</label>
            <select
              value={formData.niche}
              onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
              required
              className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            >
              <option value="">Select your niche...</option>
              {niches.map((niche) => (
                <option key={niche} value={niche}>
                  {niche}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            disabled={isLoading || !formData.name || !formData.email || !formData.role || !formData.niche}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-2 transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Joining...
              </>
            ) : (
              "Get Early Access"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. You'll hear from us only about Proffita updates.
          </p>
        </form>
      )}
    </Card>
  )
}
