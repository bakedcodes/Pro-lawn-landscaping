import type { LucideIcon } from "lucide-react"
import { ArrowRight, DoorOpen, Droplets, Hammer, Mountain, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"

type Category = { title: string; summary: string; icon: LucideIcon; items: string[]; className: string }

const categories: Category[] = [
  {
    title: "Handyman & Repairs",
    summary: "The small fixes and installs that make a home work.",
    icon: Hammer,
    items: ["Furniture assembly", "Shelving", "Wall hangings", "Caulking", "Drywall repair", "Door repair"],
    className: "lg:col-span-3",
  },
  {
    title: "Doors & Exterior",
    summary: "Doors, painting, and exterior surfaces, inside and out.",
    icon: DoorOpen,
    items: [
      "Closet doors",
      "Folding doors",
      "Screen doors",
      "Storm doors",
      "Exterior painting",
      "Decks and porches",
      "Fences and gates",
      "Siding",
      "Trim and molding",
      "Windows",
    ],
    className: "lg:col-span-3",
  },
  {
    title: "Cleaning & Maintenance",
    summary: "Seasonal upkeep for gutters, windows, and yards.",
    icon: Sparkles,
    items: ["Gutter cleaning", "Window cleaning", "Brush/debris removal", "Leaf/debris removal", "Mowing/trimming"],
    className: "lg:col-span-2",
  },
  {
    title: "Plumbing",
    summary: "Installation and replacement of everyday fixtures.",
    icon: Droplets,
    items: ["Faucets", "Garbage disposals", "Sinks", "Toilets"],
    className: "lg:col-span-2",
  },
  {
    title: "Landscaping & Construction",
    summary: "Lawn care and hardscape work for lasting curb appeal.",
    icon: Mountain,
    items: ["Lawn care", "Brick", "Gravel", "Stone"],
    className: "sm:col-span-2 lg:col-span-2",
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
      <div
        className="pointer-events-none absolute -left-40 -top-40 size-[32rem] rounded-full bg-primary-foreground/[0.04]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="One call for the work around your home."
            description="Inside, outside, and everything in between. Here's what I can take care of for you."
            inverted
          />
          <a
            href="#contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-accent px-6 text-[0.95rem] font-medium text-accent-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90 lg:self-auto"
          >
            Request a Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {categories.map((category, index) => {
            const Icon = category.icon
            const wide = category.items.length > 6
            return (
              <li
                key={category.title}
                className={cn(
                  "group flex flex-col rounded-3xl border border-primary-foreground/12 bg-primary-foreground/[0.03] p-6 transition-colors duration-300 hover:border-primary-foreground/25 hover:bg-primary-foreground/[0.06] sm:p-8",
                  category.className,
                )}
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-sm text-primary-foreground/40" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl font-medium tracking-tight">{category.title}</h3>
                <p className="mt-2 text-primary-foreground/65">{category.summary}</p>

                <ul
                  className={cn(
                    "mt-6 grid gap-x-6 border-t border-primary-foreground/12 pt-2",
                    wide ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
                  )}
                  aria-label={`${category.title} services`}
                >
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-primary-foreground/[0.08] py-2.5 text-[0.95rem] text-primary-foreground/90 last:border-b-0"
                    >
                      <span className="size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>

        <p className="mt-10 text-center text-primary-foreground/70">
          {"Don\u2019t see your project listed? "}
          <a href="#contact" className="font-medium text-primary-foreground underline underline-offset-4 hover:text-accent">
            Ask about it
          </a>
        </p>
      </div>
    </section>
  )
}
