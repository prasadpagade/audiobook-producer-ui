import Hero from '@/components/Hero'
import ProcessFlow from '@/components/ProcessFlow'
import AudioShowcase from '@/components/AudioShowcase'
import Features from '@/components/Features'
import TechStack from '@/components/TechStack'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      <ProcessFlow />
      <AudioShowcase />
      <Features />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  )
}
