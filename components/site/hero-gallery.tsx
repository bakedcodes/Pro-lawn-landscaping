"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const slides = [
  {
    src: "/images/hero.png",
    alt: "Well-kept residential property with a manicured lawn and landscaped front yard",
    label: "Landscape care",
    detail: "Landscaping • Lawn Care • Property Care",
  },
  {
    src: "/images/work-landscaping.png",
    alt: "Freshly maintained lawn beside a flagstone path and planting beds",
    label: "Lawn & landscaping",
    detail: "Lawn Care • Yard Maintenance • Cleanup",
  },
  {
    src: "/images/work-exterior.png",
    alt: "Residential landscape with stone edging and planted beds",
    label: "Landscape improvements",
    detail: "Stone • Gravel • Outdoor Spaces",
  },
  {
    src: "/images/work-doors.png",
    alt: "Well-kept residential front entry and surrounding outdoor space",
    label: "Property care",
    detail: "Outdoor Maintenance • Cleanup • Care",
  },
]

export function HeroGallery() {
  const [active, setActive] = useState(0)

  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length)
  const next = () => setActive((current) => (current + 1) % slides.length)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/10 lg:aspect-[4/5]">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">
              {slide.detail}
            </p>
            <p className="mt-1 font-serif text-2xl font-medium text-primary-foreground sm:text-3xl">
              {slide.label}
            </p>
          </div>
        </div>
      ))}

      <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-6 sm:top-6">
        <span className="rounded-full border border-primary-foreground/25 bg-foreground/15 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground backdrop-blur-md">
          Pro Lawn & Landscaping
        </span>
        <span className="rounded-full border border-primary-foreground/25 bg-foreground/15 px-3 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-md">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between sm:inset-x-6 sm:bottom-6">
        <div className="flex items-center gap-1.5" aria-label="Gallery slides">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === active
                  ? "w-8 bg-primary-foreground"
                  : "w-1.5 bg-primary-foreground/45 hover:bg-primary-foreground/75"
              }`}
              aria-label={`Show ${slide.label}`}
              aria-current={index === active}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previous}
            className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 bg-foreground/15 text-primary-foreground backdrop-blur-md transition-colors hover:bg-foreground/30"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 bg-foreground/15 text-primary-foreground backdrop-blur-md transition-colors hover:bg-foreground/30"
            aria-label="Next image"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
