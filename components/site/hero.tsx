import { HeroGallery } from "./hero-gallery"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import { ctaOutline, ctaPrimary, site } from "@/lib/site"

const highlights = ["Handyman & Repairs", "Doors & Exterior", "Lawn & Landscaping"]

const strip = [
  { src: "/images/work-painting.png", alt: "Fresh white paint on window trim", label: "Painting" },
  { src: "/images/work-doors.png", alt: "Storm door on a craftsman entry", label: "Doors & carpentry" },
  { src: "/images/work-landscaping.png", alt: "Striped lawn beside a flagstone path", label: "Lawn & landscaping" },
  { src: "/images/work-repairs.png", alt: "Smoothly patched drywall", label: "Home repairs" },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-18">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-12 pt-10 sm:px-8 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-16">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            Fort Collins, Colorado
          </p>

          <h1 className="mt-6 font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
            Home repairs &amp; yard work,{" "}
            <em className="font-normal italic text-primary">done with care.</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Handyman, landscaping, painting, and home maintenance for Fort Collins
            homeowners. From a loose door to a full exterior repaint, every job gets
            the same attention to detail.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={ctaPrimary}>
              Request a Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href={site.phoneHref} className={ctaOutline}>
              <Phone className="size-4 text-accent" aria-hidden="true" />
              Call {site.phoneDisplay}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-in fade-in zoom-in-95 duration-1000 lg:col-span-6">
          <HeroGallery />

          <figure className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border/60 bg-card/95 p-5 shadow-xl backdrop-blur sm:left-auto sm:right-6 sm:max-w-xs">
            <blockquote className="font-serif text-lg leading-snug text-foreground">
              {"\u201C"}
              {site.message}
              {"\u201D"}
            </blockquote>
            <figcaption className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {"\u2014 Cnew"}
            </figcaption>
          </figure>
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
