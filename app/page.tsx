import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { LogoSlider } from "@/components/logo-slider"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Services />
      <LogoSlider />
      
      {/* Call to Action Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Ready to
            <br />
            <span className="text-gradient">Turn Heads?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Let&apos;s create something that makes your audience actually care. No boring strategies. Just pure creativity and results.
          </p>
          <Link href="/booking" className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
            Schedule a Call
          </Link>
        </div>
        
        {/* Background Gradient for CTA */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      </section>
      
      <Footer />
    </main>
  )
}
