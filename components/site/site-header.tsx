"use client"

import { useEffect, useState, type MouseEvent } from "react"
import { ArrowRight, ArrowUpRight, MapPin, Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks, site } from "@/lib/site"
import { Logo } from "./logo"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // The body is scroll-locked while the menu is open, so restore scrolling before jumping to the section.
  const navigate = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector(href)
    if (!target) return
    event.preventDefault()
    document.body.style.overflow = ""
    setOpen(false)
    requestAnimationFrame(() => {
      if (href === "#home") window.scrollTo({ top: 0, behavior: "smooth" })
      else target.scrollIntoView({ behavior: "smooth", block: "start" })
      history.replaceState(null, "", href)
    })
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-5 sm:gap-6 sm:px-8">
        <a href="#home" onClick={navigate("#home")} className="shrink-0" aria-label={`${site.name} — home`}>
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={navigate(link.href)}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground md:inline-flex"
          >
            <Phone className="size-4 text-accent" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <a
            href="#contact"
            onClick={navigate("#contact")}
            className="hidden h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-flex"
          >
            Request a Quote
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground sm:hidden"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain bg-background transition-all duration-300 ease-out lg:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-xl flex-col px-6 pb-8 pt-6 sm:px-8">
          <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Menu
          </p>

          <ul className="mt-4 border-t border-border">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-border">
                <a
                  href={link.href}
                  onClick={navigate(link.href)}
                  tabIndex={open ? undefined : -1}
                  className="group flex items-center gap-5 py-4.5"
                >
                  <span className="flex-1 font-serif text-[1.75rem] leading-none tracking-tight text-foreground">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <div className="rounded-3xl bg-primary p-5 text-primary-foreground">
              <p className="font-serif text-xl">Have a project in mind?</p>
              <p className="mt-1 text-sm text-primary-foreground/70">Call directly or send a quick request.</p>
              <div className="mt-5 grid gap-2.5">
                <a
                  href={site.phoneHref}
                  tabIndex={open ? undefined : -1}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-accent text-base font-medium text-accent-foreground"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Call {site.phoneDisplay}
                </a>
                <a
                  href="#contact"
                  onClick={navigate("#contact")}
                  tabIndex={open ? undefined : -1}
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-primary-foreground/25 text-base font-medium text-primary-foreground"
                >
                  Request a Quote
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <p className="mt-5 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <MapPin className="size-3.5 text-accent" aria-hidden="true" />
              Greeley, Colorado
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}
