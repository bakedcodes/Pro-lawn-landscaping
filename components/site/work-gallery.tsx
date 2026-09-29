import Image from "next/image"
import { cn } from "@/lib/utils"
import { SectionHeading } from "./section-heading"

const items = [
  {
    src: "/images/hero.png",
    alt: "Well-kept residential property with a manicured lawn and landscaped front yard",
    category: "Lawn care",
    caption: "Lawn areas, planting beds, and outdoor spaces",
    className: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/work-exterior.png",
    alt: "Residential landscape with stone edging and planted beds",
    category: "Landscape improvements",
    caption: "Landscape maintenance and yard care",
    className: "",
  },
  {
    src: "/images/work-landscaping.png",
    alt: "Freshly maintained lawn beside a flagstone path and planting beds",
    category: "Property care",
    caption: "Mowing, trimming, and routine lawn care",
    className: "",
  },
  {
    src: "/images/work-exterior.png",
    alt: "Low stone and brick garden wall with a neat gravel border",
    category: "Landscape improvements",
    caption: "Stone, gravel, and landscape features",
    className: "",
  },
  {
    src: "/images/work-landscaping.png",
    alt: "Freshly mowed striped lawn beside a flagstone path and gravel bed",
    category: "Lawn & landscaping",
    caption: "Mowing, trimming, and cleanup",
    className: "",
  },
  {
    src: "/images/work-landscaping.png",
    alt: "Well-maintained residential lawn and planting beds",
    category: "Property care",
    caption: "Yard maintenance and outdoor care",
    className: "sm:col-span-2 lg:col-span-4 lg:row-span-1",
  },
]

const categories = ["Property care", "Landscape improvements", "Lawn care", "Yard maintenance", "Lawn & landscaping"]

export function WorkGallery() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Work"
            title="Work we do."
            description="A look at the kinds of repairs, improvements, and yard projects I take on for Greeley homeowners."
          />
          <ul className="flex max-w-md flex-wrap gap-2 lg:justify-end" aria-label="Categories">
            {categories.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground/80"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-14 grid auto-rows-[17rem] gap-4 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.src}
              className={cn("group relative overflow-hidden rounded-3xl bg-muted", item.className)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-accent">{item.category}</p>
                <p className="mt-1.5 font-serif text-xl font-medium leading-snug text-primary-foreground">
                  {item.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-muted-foreground">
          Images are representative of the services offered.
        </p>
      </div>
    </section>
  )
}
