import Image from "next/image"
import { MapPin } from "lucide-react"
import { site } from "@/lib/site"
import { SectionHeading } from "./section-heading"

const steps = [
  { title: "Reach out", body: "Call or send a quick request describing what you need done." },
  { title: "Talk it through", body: "We go over the job, your priorities, and timing." },
  { title: "Done with care", body: "The work gets done right, and your space is left clean." },
]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/about.png"
              alt="Hands measuring and marking a wooden door frame with a pencil and tape measure"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-6 pt-24">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-primary-foreground/90">
                <MapPin className="size-3.5 text-accent" aria-hidden="true" />
                Based in Fort Collins, Colorado
              </p>
            </div>
          </div>
          <div
            className="absolute -right-3 -top-3 -z-10 hidden h-full w-full rounded-[2rem] border border-accent/40 sm:block"
            aria-hidden="true"
          />
        </div>

        <div>
          <SectionHeading eyebrow="About" title="Your neighbor for quality residential work." />

          <figure className="mt-8">
            <blockquote className="font-serif text-3xl italic leading-snug text-primary sm:text-4xl">
              {"\u201C"}
              {site.message}
              {"\u201D"}
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3 text-sm font-medium text-foreground">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {"Cnew, "}
              <span className="text-muted-foreground">{site.name}</span>
            </figcaption>
          </figure>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              {`${site.name} is a local residential service provider in Fort Collins. I help homeowners with the repairs, installations, painting, and yard work that keep a home comfortable and looking its best.`}
            </p>
            <p>
              When you call, you talk to me, and I&apos;m the one who shows up to do the work. No
              hand-offs, no guessing who&apos;ll be at your door.
            </p>
          </div>

          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-card p-5">
                <span className="font-serif text-sm text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-medium text-foreground">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
