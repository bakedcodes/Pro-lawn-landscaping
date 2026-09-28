"use server"

export type QuoteState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<"name" | "phone" | "email" | "details", string>>
  values?: Record<string, string>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim()
  const values = {
    name: get("name").slice(0, 120),
    phone: get("phone").slice(0, 40),
    email: get("email").slice(0, 200),
    details: get("details").slice(0, 3000),
  }

  if (get("company")) return { status: "success" }

  const errors: QuoteState["errors"] = {}
  if (values.name.length < 2) errors.name = "Please enter your name."
  if (values.phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number."
  if (values.email && !EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address."
  if (values.details.length < 3) errors.details = "Please tell me a little about what you need help with."

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values }
  }

  // TODO: deliver the request (e.g. email via Resend or store in a database).
  console.log("[quote-request]", { ...values, receivedAt: new Date().toISOString() })

  return {
    status: "success",
    message: `Thanks, ${values.name.split(" ")[0]}! Your request has been sent. I'll be in touch soon.`,
  }
}
