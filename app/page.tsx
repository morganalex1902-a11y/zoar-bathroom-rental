import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WhyChoose } from '@/components/why-choose'
import { Gallery } from '@/components/gallery'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Services />
      <div id="why-choose">
        <WhyChoose />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Contact />
      <Footer />
    </main>
  )
}
