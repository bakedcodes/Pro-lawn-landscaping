import { Eye, Home, Layers, MessageCircle } from "lucide-react"
import { SectionHeading } from "./section-heading"

const commitments = [
  {
    icon: Home,
    title: "Treated like my own",
    body: "Your home gets the same care I'd give my own property, from how the work is done to how the space is left.",
  },
  {
    icon: Eye,
    title: "Attention to detail",
    body: "Clean lines, careful prep, and finishing touches. Quality work is the whole point, not an extra.",
  },
  {
    icon: Layers,
    title: "One contact, many trades",
    body: "Repairs, painting, doors, fixtures, cleaning, and yard work, handled by one local provider.",
  },
  {
    icon: MessageCircle,
    title: "Local & easy to reach",
    body: "Based right here in Fort Collins. Call or send a request, and we'll talk through what you need.",
  },
]

export function Commitment() {
  return (
    <section aria-labelledby="commitment-heading" className="bg-secondary/60 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="commitment-heading"
          eyebrow="The Standard"
          title="The way the work gets done matters."
          description="Every project, large or small, is approached with the same standard."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-3xl border border-border bg-card p-7">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
