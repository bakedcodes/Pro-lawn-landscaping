import { ArrowUpRight, MapPin, Phone } from "lucide-react"
import { site } from "@/lib/site"
import { QuoteForm } from "./quote-form"
import { SectionHeading } from "./section-heading"

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Get your project on the schedule."
            description="Call directly or send a quick request. Either way, you'll hear back from me."
          />

          <address className="mt-10 space-y-3 not-italic">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-4 rounded-2xl bg-primary p-5 text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/95"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/65">
                  Call or text
                </span>
                <span className="mt-1 block text-xl font-medium">{site.phoneDisplay}</span>
              </span>
              <ArrowUpRight
                className="size-5 text-primary-foreground/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Based in
                </span>
                <span className="mt-1 block text-lg font-medium text-foreground">Fort Collins, Colorado</span>
              </span>
              <ArrowUpRight
                className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
              <span className="sr-only">(opens Google Maps in a new tab)</span>
            </a>
          </address>
        </div>

        <div className="lg:col-span-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
