import { cn } from "@/lib/utils"

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        className={cn(
          "flex size-10 items-center justify-center rounded-xl",
          inverted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 40" className="size-7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.5 18.5 20 8l12.5 10.5"
            stroke="currentColor"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 18.5v12h19v-12"
            stroke="currentColor"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.5 21.5c-1.45-1.05-3.2-1.65-5.05-1.65-4.85 0-8.75 3.45-8.75 7.7 0 1.05.25 2.05.7 2.95"
            stroke="currentColor"
            strokeWidth="2.35"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-lg font-semibold tracking-tight",
            inverted ? "text-primary-foreground" : "text-foreground",
          )}
        >
          {"Cnew’s"}
        </span>
        <span
          className={cn(
            "mt-1 whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.12em] sm:text-[0.65rem] sm:tracking-[0.18em]",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          Quality Residential Work
        </span>
      </span>
    </span>
  )
}
