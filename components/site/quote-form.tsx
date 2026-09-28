"use client"

import { useActionState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { submitQuote, type QuoteState } from "@/app/actions"
import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

const initialState: QuoteState = { status: "idle" }

const inputClass =
  "block w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-xs transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-4 focus:ring-ring/15 aria-invalid:border-destructive aria-invalid:ring-destructive/15"

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string
  label: string
  optional?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-center justify-between text-sm font-medium text-foreground">
        {label}
        {optional && <span className="text-xs font-normal text-muted-foreground">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function QuoteForm() {
  const [state, formAction, pending] = useActionState(submitQuote, initialState)

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-start rounded-3xl border border-border bg-card p-8 sm:p-10">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-serif text-2xl font-medium">Request received</h3>
        <p className="mt-3 text-muted-foreground">{state.message ?? "Thanks! I'll be in touch soon."}</p>
        <p className="mt-6 text-sm text-muted-foreground">
          Need to reach me sooner?{" "}
          <a href={site.phoneHref} className="font-medium text-primary underline-offset-4 hover:underline">
            Call {site.phoneDisplay}
          </a>
        </p>
      </div>
    )
  }

  const v = state.values ?? {}
  const e = state.errors ?? {}

  return (
    <form action={formAction} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
      <h3 className="font-serif text-2xl font-medium">Request a quote</h3>
      <p className="mt-2 text-muted-foreground">Four quick fields. I&apos;ll follow up with you soon.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field id="name" label="Name" error={e.name}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              defaultValue={v.name}
              aria-invalid={!!e.name}
              aria-describedby={e.name ? "name-error" : undefined}
              className={inputClass}
              placeholder="Your full name"
            />
          </Field>
        </div>
        <Field id="phone" label="Phone" error={e.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            defaultValue={v.phone}
            aria-invalid={!!e.phone}
            aria-describedby={e.phone ? "phone-error" : undefined}
            className={inputClass}
            placeholder="(970) 555-0123"
          />
        </Field>
        <Field id="email" label="Email" optional error={e.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            defaultValue={v.email}
            aria-invalid={!!e.email}
            aria-describedby={e.email ? "email-error" : undefined}
            className={inputClass}
            placeholder="you@example.com"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field id="details" label="What do you need help with?" error={e.details}>
            <textarea
              id="details"
              name="details"
              rows={4}
              required
              defaultValue={v.details}
              aria-invalid={!!e.details}
              aria-describedby={e.details ? "details-error" : undefined}
              className={cn(inputClass, "resize-y")}
              placeholder="A few words about the job, e.g. fix a screen door and clean the gutters."
            />
          </Field>
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="mt-5 text-sm text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-70"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Request a Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  )
}
