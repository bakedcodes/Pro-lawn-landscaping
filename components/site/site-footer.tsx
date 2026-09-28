import { ArrowRight, MapPin, Phone } from "lucide-react"
import { navLinks, site } from "@/lib/site"
import { Logo } from "./logo"

export function SiteFooter() {
  return (
    <footer className="mt-8 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo inverted />
            <p className="mt-6 max-w-sm leading-relaxed text-primary-foreground/70">
              Handyman, landscaping, and home improvement services for homeowners in Fort Collins, Colorado.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-[0.95rem] font-medium text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Request a Quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">Navigate</p>
            <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/50">Get in touch</p>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 font-serif text-2xl hover:underline hover:underline-offset-4"
                >
                  <Phone className="size-4 text-accent" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
                Fort Collins, Colorado
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-8 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {"\u00A9"} {new Date().getFullYear()} {site.name}
          </p>
          <p>Serving Fort Collins, Colorado</p>
        </div>
      </div>
    </footer>
  )
}
