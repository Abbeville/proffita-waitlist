import { WaitlistForm } from "@/components/waitlist-form"
import { ArrowRight, CheckCircle2, Lock, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="font-bold text-xl">Proffita</span>
          </div>
          <div className="text-sm text-muted-foreground">Coming Soon</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Early Access Available
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
            Structured contests,
            <span className="text-primary"> verified payouts</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg">
            Connect with creators and brands through transparent, reward-based contests. No drama, no disputes—just
            verified payouts handled automatically with escrow.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">For Creators: Get discovered and earn from verified brands</span>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">For Brands: Access massive UGC at a fraction of creator costs</span>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">Transparent rules and automatic, verified payouts</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <WaitlistForm />
        </div>
      </section>

      {/* Why Proffita Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-balance mb-12">Why Proffita?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
            <Lock className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Secure Escrow System</h3>
            <p className="text-sm text-muted-foreground">
              Funds are held securely until all rules are met. No more payment disputes or delayed payouts.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
            <TrendingUp className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Massive ROI</h3>
            <p className="text-sm text-muted-foreground">
              Brands get authentic UGC at 70% less cost than individual creator rates. Creators earn consistently.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
            <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold text-lg mb-2">Zero Fraud</h3>
            <p className="text-sm text-muted-foreground">
              Transparent rules and verified submissions mean contests run smoothly every single time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">80%</div>
            <p className="text-muted-foreground">MVP Complete & Testable</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">2+</div>
            <p className="text-muted-foreground">Brands Ready to Launch</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">Growing</div>
            <p className="text-muted-foreground">Creator Community Interested</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <p className="text-muted-foreground mb-6">Join hundreds waiting for access to transform how contests happen</p>
        <div className="flex gap-3 justify-center">
          <div className="flex items-center gap-2 text-sm">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span>Full launch coming Q1 2026</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Proffita. Building the future of creator-brand collaboration.
          </p>
        </div>
      </footer>
    </main>
  )
}
