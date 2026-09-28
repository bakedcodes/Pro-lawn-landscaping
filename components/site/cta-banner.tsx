import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { ctaAccent, site } from "@/lib/site"

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="px-5 sm:px-8">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-6 py-20 text-center sm:px-12 sm:py-28">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-primary/88" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
          aria-hidden="true"
        />

        <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          Fort Collins, Colorado
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
        </p>
        <h2
          id="cta-heading"
          className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-primary-foreground sm:text-6xl"
        >
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
          {"From small repairs to larger home and yard projects, let\u2019s talk about what you need done."}
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a href="#contact" className={ctaAccent}>
            Request a Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/5 px-6 text-[0.95rem] font-medium text-primary-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-foreground/10"
          >
            <Phone className="size-4 text-accent" aria-hidden="true" />
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
