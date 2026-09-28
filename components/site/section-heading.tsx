import { cn } from "@/lib/utils"

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: {
  id?: string
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  inverted?: boolean
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]",
          align === "center" && "justify-center",
          inverted ? "text-primary-foreground/70" : "text-accent",
        )}
      >
        <span className={cn("h-px w-8", inverted ? "bg-primary-foreground/40" : "bg-accent")} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl",
          inverted ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            inverted ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
