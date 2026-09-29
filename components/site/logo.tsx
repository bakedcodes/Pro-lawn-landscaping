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
            d="M9 30.5c4.2-6.8 6.8-12.2 11-20.5 1.7 5.2 4.5 10.2 10 13.8"
            stroke="currentColor"
            strokeWidth="2.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 31.5c6.2-2.2 13.2-2.3 25 0"
            stroke="currentColor"
            strokeWidth="2.7"
            strokeLinecap="round"
          />
          <path
            d="M14 27.8c2.2-3.4 5-5.3 8.5-6.3"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M12.2 18.5c2.5-.1 4.7.7 6.4 2.4"
            stroke="currentColor"
            strokeWidth="2.2"
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
          Pro Lawn
        </span>
        <span
          className={cn(
            "mt-1 whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.12em] sm:text-[0.65rem] sm:tracking-[0.18em]",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          &amp; Landscaping
        </span>
      </span>
    </span>
  )
}
