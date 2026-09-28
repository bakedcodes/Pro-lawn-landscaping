export const site = {
  name: "Cnew\u2019s Quality Residential Work",
  shortName: "Cnew\u2019s",
  tagline: "Quality Residential Work",
  phoneDisplay: "+1 970-691-0984",
  phoneHref: "tel:+19706910984",
  address: {
    street: "3406 Justice Ct",
    city: "Fort Collins",
    region: "CO",
    full: "3406 Justice Ct, Fort Collins, CO",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=3406+Justice+Ct+Fort+Collins+CO",
  message:
    "I treat every project as if it were my property. Quality work is what I do.",
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
