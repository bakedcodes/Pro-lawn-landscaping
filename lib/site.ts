export const site = {
  name: "Pro Lawn & Landscaping",
  shortName: "Pro Lawn",
  tagline: "Landscaping",
  phoneDisplay: "(970) 576-8218",
  phoneHref: "tel:+19705768218",
  address: {
    street: "5212 W F St",
    city: "Greeley",
    region: "CO",
    full: "5212 W F St, Greeley, CO 80631",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=5212+W+F+St+Greeley+CO+80631",
  message:
    "Professional landscaping that keeps your property looking its best.",
} as const

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const

export const ctaPrimary =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-[0.95rem] font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"

export const ctaAccent =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-[0.95rem] font-medium text-accent-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"

export const ctaOutline =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-6 text-[0.95rem] font-medium text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-background focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
