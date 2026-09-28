import { About } from "@/components/site/about"
import { Commitment } from "@/components/site/commitment"
import { Contact } from "@/components/site/contact"
import { CtaBanner } from "@/components/site/cta-banner"
import { Hero } from "@/components/site/hero"
import { Services } from "@/components/site/services"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { WorkGallery } from "@/components/site/work-gallery"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
        <Commitment />
        <WorkGallery />
        <CtaBanner />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
