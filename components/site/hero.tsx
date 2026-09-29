import { HeroGallery } from "./hero-gallery"
import Image from "next/image"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import { ctaOutline, ctaPrimary, site } from "@/lib/site"

const strip = [
  { src: "/images/hero.png", alt: "Well-kept residential property with a manicured lawn", label: "Property care" },
  { src: "/images/work-exterior.png", alt: "Residential landscape with stone edging and planted beds", label: "Landscape improvements" },
  { src: "/images/work-landscaping.png", alt: "Freshly maintained lawn beside a flagstone path", label: "Lawn & landscaping" },
  { src: "/images/work-landscaping.png", alt: "Well-maintained residential lawn and planting beds", label: "Lawn care" },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-18">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-8 md:pt-16 lg:pb-16">
        <div className="animate-in fade-in duration-700">
         {/*  <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
           <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            Greeley, Colorado
          </p>

          Main homepage header slider: this replaces the large hero headline/copy area. */}
          <div className="mt-6 overflow-hidden rounded-[2rem]">
            <HeroGallery />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={ctaPrimary}>
              Request a Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href={site.phoneHref} className={ctaOutline}>
              <Phone className="size-4 text-accent" aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 lg:pb-24">
        <div className="flex items-end justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Work we do</p>
          <a href="#work" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            {"See more \u2192"}
          </a>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {strip.map((item) => (
            <li key={item.label} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <p className="absolute inset-x-0 bottom-0 p-3 text-sm font-medium text-primary-foreground sm:p-4">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
